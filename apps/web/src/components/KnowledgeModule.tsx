import React, { useState } from 'react';
import { KnowledgeArticle, Language, CommercialAd } from '../types';
import { BookOpen, Search, Tag, Clock, Calendar, ChevronRight, ChevronLeft, Check, Sparkles, Filter, X } from 'lucide-react';
import { SponsoredAdBanner } from './SponsoredAdBanner';

interface KnowledgeModuleProps {
  articles: KnowledgeArticle[];
  language: Language;
  sponsoredAd?: CommercialAd;
  onNavigateToAds?: () => void;
}

export const KnowledgeModule: React.FC<KnowledgeModuleProps> = ({ 
  articles, 
  language,
  sponsoredAd,
  onNavigateToAds
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [activeArticle, setActiveArticle] = useState<KnowledgeArticle | null>(null);

  const isAr = language === 'ar';
  const Chevron = isAr ? ChevronLeft : ChevronRight;

  const categories = [
    { id: 'all', labelAr: 'كافة المواضيع', labelEn: 'All Topics' },
    { id: 'إدارة الري', labelAr: 'إدارة الري', labelEn: 'Irrigation' },
    { id: 'وقاية المزروعات', labelAr: 'وقاية المزروعات', labelEn: 'Plant Protection' },
    { id: 'صحة التربة', labelAr: 'صحة التربة', labelEn: 'Soil Health' },
  ];

  const filtered = articles.filter((art) => {
    const matchesCat = selectedCategory === 'all' || art.category.ar === selectedCategory || art.category.en === selectedCategory;
    const q = searchTerm.toLowerCase();
    const matchesSearch = 
      art.title.ar.toLowerCase().includes(q) || 
      art.title.en.toLowerCase().includes(q) || 
      art.summary.ar.toLowerCase().includes(q) || 
      art.summary.en.toLowerCase().includes(q) ||
      art.crop.toLowerCase().includes(q);
    return matchesCat && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Header with Title and Search */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-stone-200">
        <div>
          <div className="flex items-center gap-2 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-1">
            <BookOpen className="w-4 h-4" />
            <span>{isAr ? 'مركز المعرفة والإرشاد الزراعي' : 'Agricultural Knowledge Center'}</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            {isAr ? 'الموسوعة الإرشادية لأعضاء جمعية أثر' : 'Field Advisory & Agronomy Guides'}
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 mt-0.5">
            {isAr ? 'أدلة علمية محكمة تراعي الظروف المناخية والبيئية لواحات المملكة' : 'Peer-reviewed agronomic practices tailored for regional arid microclimates'}
          </p>
        </div>

        {/* Search & Category Filter */}
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className={`w-4 h-4 text-stone-400 absolute top-1/2 -translate-y-1/2 ${isAr ? 'right-3' : 'left-3'}`} />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={isAr ? 'ابحث عن محصول أو آفة...' : 'Search crop, pest, or guide...'}
              className={`bg-white border border-stone-200 rounded-lg text-xs py-2 px-3 focus:outline-emerald-600 focus:ring-1 focus:ring-emerald-600 w-56 ${
                isAr ? 'pr-9 pl-3' : 'pl-9 pr-3'
              }`}
            />
          </div>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
              selectedCategory === cat.id
                ? 'bg-emerald-700 text-white shadow-xs'
                : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-50'
            }`}
          >
            {isAr ? cat.labelAr : cat.labelEn}
          </button>
        ))}
      </div>

      {/* Commercial Sponsored Ad in Knowledge Base */}
      {sponsoredAd && (
        <SponsoredAdBanner
          ad={sponsoredAd}
          language={language}
          onNavigateToAds={onNavigateToAds}
          compact
        />
      )}

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((article) => (
          <div
            key={article.id}
            className="bg-white rounded-xl border border-stone-200 p-5 flex flex-col justify-between hover:border-emerald-300 hover:shadow-md transition-all group"
          >
            <div>
              <div className="flex items-center justify-between gap-2 text-xs mb-3">
                <span className="font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  {isAr ? article.category.ar : article.category.en}
                </span>
                <span className="text-stone-400 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {article.readTime}
                </span>
              </div>

              <h3 className="font-bold text-stone-900 text-base mb-2 group-hover:text-emerald-800 transition-colors leading-snug">
                {isAr ? article.title.ar : article.title.en}
              </h3>

              <p className="text-stone-600 text-xs leading-relaxed mb-4">
                {isAr ? article.summary.ar : article.summary.en}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {article.tags.map((tag) => (
                  <span key={tag} className="text-[11px] bg-stone-100 text-stone-600 px-2 py-0.5 rounded">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
              <span className="text-xs text-stone-400 flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {isAr ? article.season.ar : article.season.en}
              </span>

              <button
                onClick={() => setActiveArticle(article)}
                className="text-xs font-bold text-emerald-700 hover:text-emerald-900 flex items-center gap-1 group-hover:underline"
              >
                <span>{isAr ? 'قراءة الدليل كاملاً' : 'Read Guide'}</span>
                <Chevron className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Article Detail Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-stone-200 relative animate-in fade-in zoom-in-95">
            <button
              onClick={() => setActiveArticle(null)}
              className={`absolute top-5 text-stone-400 hover:text-stone-700 p-1 rounded-lg hover:bg-stone-100 ${isAr ? 'left-5' : 'right-5'}`}
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  {isAr ? activeArticle.category.ar : activeArticle.category.en}
                </span>
                <span className="text-xs text-stone-400">
                  {isAr ? activeArticle.season.ar : activeArticle.season.en} • {activeArticle.readTime}
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900">
                {isAr ? activeArticle.title.ar : activeArticle.title.en}
              </h2>

              <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded-xl text-xs sm:text-sm text-emerald-950 font-medium leading-relaxed">
                {isAr ? activeArticle.summary.ar : activeArticle.summary.en}
              </div>

              <div className="text-stone-700 text-sm leading-relaxed space-y-3 pt-2">
                <p>{isAr ? activeArticle.content.ar : activeArticle.content.en}</p>
                <p>
                  {isAr 
                    ? 'لمزيد من الاستفسارات الميدانية أو فحص عينات المحصول، يمكنكم طلب زيارة مهندس الإرشاد الزراعي عبر قسم "الخدمات التعاونية".'
                    : 'For tailored field audits or laboratory specimen evaluations, you may request an agronomist visit directly via Cooperative Services.'}
                </p>
              </div>

              <div className="pt-6 border-t border-stone-100 flex items-center justify-between">
                <div className="text-xs text-stone-500">
                  {isAr ? 'المرجع: اللجنة العلمية بجمعية أثر' : 'Reference: ATHAR Agronomy Scientific Committee'}
                </div>
                <button
                  onClick={() => setActiveArticle(null)}
                  className="bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold px-4 py-2 rounded-lg"
                >
                  {isAr ? 'إغلاق' : 'Close'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
