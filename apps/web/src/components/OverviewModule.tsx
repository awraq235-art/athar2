import React from 'react';
import { AppModule, Language, CooperativeService, AlertNotification, CommercialAd } from '../types';
import { officialOrganization } from '../data/organization';
import { SponsoredAdBanner } from './SponsoredAdBanner';
import { 
  Sprout, 
  Users, 
  Droplets, 
  TrendingUp, 
  ArrowRight, 
  ArrowLeft, 
  BookOpen, 
  GraduationCap, 
  Wrench, 
  ShoppingBag, 
  Sun, 
  Wind, 
  ShieldCheck, 
  CalendarClock,
  Target,
  Compass,
  CheckCircle2,
  Mail,
  Phone,
  Sparkles,
  Megaphone,
  Building2,
  ExternalLink,
  MessageCircle,
  Tag
} from 'lucide-react';

interface OverviewModuleProps {
  language: Language;
  onNavigate: (module: AppModule) => void;
  onRequestService: (service: CooperativeService) => void;
  services: CooperativeService[];
  notifications: AlertNotification[];
  sponsoredAd?: CommercialAd;
  ads?: CommercialAd[];
}

export const OverviewModule: React.FC<OverviewModuleProps> = ({
  language,
  onNavigate,
  onRequestService,
  services,
  notifications,
  sponsoredAd,
  ads = [],
}) => {
  const isAr = language === 'ar';
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;
  const org = officialOrganization;

  return (
    <div className="space-y-12 animate-in fade-in duration-300 pb-8">
      {/* 1. Hero Section */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-950 via-emerald-900 to-stone-900 text-white p-7 sm:p-12 shadow-xl border border-emerald-900/50">
        <div className="relative z-10 max-w-3xl space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-800/80 border border-emerald-500/30 text-xs font-semibold text-emerald-200">
            <Sprout className="w-3.5 h-3.5 text-emerald-400" />
            <span>
              {isAr ? 'المنظومة الرقمية للتعاونيات الزراعية' : 'Agricultural Cooperative Digital Ecosystem'}
            </span>
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-white">
              {isAr ? org.brandConcept.ar : org.brandConcept.en}
            </h1>
            <p className="text-amber-300 font-bold text-base sm:text-lg">
              {isAr ? org.name.ar : org.name.en}
            </p>
          </div>

          <p className="text-stone-200 text-sm sm:text-base leading-relaxed max-w-2xl">
            {isAr
              ? 'منصة أثر التعاونية الزراعية متعددة الأغراض للمعرفة الزراعية والتعلم والخدمات والمنتجات، نحو قطاع زراعي أكثر معرفة وكفاءة واستدامة.'
              : 'ATHAR Multi-Purpose Agricultural Cooperative platform for agronomic knowledge, cooperative learning, field services, and trusted products — toward a more knowledgeable, efficient, and sustainable agricultural sector.'}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigate('services')}
              className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-5 py-3 rounded-xl shadow-md transition-all flex items-center gap-2 text-xs sm:text-sm"
            >
              <span>{isAr ? 'طلب فحص أو خدمة زراعية' : 'Request Cooperative Service'}</span>
              <ArrowIcon className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('ads')}
              className="bg-emerald-800 hover:bg-emerald-700 text-white font-bold px-5 py-3 rounded-xl border border-emerald-600 transition-all text-xs sm:text-sm flex items-center gap-2"
            >
              <Megaphone className="w-4 h-4 text-amber-300" />
              <span>{isAr ? 'مساحة الإعلانات التجارية' : 'Commercial Ads'}</span>
            </button>

            <button
              onClick={() => onNavigate('about')}
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-3 rounded-xl border border-white/20 transition-all text-xs sm:text-sm flex items-center gap-2"
            >
              <span>{isAr ? 'تعرف على جمعية أثر' : 'Discover ATHAR'}</span>
              <ArrowIcon className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Decorative Watermark Leaf */}
        <div className="absolute -bottom-16 -left-16 text-emerald-800/20 pointer-events-none select-none">
          <Sprout className="w-[450px] h-[450px] transform -rotate-12" />
        </div>
      </div>

      {/* Commercial Sponsored Ad in Overview */}
      {sponsoredAd && (
        <SponsoredAdBanner
          ad={sponsoredAd}
          language={language}
          onNavigateToAds={() => onNavigate('ads')}
        />
      )}

      {/* 2. Compact Organizational Identity Section */}
      <div className="bg-white rounded-3xl border border-stone-200 p-7 sm:p-9 shadow-xs space-y-7">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-stone-100">
          <div>
            <div className="flex items-center gap-2 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span>{isAr ? 'الهوية المؤسسية المعتمدة' : 'Official Institutional Identity'}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              {isAr ? 'الرؤية والرسالة وأهداف التنمية' : 'Vision, Mission & Strategic Goals'}
            </h2>
          </div>

          <button
            onClick={() => onNavigate('about')}
            className="self-start md:self-auto text-xs font-bold text-emerald-800 hover:text-emerald-950 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-4 py-2 rounded-xl transition-colors flex items-center gap-1.5"
          >
            <span>{isAr ? 'عرض الملف التعريفي الكامل (من نحن)' : 'Full Profile (About Us)'}</span>
            <ArrowIcon className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Vision Highlight & Concise Mission Preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Vision Card */}
          <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 space-y-2.5">
            <div className="flex items-center gap-2 text-emerald-800 text-xs font-bold uppercase">
              <Compass className="w-4 h-4 text-emerald-600" />
              <span>{isAr ? 'الرؤية الرسمية' : 'Official Vision'}</span>
            </div>
            <p className="text-base sm:text-lg font-bold text-stone-900 leading-snug">
              "{isAr ? org.vision.ar : org.vision.en}"
            </p>
            <div className="text-xs text-stone-500">
              {isAr ? 'ترسيخ مكانة ريادية في البرامج التنموية والخدمات الزراعية المتطورة' : 'Pioneering agricultural development and modern extension'}
            </div>
          </div>

          {/* Mission Preview */}
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-2.5">
            <div className="flex items-center gap-2 text-amber-700 text-xs font-bold uppercase">
              <Target className="w-4 h-4 text-amber-600" />
              <span>{isAr ? 'رسالة الجمعية (موجز)' : 'Mission Statement (Preview)'}</span>
            </div>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed line-clamp-3">
              {isAr ? org.mission.ar : org.mission.en}
            </p>
            <div className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1 pt-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isAr ? 'استثمار الكفاءات، التقنيات الحديثة، والمسؤولية الاجتماعية' : 'Empowering capabilities, modern tech, and social responsibility'}</span>
            </div>
          </div>
        </div>

        {/* 4 Official Goals Preview Cards */}
        <div className="space-y-3 pt-2">
          <div className="text-xs font-bold text-stone-700 uppercase tracking-wider">
            {isAr ? 'أهداف الجمعية الأربعة:' : 'The Four Official Goals:'}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {org.goals.map((goal, idx) => (
              <div
                key={goal.id}
                className="p-4 rounded-xl bg-stone-50/70 border border-stone-200/70 space-y-2 hover:bg-emerald-50/40 hover:border-emerald-200 transition-colors"
              >
                <div className="w-6 h-6 rounded-lg bg-emerald-700 text-white text-xs font-bold flex items-center justify-center">
                  {idx + 1}
                </div>
                <p className="text-xs font-bold text-stone-800 leading-snug">
                  {isAr ? goal.title.ar : goal.title.en}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Core Platform Services Navigation Cards */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg sm:text-xl font-bold text-stone-900">
            {isAr ? 'الخدمات والوحدات الرئيسية للمنصة' : 'Core Platform Services & Modules'}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div
            onClick={() => onNavigate('knowledge')}
            className="bg-white p-6 rounded-2xl border border-stone-200/80 hover:border-emerald-500 hover:shadow-md transition-all cursor-pointer group space-y-3"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-base text-stone-900 group-hover:text-emerald-800">
                {isAr ? 'المعرفة الزراعية' : 'Knowledge Hub'}
              </h3>
              <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                {isAr ? 'أدلة إرشادية حقلية، روزنامات زراعية، وتوصيات مكافحة الآفات.' : 'Field guides, crop calendars, and verified IPM practices.'}
              </p>
            </div>
          </div>

          <div
            onClick={() => onNavigate('academy')}
            className="bg-white p-6 rounded-2xl border border-stone-200/80 hover:border-emerald-500 hover:shadow-md transition-all cursor-pointer group space-y-3"
          >
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center group-hover:bg-amber-600 group-hover:text-white transition-colors">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-base text-stone-900 group-hover:text-amber-800">
                {isAr ? 'الأكاديمية الزراعية' : 'Cooperative Academy'}
              </h3>
              <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                {isAr ? 'برامج تدريبية وتأهيل المهندسات الزراعيات والمزارعين بشهادات معتمدة.' : 'Accredited training for engineers and farmers in modern practices.'}
              </p>
            </div>
          </div>

          <div
            onClick={() => onNavigate('services')}
            className="bg-white p-6 rounded-2xl border border-stone-200/80 hover:border-emerald-500 hover:shadow-md transition-all cursor-pointer group space-y-3"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Wrench className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-base text-stone-900 group-hover:text-blue-800">
                {isAr ? 'الخدمات التعاونية' : 'Field Services'}
              </h3>
              <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                {isAr ? 'تحليل التربة، مشاركة الآلات الزراعية، وشبكات الري الذكي.' : 'Soil testing, shared machinery, and precision irrigation support.'}
              </p>
            </div>
          </div>

          <div
            onClick={() => onNavigate('products')}
            className="bg-white p-6 rounded-2xl border border-stone-200/80 hover:border-emerald-500 hover:shadow-md transition-all cursor-pointer group space-y-3"
          >
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-colors">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-base text-stone-900 group-hover:text-purple-800">
                {isAr ? 'سوق المزارع' : 'Farmer Marketplace'}
              </h3>
              <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                {isAr ? 'المدخلات المعتمدة، البذور المحسنة، وتسويق المحاصيل الآمنة.' : 'Certified inputs, quality seeds, and marketing harvest produce.'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Cooperative Impact & Statistics Section */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-2xs">
          <div className="flex items-center justify-between text-stone-500 text-xs mb-2">
            <span>{isAr ? 'المزارعون والأعضاء' : 'Active Members'}</span>
            <Users className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-2xl sm:text-3xl font-bold text-stone-900">1,480+</div>
          <div className="text-xs text-emerald-600 font-medium mt-1">
            {isAr ? '+14% انضمام هذا الموسم' : '+14% joined this season'}
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-2xs">
          <div className="flex items-center justify-between text-stone-500 text-xs mb-2">
            <span>{isAr ? 'المساحة المزروعة (بالهكتار)' : 'Cultivated Area (Hectares)'}</span>
            <Sprout className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-2xl sm:text-3xl font-bold text-stone-900">3,850</div>
          <div className="text-xs text-emerald-600 font-medium mt-1">
            {isAr ? 'هكتار تحت الإشراف المباشر' : 'hectares actively monitored'}
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-2xs">
          <div className="flex items-center justify-between text-stone-500 text-xs mb-2">
            <span>{isAr ? 'وفر المياه المحقق' : 'Water Conserved'}</span>
            <Droplets className="w-4 h-4 text-blue-600" />
          </div>
          <div className="text-2xl sm:text-3xl font-bold text-blue-900">350,000 م³</div>
          <div className="text-xs text-blue-600 font-medium mt-1">
            {isAr ? 'عبر الري بالتنقيط والحساسات' : 'via smart drip systems'}
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-2xs">
          <div className="flex items-center justify-between text-stone-500 text-xs mb-2">
            <span>{isAr ? 'الإنتاج التعاوني السنوي' : 'Annual Yield'}</span>
            <TrendingUp className="w-4 h-4 text-amber-600" />
          </div>
          <div className="text-2xl sm:text-3xl font-bold text-stone-900">19,400 طن</div>
          <div className="text-xs text-amber-600 font-medium mt-1">
            {isAr ? 'تمور، زيتون، وخضروات' : 'dates, olives & produce'}
          </div>
        </div>
      </div>

      {/* 5. Featured Services Highlight */}
      <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-stone-900">
              {isAr ? 'أبرز الخدمات الميدانية المتاحة للحجز' : 'Featured Field Requisitions'}
            </h2>
            <p className="text-xs text-stone-500 mt-0.5">
              {isAr ? 'دعم تعاوني فوري بأسعار مدعومة لأعضاء الجمعية' : 'Subsidized services for active cooperative members'}
            </p>
          </div>

          <button
            onClick={() => onNavigate('services')}
            className="text-xs font-bold text-emerald-700 hover:text-emerald-900 flex items-center gap-1 self-start sm:self-auto"
          >
            <span>{isAr ? 'كافة الخدمات والطلبات' : 'View all services'}</span>
            <ArrowIcon className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.slice(0, 3).map((srv) => (
            <div
              key={srv.id}
              className="p-5 rounded-2xl border border-stone-200/80 bg-stone-50/50 hover:bg-white hover:border-emerald-300 hover:shadow-xs transition-all flex flex-col justify-between"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full text-[11px]">
                    {srv.subsidyRate}
                  </span>
                  <span className="text-stone-400 text-[11px]">
                    {isAr ? srv.turnaroundTime.ar : srv.turnaroundTime.en}
                  </span>
                </div>
                <h3 className="font-bold text-sm text-stone-900 leading-snug">
                  {isAr ? srv.title.ar : srv.title.en}
                </h3>
                <p className="text-xs text-stone-500 leading-relaxed line-clamp-2">
                  {isAr ? srv.description.ar : srv.description.en}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-stone-200/60 flex items-center justify-between">
                <span className="text-xs font-bold text-stone-700">
                  {isAr ? srv.fee.ar : srv.fee.en}
                </span>
                <button
                  onClick={() => onRequestService(srv)}
                  className="bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-colors"
                >
                  {isAr ? 'حجز الخدمة' : 'Request'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 6. Commercial Ads Showcase Section (مساحة الإعلانات والرعايات التجارية) */}
      <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 space-y-6 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-100">
          <div>
            <div className="flex items-center gap-2 text-amber-700 text-xs font-bold uppercase tracking-wider mb-1">
              <Megaphone className="w-4 h-4" />
              <span>{isAr ? 'مساحة الإعلانات والرعايات التجارية' : 'Commercial Advertising Placements'}</span>
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-stone-900">
              {isAr ? 'عروض وخدمات الشركاء والموردين الزراعيين' : 'Agricultural Partners & Input Suppliers'}
            </h2>
            <p className="text-xs text-stone-500 mt-0.5">
              {isAr
                ? 'مساحة مخصصة للشركات لعرض أنظمة الطاقة الشمسية والبذور وشبكات الري والآلات أمام مزارعي جمعية أثر'
                : 'Dedicated commercial spaces connecting farmers with verified solar, seed, machinery, and irrigation suppliers.'}
            </p>
          </div>

          <button
            onClick={() => onNavigate('ads')}
            className="bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold px-4 py-2.5 rounded-xl transition-all shadow-xs flex items-center gap-2 self-start sm:self-auto shrink-0"
          >
            <Megaphone className="w-3.5 h-3.5" />
            <span>{isAr ? 'طلب مساحة إعلانية تجارية' : 'Book Commercial Ad'}</span>
            <ArrowIcon className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Commercial Ads Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {ads.slice(0, 3).map((ad) => (
            <div
              key={ad.id}
              className="p-5 rounded-2xl border border-amber-200/80 bg-gradient-to-b from-amber-50/40 to-white hover:border-amber-400 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2 text-xs">
                  <span className="font-bold text-amber-900 bg-amber-100 px-2.5 py-0.5 rounded-full text-[10px] border border-amber-200 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-amber-600" />
                    <span>{isAr ? 'إعلان تجاري معتمد' : 'Commercial Ad'}</span>
                  </span>
                  <span className="text-[10px] text-stone-400 font-medium">
                    {ad.placement === 'hero_banner' ? (isAr ? 'واجهة رئيسية' : 'Hero') : (isAr ? 'سوق المدخلات' : 'Marketplace')}
                  </span>
                </div>

                <div>
                  <div className="text-xs font-bold text-emerald-800 mb-1 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>{ad.companyName}</span>
                  </div>
                  <h3 className="font-bold text-sm text-stone-900 leading-snug group-hover:text-emerald-900 transition-colors">
                    {isAr ? ad.title.ar : ad.title.en}
                  </h3>
                </div>

                <p className="text-xs text-stone-600 leading-relaxed line-clamp-3">
                  {isAr ? ad.description.ar : ad.description.en}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-amber-100 flex items-center justify-between gap-2">
                <a
                  href={`https://wa.me/967${ad.phone.replace(/^0+/, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-700 hover:bg-emerald-800 text-white text-[11px] font-bold px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 shadow-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>{isAr ? 'واتساب' : 'WhatsApp'}</span>
                </a>

                <a
                  href={`tel:${ad.phone}`}
                  className="bg-white hover:bg-stone-50 text-stone-700 border border-stone-200 text-[11px] font-semibold px-2.5 py-1.5 rounded-lg transition-colors flex items-center gap-1"
                  dir="ltr"
                >
                  <Phone className="w-3 h-3 text-amber-600" />
                  <span>{ad.phone}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Commercial Hotline & Booking Banner */}
        <div className="bg-stone-50 rounded-2xl p-4 border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <Tag className="w-4 h-4 text-emerald-700 shrink-0" />
            <span className="text-stone-700 font-medium">
              {isAr
                ? 'باقات الإعلان متاحة بأسعار تفضيلية بالريال اليمني (150,000 / 100,000 / 75,000 ر.ي شهرياً) مع عقود رسمية موثقة.'
                : 'Commercial ad packages available in Yemeni Rial starting from 75,000 YER/mo with verified contracts.'}
            </span>
          </div>

          <button
            onClick={() => onNavigate('ads')}
            className="text-amber-800 hover:text-amber-950 font-bold hover:underline shrink-0 flex items-center gap-1"
          >
            <span>{isAr ? 'عرض جدول الأسعار والباقات' : 'View Ad Rates & Packages'}</span>
            <ArrowIcon className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* 7. Institutional Contact Call to Action */}
      <div className="rounded-3xl bg-gradient-to-r from-emerald-900 to-stone-900 text-white p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 border border-emerald-950 shadow-md">
        <div className="space-y-2 text-center sm:text-right">
          <div className="text-amber-400 text-xs font-bold uppercase tracking-wider">
            {isAr ? 'تواصل وتعاون' : 'Connect & Collaborate'}
          </div>
          <h3 className="text-xl sm:text-2xl font-bold">
            {isAr ? 'نسعد بتواصلكم عبر الهاتف والبريد الرسمي لجمعية أثر' : 'Connect with ATHAR Cooperative Directly'}
          </h3>
          <div className="text-xs sm:text-sm text-stone-300 flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-1">
            <a 
              href={`tel:${org.phone}`} 
              className="font-extrabold text-emerald-300 hover:text-white flex items-center gap-1.5 tracking-wider text-sm"
              dir="ltr"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>{org.phoneFormatted}</span>
            </a>
            <span className="text-stone-600 hidden sm:inline">•</span>
            <a 
              href={`mailto:${org.email}`} 
              className="font-bold text-amber-300 hover:underline flex items-center gap-1.5"
            >
              <Mail className="w-4 h-4 text-amber-400" />
              <span>{org.email}</span>
            </a>
          </div>
        </div>

        <button
          onClick={() => onNavigate('contact')}
          className="bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs sm:text-sm font-bold px-6 py-3 rounded-xl transition-all shadow-md flex items-center gap-2 shrink-0"
        >
          <span>{isAr ? 'إرسال رسالة الآن' : 'Contact Us Now'}</span>
          <ArrowIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
