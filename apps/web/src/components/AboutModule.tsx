import React from 'react';
import { Language, AppModule } from '../types';
import { officialOrganization } from '../data/organization';
import { 
  Sprout, 
  Target, 
  Compass, 
  Heart, 
  Users, 
  ShieldCheck, 
  Award, 
  Mail, 
  Handshake, 
  ArrowLeft, 
  ArrowRight,
  Sparkles,
  Layers,
  Leaf,
  GraduationCap
} from 'lucide-react';
import { AtharLogo } from './AtharLogo';

interface AboutModuleProps {
  language: Language;
  onNavigate: (module: AppModule) => void;
}

export const AboutModule: React.FC<AboutModuleProps> = ({ language, onNavigate }) => {
  const isAr = language === 'ar';
  const org = officialOrganization;
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <div className="space-y-12 animate-in fade-in duration-300 pb-8">
      {/* 1. Page Header & Introduction */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-950 via-emerald-900 to-stone-950 text-white p-8 sm:p-12 border border-emerald-900/60 shadow-xl">
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-800/70 border border-emerald-500/30 text-xs font-semibold text-emerald-300">
              <Sprout className="w-4 h-4 text-emerald-400" />
              <span>{isAr ? 'التعريف المؤسسي والهوية الرسمية' : 'Institutional Profile & Charter'}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-white">
              {isAr ? org.name.ar : org.name.en}
            </h1>

            <div className="inline-block text-amber-300 text-lg font-bold">
              {isAr ? `"${org.brandConcept.ar}"` : `"${org.brandConcept.en}"`}
            </div>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              {isAr
                ? 'جمعية تعاونية تنموية زراعية ترتكز على استثمار الطاقات الوطنية المتخصصة والنهوض بالمجتمع الريفي، وإدخال التكنولوجيا الزراعية الحديثة لتحقيق تنمية مستدامة وأمن غذائي.'
                : 'An agricultural cooperative association centered on cultivating specialized national capabilities, advancing rural communities, and introducing modern technology for sustainable food security.'}
            </p>

            <div className="pt-2 flex flex-wrap gap-3 text-xs text-stone-300">
              <span className="bg-white/10 px-3 py-1.5 rounded-xl border border-white/15 font-bold text-amber-300">
                {isAr ? 'ترخيص رقم (87) لعام 2019 — صادر من وزارة الشؤون الاجتماعية والعمل' : 'Official License #(87) of 2019 — Ministry of Social Affairs & Labor'}
              </span>
              <span className="bg-white/10 px-3 py-1.5 rounded-xl border border-white/15 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <span>{org.email}</span>
              </span>
            </div>
          </div>

          {/* Official Logo Showcase Card */}
          <div className="shrink-0 bg-white/95 p-6 rounded-3xl shadow-2xl border border-emerald-200/50 flex flex-col items-center justify-center max-w-xs text-center backdrop-blur-md">
            <AtharLogo variant="full" size="xl" />
          </div>
        </div>

        {/* Decorative Watermark */}
        <div className="absolute -bottom-16 -left-16 text-emerald-800/20 pointer-events-none select-none">
          <Leaf className="w-[420px] h-[420px] transform -rotate-12" />
        </div>
      </div>

      {/* 2. Official Vision & Mission (Prominent Side-by-Side) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Official Vision */}
        <div className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 p-8 rounded-3xl border border-emerald-200/80 shadow-xs relative flex flex-col justify-between">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-700 text-white flex items-center justify-center shadow-md">
              <Compass className="w-6 h-6" />
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                {isAr ? 'الرؤية الرسمية' : 'Official Vision'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
                {isAr ? 'رؤيتنا' : 'Our Vision'}
              </h2>
            </div>

            <blockquote className="border-r-4 rtl:border-r-4 ltr:border-l-4 border-emerald-600 px-4 py-2 text-lg sm:text-xl font-bold text-emerald-950 leading-snug bg-white/70 rounded-xl shadow-2xs">
              "{isAr ? org.vision.ar : org.vision.en}"
            </blockquote>
          </div>

          <div className="pt-6 mt-6 border-t border-emerald-200/60 text-xs text-stone-600 font-medium">
            {isAr
              ? 'الريادة الميدانية في تصميم وتنفيذ البرامج الزراعية التنموية القائمة على الجودة والاستدامة.'
              : 'Local leadership in implementing quality-driven, sustainable agricultural development initiatives.'}
          </div>
        </div>

        {/* Official Mission */}
        <div className="bg-gradient-to-br from-stone-900 to-emerald-950 text-white p-8 rounded-3xl border border-stone-800 shadow-sm relative flex flex-col justify-between">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-600 text-white flex items-center justify-center shadow-md">
              <Target className="w-6 h-6" />
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                {isAr ? 'الرسالة الرسمية المعتمدة' : 'Official Mission'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                {isAr ? 'رسالتنا' : 'Our Mission'}
              </h2>
            </div>

            <p className="text-stone-200 text-xs sm:text-sm leading-relaxed bg-white/5 p-4 rounded-xl border border-white/10">
              {isAr ? org.mission.ar : org.mission.en}
            </p>
          </div>

          <div className="pt-4 mt-4 border-t border-white/10 text-xs text-amber-200/80 font-medium flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              {isAr ? 'التزام تام بالمسؤولية الاجتماعية والجودة الغذائية المستدامة' : 'Committed to social responsibility and sustainable nutritional value'}
            </span>
          </div>
        </div>
      </div>

      {/* 3. Official 4 Goals */}
      <div className="bg-white p-8 sm:p-10 rounded-3xl border border-stone-200 shadow-xs space-y-6">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-1">
            <Target className="w-4 h-4" />
            <span>{isAr ? 'الأهداف الاستراتيجية المعتمدة' : 'Strategic Association Goals'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
            {isAr ? 'أهداف جمعية أثر الرسمية' : 'Official ATHAR Goals'}
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            {isAr
              ? 'الأهداف الأربعة المعتمدة نظامياً لتحقيق الأثر التنموي في القطاع الزراعي'
              : 'The four authorized goals guiding all programs and community activities'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
          {org.goals.map((goal, index) => (
            <div
              key={goal.id}
              className="p-6 rounded-2xl bg-stone-50/90 border border-stone-200/80 hover:border-emerald-300 hover:bg-emerald-50/30 transition-all space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-xl bg-emerald-700 text-white font-bold text-sm flex items-center justify-center shadow-xs">
                    {index + 1}
                  </span>
                  <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-100/70 px-2.5 py-0.5 rounded-full">
                    {isAr ? `الهدف ${index + 1}` : `Goal ${index + 1}`}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-stone-900 leading-snug">
                  {isAr ? goal.title.ar : goal.title.en}
                </h3>
              </div>

              {goal.description && (
                <p className="text-xs text-stone-500 border-t border-stone-200/60 pt-2.5">
                  {isAr ? goal.description.ar : goal.description.en}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 4. Official 6 Values */}
      <div className="bg-stone-900 text-white p-8 sm:p-10 rounded-3xl border border-stone-800 shadow-sm space-y-6">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">
            <Heart className="w-4 h-4" />
            <span>{isAr ? 'القيم المؤسسية الحاكمة' : 'Core Organizational Values'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            {isAr ? 'قيم جمعية أثر' : 'Official ATHAR Values'}
          </h2>
          <p className="text-xs sm:text-sm text-stone-400 mt-1">
            {isAr
              ? 'القيم الست التي تنظم سلوكنا المهني وعلاقتنا بالمزارعين والشركاء'
              : 'The six foundational principles anchoring our agricultural practice and cooperative ethics'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
          {org.values.map((val) => (
            <div
              key={val.id}
              className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-400/50 hover:bg-white/10 transition-all space-y-2"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center font-bold text-sm">
                  {val.id}
                </div>
                <h3 className="font-bold text-base text-amber-300">
                  {isAr ? val.title.ar : val.title.en}
                </h3>
              </div>
              <p className="text-xs text-stone-300 leading-relaxed pr-1 pt-1">
                {isAr ? val.meaning.ar : val.meaning.en}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Work Fields & Domains */}
      <div className="bg-white p-8 sm:p-10 rounded-3xl border border-stone-200 shadow-xs space-y-6">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-1">
            <Layers className="w-4 h-4" />
            <span>{isAr ? 'مسارات العمل والتدخل التنموي' : 'Core Fields of Operation'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
            {isAr ? 'مجالات عمل الجمعية' : 'Areas of Association Activity'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
          {org.workFields.map((field) => (
            <div
              key={field.id}
              className="p-6 rounded-2xl bg-emerald-50/40 border border-emerald-200/70 space-y-3"
            >
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-base">
                <Leaf className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>{isAr ? field.title.ar : field.title.en}</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {isAr ? field.description.ar : field.description.en}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 6. Partnerships */}
      <div className="bg-white p-8 sm:p-10 rounded-3xl border border-stone-200 shadow-xs space-y-6">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-1">
            <Handshake className="w-4 h-4" />
            <span>{isAr ? 'التعاون والتكامل المؤسسي' : 'Strategic Alliances'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
            {isAr ? 'الشراكات المحلية والدولية' : 'Partnerships & Cooperation'}
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            {isAr
              ? 'نعمل جنباً إلى جنب مع المنظمات المانحة والمؤسسات الأكاديمية والاتحادات التعاونية'
              : 'Collaborating alongside international agencies, academic institutes, and rural unions'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
          {org.partnerships.map((p) => (
            <div
              key={p.name.en}
              className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-2.5"
            >
              <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100/70 px-2.5 py-0.5 rounded-full inline-block">
                {isAr ? p.type.ar : p.type.en}
              </span>
              <h3 className="font-bold text-sm text-stone-900">
                {isAr ? p.name.ar : p.name.en}
              </h3>
              <p className="text-xs text-stone-500 leading-relaxed">
                {isAr ? p.scope.ar : p.scope.en}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 7. Contact & Institutional Engagement CTA */}
      <div className="rounded-3xl bg-gradient-to-r from-emerald-800 to-emerald-950 text-white p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md border border-emerald-950">
        <div className="space-y-2 max-w-xl text-center md:text-right">
          <h3 className="text-xl sm:text-2xl font-bold">
            {isAr ? 'هل ترغب في بناء شراكة أو التواصل مع جمعية أثر؟' : 'Interested in partnering with ATHAR?'}
          </h3>
          <p className="text-xs sm:text-sm text-emerald-100">
            {isAr
              ? `نرحب بكافة الاستفسارات ومقترحات التعاون عبر البريد الرسمي: ${org.email}`
              : `We welcome inquiries, memberships, and program partnerships at: ${org.email}`}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('contact')}
            className="bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs sm:text-sm font-bold px-6 py-3 rounded-xl transition-all shadow-md flex items-center gap-2"
          >
            <span>{isAr ? 'نموذج التواصل والمراسلة' : 'Contact Us'}</span>
            <ArrowIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
