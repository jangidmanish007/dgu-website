// ─── Navigation Data ──────────────────────────────────────────────────────────
// Top utility bar links
export const topBarLinks = [
  { label: 'Home', href: '/' },
  { label: 'Alumni', href: '/alumni' },
  { label: 'Events', href: '/events' },
  { label: 'Virtual Tour', href: '/virtual-tour' },
  { label: 'Video Gallery', href: '/video-gallery' },
  { label: 'Merch Shop', href: '/merch-shop' },
  { label: 'Scholarship', href: '/scholarship' },
  { label: 'AI Cell', href: '/ai-cell' },
  { label: 'Career', href: '/career' },
  { label: 'Contact Us', href: '/contact-us' },
];

// ─── Main nav items ───────────────────────────────────────────────────────────
// type: 'link'       → plain link, no dropdown
// type: 'dropdown'   → simple multi-level dropdown (items → children)
// type: 'mega'       → full-width mega menu (schools with programs)

export const mainNavItems = [
  {
    id: 'overview',
    label: 'Overview',
    type: 'dropdown',
    items: [
      {
        label: 'About DGU',
        href: '/about-dgu',
        children: [
          { label: 'DGU at a Glance', href: '/dgu-at-glance' },
          { label: 'The City-Dehradun - How to Reach', href: '/how-to-reach' },
          { label: 'Uttarakhand Private Universities Act', href: 'https://dgu.ac.in/uploads/documents/doc-8789_the-uttarakhand-private-university-act-2024.pdf' },
        ],
      },
      {
        label: 'Leadership & Governance',
        href: '/leadership-governance',
        children: [
          { label: 'The Visitor', href: '/leadership-governance/board-of-governors' },
          { label: 'Board of Governors', href: '/leadership-governance/academic-council' },
          { label: 'Board of Management', href: '/leadership-governance/academic-council' },
          { label: 'Academic Council', href: '/leadership-governance/academic-council' },
          { label: 'Finance Committee', href: '/leadership-governance/academic-council' },
          { label: 'Board of Studies', href: '/leadership-governance/academic-council' },
          { label: 'Board of Examination', href: '/leadership-governance/academic-council' },
          { label: 'Industry Advisory Board', href: '/leadership-governance/academic-council' },
          { label: 'Office of International Affairs', href: '/leadership-governance/academic-council' },
        ],
      },
      {
        label: 'News & Updates',
        href: '/news-updates',
        children: [
          { label: 'Campus News', href: '/news-updates/campus-news' },
          { label: 'Clubs News', href: '/news-updates/clubs-news' },
          { label: 'Placement News', href: '/news-updates/placement-news' },
        ],
      },
    ],
  },

  {
    id: 'academics',
    label: 'Academics',
    type: 'dropdown',
    items: [
      {
        label: 'Schools & Departments',
        href: '/academics/schools',
        children: [
          { label: 'Doon Business School', href: '/academics/doon-business-school' },
          { label: 'Doon School of Law', href: '/academics/doon-school-of-law' },
          { label: 'Doon School of Liberal Studies', href: '/academics/doon-school-of-liberal-studies' },
        ],
      },
      {
        label: 'Research & Innovation',
        href: '/academics/research',
        children: [
          { label: 'Research Centers', href: '/academics/research/centers' },
          { label: 'Publications', href: '/academics/research/publications' },
        ],
      },
      {
        label: 'Academic Policies',
        href: '/academics/policies',
        children: [],
      },
      {
        label: 'Examinations',
        href: '/academics/examinations',
        children: [],
      },
    ],
  },
  {
    id: 'programs',
    label: 'Programs',
    type: 'mega',
    // Preview image shown on the left of the mega menu (changes with active school)
    schools: [
      {
        id: 'doon-business-school',
        label: 'Doon Business School',
        href: '/schools/doon-business-school',
        image: '/images/mega-menu-img-1.webp',
        programs: [
          { label: 'B.B.A.', href: '/programs/bba' },
          { label: 'M.B.A.', href: '/programs/mba' },
          { label: 'Ph.D.', href: '/programs/phd-management' },
        ],
      },
      {
        id: 'doon-school-of-advanced-computing',
        label: 'Doon School of Advanced Computing',
        href: '/schools/doon-school-of-advanced-computing',
        image: '/images/mega-menu-img-2.webp',
        programs: [
          { label: 'B.C.A.', href: '/programs/bca' },
          { label: 'M.C.A.', href: '/programs/mca' },
          { label: 'B.Tech – CSE', href: '/programs/btech-cse' },
          { label: 'M.Tech – CSE', href: '/programs/mtech-cse' },
        ],
      },
      {
        id: 'doon-school-of-law',
        label: 'Doon School of Law',
        href: '/schools/doon-school-of-law',
        image: '/images/mega-menu-img-3.webp',
        programs: [
          { label: 'B.A. LLB (Hons.)', href: '/programs/ba-llb' },
          { label: 'B.B.A. LLB', href: '/programs/bba-llb' },
          { label: 'LL.M.', href: '/programs/llm' },
          { label: 'Ph.D.', href: '/programs/phd-law' },
        ],
      },
      {
        id: 'doon-school-of-liberal-studies',
        label: 'Doon School of Liberal Studies',
        href: '/schools/doon-school-of-liberal-studies',
        image: '/images/mega-menu-img-4.webp',
        programs: [
          { label: 'B.A. (Hons.)', href: '/programs/ba-hons' },
          { label: 'M.A.', href: '/programs/ma' },
        ],
      },
      {
        id: 'doon-school-of-modern-media',
        label: 'Doon School of Modern Media',
        href: '/schools/doon-school-of-modern-media',
        image: '/images/mega-menu-img-5.webp',
        programs: [
          { label: 'B.A. Mass Communication', href: '/programs/ba-mass-comm' },
          { label: 'M.A. Mass Communication', href: '/programs/ma-mass-comm' },
        ],
      },
      {
        id: 'dbs-school-of-pharmacy',
        label: 'DBS School of Pharmacy and Research',
        href: '/schools/dbs-school-of-pharmacy',
        image: '/images/mega-menu-img-6.webp',
        programs: [
          { label: 'B.Pharm', href: '/programs/bpharm' },
          { label: 'M.Pharm', href: '/programs/mpharm' },
          { label: 'Ph.D.', href: '/programs/phd-pharmacy' },
        ],
      },
      {
        id: 'doon-school-of-modern-agriculture',
        label: 'Doon School of Modern Agriculture & Forestry',
        href: '/schools/doon-school-of-modern-agriculture',
        image: '/images/mega-menu-img-7.webp',
        programs: [
          { label: 'B.Sc. Agriculture', href: '/programs/bsc-agriculture' },
          { label: 'M.Sc. Agriculture', href: '/programs/msc-agriculture' },
        ],
      },
      {
        id: 'doon-school-of-future-skills',
        label: 'Doon School of Future Skills',
        href: '/schools/doon-school-of-future-skills',
        image: '/images/mega-menu-img-8.webp',
        programs: [
          { label: 'B.Sc. Data Science', href: '/programs/bsc-data-science' },
          { label: 'B.Sc. Cyber Security', href: '/programs/bsc-cyber-security' },
        ],
      },
    ],
  },
  {
    id: 'admission',
    label: 'Admission',
    type: 'dropdown',
    items: [
      {
        label: 'How to Apply',
        href: '/admission/how-to-apply',
        children: [],
      },
      {
        label: 'Eligibility Criteria',
        href: '/admission/eligibility',
        children: [],
      },
      {
        label: 'Fee Structure',
        href: '/admission/fee-structure',
        children: [],
      },
      {
        label: 'Scholarships',
        href: '/admission/scholarships',
        children: [],
      },
    ],
  },

  {
    id: 'international',
    label: 'International',
    type: 'link',
    href: '/international',
  },

  {
    id: 'life-at-dgu',
    label: 'Life at DGU',
    type: 'dropdown',
    items: [
      {
        label: 'Campus Life',
        href: '/life-at-dgu/campus-life',
        children: [],
      },
      {
        label: 'Clubs & Activities',
        href: '/life-at-dgu/clubs-activities',
        children: [],
      },
      {
        label: 'Sports',
        href: '/life-at-dgu/sports',
        children: [],
      },
      {
        label: 'Hostel',
        href: '/life-at-dgu/hostel',
        children: [],
      },
    ],
  },

  {
    id: 'placements',
    label: 'Placements',
    type: 'dropdown',
    items: [
      {
        label: 'Placement Overview',
        href: '/placements/overview',
        children: [],
      },
      {
        label: 'Top Recruiters',
        href: '/placements/top-recruiters',
        children: [],
      },
      {
        label: 'Placement Stats',
        href: '/placements/stats',
        children: [],
      },
      {
        label: 'Success Stories',
        href: '/placements/success-stories',
        children: [],
      },
    ],
  },
  {
    id: 'resources',
    label: 'Resources',
    type: 'dropdown',
    items: [
      {
        label: 'Media',
        href: '/library',
        children: [
          { label: 'In the News', href: '/academics/research/centers' },
          { label: 'Photo Gallery', href: '/academics/research/publications' },
          { label: 'Video Gallery', href: '/academics/research/publications' },
        ],
      },
      {
        label: 'Important Links',
        href: '/e-resources',
        children: [
          { label: 'Grievance Redressal Form', href: '/academics/research/centers' },
          { label: 'Anti-Discrimination Form', href: '/academics/research/publications' },
          { label: 'Gazette Notification for establishment of DBS Global University', href: '/academics/research/publications' },
        ],
      },
      {
        label: 'Payments',
        href: '/downloads',
        children: [
          { label: 'Online - DGU Fee Portal', href: '/academics/research/centers' },
        ],
      },
      {
        label: 'Helpful Resources',
        href: '/naac',
        children: [
          { label: 'Admission Notices', href: '/academics/research/centers' },
          { label: 'Campus & Event News', href: '/academics/research/centers' },
          { label: 'Placement News', href: '/academics/research/centers' },
          { label: 'Blogs', href: '/academics/research/centers' },
          { label: 'Onspot Admissions', href: '/academics/research/centers' },
          { label: 'UGC Proforma / Mandatory Disclosure', href: '/academics/research/centers' },
          { label: 'UGC Letter', href: '/academics/research/centers' },
          { label: 'Association of Indian Universities', href: '/academics/research/centers' },
          { label: 'Equal Opportunity Cell', href: '/academics/research/centers' },
          { label: 'Student Grievance Redressal Committee', href: '/academics/research/centers' },
          { label: 'Constitution of Anti Narcotic', href: '/academics/research/centers' },
          { label: 'Constitution of Internal Complaints', href: '/academics/research/centers' },
          { label: 'Ombudsperson', href: '/academics/research/centers' },
          { label: 'Public Self Disclosure', href: '/academics/research/centers' },
          { label: 'Form No. 10AC for Section 80 G for Donation', href: '/academics/research/centers' },
          { label: 'Model Statutes', href: '/academics/research/centers' },
          { label: 'Institutional Development Plan', href: '/academics/research/centers' },
          { label: 'PCI Approval', href: '/academics/research/centers' },
          { label: 'Downloads', href: '/academics/research/centers' },
          { label: 'Student Hand Book', href: '/academics/research/centers' },
        ],
      },
    ],
  },

  {
    id: 'apply-now',
    label: 'Apply Now',
    type: 'cta',
    href: '/apply-now',
  },
];
