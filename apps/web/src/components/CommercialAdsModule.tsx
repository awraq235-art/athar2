import React, { useState } from 'react';
import { 
  CommercialAd, 
  CommercialAdRequest, 
  CommercialAdPlacement, 
  Language 
} from '../types';
import { officialOrganization } from '../data/organization';
import { SponsoredAdBanner } from './SponsoredAdBanner';
import { 
  Megaphone, 
  Sparkles, 
  Phone, 
  Mail, 
  CheckCircle2, 
  Calculator, 
  ShieldCheck, 
  Building2, 
  Target, 
  Clock, 
  Tag, 
  DollarSign, 
  Send, 
  ChevronDown, 
  HelpCircle,
  Copy,
  Users,
  Eye,
  TrendingUp
} from 'lucide-react';

interface CommercialAdsModuleProps {
  language: Language;
  ads: CommercialAd[];
  requests?: CommercialAdRequest[];
  isAdmin?: boolean;
  onSubmitAdRequest: (req: Omit<CommercialAdRequest, 'id' | 'status' | 'createdAt'>) => void;
  onApproveRequest?: (id: string) => void;
  onRejectRequest?: (id: string) => void;
}

export const CommercialAdsModule: React.FC<CommercialAdsModuleProps> = ({
  language,
  ads,
  requests = [],
  isAdmin = false,
  onSubmitAdRequest,
  onApproveRequest,
  onRejectRequest,
}) => {
  const isAr = language === 'ar';
  const org = officialOrganization;

  // Form State
  const [merchantName, setMerchantName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [placement, setPlacement] = useState<CommercialAdPlacement>('hero_banner');
  const [durationMonths, setDurationMonths] = useState<number>(3);
  const [adTitle, setAdTitle] = useState('');
  const [adDescription, setAdDescription] = useState('');
  const [targetUrl, setTargetUrl] = useState('');
  const [notes, setNotes] = useState('');

  const [submittedTicket, setSubmittedTicket] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // Pricing configuration in Yemeni Rial (ر.ي)
  const placementRatesYER: Record<CommercialAdPlacement, { baseMonthly: number; labelAr: string; labelEn: string; descAr: string; descEn: string }> = {
    hero_banner: {
      baseMonthly: 150000,
      labelAr: 'بانر الواجهة الرئيسية (Hero Banner)',
      labelEn: 'Homepage Hero Banner',
      descAr: 'أعلى وأبرز موضع بالصفحة الأولى يشاهده كل زائر لمنصة الجمعية.',
      descEn: 'Prime top position on homepage seen by every visitor.',
    },
    marketplace_top: {
      baseMonthly: 100000,
      labelAr: 'بانر سوق المنتجات والمدخلات (Marketplace)',
      labelEn: 'Marketplace Top Sponsor',
      descAr: 'مستهدف مباشرة للمشترين والمزارعين الباحثين عن البذور والمخصبات والمعدات.',
      descEn: 'Directly targets farmers and buyers shopping for farm inputs.',
    },
    services_sidebar: {
      baseMonthly: 75000,
      labelAr: 'مساحة الخدمات الميدانية والمختبر (Services)',
      labelEn: 'Field Services & Lab Placement',
      descAr: 'يظهر للمزارعين أثناء حجز فحوصات التربة والمعدات والاستشارات.',
      descEn: 'Appears to farmers booking lab assays and tractor pooling.',
    },
    knowledge_spotlight: {
      baseMonthly: 50000,
      labelAr: 'شريط الأكاديمية والمكتبة الإرشادية (Knowledge Base)',
      labelEn: 'Academy & Knowledge Base Banner',
      descAr: 'مستهدف للمهندسين الزراعيين والكوادر الفنية ورواد المشاريع.',
      descEn: 'Reaches agronomy engineers, extension specialists, and students.',
    },
  };

  // Discount based on duration
  const getDiscountPercent = (months: number): number => {
    if (months >= 12) return 20;
    if (months >= 6) return 15;
    if (months >= 3) return 10;
    return 0;
  };

  const currentRate = placementRatesYER[placement].baseMonthly;
  const discount = getDiscountPercent(durationMonths);
  const subtotal = currentRate * durationMonths;
  const totalCostYER = Math.round(subtotal * (1 - discount / 100));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!merchantName || !companyName || !phone || !adTitle) return;

    const ticket = `ATHAR-AD-${Math.floor(10000 + Math.random() * 90000)}`;

    onSubmitAdRequest({
      merchantName,
      companyName,
      phone,
      email: email || `${phone}@client.commercial`,
      placement,
      durationMonths,
      estimatedCostYER: totalCostYER,
      adTitle,
      adDescription,
      targetUrl: targetUrl || `tel:${phone}`,
      notes,
    });

    setSubmittedTicket(ticket);
    // Reset form fields
    setAdTitle('');
    setAdDescription('');
    setTargetUrl('');
    setNotes('');
  };

  const handleCopyTicket = () => {
    if (!submittedTicket) return;
    navigator.clipboard.writeText(submittedTicket);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-10 animate-in fade-in duration-300 pb-12">
      {/* Header */}
      <div className="pb-4 border-b border-stone-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-amber-700 text-xs font-bold uppercase tracking-wider mb-1">
            <Megaphone className="w-4 h-4" />
            <span>{isAr ? 'الإعلانات والرعايات التجارية' : 'Commercial Advertising & Sponsorship'}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
            {isAr ? 'مساحات إعلانية للشركات والتجار الزراعيين' : 'Merchant & Corporate Agricultural Ad Placements'}
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            {isAr
              ? 'صل بمنتجاتك وخدماتك إلى آلاف المزارعين والمهندسات الزراعيات وأعضاء جمعية أثر في كافة المحافظات.'
              : 'Connect your agricultural products, solar systems, and supplies directly to cooperative farmers.'}
          </p>
        </div>

        <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 px-4 py-2 rounded-2xl self-start md:self-auto">
          <Phone className="w-4 h-4 text-amber-700" />
          <div className="text-xs">
            <div className="text-[10px] text-amber-800 font-semibold">{isAr ? 'مكتب الإعلانات والتسويق:' : 'Ad Hotline:'}</div>
            <a href={`tel:${org.phone}`} className="font-extrabold text-amber-950 hover:underline" dir="ltr">
              {org.phoneFormatted}
            </a>
          </div>
        </div>
      </div>

      {/* Official Legal & Institutional Credibility Strip */}
      <div className="bg-emerald-900 text-emerald-100 p-3.5 sm:p-4 rounded-2xl border border-emerald-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs shadow-xs">
        <div className="flex items-center gap-2.5">
          <ShieldCheck className="w-5 h-5 text-amber-300 shrink-0" />
          <span className="font-semibold text-stone-100">
            {isAr
              ? 'إعلانات ورعايات رسمية موثقة ومعتمدة من جمعية أثر التعاونية الزراعية متعددة الأغراض — ترخيص رقم (87) لعام 2019 صادر من وزارة الشؤون الاجتماعية والعمل'
              : 'Official commercial sponsorships endorsed by ATHAR Cooperative — License No. (87) of 2019 issued by the Ministry of Social Affairs and Labor'}
          </span>
        </div>
        <div className="bg-amber-400/20 text-amber-300 px-3 py-1 rounded-xl text-[11px] font-extrabold shrink-0 border border-amber-400/30">
          {isAr ? 'عقود نظامية وفواتير معتمدة' : 'Official Tax & Audited Invoices'}
        </div>
      </div>

      {/* Platform Audience Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-stone-200 flex items-center gap-3.5 shadow-2xs">
          <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xl font-extrabold text-stone-900">+4,500</div>
            <div className="text-xs text-stone-500">{isAr ? 'مزارع وعضو مستفيد' : 'Active Farmers & Members'}</div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-stone-200 flex items-center gap-3.5 shadow-2xs">
          <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center shrink-0">
            <Eye className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xl font-extrabold text-stone-900">+60,000</div>
            <div className="text-xs text-stone-500">{isAr ? 'مشاهدة شهرية مستهدفة' : 'Monthly Targeted Impressions'}</div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-stone-200 flex items-center gap-3.5 shadow-2xs">
          <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
            <Building2 className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xl font-extrabold text-stone-900">{isAr ? 'مدخلات وتقنيات' : 'Inputs & Systems'}</div>
            <div className="text-xs text-stone-500">{isAr ? 'طاقة شمسية، بذور، أسمدة، شبكات' : 'Solar, seeds, fertilizer, drip'}</div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-stone-200 flex items-center gap-3.5 shadow-2xs">
          <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center shrink-0">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xl font-extrabold text-stone-900">{isAr ? 'عائد استثمار مباشر' : 'High ROI'}</div>
            <div className="text-xs text-stone-500">{isAr ? 'ربط فوري بالواتساب والاتصال' : 'Direct WhatsApp & Call Clicks'}</div>
          </div>
        </div>
      </div>

      {/* Admin Moderation Panel if User is Admin */}
      {isAdmin && requests.length > 0 && (
        <div className="bg-amber-50/80 border border-amber-300 rounded-3xl p-6 sm:p-7 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-amber-900 font-extrabold text-sm sm:text-base">
              <ShieldCheck className="w-5 h-5 text-amber-700" />
              <span>{isAr ? 'لوحة تدقيق وموافقة طلبات الإعلانات التجارية (إدارة الجمعية)' : 'Commercial Ad Requests Moderation (Admin)'}</span>
            </div>
            <span className="text-xs bg-amber-200 text-amber-900 px-2.5 py-1 rounded-full font-bold">
              {requests.filter(r => r.status === 'PENDING').length} {isAr ? 'طلب معلق' : 'pending'}
            </span>
          </div>

          <div className="space-y-3">
            {requests.map((req) => (
              <div key={req.id} className="bg-white p-4 rounded-2xl border border-stone-200 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xs">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-stone-900">{req.companyName}</span>
                    <span className="text-xs text-stone-500">({req.merchantName})</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                      req.status === 'APPROVED' ? 'bg-emerald-100 text-emerald-800' :
                      req.status === 'REJECTED' ? 'bg-rose-100 text-rose-800' : 'bg-amber-100 text-amber-800'
                    }`}>
                      {req.status}
                    </span>
                  </div>
                  <div className="text-xs text-stone-700 font-medium">
                    {req.adTitle} — <span className="text-emerald-700 font-bold">{req.estimatedCostYER.toLocaleString()} {isAr ? 'ر.ي' : 'YER'}</span> ({req.durationMonths} {isAr ? 'أشهر' : 'months'})
                  </div>
                  <div className="text-[11px] text-stone-400 flex items-center gap-3">
                    <span dir="ltr">{req.phone}</span>
                    <span>•</span>
                    <span>{req.email}</span>
                  </div>
                </div>

                {req.status === 'PENDING' && onApproveRequest && onRejectRequest && (
                  <div className="flex items-center gap-2 self-end md:self-center">
                    <button
                      onClick={() => onApproveRequest(req.id)}
                      className="bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors shadow-xs"
                    >
                      {isAr ? 'موافقة واعتماد الإعلان' : 'Approve Ad'}
                    </button>
                    <button
                      onClick={() => onRejectRequest(req.id)}
                      className="bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-bold px-3 py-2 rounded-xl transition-colors"
                    >
                      {isAr ? 'رفض' : 'Reject'}
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Active Sponsored Showcase */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-stone-900 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>{isAr ? 'نماذج المساحات الإعلانية المفعلة حالياً' : 'Live Sponsored Ad Placements'}</span>
          </h2>
          <span className="text-xs text-stone-500 font-medium">
            {isAr ? 'معروضة على المنصة بأسعار الريال اليمني' : 'Rates in Yemeni Rial (YER)'}
          </span>
        </div>

        <div className="space-y-4">
          {ads.map((ad) => (
            <SponsoredAdBanner key={ad.id} ad={ad} language={language} />
          ))}
        </div>
      </div>

      {/* Advertising Packages & Pricing Cards */}
      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-bold text-stone-900 flex items-center gap-2">
            <Tag className="w-4 h-4 text-emerald-700" />
            <span>{isAr ? 'باقات الإعلان المتاحة والأسعار بالريال اليمني' : 'Available Ad Packages & Rates (YER)'}</span>
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            {isAr ? 'اختر المساحة التي تناسب نشاطك التجاري مع خصومات تصاعدية للمدد الطويلة' : 'Choose the placement matching your business niche with duration discounts'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {(Object.keys(placementRatesYER) as CommercialAdPlacement[]).map((key) => {
            const item = placementRatesYER[key];
            const isSelected = placement === key;

            return (
              <div
                key={key}
                onClick={() => setPlacement(key)}
                className={`rounded-3xl p-5 border cursor-pointer transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'bg-amber-50/70 border-amber-500 ring-2 ring-amber-400 shadow-md'
                    : 'bg-white border-stone-200 hover:border-amber-300 hover:shadow-xs'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full ${
                      isSelected ? 'bg-amber-600 text-white' : 'bg-stone-100 text-stone-600'
                    }`}>
                      {isAr ? (key === 'hero_banner' ? 'الأكثر طلباً' : 'متاح للحجز') : 'Available'}
                    </span>
                    <span className="text-xs font-bold text-stone-400">
                      {isAr ? 'شهرياً' : '/ month'}
                    </span>
                  </div>

                  <h3 className="font-bold text-stone-900 text-sm mb-1 leading-snug">
                    {isAr ? item.labelAr : item.labelEn}
                  </h3>

                  <p className="text-xs text-stone-500 leading-relaxed mb-4">
                    {isAr ? item.descAr : item.descEn}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100 flex items-baseline justify-between">
                  <div>
                    <span className="text-lg font-black text-amber-800">
                      {item.baseMonthly.toLocaleString('en-US')}
                    </span>
                    <span className="text-xs text-stone-600 mr-1 ml-1 font-bold">
                      {isAr ? 'ر.ي' : 'YER'}
                    </span>
                  </div>

                  <button
                    type="button"
                    className={`text-xs font-bold px-3 py-1 rounded-xl transition-colors ${
                      isSelected ? 'bg-amber-600 text-white' : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                    }`}
                  >
                    {isSelected ? (isAr ? 'محدد حالياً' : 'Selected') : (isAr ? 'اختيار' : 'Select')}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Merchant Submission Form Section */}
      <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-xs">
        <div className="max-w-3xl mx-auto space-y-6">
          {submittedTicket ? (
            /* Success Feedback */
            <div className="text-center py-10 space-y-5 animate-in zoom-in-95">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold text-stone-900">
                  {isAr ? 'تم إرسال طلب الإعلان التجاري بنجاح' : 'Commercial Ad Requisition Submitted'}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                  {isAr
                    ? `شكراً لثقتكم بجمعية أثر. تم تسجيل طلبكم وسيقوم فريق التسويق بالتواصل معكم على الرقم ${phone} لمراجعة المحتوى وتفعيل المساحة الإعلانية فوراً.`
                    : `Thank you for partnering with ATHAR. Our commercial advertising team will contact you at ${phone} to confirm asset review and activation.`}
                </p>
              </div>

              <div className="bg-stone-50 border border-stone-200 p-4 rounded-2xl max-w-sm mx-auto space-y-2">
                <div className="text-[11px] font-semibold text-stone-500">
                  {isAr ? 'رقم طلب الإعلان التجاري:' : 'Ad Request Reference Number:'}
                </div>
                <div className="flex items-center justify-center gap-2 font-mono font-bold text-amber-800 text-lg">
                  <span>{submittedTicket}</span>
                  <button
                    onClick={handleCopyTicket}
                    className="p-1 rounded-md hover:bg-stone-200 text-stone-600 transition-colors"
                    title={isAr ? 'نسخ الرقم' : 'Copy reference'}
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
                {copied && (
                  <div className="text-[10px] text-emerald-700 font-bold">
                    {isAr ? 'تم نسخ الرقم للحافظة!' : 'Copied to clipboard!'}
                  </div>
                )}
              </div>

              <div className="pt-2 flex items-center justify-center gap-3">
                <button
                  onClick={() => setSubmittedTicket(null)}
                  className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-all shadow-xs"
                >
                  {isAr ? 'تقديم طلب إعلان آخر' : 'Submit Another Ad'}
                </button>
              </div>
            </div>
          ) : (
            /* Submission Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="border-b border-stone-100 pb-4">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                  {isAr ? 'استمارة حجز المساحات الإعلانية' : 'Commercial Merchant Application Form'}
                </span>
                <h3 className="text-xl font-extrabold text-stone-900 mt-1">
                  {isAr ? 'تقديم طلب نشر إعلان تجاري في الموقع' : 'Submit Your Commercial Ad Requisition'}
                </h3>
                <p className="text-xs text-stone-500 mt-0.5">
                  {isAr ? 'يرجى تعبئة بيانات الشركة وعرضكم الترويجي لمراجعته واعتماده' : 'Fill out company credentials and advertisement details for expedited review'}
                </p>
              </div>

              {/* Merchant / Company Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    {isAr ? 'اسم التاجر / المفوض بالتواصل: *' : 'Merchant / Contact Person: *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={merchantName}
                    onChange={(e) => setMerchantName(e.target.value)}
                    placeholder={isAr ? 'مثال: عبدالكريم المهدي' : 'e.g. Abdulkarim Al-Mahdi'}
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl text-xs p-2.5 focus:bg-white focus:outline-amber-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    {isAr ? 'اسم الشركة أو المؤسسة التجارية: *' : 'Company / Business Name: *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder={isAr ? 'مثال: شركة نماء للطاقة ومضخات الآبار' : 'e.g. Namaa Solar & Pumping Co.'}
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl text-xs p-2.5 focus:bg-white focus:outline-amber-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    {isAr ? 'رقم الهاتف والواتساب للتواصل: *' : 'Phone / WhatsApp Number: *'}
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={isAr ? 'مثال: 771234567' : 'e.g. 771234567'}
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl text-xs p-2.5 focus:bg-white focus:outline-amber-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    {isAr ? 'البريد الإلكتروني للشركة:' : 'Company Email:'}
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={isAr ? 'sales@company.com' : 'sales@company.com'}
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl text-xs p-2.5 focus:bg-white focus:outline-amber-600"
                  />
                </div>
              </div>

              {/* Placement & Duration Selectors */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-stone-100">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    {isAr ? 'المساحة الإعلانية المطلوبة:' : 'Requested Ad Space:'}
                  </label>
                  <select
                    value={placement}
                    onChange={(e) => setPlacement(e.target.value as CommercialAdPlacement)}
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl text-xs p-2.5 focus:bg-white focus:outline-amber-600"
                  >
                    {(Object.keys(placementRatesYER) as CommercialAdPlacement[]).map((key) => (
                      <option key={key} value={key}>
                        {isAr ? placementRatesYER[key].labelAr : placementRatesYER[key].labelEn} ({placementRatesYER[key].baseMonthly.toLocaleString()} {isAr ? 'ر.ي/شهر' : 'YER/mo'})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    {isAr ? 'مدة ظهور الإعلان:' : 'Ad Duration Period:'}
                  </label>
                  <select
                    value={durationMonths}
                    onChange={(e) => setDurationMonths(Number(e.target.value))}
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl text-xs p-2.5 focus:bg-white focus:outline-amber-600"
                  >
                    <option value={1}>{isAr ? 'شهر واحد (التعرفة الاعتيادية)' : '1 Month (Standard)'}</option>
                    <option value={3}>{isAr ? '3 أشهر (خصم 10% توفيري)' : '3 Months (10% Discount)'}</option>
                    <option value={6}>{isAr ? '6 أشهر (خصم 15% نصف سنوي)' : '6 Months (15% Discount)'}</option>
                    <option value={12}>{isAr ? 'سنة كاملة (خصم 20% شريك استراتيجي)' : '12 Months (20% Discount)'}</option>
                  </select>
                </div>
              </div>

              {/* Ad Content & Link */}
              <div className="space-y-3 pt-2 border-t border-stone-100">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    {isAr ? 'عنوان الإعلان الترويجي: *' : 'Ad Promotional Headline: *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={adTitle}
                    onChange={(e) => setAdTitle(e.target.value)}
                    placeholder={isAr ? 'مثال: خصم 15% على منظومات الضخ الشمسي مع ضمان 5 سنوات' : 'e.g. 15% discount on solar well pumping systems'}
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl text-xs p-2.5 focus:bg-white focus:outline-amber-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    {isAr ? 'نص وتفاصيل العرض التجاري المقدم للمزارعين: *' : 'Ad Body & Offer Details for Farmers: *'}
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={adDescription}
                    onChange={(e) => setAdDescription(e.target.value)}
                    placeholder={isAr ? 'اشرح تفاصيل العرض، الميزات، المواصفات الفنية، والتسهيلات الممنوحة لأعضاء الجمعية...' : 'Describe specifications, member benefits, warranty...'}
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl text-xs p-2.5 focus:bg-white focus:outline-amber-600"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      {isAr ? 'رابط الوجهة أو رقم الواتساب المباشر:' : 'Target URL or Direct WhatsApp:'}
                    </label>
                    <input
                      type="text"
                      value={targetUrl}
                      onChange={(e) => setTargetUrl(e.target.value)}
                      placeholder={isAr ? 'مثال: https://wa.me/967771234567 أو موقع الشركة' : 'e.g. https://wa.me/967...'}
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl text-xs p-2.5 focus:bg-white focus:outline-amber-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      {isAr ? 'ملاحظات إضافية لإدارة الإعلانات:' : 'Notes for Ad Department:'}
                    </label>
                    <input
                      type="text"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder={isAr ? 'تفضيل مواعيد النشر أو المتطلبات الفنية...' : 'Specific dates, imagery requests...'}
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl text-xs p-2.5 focus:bg-white focus:outline-amber-600"
                    />
                  </div>
                </div>
              </div>

              {/* Dynamic Price Summary Box in Yemeni Rial (ر.ي) */}
              <div className="bg-gradient-to-br from-amber-50 to-stone-50 border border-amber-200 p-5 rounded-2xl space-y-3">
                <div className="flex items-center justify-between text-xs text-stone-600">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Calculator className="w-3.5 h-3.5 text-amber-700" />
                    <span>{isAr ? 'التعرفة الشهرية الأساسية للمساحة:' : 'Base Monthly Space Rate:'}</span>
                  </span>
                  <span className="font-bold text-stone-900">
                    {currentRate.toLocaleString('en-US')} {isAr ? 'ر.ي' : 'YER'}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs text-stone-600">
                  <span>{isAr ? 'المدة الإجمالية المحجوزة:' : 'Duration Period:'}</span>
                  <span className="font-bold text-stone-900">
                    {durationMonths} {isAr ? 'شهر' : 'Months'}
                  </span>
                </div>

                {discount > 0 && (
                  <div className="flex items-center justify-between text-xs text-emerald-800 font-bold bg-emerald-100/60 p-2 rounded-xl">
                    <span>{isAr ? `خصم المدة (${discount}%):` : `Duration Discount (${discount}%):`}</span>
                    <span>-{(Math.round(subtotal * (discount / 100))).toLocaleString('en-US')} {isAr ? 'ر.ي' : 'YER'}</span>
                  </div>
                )}

                <div className="pt-3 border-t border-amber-200 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] text-stone-500 font-bold">{isAr ? 'إجمالي تكلفة الإعلان التقديرية:' : 'Estimated Total Ad Investment:'}</div>
                    <div className="text-xl font-black text-amber-900">
                      {totalCostYER.toLocaleString('en-US')}
                      <span className="text-sm font-bold text-stone-700 mr-1.5 ml-1.5">{isAr ? 'ريال يمني (ر.ي)' : 'YER'}</span>
                    </div>
                  </div>

                  <span className="text-[10px] text-amber-800 bg-amber-200/60 px-2.5 py-1 rounded-lg font-bold border border-amber-300">
                    {isAr ? 'شامل المراجعة والتفعيل والدعم' : 'Includes Review & Setup'}
                  </span>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-stone-500 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>
                    {isAr 
                      ? 'مراجعة معتمدة خلال 24 ساعة وفق معايير الجودة التعاونية'
                      : 'Subject to cooperative commercial quality charter review within 24 hours'}
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700 text-white font-extrabold text-xs px-6 py-3 rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{isAr ? 'تأكيد وإرسال طلب الإعلان التجاري' : 'Submit Commercial Ad Requisition'}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
