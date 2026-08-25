'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CalendarDays, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';

/* ─── Animation variants ────────────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

/* ─── Campus News data ───────────────────────────────────────────────────── */
const campusNews = [
  {
    id: 1,
    date: '19 Aug, 2026',
    image: 'images/home/news_3839507_aidrivensm.webp',
    title: 'Expert Session at DGU Explores the Future of Finance in an AI-Driven World',
    excerpt:
      'DBS Global University hosted an expert session titled Beyond the Balance Sheet: The Future of Finance in an AI-Driven Wo...',
    href: '/campus-news/expert-session-finance-ai',
  },
  {
    id: 2,
    date: '15 Aug, 2026',
    image: 'images/home/news_9700602_indepdaysm.webp',
    title: 'Independence Day at DBS Global University Celebrating Freedom, Responsibility and Indias Future',
    excerpt:
      'Dehradun, 15 August 2026: DBS Global University marked India&#39;s 80th Independence Day with a dignified celebration th...',
    href: '/campus-news/independence-day-2026',
  },
  {
    id: 3,
    date: '12 Aug, 2026',
    image: 'images/home/news_8368196_hkpreludesm.webp',
    title: 'Himansh Kohli Interacts with Students at DBS Global University During Prelude 2026',
    excerpt:
      'Prelude 2026 at DBS Global University became even more engaging with a special interaction featuring Bollywood actor Him...',
    href: '/campus-news/independence-day-2026',
  },
  {
    id: 4,
    date: '11 Aug, 2026',
    image: 'images/home/news_5345973_ffacsm.webp',
    title:
      ' DBS Global University Signs MoU with IIT Ropar to Advance Future-Ready Learning, Technology and Innovation',
    excerpt: 'Strategic academic collaboration to expand opportunities in Artificial Intelligence, Drone Technology',
    href: '/campus-news/independence-day-2026',
  },
  {
    id: 5,
    date: '31 Jul, 2026',
    image: 'images/home/news_8871880_apac_small.webp',
    title: 'DBS Global University wins SAP University Alliances Educational Excellence Award APAC 2026     ',
    excerpt:
      'Asia-Pacific recognition reflects DBS Global University&#39;s vision of global recognition, quality education and emergi...',
    href: '/campus-news/independence-day-2026',
  },
  {
    id: 6,
    date: '30 Jul, 2026',
    image: 'images/home/news_8922400_mrrahulsachdeva_sm.webp',
    title: ' Exploring SAP Learning Hub and Career Opportunities',
    excerpt: 'An informative session on SAP Learning Hub and Career Opportunities was delivered by Mr. Rahul Sachdeva',
    href: '/campus-news/independence-day-2026',
  },
  {
    id: 7,
    date: '29 Jul, 2026',
    image: 'images/home/news_9037871_preludeday6.webp',
    title: 'Prelude 2026 Equips MBA Students with Leadership, Industry Exposure, and Holistic Learning',
    excerpt:
      'Prelude 2026 at DBS Global University continued to offer MBA students a comprehensive induction experience by blending c...',
    href: '/campus-news/independence-day-2026',
  },
  {
    id: 8,
    date: '27 Jul, 2026',
    image: 'images/home/news_9568937_neerja_sisodiasm.webp',
    title: 'Empowering Future Professionals Through Power Dressing ',
    excerpt:
      ' An insightful Power Dressing session was conducted by Ms. Neerja Sisodia and Dr. Rashmi, focusing on the significance of...',
    href: '/campus-news/independence-day-2026',
  },
  {
    id: 9,
    date: '25 Jul, 2026',
    image: 'images/home/news_6558925_preludesmall.webp',
    title: 'MBA Cohort Enjoys a Well-Deserved Break and Campus Settling-In on Prelude 2026 Day 4',
    excerpt:
      'Day 4 of &quot;Prelude 2026&quot; at DBS Global University was designed as a Free and Settle-In Day, giving MBA students...',
    href: '/campus-news/independence-day-2026',
  },
  {
    id: 10,
    date: '24 Jul, 2026',
    image: 'images/home/news_8251397_rajeev_bhardwaj.webp',
    title: 'MBA Cohort Strengthens Professional Skills and AI Readiness on Prelude 2026 Day 3',
    excerpt:
      '&quot;Prelude 2026&quot; at DBS Global University focused on developing student&#39;s professional skills, leadership qu...',
    href: '/campus-news/independence-day-2026',
  },
  {
    id: 11,
    date: '23 Jul, 2026',
    image: 'images/home/news_5590999_mbaday2.webp',
    title: ' MBA Cohort Explores Specializations and Vision-Building on Prelude 2026 Day 2',
    excerpt:
      'Day 2 of &quot;Prelude 2026&quot; at DBS Global University brought the MBA cohort closer to their academic journey...',
    href: '/campus-news/independence-day-2026',
  },
  {
    id: 12,
    date: '22 Jul, 2026',
    image: 'images/home/news_9708691_mbaday1-sm.webp',
    title: 'DBS Global University Kicks Off Prelude 2026 MBA Orientation with Learning and Bonding, Day 1',
    excerpt:
      'Dehradun: DBS Global University launched &quot;Prelude 2026,&quot; its orientation programme for the incoming MBA',
    href: '/campus-news/independence-day-2026',
  },
  {
    id: 13,
    date: '21 Jul, 2026',
    image: 'images/home/news_6010775_dr_manoj_singh.webp',
    title: 'The Future Manager Leading with AI, Analytics & SAS',
    excerpt:
      'The session highlighted how Artificial Intelligence, data analytics, and advanced analytical platforms are transforming ...',
    href: '/campus-news/independence-day-2026',
  },
  {
    id: 15,
    date: '20 Jul, 2026',
    image: 'images/home/news_8678919_SAP University Alliances Award — DBS Global University (DGU) APAC 2026.webp',
    title: 'DBS Global University Recognised with SAP University Alliances Educational Excellence Award APAC 2026',
    excerpt:
      'DBS Global University (DGU) is recognised with the SAP University Alliances Award APAC 2026, honouring 17+ years of SAP-...',
    href: '/campus-news/sap-university-alliances-award-dgu-recognised-apac-2026',
  },
  {
    id: 16,
    date: '16 Jul, 2026',
    image: 'images/home/news_3407674_harela-sm.webp',
    title:
      'Harela Celebrated with Traditional Rituals, Plantation Drive and Cultural Performances at DBS Global University',
    excerpt:
      'Harela Celebrated with Traditional Rituals, Plantation Drive and Cultural Performances at DBS Global University',
    href: '/campus-news/harela-celebrated-wtih-traditional-rituals',
  },
  {
    id: 17,
    date: '10 Jul, 2026',
    image: 'images/home/news_5043634_amba-small.webp',
    title:
      'AMBA & BGA Strategic Engagement Manager Visits DBS Global University to Strengthen Global Academic Collaboration',
    excerpt: 'AMBA & BGA Strategic Engagement Manager Visits DBS Global University',
    href: '/campus-news/bga-amba-membership-accreditation',
  },
  {
    id: 18,
    date: '09 Jul, 2026',
    image: 'images/home/news_3116717_new-vikbht-sm.webp',
    title: 'Viksit Bharat Young Leaders Dialogue 2026',
    excerpt:
      'Viksit Bharat Young Leaders Dialogue 2026 Brings Youth Leadership and Nation-Building Conversations to the Fore',
    href: '/campus-news/viksit-bharat-young-leaders-dialogue-2026',
  },
  {
    id: 19,
    date: '09 Jul, 2026',
    image: 'images/home/news_5299710_reinforcing.gif',
    title:
      'Students Excel in Global Finance Certifications, Reinforcing the Universitys Commitment to Academic Excellence',
    excerpt:
      'Shlok Gupta and Yash Kabra have successfully cleared the Chartered Financial Analyst (CFA) Level I examination',
    href: '/campus-news/students-excel-global-finance-certification',
  },
  {
    id: 20,
    date: '20 Jun, 2026',
    image: 'images/home/news_3946163_neea-sm.webp',
    title: '500+ Principals Unite at DBS Global University for the National Education Excellence Awards 2026',
    excerpt: 'DBS Global University, India’s Leading AI University, welcomed more than 500 school principals',
    href: '/campus-news/principals-unite-at-dbsgu',
  },
  {
    id: 21,
    date: '19 Jun, 2026',
    image: 'images/home/news_6416487_research_publication_snes.webp',
    title: 'DBS Global University Researchers Find a Way to Make Biofuel Cheaper, Cleaner & Commercially Viable',
    excerpt:
      "Research published in one of the world's top 25% environmental journals \"Springer Nature's Environmental Sc...",
    href: '/campus-news/dbs-global-university-researchers',
  },
  {
    id: 22,
    date: '19 Jun, 2026',
    image: 'images/home/news_5373170_nism-sm.webp',
    title:
      'NIPM Chandigarh Chapter Delegation Visits DBS Global University to Explore Academic and Industry Collaborations',
    excerpt:
      'DBS Global University welcomed a distinguished delegation from the National Institute of Personnel Management (NIPM), C...',
    href: '/campus-news/nism-chandigarh-chapter-delegation',
  },
  {
    id: 23,
    date: '18 Jun, 2026',
    image: 'images/home/news_7702916_soacnew-sm.webp',
    title:
      'First-Year SOAC Student Earns International Recognition with Springer, Scopus-Indexed Cybersecurity Research',
    excerpt:
      'DBS Global University proudly celebrates a remarkable international research achievement by Parneet Kaur, a first-year s...',
    href: '/campus-news/student-earns-international-recognition',
  },
  {
    id: 24,
    date: '17 Jun, 2026',
    image: 'images/home/news_5009519_ijcainew-sm.webp',
    title: 'SOAC Students Earn International Recognition with IJCACI 2026 Research Paper Acceptance',
    excerpt:
      'Students of the School of Advanced Computing (SOAC) have earned international recognition with the acceptance of their r...',
    href: '/campus-news/soac-students-earn-international-recognition',
  },
  {
    id: 25,
    date: '10 Jun, 2026',
    image: 'images/home/news_8026966_ashesh-samrajya-new.webp',
    title: '100 Percent Preparation and Dedication Helped Achieve 99 Percentile in CAT',
    excerpt:
      'At the University, learning extends far beyond the classroom. Alongside academic excellence, students are nurtured throu...',
    href: '/campus-news/preparation-and-dedication-helped',
  },
  {
    id: 26,
    date: '31 May, 2026',
    image: 'images/home/news_7692105_udaan-sm.webp',
    title: 'Honoured with Zee Uttarakhand Udaan Award for Excellence in Education',
    excerpt:
      'The University has been honoured with the prestigious Zee Uttarakhand Udaan Award for Excellence in Education, recognisi...',
    href: '/campus-news/zee-uttarakhand-udaan-award',
  },
];

/* ─── Admission News data ────────────────────────────────────────────────── */
const admissionNews = [
  {
    id: 1,
    date: '07 Aug, 2026',
    title: 'DBS Global University has announced multiple career opportunities',
    excerpt: 'DBS Global University has announced multiple career opportunities for experienced professionals …',
    href: '/admission-news/career-opportunities',
  },
  {
    id: 2,
    date: '20 Apr, 2026',
    title: 'Scholarships 2026',
    excerpt: 'Scholarship for Undergraduate Students for 2026 intake …',
    href: '/admission-news/scholarships-2026',
  },
];

/* ─── Reusable purple underline accent ──────────────────────────────────── */
function SectionAccent() {
  return <div className="mt-1.5 h-[3px] w-9 bg-[#333] rounded-full" />;
}

/* ─── Campus News Card ───────────────────────────────────────────────────── */
function CampusCard({ item }) {
  return (
    <Link
      href={item.href}
      className="group flex lg:min-h-[480px] min-h-[430px] w-full flex-col rounded-xl shadow-[0_8px_25px_rgba(0,0,0,.05)] border border-[#b4aeae] overflow-hidden bg-white transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl"
    >
      {/* image wrapper — clips the scale overflow */}
      <div className="relative w-full aspect-[4/4] min-h-[200px] max-h-[200px] sm:max-h-[250px] sm:min-h-[250px] overflow-hidden">
        <Image
          src={process.env.NEXT_PUBLIC_IMG_PATH + item.image}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-110"
        />
      </div>
      <div className="shadow-[0_4px_10px_rgba(0,0,0,.2)] bg-[#2d1250] text-white text-[13px] font-semibold text-center py-[7px] tracking-wide z-10">
        {item.date}
      </div>
      {/* text content */}
      <div className="flex flex-col gap-2 p-4 flex-1">
        <h3 className="text-sm sm:text-[15px] font-bold text-gray-900 leading-snug line-clamp-3">{item.title}</h3>
        <p className="text-xs sm:text-sm text-[#333] leading-relaxed line-clamp-3 flex-1">{item.excerpt}</p>
        <span className="inline-flex items-center gap-1 text-sm font-medium text-[#333] mt-1 group-hover:gap-2 transition-all duration-200">
          Read More <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </Link>
  );
}

/* ─── Admission News Card ────────────────────────────────────────────────── */
function AdmissionCard({ item }) {
  return (
    <Link
      href={item.href}
      className="
        group block border-b border-[#b4aeae] last:border-b-0
        py-4 first:pt-0
        transition-transform duration-300 ease-out
        hover:translate-x-1
      "
    >
      {/* date */}
      <div className="flex items-center gap-1.5 text-[#000] text-xs mb-1.5">
        <CalendarDays className="w-3.5 h-3.5 flex-shrink-0" />
        <span>{item.date}</span>
      </div>

      {/* title */}
      <h4 className="text-sm font-bold text-gray-900 leading-snug mb-2 group-hover:text-[#333] transition-colors duration-200">
        {item.title}
      </h4>

      {/* excerpt */}
      <p className="text-xs sm:text-sm text-[#333] leading-relaxed line-clamp-2 mb-2">{item.excerpt}</p>

      <span className="inline-flex items-center gap-1 text-sm font-medium text-[#333] group-hover:gap-2 transition-all duration-200">
        Read More <ArrowRight className="w-4 h-4" />
      </span>
    </Link>
  );
}

/* ─── Main component ─────────────────────────────────────────────────────── */
export default function CampusNews() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="pb-10 sm:pb-14 pt-4 md:pb-16 bg-white border-t border-gray-100 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] xl:grid-cols-[1fr_380px] gap-8 lg:gap-10">
          {/* ── LEFT: Campus News carousel ─────────────────────────────── */}
          <motion.div
            className="min-w-0"
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {/* heading + arrows row */}
            <div className="flex items-end justify-between mb-5 sm:mb-10">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Campus News</h2>
                <p className="text-sm text-gray-500 mt-0.5">Discover vibrant life &amp; events</p>
                <SectionAccent />
              </div>
            </div>

            {/* Swiper carousel */}
            <Swiper
              modules={[Autoplay, Navigation]}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
              loop
              speed={600}
              slidesPerView={1}
              spaceBetween={20}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 2, spaceBetween: 24 },
              }}
              className="campus-news-swiper pt-2"
            >
              {campusNews.map((item) => (
                <SwiperSlide key={item.id} className="!h-auto !flex pt-2">
                  <CampusCard item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>

          {/* ── RIGHT: Admission News ──────────────────────────────────── */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {/* heading */}
            <div className="mb-5 sm:mb-10">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Admission News</h2>
              <p className="text-sm text-[#333] mt-0.5">Important updates &amp; deadlines</p>
              <SectionAccent />
            </div>

            {/* admission cards list */}
            <div className="flex flex-col">
              {admissionNews.map((item) => (
                <AdmissionCard key={item.id} item={item} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
