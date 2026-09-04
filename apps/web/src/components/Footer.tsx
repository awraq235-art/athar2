import React from 'react';
import { AppModule, Language } from '../types';
import { officialOrganization } from '../data/organization';
import { AtharLogo } from './AtharLogo';
import { 
  Sprout, 
  Mail, 
  Phone,
  ShieldCheck, 
  HeartHandshake, 
  Compass, 
  Target, 
  Lock,
  ArrowUpRight,
  Megaphone
} from 'lucide-react';

interface FooterProps {
  language: Language;
  onNavigate: (module: AppModule) => void;
}

export const Footer: React.FC<FooterProps> = ({ language, onNavigate }) => {
  const isAr = language === 'ar';
  const org = officialOrganization;

  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800 mt-16 pt-12 pb-8 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Col 1: Identity & Description */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3 select-none">
              <AtharLogo variant="horizontal" size="md" isDark={true} />
            </div>

            <p className="text-xs text-stone-400 leading-relaxed max-w-md">
              {isAr
                ? 'جمعية تعاونية زراعية متعددة الأغراض تعنى بالنهوض بالقطاع الزراعي واستثمار طاقات المهندسات الزراعيات والمزارعين، وإدخال التقنيات الحديثة لتحقيق تنمية مستدامة وأمن غذائي.'
                : 'A multi-purpose agricultural cooperative dedicated to advancing agronomy, empowering female engineers and farmers, and deploying modern technologies for sustainable food security.'}
            </p>

            <div className="flex items-center gap-3 text-[11px] text-stone-400 pt-1 flex-wrap">
              <span className="bg-white/5 px-2.5 py-1 rounded-lg border border-white/10">
                {isAr ? 'ترخيص رسمي رقم: 87 لعام 2019 (صادر من وزارة الشؤون الاجتماعية والعمل)' : 'Official License #87 of 2019 (Ministry of Social Affairs & Labor)'}
              </span>
              <span className="bg-white/5 px-2.5 py-1 rounded-lg border border-white/10 flex items-center gap-1">
                <Lock className="w-3 h-3 text-emerald-400" />
                <span>{isAr ? 'بيانات مؤمنة' : 'Encrypted & Audited'}</span>
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-bold text-white text-xs uppercase tracking-wider border-b border-stone-800 pb-2">
              {isAr ? 'أقسام المنصة الرئيسية' : 'Quick Navigation'}
            </h3>
            <ul className="space-y-2">
              {[
                { id: 'overview' as AppModule, labelAr: 'الرئيسية', labelEn: 'Home' },
                { id: 'about' as AppModule, labelAr: 'من نحن (الهوية والرؤية)', labelEn: 'About Us' },
                { id: 'knowledge' as AppModule, labelAr: 'المعرفة والإرشاد الحقلي', labelEn: 'Knowledge Base' },
                { id: 'academy' as AppModule, labelAr: 'الأكاديمية الزراعية', labelEn: 'Cooperative Academy' },
                { id: 'services' as AppModule, labelAr: 'الخدمات والفحوصات', labelEn: 'Field Services' },
                { id: 'products' as AppModule, labelAr: 'سوق المنتجات والمدخلات', labelEn: 'Products Market' },
                { id: 'ads' as AppModule, labelAr: 'الإعلانات التجارية للتجار', labelEn: 'Merchant Ads' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-stone-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-stone-700"></span>
                    <span>{isAr ? link.labelAr : link.labelEn}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Official Contact Channels */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="font-bold text-white text-xs uppercase tracking-wider border-b border-stone-800 pb-2">
              {isAr ? 'التواصل الرسمي المعتمد' : 'Official Contact'}
            </h3>

            <div className="space-y-2.5">
              <div className="bg-white/5 p-3 rounded-xl border border-white/10 space-y-1">
                <div className="text-[11px] text-stone-400 font-semibold">{isAr ? 'هاتف الجمعية المعتمد (اتصال / واتساب):' : 'Cooperative Hotline:'}</div>
                <a
                  href={`tel:${org.phone}`}
                  className="font-extrabold text-emerald-400 hover:underline text-sm flex items-center gap-1.5 tracking-wider"
                  dir="ltr"
                >
                  <Phone className="w-3.5 h-3.5 shrink-0 text-emerald-400" />
                  <span>{org.phoneFormatted}</span>
                </a>
              </div>

              <div className="bg-white/5 p-3 rounded-xl border border-white/10 space-y-1">
                <div className="text-[11px] text-stone-400 font-semibold">{isAr ? 'البريد الإلكتروني للجمعية:' : 'Cooperative Email:'}</div>
                <a
                  href={`mailto:${org.email}`}
                  className="font-bold text-amber-400 hover:underline text-xs flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 shrink-0" />
                  <span>{org.email}</span>
                </a>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full bg-emerald-800 hover:bg-emerald-700 text-white font-bold py-2 px-3 rounded-xl transition-colors text-center text-xs flex items-center justify-center gap-1.5"
                >
                  <span>{isAr ? 'نموذج اتصل بنا الرسمي' : 'Contact Us Page'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Security Statement */}
        <div className="border-t border-stone-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-stone-500">
          <div>
            {isAr
              ? `جميع الحقوق محفوظة لـ ${org.name.ar} © 2026`
              : `All rights reserved © 2026 ${org.name.en}`}
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-emerald-500 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{isAr ? 'نظام الحوكمة التعاونية الرقمي' : 'Cooperative Governance System'}</span>
            </span>
            <span className="text-stone-700">•</span>
            <span>{isAr ? 'أثر يصنع نموًا' : 'ATHAR Makes Growth'}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
