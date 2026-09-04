import React, { useState } from 'react';
import { ServiceRequest, Language, KnowledgeArticle, ContactMessage } from '../types';
import { officialOrganization } from '../data/organization';
import { 
  ShieldCheck, 
  Check, 
  X, 
  BookOpen, 
  CheckCircle2, 
  Mail, 
  Compass, 
  Target, 
  MessageSquare,
  Clock,
  Sparkles
} from 'lucide-react';

interface AdminModuleProps {
  language: Language;
  requests: ServiceRequest[];
  messages: ContactMessage[];
  onApproveRequest: (id: string) => void;
  onRejectRequest: (id: string) => void;
  onAddKnowledge: (art: Partial<KnowledgeArticle>) => void;
}

export const AdminModule: React.FC<AdminModuleProps> = ({
  language,
  requests,
  messages,
  onApproveRequest,
  onRejectRequest,
  onAddKnowledge,
}) => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [newTitleAr, setNewTitleAr] = useState('');
  const [newTitleEn, setNewTitleEn] = useState('');
  const [newCategory, setNewCategory] = useState('إدارة الري');
  const [newSummaryAr, setNewSummaryAr] = useState('');

  const isAr = language === 'ar';
  const org = officialOrganization;

  const handleAddArticle = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitleAr) return;

    onAddKnowledge({
      title: { ar: newTitleAr, en: newTitleEn || newTitleAr },
      category: { ar: newCategory, en: newCategory === 'إدارة الري' ? 'Irrigation' : 'Plant Protection' },
      summary: { ar: newSummaryAr, en: newSummaryAr },
      content: { ar: newSummaryAr, en: newSummaryAr },
      season: { ar: 'موسم 2026', en: 'Season 2026' },
      crop: 'محاصيل الجمعية',
      readTime: '4 د',
      tags: ['إرشاد', 'تعاوني'],
    });

    setNewTitleAr('');
    setNewTitleEn('');
    setNewSummaryAr('');
    setShowAddModal(false);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Header */}
      <div className="pb-4 border-b border-stone-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-1">
            <ShieldCheck className="w-4 h-4" />
            <span>{isAr ? 'لوحة تحكم مجلس إدارة الجمعية' : 'Cooperative Board Administration'}</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            {isAr ? 'إدارة العمليات والاعتمادات الميدانية' : 'Operations & Service Approval Queue'}
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            {isAr ? `${org.name.ar} — ${org.brandConcept.ar}` : `${org.name.en} — ${org.brandConcept.en}`}
          </p>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold px-4 py-2.5 rounded-xl flex items-center gap-1.5 transition-colors self-start md:self-auto shadow-xs"
        >
          <BookOpen className="w-4 h-4" />
          <span>{isAr ? 'نشر دليل إرشادي جديد' : 'Publish New Guide'}</span>
        </button>
      </div>

      {/* Organization Identity Alignment Banner */}
      <div className="bg-emerald-900 text-white p-5 rounded-2xl border border-emerald-950 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-amber-300 text-xs font-bold uppercase">
            <Compass className="w-4 h-4" />
            <span>{isAr ? 'ميثاق الحوكمة المؤسسية' : 'Governance & Charter Alignment'}</span>
          </div>
          <p className="text-xs sm:text-sm text-stone-200">
            {isAr
              ? `الرؤية المعتمدة: "${org.vision.ar}" — البريد الرسمي: ${org.email}`
              : `Official Vision: "${org.vision.en}" — Official Email: ${org.email}`}
          </p>
        </div>
        <span className="text-[11px] font-bold bg-white/10 px-3 py-1 rounded-lg border border-white/15">
          {isAr ? 'ترخيص رقم: 87 لعام 2019 (صادر من وزارة الشؤون الاجتماعية والعمل)' : 'License: #87 of 2019 (Ministry of Social Affairs & Labor)'}
        </span>
      </div>

      {/* Requests Management Table */}
      <div className="bg-white rounded-3xl border border-stone-200 p-6 shadow-xs">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-base font-bold text-stone-900">
              {isAr ? 'طلبات الفحص والخدمات الواردة من الأعضاء' : 'Incoming Member Service Requisitions'}
            </h3>
            <p className="text-xs text-stone-500">
              {isAr ? 'مراجعة واعتماد طلبات الآلات، فحص التربة، والاستشارات الحقلية' : 'Review and approve machinery, lab, and consultation requests'}
            </p>
          </div>
          <span className="text-xs text-stone-500 font-semibold bg-stone-100 px-2.5 py-1 rounded-lg">
            {isAr ? `إجمالي: ${requests.length}` : `Total: ${requests.length}`}
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-right">
            <thead>
              <tr className="border-b border-stone-200 text-stone-500">
                <th className="pb-3 font-bold">{isAr ? 'مقدم الطلب' : 'Applicant'}</th>
                <th className="pb-3 font-bold">{isAr ? 'الخدمة المطلوبة' : 'Service'}</th>
                <th className="pb-3 font-bold">{isAr ? 'الموقع والمساحة' : 'Plot Info'}</th>
                <th className="pb-3 font-bold">{isAr ? 'الحالة الحالية' : 'Status'}</th>
                <th className="pb-3 font-bold text-center">{isAr ? 'الإجراء' : 'Actions'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {requests.map((r) => (
                <tr key={r.id} className="hover:bg-stone-50/80 transition-colors">
                  <td className="py-3.5">
                    <div className="font-bold text-stone-900">{r.farmerName}</div>
                    <div className="text-[11px] text-stone-400">{r.phone}</div>
                  </td>
                  <td className="py-3.5 font-medium text-stone-800">{r.serviceTitle}</td>
                  <td className="py-3.5 text-stone-600">
                    <div>{r.farmLocation}</div>
                    <div className="text-[11px] text-stone-400">{r.areaDunams} {isAr ? 'دونم' : 'dunams'}</div>
                  </td>
                  <td className="py-3.5">
                    <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${
                      r.status === 'approved' || r.status === 'COMPLETED'
                        ? 'bg-emerald-100 text-emerald-800' 
                        : 'bg-amber-100 text-amber-800'
                    }`}>
                      {r.status === 'approved' || r.status === 'COMPLETED'
                        ? (isAr ? 'معتمد' : 'Approved') 
                        : (isAr ? 'قيد المراجعة' : 'Pending')}
                    </span>
                  </td>
                  <td className="py-3.5 text-center">
                    {r.status !== 'approved' && r.status !== 'COMPLETED' ? (
                      <div className="flex items-center justify-center gap-1.5">
                        <button
                          onClick={() => onApproveRequest(r.id)}
                          className="bg-emerald-600 hover:bg-emerald-700 text-white px-2.5 py-1 rounded-lg text-xs font-bold transition-colors flex items-center gap-1 shadow-2xs"
                          title={isAr ? 'اعتماد الطلب' : 'Approve'}
                        >
                          <Check className="w-3.5 h-3.5" />
                          <span>{isAr ? 'اعتماد' : 'Approve'}</span>
                        </button>
                        <button
                          onClick={() => onRejectRequest(r.id)}
                          className="bg-stone-100 hover:bg-stone-200 text-stone-600 px-2 py-1 rounded-lg text-xs transition-colors"
                          title={isAr ? 'رفض الطلب' : 'Reject'}
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ) : (
                      <span className="text-emerald-700 font-bold text-[11px] flex items-center justify-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>{isAr ? 'مكتمل الإجراء' : 'Processed'}</span>
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Contact Messages & Inquiries Queue */}
      <div className="bg-white rounded-3xl border border-stone-200 p-6 shadow-xs">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
              <MessageSquare className="w-4.5 h-4.5 text-emerald-700" />
              <span>{isAr ? 'الرسائل والاستفسارات الواردة عبر المنصة' : 'Incoming Inquiries & Messages'}</span>
            </h3>
            <p className="text-xs text-stone-500">
              {isAr ? `تصل عبر البريد الرسمي ${org.email} ونموذج التواصل` : `Dispatched via ${org.email} and contact module`}
            </p>
          </div>
          <span className="text-xs text-stone-500 font-semibold bg-stone-100 px-2.5 py-1 rounded-lg">
            {isAr ? `الرسائل: ${messages.length}` : `Messages: ${messages.length}`}
          </span>
        </div>

        <div className="space-y-3">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-2 hover:bg-white hover:border-emerald-200 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-stone-900 text-xs sm:text-sm">{msg.name}</span>
                  <span className="text-[11px] text-stone-400 font-mono">({msg.email} | {msg.phone})</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-stone-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{msg.createdAt}</span>
                  </span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    msg.status === 'REPLIED' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                  }`}>
                    {msg.status === 'REPLIED' ? (isAr ? 'تم الرد' : 'Replied') : (isAr ? 'جديد' : 'New')}
                  </span>
                </div>
              </div>

              <div className="font-semibold text-xs text-emerald-900">{msg.subject}</div>
              <p className="text-xs text-stone-600 leading-relaxed bg-white p-3 rounded-xl border border-stone-200/60">
                {msg.message}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Publish Guide Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-stone-200 relative animate-in zoom-in-95">
            <button
              onClick={() => setShowAddModal(false)}
              className={`absolute top-5 text-stone-400 hover:text-stone-700 p-1 rounded-lg ${isAr ? 'left-5' : 'right-5'}`}
            >
              <X className="w-5 h-5" />
            </button>

            <form onSubmit={handleAddArticle} className="space-y-4">
              <div>
                <h3 className="text-base font-bold text-stone-900">
                  {isAr ? 'إضافة دليل إرشادي جديد للمكتبة' : 'Publish New Field Guide'}
                </h3>
                <p className="text-xs text-stone-500">
                  {isAr ? 'يتم إشعار المزارعين المسجلين آلياً فور النشر' : 'Members will be notified automatically'}
                </p>
              </div>

              <div className="space-y-3 pt-1">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    {isAr ? 'العنوان بالعربية:' : 'Title (Arabic):'}
                  </label>
                  <input
                    type="text"
                    required
                    value={newTitleAr}
                    onChange={(e) => setNewTitleAr(e.target.value)}
                    placeholder="مثال: توصيات مكافحة حفار ساق النخيل..."
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl text-xs p-2.5 focus:bg-white focus:outline-emerald-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    {isAr ? 'التصنيف الزراعي:' : 'Category:'}
                  </label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl text-xs p-2.5 focus:bg-white focus:outline-emerald-600"
                  >
                    <option value="إدارة الري">{isAr ? 'إدارة الري' : 'Irrigation'}</option>
                    <option value="وقاية المزروعات">{isAr ? 'وقاية المزروعات' : 'Plant Protection'}</option>
                    <option value="صحة التربة">{isAr ? 'صحة التربة' : 'Soil Health'}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    {isAr ? 'ملخص وتوصيات الدليل:' : 'Summary & Key Takeaways:'}
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={newSummaryAr}
                    onChange={(e) => setNewSummaryAr(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl text-xs p-2.5 focus:bg-white focus:outline-emerald-600"
                  />
                </div>
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-stone-600 hover:bg-stone-100"
                >
                  {isAr ? 'إلغاء' : 'Cancel'}
                </button>
                <button
                  type="submit"
                  className="bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-all shadow-xs"
                >
                  {isAr ? 'اعتماد ونشر الدليل' : 'Publish'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
