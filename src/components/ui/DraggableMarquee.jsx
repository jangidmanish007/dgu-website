'use client';

import { useState, useRef, useEffect, useCallback } from 'react';

// =========================================================
// INFINITE DRAG MARQUEE HOOK
// =========================================================
function useInfiniteMarquee({ speed = 40, items, direction = 'ltr' }) {
  const trackRef = useRef(null);
  const animRef = useRef(null);
  const offsetRef = useRef(0);

  // drag state — all refs, zero re-renders
  const dragging = useRef(false);
  const paused = useRef(false);
  const dragStartX = useRef(0);
  const dragStartOffset = useRef(0);
  const velocityRef = useRef(0);
  const lastX = useRef(0);
  const lastT = useRef(0);

  // keep speed / direction readable inside rAF without re-creating the loop
  const speedRef = useRef(speed);
  const directionRef = useRef(direction);
  useEffect(() => {
    speedRef.current = speed;
  }, [speed]);
  useEffect(() => {
    directionRef.current = direction;
  }, [direction]);

  const CLONE_COUNT = 3;
  // Stable cloned array — only rebuild when items reference changes
  const clonedItems = useRef([...items, ...items, ...items]);
  useEffect(() => {
    clonedItems.current = [...items, ...items, ...items];
  }, [items]);

  // ── animation loop ── created ONCE, never re-created
  const loop = useCallback(() => {
    const track = trackRef.current;
    if (!track) {
      animRef.current = requestAnimationFrame(loop);
      return;
    }

    if (!dragging.current && !paused.current) {
      const step = speedRef.current / 60;
      offsetRef.current += directionRef.current === 'rtl' ? -step : step;
    } else if (!dragging.current && paused.current) {
      if (Math.abs(velocityRef.current) > 0.1) {
        offsetRef.current += velocityRef.current;
        velocityRef.current *= 0.95;
      } else {
        paused.current = false;
      }
    }

    // seamless wrap
    const singleW = track.scrollWidth / CLONE_COUNT;
    if (singleW > 0) {
      offsetRef.current = ((offsetRef.current % singleW) + singleW) % singleW;
    }
    track.style.transform = `translateX(-${offsetRef.current}px)`;

    animRef.current = requestAnimationFrame(loop);
  }, []); // ← intentionally empty deps: loop never changes

  useEffect(() => {
    animRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animRef.current);
  }, [loop]);

  // ── mouse handlers ──
  const onMouseDown = useCallback((e) => {
    dragging.current = true;
    paused.current = true;
    dragStartX.current = e.clientX;
    dragStartOffset.current = offsetRef.current;
    lastX.current = e.clientX;
    lastT.current = Date.now();
    velocityRef.current = 0;
    e.preventDefault();
  }, []);

  const onMouseMove = useCallback((e) => {
    if (!dragging.current) return;
    offsetRef.current = dragStartOffset.current + (dragStartX.current - e.clientX);
    const now = Date.now();
    const dt = now - lastT.current;
    if (dt > 0) velocityRef.current = ((lastX.current - e.clientX) / dt) * 16;
    lastX.current = e.clientX;
    lastT.current = now;
  }, []);

  const onMouseUp = useCallback(() => {
    if (!dragging.current) return;
    dragging.current = false;
    // momentum handled entirely inside the loop
  }, []);

  const onMouseLeave = useCallback(() => {
    if (dragging.current) onMouseUp();
  }, [onMouseUp]);

  // ── touch handlers — attached as native passive:false to allow preventDefault ──
  useEffect(() => {
    const el = trackRef.current?.parentElement;
    if (!el) return;

    const touchStart = (e) => {
      dragging.current = true;
      paused.current = true;
      dragStartX.current = e.touches[0].clientX;
      dragStartOffset.current = offsetRef.current;
      lastX.current = e.touches[0].clientX;
      lastT.current = Date.now();
      velocityRef.current = 0;
    };

    const touchMove = (e) => {
      if (!dragging.current) return;
      const tx = e.touches[0].clientX;
      offsetRef.current = dragStartOffset.current + (dragStartX.current - tx);
      const now = Date.now();
      const dt = now - lastT.current;
      if (dt > 0) velocityRef.current = ((lastX.current - tx) / dt) * 16;
      lastX.current = tx;
      lastT.current = now;
      // prevent page scroll while dragging marquee
      e.preventDefault();
    };

    const touchEnd = () => {
      if (!dragging.current) return;
      dragging.current = false;
    };

    el.addEventListener('touchstart', touchStart, { passive: true });
    el.addEventListener('touchmove', touchMove, { passive: false }); // must be non-passive for e.preventDefault()
    el.addEventListener('touchend', touchEnd, { passive: true });

    return () => {
      el.removeEventListener('touchstart', touchStart);
      el.removeEventListener('touchmove', touchMove);
      el.removeEventListener('touchend', touchEnd);
    };
  }, []); // attach once

  const mouseHandlers = { onMouseDown, onMouseMove, onMouseUp, onMouseLeave };

  return { trackRef, clonedItems: clonedItems.current, mouseHandlers };
}

// =========================================================
// DRAGGABLE MARQUEE  (shared, generic)
//
// Props
// ─────
// items            array   data passed to renderItem
// renderItem       fn      (item, index) => ReactNode
// speed            number  px/frame ×60 equivalent (default 40)
// direction        string  'ltr' | 'rtl'  (default 'ltr')
// mobileDirection  string  overrides direction below mobileBreakpoint
// mobileBreakpoint number  px (default 768)
// maskStyle        object  CSS mask — default is soft black fade; pass null to remove
// className        string  extra classes on outer wrapper
// =========================================================
export default function DraggableMarquee({
  items,
  renderItem,
  speed = 40,
  direction = 'ltr',
  mobileDirection,
  mobileBreakpoint = 768,
  maskStyle,
  className = '',
}) {
  // ── resolve mobile direction ──
  // Use a ref so the hook's speed/direction refs update without re-mounting
  const [resolvedDirection, setResolvedDirection] = useState(direction);

  useEffect(() => {
    const update = () => {
      const mobile = window.innerWidth < mobileBreakpoint;
      setResolvedDirection(mobile ? (mobileDirection ?? direction) : direction);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [direction, mobileDirection, mobileBreakpoint]);

  const { trackRef, clonedItems, mouseHandlers } = useInfiniteMarquee({
    speed,
    items,
    direction: resolvedDirection,
  });

  const defaultMask = {
    WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',
    maskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',
    WebkitMaskRepeat: 'no-repeat',
    maskRepeat: 'no-repeat',
    WebkitMaskSize: '100% 100%',
    maskSize: '100% 100%',
  };

  const resolvedMask = maskStyle === null ? {} : (maskStyle ?? defaultMask);

  return (
    <div
      className={`relative w-full overflow-hidden select-none cursor-grab active:cursor-grabbing ${className}`}
      style={resolvedMask}
      {...mouseHandlers}
    >
      <div ref={trackRef} className="flex will-change-transform" style={{ width: 'max-content' }}>
        {clonedItems.map((item, index) => renderItem(item, index))}
      </div>
    </div>
  );
}
