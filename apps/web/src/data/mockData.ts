import { 
  KnowledgeArticle, 
  AcademyCourse, 
  CooperativeService, 
  ProductListing, 
  SecurityAuditEntry, 
  AlertNotification,
  ContactMessage,
  CommercialAd,
  CommercialAdRequest
} from '../types';

export const initialKnowledge: KnowledgeArticle[] = [
  {
    id: 'k-1',
    slug: 'smart-irrigation-date-palms-summer',
    title: {
      ar: 'دليل الري الذكي وجدولة مياه النخيل في الصيف',
      en: 'Smart Irrigation & Date Palm Water Scheduling in Summer',
    },
    category: {
      ar: 'إدارة الري',
      en: 'Irrigation Management',
    },
    summary: {
      ar: 'استراتيجيات خفض استهلاك المياه بنسبة 35% عبر حساسات الرطوبة الأرضية ودورات الري الليلي.',
      en: 'Techniques to reduce water consumption by 35% using subsurface moisture sensors and night irrigation cycles.',
    },
    content: {
      ar: 'تعتبر أشجار النخيل من الركائز الزراعية الاستراتيجية. يتناول هذا الدليل أسس الجدولة الحديثة اعتماداً على معدل البخر-نتح المرجعي (ETo)، وأهمية الفحص الأسبوعي للرشاشات بالتنقيط لضمان وصول المياه للمجموع الجذري بكفاءة عالية دون إهدار.',
      en: 'Date palms are a strategic crop. This advisory details modern scheduling based on reference evapotranspiration (ETo), highlighting the importance of drip emitter inspection and root-zone water penetration without runoff.',
    },
    author: {
      ar: 'م. فاطمة السعيدي',
      en: 'Eng. Fatima Al-Saidi',
      role: 'مهندسة مياه وري زراعي'
    },
    sources: ['مركز البحوث الزراعية', 'دليل الري الحقلي المعتمد'],
    status: 'PUBLISHED',
    season: { ar: 'صيف 2026', en: 'Summer 2026' },
    crop: 'النخيل (Date Palms)',
    readTime: '5 د',
    tags: ['ري', 'ترشيد', 'نخيل', 'حساسات'],
    publishedAt: '2026-06-15',
  },
  {
    id: 'k-2',
    slug: 'biological-pest-control-red-palm-weevil',
    title: {
      ar: 'المكافحة الحيوية المتكاملة لسوسة النخيل الحمراء',
      en: 'Integrated Biological Pest Control for Red Palm Weevil',
    },
    category: {
      ar: 'وقاية المزروعات',
      en: 'Plant Protection',
    },
    summary: {
      ar: 'تطبيق المصائد الفرمونية والكشف الصوتي المبكر مع التعقيم البيولوجي للفسائل المصابة.',
      en: 'Deploying pheromone traps and acoustic early detection combined with bio-sanitization protocols.',
    },
    content: {
      ar: 'تعد الوقاية المبكرة المفتاح الرئيسي لحماية مزارع الأعضاء. توفر جمعية أثر أجهزة كشف اهتزازية مجانية للفحص الدوري مع مصائد فرمونية مرقمة متصلة بالمنصة الرقمية للتبليغ الفوري عن أي بؤر إصابة.',
      en: 'Early detection is critical to member grove defense. ATHAR Cooperative supplies vibration acoustic probes and georeferenced pheromone traps synced with our digital registry.',
    },
    author: {
      ar: 'م. أروى عبدالحق',
      en: 'Eng. Arwa Abdulhaq',
      role: 'أخصائية وقاية نباتية'
    },
    sources: ['دليل وقاية النخيل التعاوني', 'منظمة الأغذية والزراعة'],
    status: 'PUBLISHED',
    season: { ar: 'مستمر', en: 'Continuous' },
    crop: 'وقاية عامة',
    readTime: '7 د',
    tags: ['سوسة النخيل', 'مكافحة حيوية', 'فحص'],
    publishedAt: '2026-05-20',
  },
  {
    id: 'k-3',
    slug: 'enhancing-sandy-soil-fertility-composting',
    title: {
      ar: 'تحسين خصوبة الترب الرملية باستخدام الكومبوست المعالج حرارياً',
      en: 'Enhancing Sandy Soil Fertility Using Thermal Composting',
    },
    category: {
      ar: 'صحة التربة',
      en: 'Soil Health',
    },
    summary: {
      ar: 'معايير نسب الكربون إلى النيتروجين ورفع المادة العضوية لتحسين القدرة الحافظة للرطوبة.',
      en: 'C:N ratio standards and organic matter incorporation to boost water retention capacity.',
    },
    content: {
      ar: 'تتميز معظم الأراضي الزراعية في المنطقة بارتفاع النسبة الرملية وانخفاض المادة العضوية. يقدم مختبر الجمعية فحصاً معيارياً لنسبة الملوحة (EC) والرقم الهيدروجيني (pH) وتوصيات التسميد العضوي الدقيق.',
      en: 'Sandy soils benefit substantially from thermophilic compost. ATHAR cooperative lab provides standard EC, pH, and organic matter calibration reports for cooperative members.',
    },
    author: {
      ar: 'م. نادية المهدي',
      en: 'Eng. Nadia Al-Mahdi',
      role: 'خبيرة كيمياء التربة والمخصبات'
    },
    sources: ['مختبر جمعية أثر للتحاليل الزراعية'],
    status: 'PUBLISHED',
    season: { ar: 'خريف / شتاء', en: 'Autumn / Winter' },
    crop: 'الحبوب والخضار',
    readTime: '6 د',
    tags: ['تربة', 'تسميد عضوي', 'تحليل مختبري'],
    publishedAt: '2026-07-01',
  },
];

export const initialCourses: AcademyCourse[] = [
  {
    id: 'acad-1',
    slug: 'hydroponics-greenhouse-operations',
    title: {
      ar: 'دبلوم الزراعة المائية وتوفير المغذيات (Hydroponics)',
      en: 'Hydroponics & Nutrient Film Technique Diploma',
    },
    instructor: {
      ar: 'م. خولة الشامي',
      en: 'Eng. Khawla Al-Shami',
      title: 'كبير أخصائيي الزراعة المحمية بالجمعية',
    },
    duration: '4 أسابيع (16 ساعة تدريبية)',
    lessonsCount: 12,
    level: { ar: 'متوسط', en: 'Intermediate' },
    description: {
      ar: 'برنامج عملي متكامل يغطي إدارة البيوت المحمية، ضبط تركيز الأملاح والمغذيات NPK، وبرمجة متحكمات المناخ الآلية.',
      en: 'Hands-on training covering greenhouse microclimate control, NPK formulation, and automated dosing pumps.',
    },
    objectives: {
      ar: [
        'معرفة أحدث نظم الهيدروبونيك والأكوابونيك الموفرة للمياه بنسبة 90%',
        'إتقان قراءات مقياس الملوحة والحموضة (EC & pH)',
        'تأهيل المتدربات والمتدربين لإدارة مشاريع البيوت المحمية المستدامة',
      ],
      en: [
        'Understand closed-loop hydroponic systems saving 90% water',
        'Master real-time EC and pH automated dosing calibration',
        'Empower participants to operate commercial greenhouse projects',
      ],
    },
    modules: [
      {
        id: 'm1',
        title: { ar: 'المقدمة وأساسيات المحاليل المغذية', en: 'Introduction & Nutrient Solutions' },
        duration: '4 ساعات',
        lessons: [
          { id: 'l1', title: { ar: 'مفهوم الزراعة بدون تربة وأهميتها البيئية', en: 'Soilless Cultivation Fundamentals' }, duration: '45 د', completed: true },
          { id: 'l2', title: { ar: 'تركيب وموازنة محاليل NPK', en: 'Compounding Macro & Micro Nutrients' }, duration: '60 د', completed: true },
        ],
      },
      {
        id: 'm2',
        title: { ar: 'التطبيق العملي وإدارة المناخ', en: 'Field Execution & Climate Automation' },
        duration: '6 ساعات',
        lessons: [
          { id: 'l3', title: { ar: 'معايرة الحساسات والمضخات الغاطسة', en: 'Submersible Pumps & Sensor Calibration' }, duration: '50 د', completed: false },
          { id: 'l4', title: { ar: 'مكافحة مسببات أمراض الجذور', en: 'Root Zone Hygiene & Disease Prevention' }, duration: '45 د', completed: false },
        ],
      },
    ],
    enrolledStudents: 142,
    badge: { ar: 'شهادة معتمدة من جمعية أثر', en: 'ATHAR Accredited Certificate' },
  },
  {
    id: 'acad-2',
    slug: 'cooperative-management-supply-chain',
    title: {
      ar: 'إدارة التعاونيات الزراعية وسلاسل الإمداد الغذائي',
      en: 'Agricultural Cooperative Governance & Supply Chain Ops',
    },
    instructor: {
      ar: 'د. ياسمين القحطاني',
      en: 'Dr. Yasmin Al-Qahtani',
      title: 'أستاذة الاقتصاد الزراعي والتنمية الريفية',
    },
    duration: 'أسبوعان (8 ساعات)',
    lessonsCount: 6,
    level: { ar: 'مبتدئ / عام', en: 'Beginner / General' },
    description: {
      ar: 'كيفية الاستفادة من قنوات التوزيع المشتركة، التعاقدات الجماعية، وشهادات الجودة للمنتجات العضوية والتسويق العادل.',
      en: 'Maximizing collaborative bulk purchasing, cold chain logistics, and organic compliance certifications for fair trade.',
    },
    objectives: {
      ar: [
        'فهم الهيكل المؤسسي والمالي للجمعيات التعاونية الزراعية',
        'بناء شبكات تسويق مشتركة للمزارعين والمنتجات الريفية',
        'تطبيق معايير سلامة الأغذية وسلاسل التبريد',
      ],
      en: [
        'Understand legal and operational frameworks of agricultural cooperatives',
        'Build collective marketing channels for rural harvests',
        'Implement food safety protocols and cold chain tracking',
      ],
    },
    modules: [
      {
        id: 'm1',
        title: { ar: 'مبادئ الحوكمة التعاونية', en: 'Principles of Cooperative Governance' },
        duration: '4 ساعات',
        lessons: [
          { id: 'l1', title: { ar: 'العمل الجماعي والنهوض بالاقتصاد الريفي', en: 'Collective Action & Rural Prosperity' }, duration: '40 د', completed: true },
        ],
      },
    ],
    enrolledStudents: 89,
    badge: { ar: 'سجل الكفاءة التعاونية', en: 'Cooperative Member Badge' },
  },
  {
    id: 'acad-3',
    slug: 'solar-irrigation-pumping-systems',
    title: {
      ar: 'تشغيل وصيانة أنظمة الطاقة الشمسية لضخ آبار المزارع',
      en: 'Solar PV Agricultural Well Pumping Systems',
    },
    instructor: {
      ar: 'م. فهد السليم',
      en: 'Eng. Fahad Al-Saleem',
      title: 'مهندس طاقة متجددة ونظم كهروميكانيكية',
    },
    duration: '3 أسابيع (12 ساعة)',
    lessonsCount: 9,
    level: { ar: 'متقدم', en: 'Advanced' },
    description: {
      ar: 'حساب قدرات المحولات الشمسية (VFD)، جداول الصيانة الدورية للألواح في المناطق الجافة، ومعايير الحماية الكهربائية.',
      en: 'VFD sizing, dust mitigation strategies, and electrical safety for high-head submersible pumps.',
    },
    objectives: {
      ar: [
        'تصميم منظومات الطاقة الشمسية الكهروضوئية للآبار الارتوازية',
        'حساب استهلاك المياه والقدرة الحركية للمضخات الغاطسة',
      ],
      en: [
        'Design solar PV systems for agricultural tube wells',
        'Calculate pump hydraulics and peak dynamic head',
      ],
    },
    modules: [],
    enrolledStudents: 110,
    badge: { ar: 'اعتماد فني معتمد', en: 'Technical Certified' },
  },
];

export const initialServices: CooperativeService[] = [
  {
    id: 'srv-1',
    title: {
      ar: 'تحليل التربة والمياه الشامل بمختبر الجمعية',
      en: 'Comprehensive Soil & Water Lab Analysis',
    },
    category: 'soil_lab',
    description: {
      ar: 'فحص مخبري لعناصر التربة الكبرى والصغرى، النترات، الملوحة، ونسب المعادن مع تقرير إرشادي تفصيلي صادر من مهندسي الجمعية.',
      en: 'Full spectrographic soil & water assay covering NPK, trace minerals, EC/salinity, and tailored fertilizer plan.',
    },
    turnaroundTime: { ar: '3 - 5 أيام عمل', en: '3 - 5 Working Days' },
    subsidyRate: 'مدعوم بنسبة 50% للأعضاء',
    fee: { ar: '25,000 ر.ي (مدعوم 50% للأعضاء)', en: '25,000 YER (50% subsidized for members)' },
    availability: 'available',
  },
  {
    id: 'srv-2',
    title: {
      ar: 'حجز معدات الحصاد والتسوية الليزرية المشتركة',
      en: 'Shared Laser Leveler & Harvester Machinery Pool',
    },
    category: 'equipment',
    description: {
      ar: 'أسطول الآلات التعاونية المشتركة يتضمن معدات تسوية الأرض بالليزر، حاصدات، ومكابس بأسعار تشغيلية مخفضة لخدمة صغار المزارعين.',
      en: 'Cooperative equipment fleet including GPS laser land levelers, forage compactors, and combine harvesters.',
    },
    turnaroundTime: { ar: 'جدولة مسبقة بـ 48 ساعة', en: '48h Pre-booking' },
    subsidyRate: 'تعرفة تشغيلية غير ربحية',
    fee: { ar: '20,000 ر.ي / هكتار تسوية بالليزر', en: '20,000 YER / hectare laser leveling' },
    availability: 'high_demand',
  },
  {
    id: 'srv-3',
    title: {
      ar: 'استشارة الإرشاد الزراعي الحقلي وزيارة المهندس',
      en: 'On-Field Agronomic Consultation & Inspection Visit',
    },
    category: 'consulting',
    description: {
      ar: 'زيارة ميدانية من مهندسة أو مهندس وقاية نباتية معتمد لتشخيص الآفات والأمراض الفطرية وتحديد خطة العلاج الحيوي.',
      en: 'Field audit by certified agricultural engineers to detect phytosanitary issues and formulate biocontrol protocols.',
    },
    turnaroundTime: { ar: 'خلال 24 ساعة للتبليغ العاجل', en: 'Within 24h for urgent' },
    subsidyRate: 'مجانية للأعضاء المنتظمين',
    fee: { ar: 'مجاناً للأعضاء (15,000 ر.ي لغير الأعضاء)', en: 'Free for members (15,000 YER for non-members)' },
    availability: 'available',
  },
  {
    id: 'srv-4',
    title: {
      ar: 'برنامج التحويل إلى الزراعة العضوية المعتمدة',
      en: 'Organic Certification Conversion Program',
    },
    category: 'consulting',
    description: {
      ar: 'مرافقة المزرعة خلال فترة التحول لاستيفاء متطلبات التوثيق وإصدار الشهادات العضوية الوطنية وتسويق المحصول.',
      en: 'Comprehensive transition tracking to qualify for national organic certification and premium market access.',
    },
    turnaroundTime: { ar: 'برنامج فصلي مستمر', en: 'Seasonal Cohort' },
    subsidyRate: 'شراكة مع الجهات المنظمة',
    fee: { ar: 'رسوم رمزية 30,000 ر.ي للموسم', en: 'Nominal fee: 30,000 YER per season' },
    availability: 'scheduled',
  },
];

export const initialProducts: ProductListing[] = [
  {
    id: 'prod-1',
    slug: 'sukkari-dates-premium-harvest',
    title: {
      ar: 'تمور سكري فاخرة - إنتاج مزارع الأعضاء التعاونية',
      en: 'Premium Sukkari Dates - Member Cooperative Harvest',
    },
    category: 'harvest',
    description: {
      ar: 'تمور عضوية مجناة بعناية خالية من متبقيات المبيدات، معبأة في وحدات صحية معتمدة بأعلى معايير القيمة الغذائية.',
      en: 'Carefully sorted pesticide-free organic dates packed in certified hygienic facilities with high nutritional value.',
    },
    price: 15000,
    currency: 'YER',
    unit: { ar: 'كرتون (3 كجم)', en: 'Box (3 kg)' },
    farmOrigin: { ar: 'مزارع حضرموت ومأرب التعاونية', en: 'Hadramout & Marib Member Farms' },
    supplier: { ar: 'جمعية أثر التعاونية', en: 'ATHAR Cooperative' },
    isOrganic: true,
    stock: 240,
    status: 'ACTIVE',
    imageAlt: 'Sukkari Dates',
  },
  {
    id: 'prod-2',
    slug: 'extra-virgin-olive-oil-cold-pressed',
    title: {
      ar: 'زيت زيتون بكر ممتاز معصور على البارد (حموضة < 0.3%)',
      en: 'Extra Virgin Cold-Pressed Olive Oil (<0.3% Acidity)',
    },
    category: 'harvest',
    description: {
      ar: 'عصرة أولى على البارد بدون أي إضافات كيميائية، غني بمضادات الأكسدة والدهون الصحية غير المشبعة.',
      en: 'Single cold-pressed extra virgin oil with ultra-low acidity, rich in antioxidants and healthy nutrients.',
    },
    price: 45000,
    currency: 'YER',
    unit: { ar: 'عبوة 5 لتر', en: '5 Liter Container' },
    farmOrigin: { ar: 'بساتين الأعضاء التعاونية', en: 'Member Cooperative Orchards' },
    supplier: { ar: 'جمعية أثر التعاونية', en: 'ATHAR Cooperative' },
    isOrganic: true,
    stock: 95,
    status: 'ACTIVE',
    imageAlt: 'Extra Virgin Olive Oil',
  },
  {
    id: 'prod-3',
    slug: 'hybrid-tylcv-resistant-tomato-seeds',
    title: {
      ar: 'تقاوي بذور طماطم هجينة عالية الإنتاجية ومقاومة للأمراض',
      en: 'Hybrid High-Yield Disease-Resistant Tomato Seedlings',
    },
    category: 'seeds',
    description: {
      ar: 'بذور محسنة ومعتمدة من مراكز الإكثار التعاونية، ذات نسبة إنبات تفوق 95% ومقاومة لفيروسات تجعد الأوراق.',
      en: 'Certified high-germination seed lot resistant to viral leaf-curl and adapted to semi-arid conditions.',
    },
    price: 28000,
    currency: 'YER',
    unit: { ar: 'عبوة (1000 بذرة)', en: 'Pack (1000 Seeds)' },
    farmOrigin: { ar: 'مركز إكثار بذور أثر', en: 'ATHAR Seed Propagation Center' },
    supplier: { ar: 'وحدة الإكثار والتوريد', en: 'ATHAR Seed Unit' },
    isOrganic: false,
    stock: 500,
    status: 'ACTIVE',
    imageAlt: 'Tomato Seeds',
  },
  {
    id: 'prod-4',
    slug: 'thermophilic-bio-fertilizer-compost',
    title: {
      ar: 'سماد عضوي نباتي مخمر ومعالج حرارياً (خالٍ من بذور الحشائش)',
      en: 'Thermophilic Weed-Free Fermented Bio-Fertilizer',
    },
    category: 'fertilizer',
    description: {
      ar: 'مخصب عضوي متكامل غني بالدبال والميكروبات النافعة، يحسن بناء التربة ويرفع قدرتها على حفظ المياه.',
      en: 'Enriched organic compost promoting beneficial soil microbiology and enhancing soil moisture retention.',
    },
    price: 8500,
    currency: 'YER',
    unit: { ar: 'كيس (25 كجم)', en: 'Bag (25 kg)' },
    farmOrigin: { ar: 'وحدة التدوير العضوي بالجمعية', en: 'Cooperative Bio-Recycling Plant' },
    supplier: { ar: 'وحدة التدوير العضوي', en: 'Bio-Recycling Unit' },
    isOrganic: true,
    stock: 850,
    status: 'ACTIVE',
    imageAlt: 'Bio-Fertilizer',
  },
];

export const initialContactMessages: ContactMessage[] = [
  {
    id: 'msg-101',
    name: 'سالم بن علي اليافعي',
    email: 'salem.aly@example.com',
    phone: '771234567',
    subject: 'طلب الانضمام كعضو مستفيد في برامج الري بالتنقيط',
    message: 'السلام عليكم، أمتلك مزرعة بمساحة 2.5 هكتار وأرغب في استشارة المهندسات الزراعيات لإعادة تأهيل شبكة الري وترشيد الاستهلاك.',
    status: 'NEW',
    createdAt: '2026-09-03 11:20:00',
  },
  {
    id: 'msg-102',
    name: 'مؤسسة النماء للتنمية الزراعية',
    email: 'info@namaa-dev.org',
    phone: '733987654',
    subject: 'مقترح شراكة وتدريب ميداني للمهندسات',
    message: 'نود بحث فرص التعاون مع جمعية أثر لتنفيذ ورش تدريبية مشتركة في مجال تقنيات البيوت المحمية الحديثة.',
    status: 'REPLIED',
    createdAt: '2026-09-02 14:45:00',
  },
];

export const initialCommercialAds: CommercialAd[] = [
  {
    id: 'ad-101',
    merchantName: 'م. وليد القادري',
    companyName: 'شركة سبأ لأنظمة الطاقة الشمسية ومضخات الآبار',
    phone: '777123999',
    email: 'sales@saba-solar.ye',
    title: {
      ar: 'خصم تعاوني 15% على منظومات الضخ الشمسي ومحولات VFD للمزارع',
      en: '15% Cooperative Discount on Solar Well Pumping & VFD Inverters',
    },
    description: {
      ar: 'توريد وتركيب أحدث ألواح المونوكريستالين عالية الكفاءة مع محولات تشغيل غواطس الآبار وضمان 5 سنوات وصيانة ميدانية.',
      en: 'High-efficiency monocrystalline solar panels with heavy-duty borehole pump inverters, 5-year warranty, and on-site maintenance.',
    },
    badge: { ar: 'شريك تقني معتمد', en: 'Verified Technical Partner' },
    placement: 'hero_banner',
    priceYER: 150000,
    durationMonths: 6,
    actionUrl: 'https://wa.me/967777123999',
    actionText: { ar: 'تواصل واتساب للاستفسار والخصم', en: 'Chat on WhatsApp for Discount' },
    status: 'ACTIVE',
    createdAt: '2026-09-01',
  },
  {
    id: 'ad-102',
    merchantName: 'أ. صادق الأهدل',
    companyName: 'مؤسسة البركة للمدخلات والبذور الهجينة',
    phone: '771888222',
    email: 'info@baraka-seeds.com',
    title: {
      ar: 'وكلاء معتمدون لأجود بذور الخضار الحقلية والأسمدة الذائبة المركبة NPK',
      en: 'Authorized Distributors of Premium Hybrid Vegetable Seeds & Soluble NPK',
    },
    description: {
      ar: 'تقاوي بصل وطماطم وخيار هجينة مختبرة بيئياً ومقاومة لملوحة التربة مع توصيل سريع وموثوق لكافة المحافظات الزراعية.',
      en: 'Tested onion, tomato, and cucumber seeds with superior germination rates and fast delivery to all farming valleys.',
    },
    badge: { ar: 'مورد معتمد للأسمدة', en: 'Certified Agro-Input Supplier' },
    placement: 'marketplace_top',
    priceYER: 100000,
    durationMonths: 3,
    actionUrl: 'https://wa.me/967771888222',
    actionText: { ar: 'طلب كتالوج الأسعار عبر الواتساب', en: 'Request Price Catalog' },
    status: 'ACTIVE',
    createdAt: '2026-09-02',
  },
  {
    id: 'ad-103',
    merchantName: 'م. عبده الحكيمي',
    companyName: 'المجموعة الحديثة لشبكات الري والبيوت المحمية',
    phone: '773444555',
    email: 'sales@modern-irrigation.ye',
    title: {
      ar: 'أنابيب ري بالتنقيط معالجة ضد الأشعة UV وبيوت بوليكربونات محمية',
      en: 'UV-Treated Drip Irrigation Tubing & Polycarbonate Greenhouses',
    },
    description: {
      ar: 'خطوط تنقيط سميكة 16 ملم ونقاطات ذاتية التعويض مع فلاتر هيدروسيكلون بأسعار الجملة لمنتسبي جمعية أثر.',
      en: 'Pressure-compensating dripline, disc filtration units, and engineered greenhouses designed for semi-arid climates.',
    },
    badge: { ar: 'عروض الموسم الزراعي', en: 'Season Special' },
    placement: 'services_sidebar',
    priceYER: 75000,
    durationMonths: 3,
    actionUrl: 'https://wa.me/967773444555',
    actionText: { ar: 'حساب تكلفة شبكة مزرعتك', en: 'Calculate Irrigation Network Cost' },
    status: 'ACTIVE',
    createdAt: '2026-09-03',
  },
];

export const initialAdRequests: CommercialAdRequest[] = [
  {
    id: 'req-ad-1',
    merchantName: 'عبدالملك الصنعاني',
    companyName: 'شركة الهلال للآلات والجرارات الزراعية',
    phone: '775556677',
    email: 'hilal.agri@yemen.ye',
    adTitle: 'توفير حراثات وعزاقات يابانية مع تسهيلات دفع للأعضاء',
    adDescription: 'عرض خاص على العزاقات اليدوية والمولدات ومضخات الرش الآلي مع قطع غيار أصلية متوفرة دائماً.',
    targetUrl: 'https://wa.me/967775556677',
    placement: 'marketplace_top',
    durationMonths: 6,
    estimatedCostYER: 510000,
    notes: 'نرجو وضع البانر بجوار سوق المدخلات والمعدات',
    status: 'PENDING',
    createdAt: '2026-09-04 02:15:00',
  },
  {
    id: 'req-ad-2',
    merchantName: 'بشير الذماري',
    companyName: 'مختبرات الخصوبة للمبيدات الحيوية',
    phone: '772334411',
    email: 'contact@fertility-bio.ye',
    adTitle: 'مبيدات حيوية معتمدة وآمنة لمكافحة دودة الحشد والتريبس',
    adDescription: 'مركبات بكتيرية ومستخلصات نيم طبيعية خالية من أي فترات تحريم PHI.',
    targetUrl: 'tel:772334411',
    placement: 'services_sidebar',
    durationMonths: 3,
    estimatedCostYER: 202500,
    notes: 'طلب عاجل لتزامن الموسم',
    status: 'APPROVED',
    createdAt: '2026-09-03 16:30:00',
  },
];

export const initialAuditLogs: SecurityAuditEntry[] = [
  {
    id: 'sec-801',
    timestamp: '2026-09-04 03:45:12',
    actor: 'admin@athar2020z@gmail.com',
    role: 'SUPER_ADMIN',
    action: 'APPROVAL_SERVICE_REQUEST',
    ipAddress: '192.168.10.4',
    status: 'SUCCESS',
    details: 'Approved soil lab requisition #REQ-921 with priority turnaround',
  },
  {
    id: 'sec-802',
    timestamp: '2026-09-04 03:30:05',
    actor: 'system.rate-limiter',
    role: 'SECURITY_DAEMON',
    action: 'RATE_LIMIT_EVALUATION',
    ipAddress: '10.0.4.19',
    status: 'SUCCESS',
    details: 'Rotated JWT bearer revocation blocklist cache [Argon2id checked]',
  },
  {
    id: 'sec-803',
    timestamp: '2026-09-04 02:18:44',
    actor: 'unknown_agent',
    role: 'GUEST',
    action: 'ENDPOINT_PROBE_SECURITY_AUDIT',
    ipAddress: '198.51.100.77',
    status: 'DENIED',
    details: 'Blocked unauthenticated attempt on /api/admin/secrets. RBAC enforced.',
  },
  {
    id: 'sec-804',
    timestamp: '2026-09-04 01:10:20',
    actor: 'farmer.sulaiman@athar-coop.sa',
    role: 'MEMBER_FARMER',
    action: 'LAND_PARCEL_UPDATE',
    ipAddress: '10.0.8.23',
    status: 'SUCCESS',
    details: 'Updated drip irrigation telemetry config on parcel #PLOT-41-A',
  },
];

export const initialNotifications: AlertNotification[] = [
  {
    id: 'notif-1',
    title: {
      ar: 'تحذير مناخي: موجة حرارة جافة في عطلة نهاية الأسبوع',
      en: 'Weather Advisory: Dry Heat Wave over the Weekend',
    },
    message: {
      ar: 'يُنصح بزيادة فترات الري الليلي بنسبة 20% لتجنب إجهاد أشجار الفاكهة والنخيل.',
      en: 'Night irrigation duration should be extended by 20% to prevent heat stress in orchards.',
    },
    time: 'منذ ساعتين',
    priority: 'warning',
    read: false,
  },
  {
    id: 'notif-2',
    title: {
      ar: 'اعتماد نتائج فحص عينات التربة لمزرعة رقم 88',
      en: 'Soil Lab Analysis Report Ready for Farm #88',
    },
    message: {
      ar: 'تم إرفاق تقرير التوصيات السمادية ومؤشرات الملوحة في لوحة المستفيد.',
      en: 'Soil chemical breakdown and fertility advisory is now accessible in your portal.',
    },
    time: 'منذ 5 ساعات',
    priority: 'info',
    read: false,
  },
  {
    id: 'notif-3',
    title: {
      ar: 'فتح باب التسجيل في دفعة تدريب الزراعة المائية للمهندسات',
      en: 'Hydroponics Training Cohort Now Open for Registration',
    },
    message: {
      ar: 'المقاعد المتبقية: 8 مقاعد للمهندسات والمزارعين مع دعم رسوم التسجيل بالكامل.',
      en: '8 sponsored seats remaining for engineers and farmers with full subsidy.',
    },
    time: 'أمس',
    priority: 'info',
    read: true,
  },
];
