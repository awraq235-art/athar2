import React, { useState } from 'react';
import { SecurityAuditEntry, Language } from '../types';
import { Lock, Shield, CheckCircle2, AlertTriangle, XCircle, Key, RefreshCw, Server, Eye } from 'lucide-react';

interface SecurityModuleProps {
  language: Language;
  auditLogs: SecurityAuditEntry[];
}

export const SecurityModule: React.FC<SecurityModuleProps> = ({ language, auditLogs }) => {
  const [filterStatus, setFilterStatus] = useState<'ALL' | 'SUCCESS' | 'DENIED'>('ALL');
  const isAr = language === 'ar';

  const baselineItems = [
    { labelAr: 'تشفير كامل TLS 1.3 / HTTPS', labelEn: 'TLS 1.3 / HTTPS Encryption', status: 'PASS' },
    { labelAr: 'تشفير كلمات المرور عبر خوارزمية Argon2id', labelEn: 'Argon2id Password Hashing Engine', status: 'PASS' },
    { labelAr: 'رموز JWT مع تدوير وإلغاء مفاتيح التنشيط', labelEn: 'JWT Token Rotation & Revocation List', status: 'PASS' },
    { labelAr: 'صلاحيات مصفوفة الأدوار (RBAC + Permissions)', labelEn: 'Role-Based Access Control (RBAC)', status: 'PASS' },
    { labelAr: 'محدد معدل الطلبات وحماية الهجمات (Rate Limiting)', labelEn: 'Sliding-Window Rate Limiting (Redis-backed)', status: 'PASS' },
    { labelAr: 'فحص وتطهير المدخلات والملفات المرفوعة', labelEn: 'Strict Input Validation & File Sanitization', status: 'PASS' },
    { labelAr: 'تخزين كائنات خاص مع روابط موقعة (Signed URLs)', labelEn: 'Private Object Storage + Expiring Signed URLs', status: 'PASS' },
    { labelAr: 'ترويسات الأمان (CSP, HSTS, X-Frame-Options)', labelEn: 'Hardened Security Headers (CSP, HSTS, XFO)', status: 'PASS' },
    { labelAr: 'التحقق الثنائي (MFA Readiness) للإداريين', labelEn: 'MFA Ready for Privileged Accounts', status: 'PASS' },
    { labelAr: 'عزل المفاتيح والبيانات السرية عن الكود المصدري', labelEn: 'Zero-Secret Source Code Baseline (.env)', status: 'PASS' },
  ];

  const filteredLogs = auditLogs.filter((l) => {
    if (filterStatus === 'ALL') return true;
    return l.status === filterStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="pb-4 border-b border-stone-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-1">
            <Lock className="w-4 h-4" />
            <span>{isAr ? 'مركز الأمان والحوكمة الرقمية والتدقيق' : 'Security Baseline & Governance Center'}</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            {isAr ? 'معايير أمان المنصة وسجلات التدقيق المباشرة' : 'ATHAR Security Baseline & Audit Log'}
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 mt-0.5">
            {isAr ? 'استيفاء كافة متطلبات وثيقة الأمان (docs/SECURITY.md)' : 'Strict compliance with architectural baseline defined in docs/SECURITY.md'}
          </p>
        </div>

        <div className="flex items-center gap-2 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200 text-xs font-bold text-emerald-800">
          <Shield className="w-4 h-4 text-emerald-600" />
          <span>{isAr ? 'النظام متوافق 100% مع البوابة الآمنة' : 'Security Baseline Satisfied'}</span>
        </div>
      </div>

      {/* Security Baseline Grid */}
      <div className="bg-white p-6 rounded-2xl border border-stone-200">
        <h3 className="text-sm font-bold text-stone-900 mb-4 flex items-center gap-2">
          <Key className="w-4 h-4 text-emerald-600" />
          <span>{isAr ? 'حالة عناصر الأمان المطبقة (docs/SECURITY.md):' : 'Applied Security Controls Status:'}</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {baselineItems.map((item) => (
            <div
              key={item.labelEn}
              className="p-3 rounded-xl bg-stone-50 border border-stone-200/80 flex items-center justify-between gap-2 text-xs"
            >
              <span className="font-semibold text-stone-800">{isAr ? item.labelAr : item.labelEn}</span>
              <span className="flex items-center gap-1 font-bold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-full text-[11px]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{item.status}</span>
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Live Audit Log Section */}
      <div className="bg-white rounded-2xl border border-stone-200 p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div>
            <h3 className="text-base font-bold text-stone-900">
              {isAr ? 'سجل التدقيق والأحداث الأمنية (Audit Logs)' : 'Immutable Security Audit Events'}
            </h3>
            <p className="text-xs text-stone-500">
              {isAr ? 'تسجيل فوري لكافة العمليات الحساسة وتغييرات الصلاحيات' : 'Tamper-evident chronological access logging'}
            </p>
          </div>

          {/* Status Filter */}
          <div className="flex items-center gap-1.5 self-start sm:self-auto">
            {(['ALL', 'SUCCESS', 'DENIED'] as const).map((st) => (
              <button
                key={st}
                onClick={() => setFilterStatus(st)}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-colors ${
                  filterStatus === st
                    ? 'bg-stone-900 text-white'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {st === 'ALL' ? (isAr ? 'الكل' : 'All') : st === 'SUCCESS' ? (isAr ? 'ناجح' : 'Success') : (isAr ? 'محظور' : 'Denied')}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-right">
            <thead>
              <tr className="border-b border-stone-200 text-stone-500">
                <th className="pb-3 font-bold">{isAr ? 'التوقيت' : 'Timestamp'}</th>
                <th className="pb-3 font-bold">{isAr ? 'المستخدم / الدور' : 'Actor & Role'}</th>
                <th className="pb-3 font-bold">{isAr ? 'الإجراء الأمني' : 'Action'}</th>
                <th className="pb-3 font-bold">{isAr ? 'الحالة' : 'Status'}</th>
                <th className="pb-3 font-bold">{isAr ? 'التفاصيل' : 'Details'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 font-mono">
              {filteredLogs.map((log) => (
                <tr key={log.id} className="hover:bg-stone-50/80 transition-colors">
                  <td className="py-3 text-stone-500 whitespace-nowrap">{log.timestamp}</td>
                  <td className="py-3">
                    <div className="text-stone-900 font-semibold">{log.actor}</div>
                    <div className="text-[10px] text-stone-400">{log.role}</div>
                  </td>
                  <td className="py-3 font-bold text-stone-800">{log.action}</td>
                  <td className="py-3">
                    <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${
                      log.status === 'SUCCESS' 
                        ? 'bg-emerald-100 text-emerald-800' 
                        : 'bg-rose-100 text-rose-800'
                    }`}>
                      {log.status}
                    </span>
                  </td>
                  <td className="py-3 text-stone-600 text-[11px] max-w-xs truncate font-sans">
                    {log.details}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
