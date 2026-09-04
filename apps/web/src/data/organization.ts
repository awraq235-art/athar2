import { OrganizationProfile } from '../types';

/**
 * ATHAR OFFICIAL ORGANIZATION IDENTITY
 * Authoritative Single Source of Truth
 * Derived strictly from official association charters and brochures.
 */
export const officialOrganization: OrganizationProfile = {
  name: {
    ar: 'جمعية أثر التعاونية الزراعية متعددة الأغراض',
    en: 'ATHAR Multi-Purpose Agricultural Cooperative Association',
  },
  shortName: {
    ar: 'أَثَــر',
    en: 'ATHAR',
  },
  brandConcept: {
    ar: 'أثر يصنع نموًا',
    en: 'ATHAR Makes Growth',
  },
  licenseNumber: '87 لعام 2019',
  licenseYear: '2019',
  licenseAuthority: {
    ar: 'وزارة الشؤون الاجتماعية والعمل',
    en: 'Ministry of Social Affairs and Labor',
  },
  licenseFull: {
    ar: 'ترخيص رقم (87) لعام 2019 صادر من وزارة الشؤون الاجتماعية والعمل',
    en: 'License No. (87) of 2019 — Issued by the Ministry of Social Affairs and Labor',
  },
  email: 'athar2020z@gmail.com',
  phone: '776202223',
  phoneFormatted: '776 202 223',
  phoneInternational: '+967 776 202 223',

  // 1. OFFICIAL VISION
  vision: {
    ar: 'الريادة في برامج التنمية الزراعية محلياً.',
    en: 'Leadership in agricultural development programs locally.',
  },

  // 2. OFFICIAL MISSION
  mission: {
    ar: 'نهتم بتنمية المجال الزراعي والنهوض به عن طريق استثمار خبرات وقدرات أعضاء الجمعية، وإدخال الأساليب الزراعية الحديثة، والتكنولوجيا العالمية ذات الجودة العالية، والقيام بالدراسات والأبحاث العالمية، ونشر الوعي الزراعي بين المواطنين لتحقيق التنمية الزراعية في الجمهورية اليمنية، وكذا الوصول إلى منتجات ذات جودة عالية أكثر أماناً وأعلى قيمة غذائية من خلال التنمية المستدامة، والتزامنا بالمسؤولية الاجتماعية.',
    en: 'We are interested in developing and advancing the agricultural field by investing in the expertise and capabilities of our members, using modern agricultural methods and high-quality international technology, conducting global studies and research, and spreading agricultural awareness among citizens to achieve agricultural development in the Republic of Yemen, as well as accessing high-quality products that are safer and have higher nutritional value through sustainable development and our commitment to social responsibility.',
  },

  // 3. OFFICIAL 4 GOALS
  goals: [
    {
      id: 1,
      title: {
        ar: 'استثمار قدرات وجهود المهندسات الزراعيات أعضاء الجمعية بغية تحقيق التنمية الزراعية.',
        en: 'Investing the capabilities and efforts of female agricultural engineers who are members of the association in order to achieve agricultural development.',
      },
      description: {
        ar: 'تفعيل الدور القيادي والتطبيقي للكوادر الهندسية والنسوية في القطاع الزراعي.',
        en: 'Empowering engineering cadres and female agricultural specialists in modern agronomy.',
      },
    },
    {
      id: 2,
      title: {
        ar: 'تعزيز الشراكة مع الجهات ذات الصلة من منظمات محلية ودولية في البرامج ذات العلاقة بنشاط الجمعية.',
        en: 'Strengthening partnerships with relevant local and international organizations in programs related to the association\'s activities.',
      },
      description: {
        ar: 'بناء جسور التعاون التنموي وتبادل الخبرات ونقل المعرفة والتقنيات العالمية.',
        en: 'Building bridges of developmental cooperation and transfer of international technology.',
      },
    },
    {
      id: 3,
      title: {
        ar: 'المساهمة الفعالة في التنمية الزراعية، والرفع من الإنتاجية.',
        en: 'Making an effective contribution to agricultural development and increasing productivity.',
      },
      description: {
        ar: 'تطبيق حزم الإرشاد الحقلي والمدخلات المعتمدة ورفع كفاءة استغلال الموارد المائية والتربة.',
        en: 'Implementing modern field extension, certified inputs, and high water-efficiency systems.',
      },
    },
    {
      id: 4,
      title: {
        ar: 'رفع المستوى الاجتماعي والاقتصادي للمزارعين، والمرأة الريفية.',
        en: 'Raising the social and economic level of farmers and rural women.',
      },
      description: {
        ar: 'تحقيق عوائد مجزية للمزارعين وتأهيل الأسر الريفية بمهارات الإنتاج والتصنيع الزراعي.',
        en: 'Securing sustainable farmer livelihoods and empowering rural households in value-added production.',
      },
    },
  ],

  // 4. OFFICIAL 6 VALUES
  values: [
    {
      id: 1,
      title: { ar: 'التعاون', en: 'Cooperation' },
      meaning: {
        ar: 'العمل الجماعي التكاملي أساس ازدهار المجتمع الريفي ونجاح العمل التعاوني.',
        en: 'Collective cooperative effort as the cornerstone of rural community prosperity.',
      },
    },
    {
      id: 2,
      title: { ar: 'الشراكة المجتمعية', en: 'Community Partnership' },
      meaning: {
        ar: 'الاندماج الوثيق مع المجتمعات المحلية والجهات الفاعلة لتحقيق تنمية مستدامة.',
        en: 'Close alignment and engagement with local communities and stakeholders for sustainable impact.',
      },
    },
    {
      id: 3,
      title: { ar: 'الجودة', en: 'Quality' },
      meaning: {
        ar: 'الالتزام بأعلى المعايير الزراعية والصحية والبيئية في كافة البرامج والمخرجات.',
        en: 'Commitment to the highest agronomic, food safety, and environmental standards.',
      },
    },
    {
      id: 4,
      title: { ar: 'الريادة', en: 'Leadership' },
      meaning: {
        ar: 'المبادرة في استقدام التقنيات الزراعية الحديثة وقيادة مبادرات التنمية محلياً.',
        en: 'Pioneering in adopting modern technologies and leading local agricultural development.',
      },
    },
    {
      id: 5,
      title: { ar: 'المصداقية', en: 'Credibility' },
      meaning: {
        ar: 'الشفافية والنزاهة والوضوح مع المزارعين والشركاء والمجتمع بأسره.',
        en: 'Transparency, integrity, and accountability with all farmers and partners.',
      },
    },
    {
      id: 6,
      title: { ar: 'العمل بروح الفريق الواحد', en: 'Working as One Team' },
      meaning: {
        ar: 'توحيد الطاقات والخبرات المتنوعة لتحقيق الأهداف المشتركة بروح التعاضد والانسجام.',
        en: 'Uniting diverse capabilities to achieve shared aspirations with solidarity and harmony.',
      },
    },
  ],

  // 5. OFFICIAL WORK FIELDS
  workFields: [
    {
      id: 'female-engineers-rural-women',
      title: {
        ar: 'استثمار قدرات المهندسات الزراعيات وتمكين المرأة الريفية',
        en: 'Capacity Building for Female Agricultural Engineers & Rural Women',
      },
      description: {
        ar: 'برامج تدريب نوعية وتأهيل حقلي لإدارة المشاتل، البيوت المحمية، التصنيع الغذائي، والمشاريع الإنتاجية الصغيرة المدرة للدخل.',
        en: 'Specialized training and field qualification for greenhouse management, nursery operations, and rural household food processing.',
      },
    },
    {
      id: 'modern-technology-irrigation',
      title: {
        ar: 'إدخال الأساليب الزراعية الحديثة والتقنيات الذكية',
        en: 'Modern Agricultural Methods & Smart Irrigation Technology',
      },
      description: {
        ar: 'تطبيق أنظمة الري بالتنقيط والحساسات الرقمية وإدارة التسميد المتوازن لمضاعفة الإنتاجية وتقليل استهلاك المياه.',
        en: 'Deploying precision drip irrigation, digital soil sensors, and balanced fertigation to maximize yield while conserving water.',
      },
    },
    {
      id: 'research-studies-extension',
      title: {
        ar: 'الدراسات والبحوث الميدانية ونشر الوعي الزراعي',
        en: 'Field Studies, Applied Agronomic Research & Public Awareness',
      },
      description: {
        ar: 'إجراء بحوث تطبيقية على الآفات الحشرية والأمراض النباتية، ونشر الأدلة الإرشادية والروزنامات الزراعية الموسمية.',
        en: 'Conducting applied research on crop pests and plant pathology, alongside publishing seasonal agricultural calendars.',
      },
    },
    {
      id: 'sustainable-safe-products',
      title: {
        ar: 'منتجات زراعية آمنة ذات جودة عالية وقيمة غذائية',
        en: 'Safe High-Quality Agricultural Products with High Nutritional Value',
      },
      description: {
        ar: 'تحفيز الممارسات العضوية والإنتاج النظيف لتحقيق الأمن الغذائي وربط المزارعين بمنافذ تسويقية تعاونية عادلة.',
        en: 'Fostering clean production practices for food security and linking cooperative producers to fair market channels.',
      },
    },
  ],

  // 6. OFFICIAL PARTNERSHIPS
  partnerships: [
    {
      name: { ar: 'المنظمات التنموية المحلية والدولية', en: 'Local & International Development Organizations' },
      type: { ar: 'شراكات تنموية وإغاثية', en: 'Developmental & Livelihood Partnerships' },
      scope: { ar: 'تنفيذ برامج سبل العيش، تدريب المهندسات، وتوزيع المدخلات الزراعية المحسنة.', en: 'Implementing livelihood programs, training female engineers, and deploying improved inputs.' },
    },
    {
      name: { ar: 'المراكز البحثية والجامعات الزراعية', en: 'Agricultural Research Centers & Universities' },
      type: { ar: 'أكاديمية وتطبيقية', en: 'Academic & Applied Science' },
      scope: { ar: 'إجراء التجارب الحقلية، فحص التربة والمياه، واعتماد الحزم الإرشادية.', en: 'Field trials, soil and water testing protocols, and validated extension manuals.' },
    },
    {
      name: { ar: 'الجمعيات والاتحادات التعاونية', en: 'Cooperative Unions & Rural Associations' },
      type: { ar: 'تكامل تعاوني ومؤسسي', en: 'Cooperative Integration' },
      scope: { ar: 'تبادل السلع والخدمات المشتركة، والتسويق الجماعي للمحاصيل الاستراتيجية.', en: 'Joint service sharing, pooling inputs, and collective marketing of strategic crops.' },
    },
  ],
};
