import React, { useState, useEffect } from 'react';
import { 
  AppModule, 
  Language, 
  KnowledgeArticle, 
  AcademyCourse, 
  CooperativeService, 
  ProductListing, 
  ServiceRequest, 
  SecurityAuditEntry, 
  AlertNotification,
  ContactMessage,
  CommercialAd,
  CommercialAdRequest
} from './types';
import { 
  initialKnowledge, 
  initialCourses, 
  initialServices, 
  initialProducts, 
  initialAuditLogs, 
  initialNotifications,
  initialContactMessages,
  initialCommercialAds,
  initialAdRequests
} from './data/mockData';
import { officialOrganization } from './data/organization';
import { Header } from './components/Header';
import { OverviewModule } from './components/OverviewModule';
import { AboutModule } from './components/AboutModule';
import { KnowledgeModule } from './components/KnowledgeModule';
import { AcademyModule } from './components/AcademyModule';
import { ServicesModule } from './components/ServicesModule';
import { ProductsModule } from './components/ProductsModule';
import { CommercialAdsModule } from './components/CommercialAdsModule';
import { ContactModule } from './components/ContactModule';
import { DashboardModule } from './components/DashboardModule';
import { AdminModule } from './components/AdminModule';
import { AnalyticsModule } from './components/AnalyticsModule';
import { SecurityModule } from './components/SecurityModule';
import { Footer } from './components/Footer';
import { Search, X, Sprout, ArrowLeft, ArrowRight } from 'lucide-react';

export const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('ar');
  const [currentModule, setCurrentModule] = useState<AppModule>('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [userRole, setUserRole] = useState<'FARMER' | 'ADMIN'>('FARMER');

  const [articles, setArticles] = useState<KnowledgeArticle[]>(initialKnowledge);
  const [courses, setCourses] = useState<AcademyCourse[]>(initialCourses);
  const [services, setServices] = useState<CooperativeService[]>(initialServices);
  const [products, setProducts] = useState<ProductListing[]>(initialProducts);
  const [auditLogs, setAuditLogs] = useState<SecurityAuditEntry[]>(initialAuditLogs);
  const [notifications, setNotifications] = useState<AlertNotification[]>(initialNotifications);
  const [messages, setMessages] = useState<ContactMessage[]>(initialContactMessages);
  const [commercialAds, setCommercialAds] = useState<CommercialAd[]>(initialCommercialAds);
  const [commercialAdRequests, setCommercialAdRequests] = useState<CommercialAdRequest[]>(initialAdRequests);

  const [requests, setRequests] = useState<ServiceRequest[]>([
    {
      id: 'req-1',
      serviceId: 'srv-1',
      serviceTitle: 'تحليل التربة والمياه الشامل بمختبر الجمعية',
      farmerName: 'سليمان بن إبراهيم الهزاع',
      phone: '771234567',
      farmLocation: 'المزرعة النموذجية - حوض 41',
      areaHectares: 3.5,
      areaDunams: 35,
      date: '2026-09-02',
      status: 'approved',
      notes: 'فحص ملوحة مياه البئر وخصوبة التربة (3.5 هكتار)',
    },
    {
      id: 'req-2',
      serviceId: 'srv-2',
      serviceTitle: 'حجز معدات الحصاد والتسوية الليزرية المشتركة',
      farmerName: 'سليمان بن إبراهيم الهزاع',
      phone: '771234567',
      farmLocation: 'المزرعة النموذجية - حوض 12',
      areaHectares: 2.0,
      areaDunams: 20,
      date: '2026-09-03',
      status: 'pending',
      notes: 'تسوية ليزرية قبل زراعة الحبوب والأعلاف (2 هكتار)',
    },
  ]);

  // Sync document direction, language, and title
  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    document.title = language === 'ar' 
      ? 'جمعية أثر التعاونية الزراعية متعددة الأغراض | أثر يصنع نموًا'
      : 'ATHAR Multi-Purpose Agricultural Cooperative Association | ATHAR Makes Growth';
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  const toggleRole = () => {
    setUserRole((prev) => (prev === 'FARMER' ? 'ADMIN' : 'FARMER'));
  };

  const markAllNotificationsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const handleSubmitRequest = (reqData: Omit<ServiceRequest, 'id' | 'date' | 'status'>) => {
    const newReq: ServiceRequest = {
      ...reqData,
      id: `req-${Date.now()}`,
      date: new Date().toISOString().split('T')[0],
      status: 'pending',
    };
    setRequests([newReq, ...requests]);

    // Log to security audit
    const newAudit: SecurityAuditEntry = {
      id: `sec-${Date.now()}`,
      timestamp: new Date().toISOString().replace('T', ' ').substring(0, 19),
      actor: reqData.farmerName,
      role: 'MEMBER_FARMER',
      action: 'SERVICE_REQUISITION_SUBMITTED',
      ipAddress: '192.168.1.105',
      status: 'SUCCESS',
      details: `Submitted request for "${reqData.serviceTitle}" (${reqData.areaDunams} dunams)`,
    };
    setAuditLogs([newAudit, ...auditLogs]);
  };

  const handleSendMessage = (msgData: Omit<ContactMessage, 'id' | 'createdAt' | 'status'>) => {
    const newMsg: ContactMessage = {
      ...msgData,
      id: `msg-${Date.now()}`,
      status: 'NEW',
      createdAt: new Date().toISOString().replace('T', ' ').substring(0, 19),
    };
    setMessages([newMsg, ...messages]);

    // Add security audit entry
    const newAudit: SecurityAuditEntry = {
      id: `sec-${Date.now()}`,
      timestamp: new Date().toISOString().replace('T', ' ').substring(0, 19),
      actor: msgData.name,
      role: 'PUBLIC_VISITOR',
      action: 'INQUIRY_MESSAGE_SENT',
      ipAddress: '192.168.1.120',
      status: 'SUCCESS',
      details: `Sent inquiry regarding "${msgData.subject}" to ${officialOrganization.email}`,
    };
    setAuditLogs([newAudit, ...auditLogs]);

    // Add notification to admin
    const newNotif: AlertNotification = {
      id: `notif-${Date.now()}`,
      title: {
        ar: `رسالة تواصل جديدة: ${msgData.subject}`,
        en: `New Inquiry: ${msgData.subject}`,
      },
      message: {
        ar: `من ${msgData.name} (${msgData.email})`,
        en: `From ${msgData.name} (${msgData.email})`,
      },
      time: 'الآن',
      priority: 'info',
      read: false,
    };
    setNotifications([newNotif, ...notifications]);
  };

  const handleApproveRequest = (id: string) => {
    setRequests((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: 'approved' } : r))
    );
    const target = requests.find((r) => r.id === id);
    if (target) {
      const newAudit: SecurityAuditEntry = {
        id: `sec-${Date.now()}`,
        timestamp: new Date().toISOString().replace('T', ' ').substring(0, 19),
        actor: officialOrganization.email,
        role: 'SUPER_ADMIN',
        action: 'SERVICE_REQUEST_APPROVED',
        ipAddress: '10.0.1.1',
        status: 'SUCCESS',
        details: `Approved request ${id} for ${target.farmerName}`,
      };
      setAuditLogs([newAudit, ...auditLogs]);
    }
  };

  const handleRejectRequest = (id: string) => {
    setRequests((prev) => prev.filter((r) => r.id !== id));
  };

  const handleCreateAdRequest = (reqData: Omit<CommercialAdRequest, 'id' | 'createdAt' | 'status'>) => {
    const newReq: CommercialAdRequest = {
      ...reqData,
      id: `ad-req-${Date.now()}`,
      createdAt: new Date().toISOString().replace('T', ' ').substring(0, 19),
      status: 'PENDING',
    };
    setCommercialAdRequests((prev) => [newReq, ...prev]);

    // Add security audit entry
    const newAudit: SecurityAuditEntry = {
      id: `sec-${Date.now()}`,
      timestamp: new Date().toISOString().replace('T', ' ').substring(0, 19),
      actor: `${newReq.merchantName} (${newReq.companyName})`,
      role: 'COMMERCIAL_TRADER',
      action: 'COMMERCIAL_AD_SUBMITTED',
      ipAddress: '192.168.1.130',
      status: 'SUCCESS',
      details: `Trader submitted ad "${newReq.adTitle}" (${newReq.estimatedCostYER.toLocaleString()} YER for ${newReq.durationMonths} months)`,
    };
    setAuditLogs((prev) => [newAudit, ...prev]);

    // Notify admin
    const newNotif: AlertNotification = {
      id: `notif-${Date.now()}`,
      title: {
        ar: `طلب إعلان تجاري جديد: ${newReq.companyName}`,
        en: `New Commercial Ad Request: ${newReq.companyName}`,
      },
      message: {
        ar: `قدم ${newReq.merchantName} طلب إعلان "${newReq.adTitle}" - التقدير: ${newReq.estimatedCostYER.toLocaleString()} ر.ي`,
        en: `Merchant ${newReq.merchantName} requested ad "${newReq.adTitle}" - Est: ${newReq.estimatedCostYER.toLocaleString()} YER`,
      },
      time: 'الآن',
      priority: 'warning',
      read: false,
    };
    setNotifications((prev) => [newNotif, ...prev]);
  };

  const handleApproveAdRequest = (id: string) => {
    const target = commercialAdRequests.find((r) => r.id === id);
    if (!target) return;

    setCommercialAdRequests((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: 'APPROVED' } : r))
    );

    // Convert approved request into active CommercialAd
    const newAd: CommercialAd = {
      id: `ad-${Date.now()}`,
      merchantName: target.merchantName,
      companyName: target.companyName,
      phone: target.phone,
      email: target.email,
      title: { ar: target.adTitle, en: target.adTitle },
      description: { ar: target.adDescription, en: target.adDescription },
      badge: { ar: 'معلن معتمد بالجمعية', en: 'Verified Sponsor' },
      placement: target.placement,
      priceYER: target.estimatedCostYER,
      durationMonths: target.durationMonths,
      actionUrl: target.targetUrl || `tel:${target.phone}`,
      actionText: { ar: 'تواصل مع الشركة المعلنة', en: 'Contact Advertiser' },
      status: 'ACTIVE',
      createdAt: new Date().toISOString().split('T')[0],
    };

    setCommercialAds((prev) => [newAd, ...prev]);

    const newAudit: SecurityAuditEntry = {
      id: `sec-${Date.now()}`,
      timestamp: new Date().toISOString().replace('T', ' ').substring(0, 19),
      actor: officialOrganization.email,
      role: 'SUPER_ADMIN',
      action: 'COMMERCIAL_AD_APPROVED',
      ipAddress: '10.0.1.1',
      status: 'SUCCESS',
      details: `Approved ad request #${id} for ${target.companyName} (${target.estimatedCostYER.toLocaleString()} YER)`,
    };
    setAuditLogs((prev) => [newAudit, ...prev]);
  };

  const handleRejectAdRequest = (id: string) => {
    setCommercialAdRequests((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: 'REJECTED' } : r))
    );
  };

  const handleAddKnowledge = (art: Partial<KnowledgeArticle>) => {
    const newArticle: KnowledgeArticle = {
      id: `k-${Date.now()}`,
      slug: `guide-${Date.now()}`,
      title: art.title || { ar: 'دليل جديد', en: 'New Guide' },
      category: art.category || { ar: 'إدارة عامة', en: 'General' },
      summary: art.summary || { ar: '', en: '' },
      content: art.content || { ar: '', en: '' },
      status: 'PUBLISHED',
      season: art.season || { ar: 'موسم 2026', en: 'Season 2026' },
      crop: art.crop || 'محاصيل عامة',
      readTime: '3 د',
      tags: art.tags || ['إرشاد'],
      publishedAt: new Date().toISOString().split('T')[0],
    };
    setArticles([newArticle, ...articles]);

    const newNotif: AlertNotification = {
      id: `notif-${Date.now()}`,
      title: {
        ar: `دليل جديد: ${newArticle.title.ar}`,
        en: `New Advisory: ${newArticle.title.en}`,
      },
      message: {
        ar: newArticle.summary.ar,
        en: newArticle.summary.en,
      },
      time: 'الآن',
      priority: 'info',
      read: false,
    };
    setNotifications([newNotif, ...notifications]);
  };

  const isAr = language === 'ar';

  // Unified Search Results
  const searchResultsArticles = searchQuery
    ? articles.filter(
        (a) =>
          a.title.ar.toLowerCase().includes(searchQuery.toLowerCase()) ||
          a.title.en.toLowerCase().includes(searchQuery.toLowerCase()) ||
          a.summary.ar.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const searchResultsServices = searchQuery
    ? services.filter(
        (s) =>
          s.title.ar.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.title.en.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.description.ar.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const searchResultsProducts = searchQuery
    ? products.filter(
        (p) =>
          p.title.ar.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.title.en.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col selection:bg-emerald-200">
      {/* Top Header Navigation */}
      <Header
        currentModule={currentModule}
        onSelectModule={setCurrentModule}
        language={language}
        onToggleLanguage={toggleLanguage}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        notifications={notifications}
        onMarkAllNotificationsRead={markAllNotificationsRead}
        userRole={userRole}
        onToggleRole={toggleRole}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6">
        {/* If Unified Search Active */}
        {searchQuery.trim() !== '' ? (
          <div className="space-y-6 bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-xs animate-in fade-in">
            <div className="flex items-center justify-between pb-3 border-b border-stone-200">
              <div className="flex items-center gap-2">
                <Search className="w-5 h-5 text-emerald-700" />
                <h2 className="text-base sm:text-lg font-bold text-stone-900">
                  {isAr ? `نتائج البحث الموحد عن: "${searchQuery}"` : `Unified Search Results for: "${searchQuery}"`}
                </h2>
              </div>
              <button
                onClick={() => setSearchQuery('')}
                className="text-xs text-stone-500 hover:text-stone-800 flex items-center gap-1 bg-stone-100 px-3 py-1.5 rounded-lg"
              >
                <X className="w-4 h-4" />
                <span>{isAr ? 'إغلاق البحث' : 'Clear search'}</span>
              </button>
            </div>

            {/* Articles Results */}
            <div>
              <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2">
                {isAr ? 'الأدلة الإرشادية والمعرفة' : 'Knowledge & Guides'} ({searchResultsArticles.length})
              </div>
              {searchResultsArticles.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {searchResultsArticles.map((a) => (
                    <div
                      key={a.id}
                      onClick={() => {
                        setCurrentModule('knowledge');
                        setSearchQuery('');
                      }}
                      className="p-3.5 rounded-2xl border border-stone-200 hover:border-emerald-300 hover:bg-emerald-50/40 cursor-pointer transition-colors"
                    >
                      <div className="font-bold text-xs text-stone-900 mb-1">{isAr ? a.title.ar : a.title.en}</div>
                      <div className="text-[11px] text-stone-500 line-clamp-1">{isAr ? a.summary.ar : a.summary.en}</div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-xs text-stone-400">{isAr ? 'لا توجد أدلة مطابقة' : 'No matching guides'}</div>
              )}
            </div>

            {/* Services Results */}
            <div>
              <div className="text-xs font-bold text-blue-800 uppercase tracking-wider mb-2">
                {isAr ? 'الخدمات التعاونية' : 'Cooperative Services'} ({searchResultsServices.length})
              </div>
              {searchResultsServices.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {searchResultsServices.map((s) => (
                    <div
                      key={s.id}
                      onClick={() => {
                        setCurrentModule('services');
                        setSearchQuery('');
                      }}
                      className="p-3.5 rounded-2xl border border-stone-200 hover:border-blue-300 hover:bg-blue-50/40 cursor-pointer transition-colors"
                    >
                      <div className="font-bold text-xs text-stone-900 mb-1">{isAr ? s.title.ar : s.title.en}</div>
                      <div className="text-[11px] text-stone-500">{isAr ? s.fee.ar : s.fee.en}</div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-xs text-stone-400">{isAr ? 'لا توجد خدمات مطابقة' : 'No matching services'}</div>
              )}
            </div>

            {/* Products Results */}
            <div>
              <div className="text-xs font-bold text-purple-800 uppercase tracking-wider mb-2">
                {isAr ? 'المنتجات والمدخلات' : 'Products & Inputs'} ({searchResultsProducts.length})
              </div>
              {searchResultsProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {searchResultsProducts.map((p) => (
                    <div
                      key={p.id}
                      onClick={() => {
                        setCurrentModule('products');
                        setSearchQuery('');
                      }}
                      className="p-3.5 rounded-2xl border border-stone-200 hover:border-purple-300 hover:bg-purple-50/40 cursor-pointer transition-colors"
                    >
                      <div className="font-bold text-xs text-stone-900 mb-1">{isAr ? p.title.ar : p.title.en}</div>
                      <div className="text-[11px] text-emerald-800 font-bold">{p.price.toLocaleString()} {isAr ? 'ر.ي' : 'YER'}</div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-xs text-stone-400">{isAr ? 'لا توجد منتجات مطابقة' : 'No matching products'}</div>
              )}
            </div>
          </div>
        ) : (
          /* Active Module Views */
          <>
            {currentModule === 'overview' && (
              <OverviewModule
                language={language}
                onNavigate={setCurrentModule}
                onRequestService={() => setCurrentModule('services')}
                services={services}
                notifications={notifications}
                sponsoredAd={commercialAds.find((a) => a.status === 'ACTIVE' && a.placement === 'hero_banner') || commercialAds[0]}
                ads={commercialAds}
              />
            )}

            {currentModule === 'about' && (
              <AboutModule language={language} onNavigate={setCurrentModule} />
            )}

            {currentModule === 'knowledge' && (
              <KnowledgeModule
                articles={articles}
                language={language}
                sponsoredAd={commercialAds.find((a) => a.status === 'ACTIVE' && a.placement === 'services_sidebar') || commercialAds[2] || commercialAds[0]}
                onNavigateToAds={() => setCurrentModule('ads')}
              />
            )}

            {currentModule === 'academy' && (
              <AcademyModule
                courses={courses}
                language={language}
                sponsoredAd={commercialAds.find((a) => a.status === 'ACTIVE' && a.placement === 'marketplace_top') || commercialAds[1] || commercialAds[0]}
                onNavigateToAds={() => setCurrentModule('ads')}
              />
            )}

            {currentModule === 'services' && (
              <ServicesModule
                services={services}
                requests={requests}
                onSubmitRequest={handleSubmitRequest}
                language={language}
                sponsoredAd={commercialAds.find((a) => a.status === 'ACTIVE' && a.placement === 'services_sidebar') || commercialAds[1] || commercialAds[0]}
                onNavigateToAds={() => setCurrentModule('ads')}
              />
            )}

            {currentModule === 'products' && (
              <ProductsModule 
                products={products} 
                language={language}
                sponsoredAd={commercialAds.find((a) => a.status === 'ACTIVE' && a.placement === 'marketplace_top') || commercialAds[0]}
                onNavigateToAds={() => setCurrentModule('ads')}
              />
            )}

            {currentModule === 'ads' && (
              <CommercialAdsModule
                language={language}
                ads={commercialAds}
                requests={commercialAdRequests}
                isAdmin={userRole === 'ADMIN'}
                onSubmitAdRequest={handleCreateAdRequest}
                onApproveRequest={handleApproveAdRequest}
                onRejectRequest={handleRejectAdRequest}
              />
            )}

            {currentModule === 'contact' && (
              <ContactModule language={language} onSendMessage={handleSendMessage} />
            )}

            {currentModule === 'dashboard' && (
              <DashboardModule language={language} requests={requests} />
            )}

            {currentModule === 'analytics' && (
              <AnalyticsModule language={language} />
            )}

            {currentModule === 'admin' && (
              <AdminModule
                language={language}
                requests={requests}
                messages={messages}
                onApproveRequest={handleApproveRequest}
                onRejectRequest={handleRejectRequest}
                onAddKnowledge={handleAddKnowledge}
              />
            )}

            {currentModule === 'security' && (
              <SecurityModule language={language} auditLogs={auditLogs} />
            )}
          </>
        )}
      </main>

      {/* Official Platform Footer */}
      <Footer language={language} onNavigate={setCurrentModule} />
    </div>
  );
};

export default App;
