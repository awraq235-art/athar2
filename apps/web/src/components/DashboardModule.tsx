import React from 'react';
import { Language, ServiceRequest } from '../types';
import { User, Award, Droplets, Sprout, Calendar, MapPin, CheckCircle, Clock, FileText, ChevronLeft, ChevronRight } from 'lucide-react';

interface DashboardModuleProps {
  language: Language;
  requests: ServiceRequest[];
}

export const DashboardModule: React.FC<DashboardModuleProps> = ({ language, requests }) => {
  const isAr = language === 'ar';

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="pb-4 border-b border-stone-200">
        <div className="flex items-center gap-2 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-1">
          <User className="w-4 h-4" />
          <span>{isAr ? 'لوحة المزارع والبيانات الحقلية' : 'Farmer Dashboard & Field Registry'}</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
          {isAr ? 'ملف العضوية والحيازات الزراعية' : 'Member Profile & Agricultural Holdings'}
        </h2>
      </div>

      {/* Member Identity Card */}
      <div className="bg-gradient-to-r from-emerald-800 to-stone-900 text-white p-6 sm:p-7 rounded-2xl shadow-md border border-emerald-950 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-emerald-700/80 border-2 border-emerald-400/40 flex items-center justify-center text-white text-xl font-extrabold shadow-inner">
            س.هـ
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold">
                {isAr ? 'سليمان بن إبراهيم الهزاع' : 'Sulaiman Ibrahim Al-Hazza'}
              </h3>
              <span className="text-[10px] bg-emerald-400/20 text-emerald-300 font-bold px-2 py-0.5 rounded-full border border-emerald-400/30">
                {isAr ? 'عضو ذهبي نشط' : 'Active Gold Member'}
              </span>
            </div>
            <div className="text-xs text-stone-300 mt-1 flex flex-wrap gap-4">
              <span>{isAr ? 'رقم العضوية: ATHAR-2024-912' : 'Member ID: ATHAR-2024-912'}</span>
              <span>{isAr ? 'تاريخ الانضمام: أكتوبر 2021' : 'Joined: Oct 2021'}</span>
              <span>{isAr ? 'الموقع: محافظة عنيزة، القصيم' : 'Location: Onaizah, Al-Qassim'}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-white/10 p-3 rounded-xl border border-white/10 text-xs">
          <div>
            <div className="text-stone-300 text-[11px]">{isAr ? 'رصيد الدعم التعاوني' : 'Coop Credit Balance'}</div>
            <div className="text-base font-extrabold text-white">4,250 {isAr ? 'ر.س' : 'SAR'}</div>
          </div>
        </div>
      </div>

      {/* Farm Holdings & Telemetry */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-white p-5 rounded-xl border border-stone-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-stone-500 font-semibold">{isAr ? 'الحيازة الزراعية' : 'Registered Holdings'}</span>
            <Sprout className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-xl font-bold text-stone-900">45 {isAr ? 'دونم' : 'Dunams'}</div>
          <div className="text-xs text-stone-500 mt-1">
            {isAr ? '3 أحواض مسجلة بنظام الري بالتنقيط' : '3 drip-irrigated registered plots'}
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-stone-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-stone-500 font-semibold">{isAr ? 'المحاصيل الحالية' : 'Active Crops'}</span>
            <Calendar className="w-4 h-4 text-amber-600" />
          </div>
          <div className="text-xl font-bold text-stone-900">{isAr ? 'نخيل سكري + ليمون' : 'Sukkari + Citrus'}</div>
          <div className="text-xs text-stone-500 mt-1">
            {isAr ? 'موسم الصرام مجدول في 20 سبتمبر' : 'Harvest scheduled for Sep 20'}
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-stone-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-stone-500 font-semibold">{isAr ? 'حساسات التربة الذكية' : 'Soil Telemetry'}</span>
            <Droplets className="w-4 h-4 text-blue-600" />
          </div>
          <div className="text-xl font-bold text-blue-900">22.4% {isAr ? 'رطوبة' : 'Moisture'}</div>
          <div className="text-xs text-emerald-600 font-medium mt-1">
            {isAr ? 'ضمن المعدل المثالي للجذور' : 'Optimal root zone hydration'}
          </div>
        </div>
      </div>

      {/* Requisitions & History */}
      <div className="bg-white rounded-xl border border-stone-200 p-6">
        <h3 className="text-base font-bold text-stone-900 mb-4">
          {isAr ? 'متابعة الطلبات الميدانية الجارية' : 'Active Field Requisitions'}
        </h3>
        <div className="space-y-3">
          {requests.map((req) => (
            <div key={req.id} className="p-4 rounded-xl border border-stone-200/80 bg-stone-50/50 flex items-center justify-between flex-wrap gap-3">
              <div>
                <div className="font-bold text-stone-900 text-xs sm:text-sm">{req.serviceTitle}</div>
                <div className="text-xs text-stone-500 mt-0.5">
                  {req.farmLocation} • {req.areaDunams} {isAr ? 'دونم' : 'dunams'} • {req.date}
                </div>
              </div>
              <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                req.status === 'approved' 
                  ? 'bg-emerald-100 text-emerald-800' 
                  : 'bg-amber-100 text-amber-800'
              }`}>
                {req.status === 'approved' 
                  ? (isAr ? 'تمت الموافقة وتحديد الموعد' : 'Approved & Scheduled') 
                  : (isAr ? 'قيد المراجعة الفنية' : 'In Technical Review')}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
