import React, { useState } from 'react';
import { 
  AppModule, 
  Language, 
  AlertNotification 
} from '../types';
import { officialOrganization } from '../data/organization';
import { AtharLogo } from './AtharLogo';
import { 
  Sprout, 
  BookOpen, 
  GraduationCap, 
  Wrench, 
  ShoppingBag, 
  User, 
  ShieldCheck, 
  BarChart3, 
  Lock, 
  Bell, 
  Search, 
  Globe, 
  CheckCircle2, 
  X,
  LayoutDashboard,
  Info,
  Mail,
  HeartHandshake,
  Phone,
  Megaphone
} from 'lucide-react';

interface HeaderProps {
  currentModule: AppModule;
  onSelectModule: (module: AppModule) => void;
  language: Language;
  onToggleLanguage: () => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  notifications: AlertNotification[];
  onMarkAllNotificationsRead: () => void;
  userRole: 'FARMER' | 'ADMIN';
  onToggleRole: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentModule,
  onSelectModule,
  language,
  onToggleLanguage,
  searchQuery,
  onSearchChange,
  notifications,
  onMarkAllNotificationsRead,
  userRole,
  onToggleRole,
}) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const unreadCount = notifications.filter((n) => !n.read).length;
  const isAr = language === 'ar';
  const org = officialOrganization;

  const navItems: { id: AppModule; labelAr: string; labelEn: string; icon: React.ReactNode }[] = [
    { id: 'overview', labelAr: 'الرئيسية', labelEn: 'Home', icon: <LayoutDashboard className="w-4 h-4" /> },
    { id: 'about', labelAr: 'من نحن', labelEn: 'About Us', icon: <Info className="w-4 h-4" /> },
    { id: 'knowledge', labelAr: 'المعرفة', labelEn: 'Knowledge', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'academy', labelAr: 'الأكاديمية', labelEn: 'Academy', icon: <GraduationCap className="w-4 h-4" /> },
    { id: 'services', labelAr: 'الخدمات', labelEn: 'Services', icon: <Wrench className="w-4 h-4" /> },
    { id: 'products', labelAr: 'المنتجات', labelEn: 'Products', icon: <ShoppingBag className="w-4 h-4" /> },
    { id: 'ads', labelAr: 'إعلانات تجارية', labelEn: 'Commercial Ads', icon: <Megaphone className="w-4 h-4 text-amber-600" /> },
    { id: 'contact', labelAr: 'اتصل بنا', labelEn: 'Contact Us', icon: <Mail className="w-4 h-4" /> },
    { id: 'dashboard', labelAr: 'حسابي / المزارع', labelEn: 'Profile', icon: <User className="w-4 h-4" /> },
    { id: 'admin', labelAr: 'إدارة الجمعية', labelEn: 'Admin', icon: <ShieldCheck className="w-4 h-4" /> },
    { id: 'security', labelAr: 'الأمان والتدقيق', labelEn: 'Security', icon: <Lock className="w-4 h-4" /> },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-stone-200">
      {/* Top Banner with Cooperative Info and Role Switcher */}
      <div className="bg-emerald-950 text-emerald-100 text-xs py-1.5 px-4 sm:px-6 border-b border-emerald-900/50">
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-semibold text-[11px] sm:text-xs text-stone-200">
              {isAr 
                ? `${org.name.ar} — ${org.brandConcept.ar} (ترخيص رقم 87 لعام 2019 - وزارة الشؤون الاجتماعية والعمل)`
                : `${org.name.en} — ${org.brandConcept.en} (License #87-2019 Ministry of Social Affairs & Labor)`}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href={`tel:${org.phone}`} 
              className="text-amber-300 hover:text-white text-[11px] inline-flex items-center gap-1.5 transition-colors font-bold bg-emerald-900/80 px-2.5 py-0.5 rounded border border-emerald-700/60"
              title={isAr ? 'الاتصال المباشر بالجمعية' : 'Call ATHAR Hotline'}
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span dir="ltr">{org.phoneFormatted}</span>
            </a>

            <a 
              href={`mailto:${org.email}`} 
              className="text-stone-300 hover:text-amber-300 text-[11px] hidden sm:inline-flex items-center gap-1 transition-colors"
            >
              <Mail className="w-3 h-3 text-amber-400" />
              <span>{org.email}</span>
            </a>

            <button
              onClick={onToggleRole}
              className="bg-emerald-900/90 hover:bg-emerald-800 px-2.5 py-0.5 rounded text-emerald-100 transition-colors flex items-center gap-1.5 text-[11px]"
              title={isAr ? 'تبديل الدور لأغراض التجربة' : 'Toggle preview role'}
            >
              <span>{isAr ? 'الدور:' : 'Role:'}</span>
              <span className="font-semibold text-white bg-emerald-950 px-1.5 py-0.5 rounded">
                {userRole === 'ADMIN' ? (isAr ? 'مدير الجمعية' : 'Admin') : (isAr ? 'مزارع عضو' : 'Farmer')}
              </span>
            </button>

            <button
              onClick={onToggleLanguage}
              className="hover:text-white flex items-center gap-1 transition-colors px-1.5 py-0.5 rounded hover:bg-emerald-800 text-[11px]"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{isAr ? 'English' : 'العربية'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Logo & Name */}
          <div 
            onClick={() => onSelectModule('overview')} 
            className="flex items-center gap-3 cursor-pointer select-none shrink-0"
            title={isAr ? 'الرئيسية - جمعية أثر' : 'Home - ATHAR Cooperative'}
          >
            <AtharLogo 
              variant="horizontal"
              size="md"
            />
          </div>

          {/* Unified Search Input */}
          <div className="flex-1 max-w-md hidden md:block">
            <div className="relative">
              <Search className={`w-4 h-4 text-stone-400 absolute top-1/2 -translate-y-1/2 ${isAr ? 'right-3' : 'left-3'}`} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder={isAr ? 'بحث موحد: أدلة، دورات، خدمات، منتجات...' : 'Search guides, academy, services, products...'}
                className={`w-full bg-stone-100/80 hover:bg-stone-100 focus:bg-white text-xs text-stone-800 rounded-xl border border-stone-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 py-2.5 outline-none transition-all ${
                  isAr ? 'pr-9 pl-3 text-right' : 'pl-9 pr-3 text-left'
                }`}
              />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className={`absolute top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 ${isAr ? 'left-3' : 'right-3'}`}
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Action Icons: Notifications */}
          <div className="flex items-center gap-2 relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-2 text-stone-600 hover:text-emerald-700 hover:bg-emerald-50 rounded-xl transition-colors"
              aria-label="Notifications"
            >
              <Bell className="w-5 h-5" />
              {unreadCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-amber-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </button>

            {/* Notifications Popover */}
            {showNotifications && (
              <div className={`absolute top-12 ${isAr ? 'left-0' : 'right-0'} w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-stone-200 p-4 z-50 animate-in fade-in zoom-in-95`}>
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-stone-100">
                  <div className="font-bold text-xs sm:text-sm text-stone-800">
                    {isAr ? 'الإشعارات والتنبيهات الزراعية' : 'Agricultural Alerts'}
                  </div>
                  {unreadCount > 0 && (
                    <button
                      onClick={onMarkAllNotificationsRead}
                      className="text-xs text-emerald-700 hover:underline flex items-center gap-1"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {isAr ? 'تحديد كمقروء' : 'Mark all read'}
                    </button>
                  )}
                </div>

                <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
                  {notifications.map((n) => (
                    <div
                      key={n.id}
                      className={`p-2.5 rounded-xl border text-xs transition-colors ${
                        n.read ? 'bg-stone-50 border-stone-200/60' : 'bg-emerald-50/60 border-emerald-200'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-1 mb-1">
                        <span className="font-bold text-stone-800">{isAr ? n.title.ar : n.title.en}</span>
                        <span className="text-[10px] text-stone-400 whitespace-nowrap">{n.time}</span>
                      </div>
                      <p className="text-stone-600 leading-relaxed text-[11px]">{isAr ? n.message.ar : n.message.en}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Scrollable Navigation Bar with Official Links */}
        <nav className="flex items-center gap-1 overflow-x-auto pt-2.5 pb-1 no-scrollbar border-t border-stone-100 mt-2">
          {navItems.map((item) => {
            const isActive = currentModule === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectModule(item.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-emerald-800 text-white shadow-xs'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                }`}
              >
                {item.icon}
                <span>{isAr ? item.labelAr : item.labelEn}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
