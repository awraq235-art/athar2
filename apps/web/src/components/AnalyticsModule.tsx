import React from 'react';
import { Language } from '../types';
import { BarChart3, TrendingUp, Droplets, Sprout, PieChart } from 'lucide-react';

interface AnalyticsModuleProps {
  language: Language;
}

export const AnalyticsModule: React.FC<AnalyticsModuleProps> = ({ language }) => {
  const isAr = language === 'ar';

  const cropYields = [
    { nameAr: 'تمور سكري وعنبرة', nameEn: 'Sukkari Dates', tons: 8400, percent: 43, color: 'bg-amber-600' },
    { nameAr: 'زيتون الجوف العضوي', nameEn: 'Organic Olives', tons: 4200, percent: 22, color: 'bg-emerald-600' },
    { nameAr: 'حمضيات وفواكه صيفية', nameEn: 'Citrus & Fruits', tons: 3600, percent: 18, color: 'bg-orange-500' },
    { nameAr: 'خضروات البيوت المحمية', nameEn: 'Protected Veggies', tons: 3200, percent: 17, color: 'bg-teal-600' },
  ];

  const waterConservationMonths = [
    { monthAr: 'يناير', monthEn: 'Jan', savedM3: 42000 },
    { monthAr: 'فبراير', monthEn: 'Feb', savedM3: 46000 },
    { monthAr: 'مارس', monthEn: 'Mar', savedM3: 54000 },
    { monthAr: 'أبريل', monthEn: 'Apr', savedM3: 61000 },
    { monthAr: 'مايو', monthEn: 'May', savedM3: 69000 },
    { monthAr: 'يونيو', monthEn: 'Jun', savedM3: 78000 },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="pb-4 border-b border-stone-200">
        <div className="flex items-center gap-2 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-1">
          <BarChart3 className="w-4 h-4" />
          <span>{isAr ? 'مركز البيانات والتحليلات الزراعية' : 'Agricultural Analytics & Data Insights'}</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
          {isAr ? 'مؤشرات الإنتاج والاستدامة المائية' : 'Yield Trends & Water Sustainability Metrics'}
        </h2>
      </div>

      {/* Grid of Visualizations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Crop Harvest Breakdown */}
        <div className="bg-white p-6 rounded-2xl border border-stone-200 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-stone-900">
                {isAr ? 'توزيع الإنتاج التعاوني السنوي (19,400 طن)' : 'Annual Crop Breakdown (19,400 Tons)'}
              </h3>
              <p className="text-xs text-stone-500">
                {isAr ? 'حسب تصنيف المحاصيل الاستراتيجية' : 'Categorized by primary agricultural output'}
              </p>
            </div>
            <Sprout className="w-5 h-5 text-emerald-600" />
          </div>

          <div className="space-y-3 pt-2">
            {cropYields.map((crop) => (
              <div key={crop.nameEn} className="space-y-1">
                <div className="flex justify-between text-xs font-semibold text-stone-700">
                  <span>{isAr ? crop.nameAr : crop.nameEn}</span>
                  <span>{crop.tons.toLocaleString()} {isAr ? 'طن' : 'tons'} ({crop.percent}%)</span>
                </div>
                <div className="w-full h-2.5 bg-stone-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${crop.color} rounded-full transition-all duration-500`}
                    style={{ width: `${crop.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Water Conservation Bar Graph */}
        <div className="bg-white p-6 rounded-2xl border border-stone-200 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-stone-900">
                {isAr ? 'وفر المياه الشهري بواسطة الري الذكي (م³)' : 'Monthly Water Savings via Smart Drip (m³)'}
              </h3>
              <p className="text-xs text-stone-500">
                {isAr ? 'مقارنة بأنظمة الري التقليدية الغمرية' : 'Benchmarked against legacy flood irrigation'}
              </p>
            </div>
            <Droplets className="w-5 h-5 text-blue-600" />
          </div>

          <div className="pt-4 flex items-end justify-between gap-3 h-44 px-2">
            {waterConservationMonths.map((m) => {
              const heightPercent = (m.savedM3 / 80000) * 100;
              return (
                <div key={m.monthEn} className="flex-1 flex flex-col items-center gap-2">
                  <span className="text-[10px] font-bold text-blue-900">{Math.round(m.savedM3 / 1000)}k</span>
                  <div className="w-full bg-blue-100 rounded-t-lg relative flex items-end h-28 overflow-hidden">
                    <div
                      className="w-full bg-blue-600 rounded-t-lg transition-all duration-500 hover:bg-blue-700"
                      style={{ height: `${heightPercent}%` }}
                    />
                  </div>
                  <span className="text-[11px] text-stone-500 font-medium">{isAr ? m.monthAr : m.monthEn}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
