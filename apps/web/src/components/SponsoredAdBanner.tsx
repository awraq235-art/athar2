import React from 'react';
import { CommercialAd, Language } from '../types';
import { Sparkles, Phone, ExternalLink, MessageCircle, ArrowRight, ArrowLeft } from 'lucide-react';

interface SponsoredAdBannerProps {
  ad: CommercialAd;
  language: Language;
  onNavigateToAds?: () => void;
  compact?: boolean;
}

export const SponsoredAdBanner: React.FC<SponsoredAdBannerProps> = ({
  ad,
  language,
  onNavigateToAds,
  compact = false,
}) => {
  const isAr = language === 'ar';

  if (compact) {
    return (
      <div className="bg-gradient-to-r from-amber-900/90 via-stone-900 to-emerald-950 text-white p-4 rounded-2xl border border-amber-500/30 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2.5">
          <span className="bg-amber-400 text-stone-950 font-black text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider shrink-0">
            {isAr ? 'إعلان تجاري ممول' : 'Sponsored Ad'}
          </span>
          <div>
            <span className="font-bold text-amber-200">{ad.companyName}: </span>
            <span className="text-stone-200">{isAr ? ad.title.ar : ad.title.en}</span>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <a
            href={`tel:${ad.phone}`}
            className="bg-white/10 hover:bg-white/20 text-stone-200 px-3 py-1.5 rounded-xl transition-colors flex items-center gap-1 text-[11px] font-semibold"
          >
            <Phone className="w-3 h-3 text-emerald-400" />
            <span>{ad.phone}</span>
          </a>

          {onNavigateToAds && (
            <button
              onClick={onNavigateToAds}
              className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-3 py-1.5 rounded-xl transition-colors text-[11px] flex items-center gap-1"
            >
              <span>{isAr ? 'أعلن معنا' : 'Advertise Here'}</span>
              {isAr ? <ArrowLeft className="w-3 h-3" /> : <ArrowRight className="w-3 h-3" />}
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-emerald-950 to-stone-900 text-white rounded-3xl p-6 sm:p-7 border border-amber-500/40 shadow-md">
      {/* Decorative background badge */}
      <div className="absolute -top-6 -left-6 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"></div>
      <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="bg-amber-400 text-stone-950 font-black text-[10px] px-2.5 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              <span>{isAr ? 'مساحة إعلانية تجارية معتمدة' : 'Verified Commercial Ad'}</span>
            </span>
            <span className="text-[11px] font-bold text-amber-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">
              {ad.companyName}
            </span>
          </div>

          <h3 className="text-base sm:text-lg font-extrabold text-white leading-snug">
            {isAr ? ad.title.ar : ad.title.en}
          </h3>

          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
            {isAr ? ad.description.ar : ad.description.en}
          </p>

          <div className="text-[11px] text-stone-400 pt-1">
            {isAr ? 'عرض حصري وموثوق لمزارعي وأعضاء الجمعية' : 'Exclusive verified offer for cooperative members'}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row md:flex-col items-stretch sm:items-center md:items-end gap-3 shrink-0 w-full md:w-auto">
          {/* Action Button: WhatsApp or Call */}
          <a
            href={`https://wa.me/967${ad.phone.replace(/^0+/, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-4 py-2.5 rounded-xl transition-all shadow-xs text-xs flex items-center justify-center gap-2 text-center"
          >
            <MessageCircle className="w-4 h-4 text-emerald-200" />
            <span>{isAr ? ad.actionText.ar : ad.actionText.en}</span>
          </a>

          <a
            href={`tel:${ad.phone}`}
            className="bg-white/10 hover:bg-white/20 text-stone-200 font-semibold px-4 py-2 rounded-xl transition-colors text-xs flex items-center justify-center gap-2 text-center border border-white/15"
          >
            <Phone className="w-3.5 h-3.5 text-amber-300" />
            <span dir="ltr">{ad.phone}</span>
          </a>

          {onNavigateToAds && (
            <button
              onClick={onNavigateToAds}
              className="text-[11px] text-amber-300 hover:text-amber-200 underline font-medium text-center md:text-left self-center md:self-end mt-1"
            >
              {isAr ? 'هل أنت تاجر؟ أعلن معنا على المنصة ←' : 'Are you a merchant? Advertise with us ←'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
