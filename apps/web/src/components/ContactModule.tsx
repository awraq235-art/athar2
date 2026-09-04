import React, { useState } from 'react';
import { Language, ContactMessage } from '../types';
import { officialOrganization } from '../data/organization';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Copy, 
  MessageSquare, 
  Clock, 
  ShieldCheck,
  AlertCircle
} from 'lucide-react';

interface ContactModuleProps {
  language: Language;
  onSendMessage: (msg: Omit<ContactMessage, 'id' | 'createdAt' | 'status'>) => void;
}

export const ContactModule: React.FC<ContactModuleProps> = ({ language, onSendMessage }) => {
  const isAr = language === 'ar';
  const org = officialOrganization;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submittedTicket, setSubmittedTicket] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    const ticketId = `ATHAR-MSG-${Math.floor(1000 + Math.random() * 9000)}`;

    onSendMessage({
      name,
      email,
      phone,
      subject: subject || (isAr ? 'استفسار عام' : 'General Inquiry'),
      message,
    });

    setSubmittedTicket(ticketId);
    setName('');
    setEmail('');
    setPhone('');
    setSubject('');
    setMessage('');
  };

  const handleCopyTicket = () => {
    if (!submittedTicket) return;
    navigator.clipboard.writeText(submittedTicket);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300 pb-12">
      {/* Page Header */}
      <div className="pb-4 border-b border-stone-200">
        <div className="flex items-center gap-2 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-1">
          <Mail className="w-4 h-4" />
          <span>{isAr ? 'التواصل الرسمي وخدمة المستفيدين' : 'Official Communication & Inquiries'}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-stone-900">
          {isAr ? 'اتصل بجمعية أثر التعاونية' : 'Contact ATHAR Cooperative'}
        </h1>
        <p className="text-xs sm:text-sm text-stone-500 mt-1">
          {isAr ? org.name.ar : org.name.en}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Organization Contact Cards */}
        <div className="lg:col-span-5 space-y-5">
          {/* Main Info Card */}
          <div className="bg-gradient-to-br from-emerald-900 to-stone-900 text-white p-7 rounded-3xl border border-emerald-950 shadow-md space-y-6">
            <div>
              <span className="text-[11px] font-bold text-amber-300 bg-amber-400/20 px-2.5 py-0.5 rounded-full border border-amber-400/30">
                {isAr ? 'القنوات الرسمية المعتمدة' : 'Official Channels'}
              </span>
              <h3 className="text-lg sm:text-xl font-bold mt-2">
                {isAr ? org.name.ar : org.name.en}
              </h3>
              <p className="text-xs text-stone-300 mt-1">
                {isAr ? `شعارنا: "${org.brandConcept.ar}"` : `Motto: "${org.brandConcept.en}"`}
              </p>
            </div>

            <div className="space-y-4 text-xs">
              <div className="flex items-start gap-3 bg-white/5 p-3 rounded-2xl border border-white/10">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-stone-400 text-[11px]">{isAr ? 'رقم الهاتف المعتمد (اتصال وواتساب):' : 'Official Phone & WhatsApp:'}</div>
                  <div className="flex items-center gap-2 mt-0.5">
                    <a 
                      href={`tel:${org.phone}`} 
                      className="font-extrabold text-emerald-300 hover:text-white text-base tracking-wider"
                      dir="ltr"
                    >
                      {org.phoneFormatted}
                    </a>
                    <span className="text-[10px] bg-emerald-500/30 text-emerald-200 px-2 py-0.5 rounded-full font-bold">
                      {isAr ? 'متاح الآن' : 'Active'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white/5 p-3 rounded-2xl border border-white/10">
                <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-stone-400 text-[11px]">{isAr ? 'البريد الإلكتروني الرسمي:' : 'Official Email:'}</div>
                  <a 
                    href={`mailto:${org.email}`} 
                    className="font-bold text-amber-300 hover:underline text-sm break-all"
                  >
                    {org.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white/5 p-3 rounded-2xl border border-white/10">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-stone-400 text-[11px]">{isAr ? 'أوقات العمل الميداني والمكتبي:' : 'Working Hours:'}</div>
                  <div className="font-semibold text-stone-200">
                    {isAr ? 'السبت - الخميس: 8:00 ص - 3:00 م' : 'Sat - Thu: 8:00 AM - 3:00 PM'}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white/5 p-3 rounded-2xl border border-white/10">
                <div className="w-8 h-8 rounded-xl bg-blue-500/20 text-blue-300 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-stone-400 text-[11px]">{isAr ? 'رقم القيد والتسجيل الرسمي:' : 'Official License ID:'}</div>
                  <div className="font-semibold text-stone-200">
                    {isAr ? 'ترخيص رقم: 87 لعام 2019 (صادر من وزارة الشؤون الاجتماعية والعمل)' : 'License: #87 of 2019 (Ministry of Social Affairs & Labor)'}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-white/10 text-[11px] text-stone-400">
              {isAr
                ? 'يتم تحويل كافة الرسائل والاستفسارات مباشرة إلى القسم المختص (الإرشاد، الشؤون الفنية، العضوية، التسويق).'
                : 'All incoming inquiries are dispatched to corresponding units: Agronomy, Technical Services, Membership, or Commercial.'}
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Form or Success State */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-3xl border border-stone-200 p-7 sm:p-8 shadow-xs">
            {submittedTicket ? (
              <div className="space-y-6 text-center py-8 animate-in zoom-in-95">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-stone-900">
                    {isAr ? 'تم استلام رسالتك بنجاح' : 'Message Received Successfully'}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-500 max-w-md mx-auto">
                    {isAr
                      ? 'شكراً لتواصلك مع جمعية أثر. تم تسجيل استفسارك وسيتم الرد عليك عبر البريد الإلكتروني أو الهاتف في أقرب وقت.'
                      : 'Thank you for reaching out to ATHAR. Your message has been logged and our team will respond shortly.'}
                  </p>
                </div>

                <div className="bg-stone-50 border border-stone-200 p-4 rounded-2xl max-w-sm mx-auto space-y-2">
                  <div className="text-[11px] font-semibold text-stone-500">
                    {isAr ? 'رقم تذكرة المتابعة' : 'Inquiry Reference Number'}
                  </div>
                  <div className="flex items-center justify-center gap-2 font-mono font-bold text-emerald-800 text-base">
                    <span>{submittedTicket}</span>
                    <button
                      onClick={handleCopyTicket}
                      className="text-stone-400 hover:text-stone-700 transition-colors p-1"
                      title={isAr ? 'نسخ' : 'Copy'}
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                  {copied && (
                    <div className="text-[11px] text-emerald-600 font-medium animate-in fade-in">
                      {isAr ? 'تم نسخ الرقم للحافظة' : 'Copied to clipboard'}
                    </div>
                  )}
                </div>

                <button
                  onClick={() => setSubmittedTicket(null)}
                  className="bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold px-6 py-2.5 rounded-xl transition-all shadow-xs"
                >
                  {isAr ? 'إرسال رسالة جديدة' : 'Send Another Message'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-stone-100 pb-3">
                  <h3 className="text-base font-bold text-stone-900">
                    {isAr ? 'نموذج المراسلة والاستفسار المباشر' : 'Direct Inquiry Form'}
                  </h3>
                  <p className="text-xs text-stone-500">
                    {isAr ? 'يرجى تعبئة الحقول للتواصل مع إدارة الجمعية' : 'Fill out the form below to contact the cooperative management'}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      {isAr ? 'الاسم الثلاثي / صفة المزارع *' : 'Full Name / Applicant *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={isAr ? 'مثال: محمد عبدالله الصالح' : 'e.g., Mohammed Al-Saleh'}
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl text-xs p-3 focus:bg-white focus:outline-emerald-600 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      {isAr ? 'البريد الإلكتروني للتواصل *' : 'Email Address *'}
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl text-xs p-3 focus:bg-white focus:outline-emerald-600 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      {isAr ? 'رقم الهاتف / الواتساب' : 'Phone / WhatsApp'}
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder={isAr ? '05xxxxxxxx' : '+966...'}
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl text-xs p-3 focus:bg-white focus:outline-emerald-600 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      {isAr ? 'موضوع الرسالة' : 'Subject'}
                    </label>
                    <input
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder={isAr ? 'استفسار عن الخدمات، العضوية، الشراكة...' : 'Services, Membership, Partnerships...'}
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl text-xs p-3 focus:bg-white focus:outline-emerald-600 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    {isAr ? 'نص الرسالة أو الاستفسار *' : 'Message or Inquiry *'}
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={isAr ? 'اكتب تفاصيل استفسارك أو طلبك هنا...' : 'Write your details or request here...'}
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl text-xs p-3 focus:bg-white focus:outline-emerald-600 transition-all"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <div className="text-[11px] text-stone-400 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{isAr ? 'حماية تامة لبياناتك وفق معايير الأمان' : 'Secure communication channel'}</span>
                  </div>

                  <button
                    type="submit"
                    className="bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold px-6 py-3 rounded-xl transition-all shadow-md flex items-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{isAr ? 'إرسال الرسالة' : 'Send Message'}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
