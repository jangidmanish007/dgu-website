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
        label: 'Leadership and Faculty Members',
        href: '/faculties',
        children: [],
      },
      {
        label: 'Research',
        href: '/research',
        children: [
          {
            label: 'International Collaborative Research Program',
            href: '/international-collaborative-research-program',
          },
          {
            label: 'Research Publication',
            href: '/research-publication',
          },
          {
            label: 'Seminars & Conferences',
            href: '/leadership-series',
          },
        ],
      },
      {
        label: 'Academic Calendar',
        href: '/academic-calendar',
        children: [],
      },
      {
        label: 'Leadership Series',
        href: '/leadership-series',
        children: [],
      },
      {
        label: 'Modern Computer Labs',
        href: '/modern-computer-labs',
        children: [],
      },
    ],
  },
  {
    id: 'programs',
    label: 'Programs',
    type: 'mega',
    schools: [
      {
        id: 'doon-business-school',
        label: 'Doon Business School',
        href: '/schools/doon-business-school',
        image: '/images/mega-menu-img-1.webp',
        programs: [
          { label: 'MBA', href: 'https://doonbusinessschool.com/mba' },
          { label: 'Global MBA', href: 'https://doonbusinessschool.com/dgu-global-mba' },
          { label: 'BBA + MBA (Integrated Program in Management)', href: 'https://doonbusinessschool.com/bba-mba-integrated' },
          { label: 'BBA/BBA (Honours / Honours with Research)', href: 'https://doonbusinessschool.com/bba' },
          { label: 'B.Com/B.Com (Honours / Honours with Research)', href: 'https://doonbusinessschool.com/bcom' },
          { label: 'MBA Winter Batch', href: 'https://doonbusinessschool.com/mba-winter-batch' },
          { label: 'PhD', href: 'https://doonbusinessschool.com/dbs-phd-program' },
        ],
      },

      {
        id: 'doon-school-of-advanced-computing',
        label: 'Doon School of Advanced Computing',
        href: '/schools/doon-school-of-advanced-computing',
        image: '/images/mega-menu-img-2.webp',
        programs: [
          { label: 'B.Tech CSE', href: '/btech' },
          { label: 'BCA with Dual Specialization', href: '/bca-with-specialization' },
          { label: 'MCA', href: '/mca' },
          { label: 'Integrated B.Tech CSE + M. Tech', href: '/integrated-btech-mtech' },
          { label: 'Integrated B.Tech CSE + MBA', href: '/integrated-btech-mba' },
          { label: 'M.Tech CSE / M.Tech CSE by Research', href: '/mtech' },
          { label: 'PhD', href: '/phd-program' },
        ],
      },

      {
        id: 'doon-school-of-law',
        label: 'Doon School of Law',
        href: '/schools/doon-school-of-law',
        image: '/images/mega-menu-img-3.webp',
        programs: [
          { label: 'B.A. LL.B (Hons.)', href: '/ba-llb' },
          { label: 'B.B.A. LL.B.', href: '/bba-llb' },
          { label: 'LL.M.', href: '/llm' },
          { label: 'Ph.D.', href: '/phd-program' },
        ],
      },

      {
        id: 'doon-school-of-liberal-studies',
        label: 'Doon School of Liberal Studies',
        href: '/schools/doon-school-of-liberal-studies',
        image: '/images/mega-menu-img-4.webp',
        programs: [
          { label: 'Bachelor of Arts/Science (Honors/ Honors with Research)', href: '/bachelor-of-arts-liberal-arts' },
          { label: 'MA', href: '/ma' },
          { label: 'PhD', href: '/phd-program' },
        ],
      },

      {
        id: 'doon-school-of-modern-media',
        label: 'Doon School of Modern Media',
        href: '/schools/doon-school-of-modern-media',
        image: '/images/mega-menu-img-5.webp',
        programs: [
          { label: 'BA Film and TV', href: '/ba-film-and-tv' },
          { label: 'BA Digital Media & Mass Communications', href: '/ba-digital-media-and-mass-communications' },
          { label: 'MA (Mass Communication)', href: '/ma-mass-communication' },
          { label: 'MBA Media & Creative Communication', href: '/mba-media-and-creative-communication' },
          { label: 'PhD', href: '/phd-program' },
        ],
      },

      {
        id: 'dbs-school-of-pharmacy',
        label: 'DBS School of Pharmacy and Research',
        href: '/schools/dbs-school-of-pharmacy',
        image: '/images/mega-menu-img-6.webp',
        programs: [
          { label: 'B.Pharm', href: '/bpharm' },
          { label: 'B.Pharm Lateral Entry', href: '/bpharm-lateral-entry' },
          { label: 'M.Sc Pharmaceutical Chemistry', href: '/msc-pharmaceutical-chemistry' },
          { label: 'MBA Healthcare Pharma Management', href: '/mba-healthcare-pharma-management' },
          { label: 'D.Pharm', href: '/dpharm' },
          { label: 'PhD', href: '/phd-program' },
        ],
      },

      {
        id: 'doon-school-of-modern-agriculture',
        label: 'Doon School of Modern Agriculture & Forestry',
        href: '/schools/doon-school-of-modern-agriculture',
        image: '/images/mega-menu-img-7.webp',
        programs: [
          { label: 'B.Sc Agriculture (Honours)', href: '/bsc-agriculture' },
          { label: 'B.Sc Forestry (Honours)', href: '/bsc-forestry' },
          { label: 'B.Sc with Specialization in Agri Business', href: '/bsc-agri-business' },
          { label: 'M.Sc Agronomy', href: '/msc-agronomy' },
          { label: 'MBA with Specialization in Agri Business', href: '/mba-agri-business' },
          { label: 'PhD', href: '/phd-program' },
        ],
      },

      {
        id: 'doon-school-of-future-skills',
        label: 'Doon School of Future Skills',
        href: '/schools/doon-school-of-future-skills',
        image: '/images/mega-menu-img-8.webp',
        programs: [
          { label: 'SAP', href: '/sap' },
          { label: 'SAS', href: '/sas' },
          { label: 'Artificial Intelligence', href: '/artificial-intelligence' },
          { label: 'E-Commerce', href: '/e-commerce' },
          { label: 'AGILE & SCRUM', href: '/agile-and-scrum' },
          { label: 'Big Data, Python & R', href: '/big-data-python-and-r' },
          { label: 'NISM Certifications', href: '/nism-certifications' },
          { label: 'International Logistics', href: '/international-logistics' },
          { label: 'French Language', href: '/french-language' },
          { label: 'Digital Marketing', href: '/digital-marketing' },
          { label: 'HR Analytics', href: '/hr-analytics' },
          { label: 'Derivatives', href: '/derivatives' },
          { label: 'Data Analytics Tools', href: '/data-analytics-tools' },
          { label: 'Rapidminer/Tableau', href: '/rapidminer-tableau' },
          { label: 'Luxury Brand Marketing', href: '/luxury-brand-marketing' },
          { label: 'Computerised Accounting Tally', href: '/computerised-accounting-tally' },
          { label: 'Basic/Advanced Excel', href: '/basic-advanced-excel' },
          { label: 'Social Media Marketing', href: '/social-media-marketing' },
          { label: 'Big Data Analytics', href: '/big-data-analytics' },
          { label: 'Machine Learning', href: '/machine-learning' },
          { label: 'Internet of Things (IOT)', href: '/internet-of-things' },
          { label: 'Java Technologies', href: '/java-technologies' },
          { label: 'Website Development & Implementation', href: '/website-development-and-implementation' },
          { label: '.NET Framework Networking', href: '/net-framework-networking' },
          { label: 'Red Hat Linux', href: '/red-hat-linux' },
          { label: 'PhD', href: '/phd-program' },
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
        label: 'Program Commencement 2026',
        href: '/program-commencement-2026',
        children: [],
      },
      {
        label: 'Admission Process',
        href: '/admission-process',
        children: [],
      },
      {
        label: 'Programs Fee Structures',
        href: '/programs-fee-structures',
        children: [
          {
            label: 'Doon Business School',
            href: '/doon-business-school-fee-structure',
          },
          {
            label: 'Doon School of Advanced Computing',
            href: '/doon-school-of-advanced-computing-fee-structure',
          },
          {
            label: 'Doon School of Liberal Studies',
            href: '/doon-school-of-liberal-studies-fee-structure',
          },
          {
            label: 'Doon School of Modern Agriculture',
            href: '/doon-school-of-modern-agriculture-fee-structure',
          },
          {
            label: 'Doon School of Modern Media',
            href: '/doon-school-of-modern-media-fee-structure',
          },
          {
            label: 'Doon School of Law',
            href: '/doon-school-of-law-fee-structure',
          },
          {
            label: 'DBS School of Pharmacy and Research',
            href: '/dbs-school-of-pharmacy-and-research-fee-structure',
          },
        ],
      },
      {
        label: 'Education Loan',
        href: '/education-loan',
        children: [],
      },
      {
        label: 'Scholarships',
        href: '/scholarships',
        children: [],
      },
      {
        label: 'Hostel Types',
        href: '/hostel-life',
        children: [],
      },
      {
        label: 'Hostel and Mess Fee',
        href: '/hostel-and-mess-fee',
        children: [],
      },
      {
        label: 'Transportation Fee',
        href: '/transportation-fee',
        children: [],
      },
      {
        label: 'Refund Policy',
        href: '/refund-policy',
        children: [],
      },
      {
        label: 'Download View Book',
        href: '/uploads/documents/View-Book-2026.pdf',
        children: [],
      },
      {
        label: 'International Student Admission',
        href: '/international-student-admission',
        children: [],
      },
    ],
  },
  {
    id: 'international',
    label: 'International',
    type: 'link',
    href: '/office-of-international-affairs',
  },
  {
    id: 'life-at-dgu',
    label: 'Life at DGU',
    type: 'dropdown',
    items: [
      {
        label: 'Overview',
        href: '/overview',
        children: [],
      },
      {
        label: 'Hostel Life',
        href: '/hostel-life',
        children: [],
      },
      {
        label: 'College Fest',
        href: '/college-fest',
        children: [],
      },
      {
        label: 'Cultural Activities',
        href: '/cultural-activities',
        children: [],
      },
      {
        label: 'Students Clubs & Committees',
        href: '/students-clubs-and-committees',
        children: [
          {
            label: 'Robotics Club',
            href: '/robotics-and-automation-club',
          },
          {
            label: 'Marketing Club',
            href: '/the-marketing-club',
          },
          {
            label: 'Bulls and Bear Club',
            href: '/bulls-bears-club',
          },
          {
            label: 'Badminton Club',
            href: '/badminton-club',
          },
          {
            label: 'Basketball Club',
            href: '/basketball-club',
          },
          {
            label: '8 Ball Pool Club',
            href: '/8-ball-pool-club',
          },
          {
            label: 'Music Club',
            href: '/music-club',
          },
          {
            label: 'Dance Club',
            href: '/dance-club',
          },
          {
            label: 'Drama Club',
            href: '/drama-club',
          },
          {
            label: 'The Bagpackers',
            href: '/bagpackers-club',
          },
          {
            label: 'Social Welfare Club',
            href: '/the-social-welfare-club',
          },
          {
            label: 'Rotaract Club',
            href: '/rotaract-club',
          },
          {
            label: 'Spectrum Club',
            href: '/the-spectrum-club',
          },
          {
            label: 'Football Club',
            href: '/football-club',
          },
          {
            label: 'Stargazers Club',
            href: '/stargazers-club',
          },
          {
            label: 'Innoventures Club',
            href: '/innoventures-entrepreneurship-club',
          },
          {
            label: 'Fit Dont Quit Club',
            href: '/fit-dont-quit-club',
          },
          {
            label: 'Phoenix Media Club',
            href: '/phoenix-media-club',
          },
        ],
      },
      {
        label: 'Dehradun Advantage',
        href: '/dehradun-advantage',
        children: [],
      },
      {
        label: 'Law Activities',
        href: '/law-activities',
        children: [],
      },
      {
        label: 'Facilities',
        href: '/facilities',
        children: [],
      },
      {
        label: 'Genesis',
        href: '/genesis',
        children: [],
      },
      {
        label: 'Job on Campus',
        href: '/job-on-campus',
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
