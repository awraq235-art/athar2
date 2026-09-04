import React, { useState } from 'react';
import { CooperativeService, ServiceRequest, Language, CommercialAd } from '../types';
import { Wrench, FlaskConical, Tractor, UserCheck, Sparkles, Clock, CheckCircle2, AlertCircle, Plus, Send, X } from 'lucide-react';
import { SponsoredAdBanner } from './SponsoredAdBanner';

interface ServicesModuleProps {
  services: CooperativeService[];
  requests: ServiceRequest[];
  onSubmitRequest: (req: Omit<ServiceRequest, 'id' | 'date' | 'status'>) => void;
  language: Language;
  sponsoredAd?: CommercialAd;
  onNavigateToAds?: () => void;
}

export const ServicesModule: React.FC<ServicesModuleProps> = ({
  services,
  requests,
  onSubmitRequest,
  language,
  sponsoredAd,
  onNavigateToAds,
}) => {
  const [selectedService, setSelectedService] = useState<CooperativeService | null>(null);
  const [farmerName, setFarmerName] = useState('سليمان بن إبراهيم');
  const [phone, setPhone] = useState('776202223');
  const [farmLocation, setFarmLocation] = useState('حقل وادي سهام - حوض رقم 41');
  const [areaHectares, setAreaHectares] = useState<number>(3.5);
  const [notes, setNotes] = useState('');
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  const isAr = language === 'ar';

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'soil_lab':
        return <FlaskConical className="w-5 h-5 text-emerald-700" />;
      case 'equipment':
        return <Tractor className="w-5 h-5 text-amber-700" />;
      default:
        return <UserCheck className="w-5 h-5 text-blue-700" />;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedService) return;

    onSubmitRequest({
      serviceId: selectedService.id,
      serviceTitle: isAr ? selectedService.title.ar : selectedService.title.en,
      farmerName,
      phone,
      farmLocation,
      areaHectares: Number(areaHectares),
      areaDunams: Math.round(Number(areaHectares) * 10),
      notes,
    });

    setSelectedService(null);
    setNotes('');
    setShowSuccessToast(true);
    setTimeout(() => setShowSuccessToast(false), 4000);
  };

  return (
    <div className="space-y-8">
      {/* Toast Alert */}
      {showSuccessToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-emerald-800 text-white text-xs font-bold py-3 px-5 rounded-xl shadow-xl flex items-center gap-2 border border-emerald-600 animate-in slide-in-from-bottom">
          <CheckCircle2 className="w-4 h-4 text-emerald-300" />
          <span>
            {isAr 
              ? 'تم استلام طلبك وإرساله للجنة الميدانية بالجمعية بنجاح!' 
              : 'Service request successfully submitted to cooperative field dispatch!'}
          </span>
        </div>
      )}

      {/* Header */}
      <div className="pb-4 border-b border-stone-200">
        <div className="flex items-center gap-2 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-1">
          <Wrench className="w-4 h-4" />
          <span>{isAr ? 'الخدمات الميدانية والمخبرية المشتركة' : 'Cooperative Field & Lab Services'}</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
          {isAr ? 'خدمات الدعم الزراعي لأعضاء جمعية أثر' : 'Agronomic & Machinery Support for Members'}
        </h2>
        <p className="text-xs sm:text-sm text-stone-500 mt-0.5">
          {isAr ? 'رسوم غير ربحية ومدعومة بالكامل ضمن مبادرات الاستدامة الزراعية' : 'Non-profit subsidized operations funded under national agriculture sustainability grants'}
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-2xl border border-stone-200 p-6 flex flex-col justify-between hover:border-emerald-300 hover:shadow-md transition-all group"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-stone-100 group-hover:bg-emerald-50 transition-colors">
                    {getCategoryIcon(service.category)}
                  </div>
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                    {service.subsidyRate}
                  </span>
                </div>

                <div className="text-xs text-stone-500 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-stone-400" />
                  <span>{isAr ? service.turnaroundTime.ar : service.turnaroundTime.en}</span>
                </div>
              </div>

              <h3 className="text-base font-bold text-stone-900 mb-2">
                {isAr ? service.title.ar : service.title.en}
              </h3>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                {isAr ? service.description.ar : service.description.en}
              </p>
            </div>

            <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
              <div>
                <div className="text-[11px] text-stone-400 font-medium">
                  {isAr ? 'التعرفة للأعضاء:' : 'Member Rate:'}
                </div>
                <div className="text-sm font-bold text-emerald-800">
                  {isAr ? service.fee.ar : service.fee.en}
                </div>
              </div>

              <button
                onClick={() => setSelectedService(service)}
                className="bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold px-4 py-2 rounded-xl transition-all shadow-xs flex items-center gap-1.5"
              >
                <span>{isAr ? 'تقديم طلب الخدمة' : 'Book Request'}</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Booking Form Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-stone-200 relative animate-in zoom-in-95 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedService(null)}
              className={`absolute top-5 text-stone-400 hover:text-stone-700 p-1 rounded-lg ${isAr ? 'left-5' : 'right-5'}`}
            >
              <X className="w-5 h-5" />
            </button>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <span className="text-xs font-bold text-emerald-700 uppercase">
                  {isAr ? 'نموذج إرسال طلب خدمة تعاونية' : 'Cooperative Service Requisition'}
                </span>
                <h3 className="text-lg font-bold text-stone-900 mt-1">
                  {isAr ? selectedService.title.ar : selectedService.title.en}
                </h3>
                <p className="text-xs text-stone-500 mt-1">
                  {isAr ? selectedService.subsidyRate : 'Subsidized cooperative member rate'}
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    {isAr ? 'اسم المزارع / العضو:' : 'Farmer / Member Name:'}
                  </label>
                  <input
                    type="text"
                    required
                    value={farmerName}
                    onChange={(e) => setFarmerName(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-200 rounded-lg text-xs p-2.5 focus:bg-white focus:outline-emerald-600"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      {isAr ? 'رقم الجوال:' : 'Mobile Phone:'}
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-stone-50 border border-stone-200 rounded-lg text-xs p-2.5 focus:bg-white focus:outline-emerald-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      {isAr ? 'المساحة (بالهكتار):' : 'Plot Area (Hectares):'}
                    </label>
                    <input
                      type="number"
                      required
                      step="0.1"
                      min="0.1"
                      value={areaHectares}
                      onChange={(e) => setAreaHectares(Number(e.target.value))}
                      className="w-full bg-stone-50 border border-stone-200 rounded-lg text-xs p-2.5 focus:bg-white focus:outline-emerald-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    {isAr ? 'موقع المزرعة أو الإحداثيات:' : 'Farm Location / Coordinates:'}
                  </label>
                  <input
                    type="text"
                    required
                    value={farmLocation}
                    onChange={(e) => setFarmLocation(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-200 rounded-lg text-xs p-2.5 focus:bg-white focus:outline-emerald-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    {isAr ? 'ملاحظات إضافية أو تفاصيل الفحص:' : 'Special Requirements / Notes:'}
                  </label>
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder={isAr ? 'اذكر نوع المحصول أو المشكلة الملاحظة في الحقل...' : 'State crop type or observed agronomic symptoms...'}
                    className="w-full bg-stone-50 border border-stone-200 rounded-lg text-xs p-2.5 focus:bg-white focus:outline-emerald-600"
                  />
                </div>
              </div>

              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-950 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span>
                  {isAr 
                    ? 'سيتم الاتصال بك من قبل الفريق الفني لتأكيد موعد أخذ العينات أو وصول الآلية.' 
                    : 'A dispatch technician will contact you to coordinate on-site sample collection or machinery drop-off.'}
                </span>
              </div>

              <div className="pt-3 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedService(null)}
                  className="px-4 py-2 rounded-lg text-xs font-semibold text-stone-600 hover:bg-stone-100"
                >
                  {isAr ? 'إلغاء' : 'Cancel'}
                </button>
                <button
                  type="submit"
                  className="bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold px-6 py-2.5 rounded-xl shadow-md transition-all flex items-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{isAr ? 'تأكيد وإرسال الطلب' : 'Submit Requisition'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Commercial Sponsored Ad Banner */}
      {sponsoredAd && (
        <SponsoredAdBanner
          ad={sponsoredAd}
          language={language}
          onNavigateToAds={onNavigateToAds}
          compact
        />
      )}

      {/* Active Requests List */}
      <div className="bg-white rounded-2xl border border-stone-200 p-6">
        <h3 className="text-base font-bold text-stone-900 mb-4 flex items-center gap-2">
          <span>{isAr ? 'سجل الطلبات الحالية للمزرعة' : 'Your Submitted Field Requests'}</span>
          <span className="text-xs bg-stone-100 text-stone-600 px-2 py-0.5 rounded-full font-semibold">
            {requests.length}
          </span>
        </h3>

        {requests.length === 0 ? (
          <div className="text-center py-8 text-stone-400 text-xs">
            {isAr ? 'لا توجد طلبات سابقة مسجلة.' : 'No service requests recorded yet.'}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-right">
              <thead>
                <tr className="border-b border-stone-200 text-stone-500">
                  <th className="pb-2 font-bold">{isAr ? 'الخدمة' : 'Service'}</th>
                  <th className="pb-2 font-bold">{isAr ? 'تاريخ الطلب' : 'Date'}</th>
                  <th className="pb-2 font-bold">{isAr ? 'المساحة' : 'Area'}</th>
                  <th className="pb-2 font-bold">{isAr ? 'الحالة' : 'Status'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {requests.map((r) => (
                  <tr key={r.id} className="hover:bg-stone-50 transition-colors">
                    <td className="py-3 font-semibold text-stone-800">{r.serviceTitle}</td>
                    <td className="py-3 text-stone-500">{r.date}</td>
                    <td className="py-3 text-stone-600 font-medium">
                      {r.areaHectares ? `${r.areaHectares} ${isAr ? 'هكتار' : 'ha'}` : `${r.areaDunams} ${isAr ? 'دونم' : 'dunams'}`}
                    </td>
                    <td className="py-3">
                      <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${
                        r.status === 'approved' 
                          ? 'bg-emerald-100 text-emerald-800' 
                          : r.status === 'in_review'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}>
                        {r.status === 'approved' 
                          ? (isAr ? 'معتمد وجارِ التنفيذ' : 'Approved') 
                          : r.status === 'in_review'
                          ? (isAr ? 'قيد المراجعة الفنية' : 'In Review')
                          : (isAr ? 'بانتظار الموافقة' : 'Pending')}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};
