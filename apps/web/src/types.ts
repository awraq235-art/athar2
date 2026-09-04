export type Language = 'ar' | 'en';

export type AppModule = 
  | 'overview' 
  | 'about'
  | 'knowledge' 
  | 'academy' 
  | 'services' 
  | 'products' 
  | 'ads'
  | 'contact' 
  | 'dashboard' 
  | 'admin' 
  | 'analytics' 
  | 'security';

export interface OrganizationGoal {
  id: number;
  title: { ar: string; en: string };
  description?: { ar: string; en: string };
}

export interface OrganizationValue {
  id: number;
  title: { ar: string; en: string };
  meaning: { ar: string; en: string };
}

export interface OrganizationProfile {
  name: { ar: string; en: string };
  shortName: { ar: string; en: string };
  brandConcept: { ar: string; en: string };
  licenseNumber: string;
  licenseYear?: string;
  licenseAuthority?: { ar: string; en: string };
  licenseFull?: { ar: string; en: string };
  email: string;
  phone: string;
  phoneFormatted: string;
  phoneInternational: string;
  vision: { ar: string; en: string };
  mission: { ar: string; en: string };
  goals: OrganizationGoal[];
  values: OrganizationValue[];
  workFields: {
    id: string;
    title: { ar: string; en: string };
    description: { ar: string; en: string };
  }[];
  partnerships: {
    name: { ar: string; en: string };
    type: { ar: string; en: string };
    scope: { ar: string; en: string };
  }[];
}

export interface KnowledgeArticle {
  id: string;
  slug: string;
  title: { ar: string; en: string };
  category: { ar: string; en: string };
  summary: { ar: string; en: string };
  content: { ar: string; en: string };
  author?: { ar: string; en: string; role: string };
  sources?: string[];
  status: 'DRAFT' | 'REVIEW' | 'FACT_CHECK' | 'APPROVAL' | 'PUBLISHED' | 'UPDATED' | 'ARCHIVED';
  season: { ar: string; en: string };
  crop: string;
  readTime: string;
  tags: string[];
  publishedAt: string;
}

export interface CourseModule {
  id: string;
  title: { ar: string; en: string };
  duration: string;
  lessons: {
    id: string;
    title: { ar: string; en: string };
    duration: string;
    completed?: boolean;
  }[];
}

export interface AcademyCourse {
  id: string;
  slug: string;
  title: { ar: string; en: string };
  instructor: { ar: string; en: string; title: string };
  duration: string;
  lessonsCount: number;
  level: { ar: string; en: string };
  description: { ar: string; en: string };
  objectives: { ar: string[]; en: string[] };
  modules: CourseModule[];
  enrolledStudents: number;
  badge: { ar: string; en: string };
}

export interface CooperativeService {
  id: string;
  title: { ar: string; en: string };
  category: 'soil_lab' | 'equipment' | 'consulting' | 'irrigation';
  description: { ar: string; en: string };
  turnaroundTime: { ar: string; en: string };
  subsidyRate: string;
  fee: { ar: string; en: string };
  availability: 'available' | 'high_demand' | 'scheduled';
}

export interface ProductListing {
  id: string;
  slug: string;
  title: { ar: string; en: string };
  category: 'harvest' | 'seeds' | 'fertilizer' | 'tools' | 'greenhouses' | 'irrigation';
  description: { ar: string; en: string };
  price: number;
  currency: string;
  unit: { ar: string; en: string };
  farmOrigin: { ar: string; en: string };
  supplier: { ar: string; en: string };
  isOrganic: boolean;
  stock: number;
  status: 'ACTIVE' | 'OUT_OF_STOCK' | 'DRAFT';
  imageAlt: string;
}

export interface ProductInquiry {
  id: string;
  productId: string;
  productName: string;
  customerName: string;
  phone: string;
  email?: string;
  quantity: number;
  notes?: string;
  status: 'NEW' | 'RESPONDED' | 'FULFILLED';
  createdAt: string;
}

export type ServiceRequestStatus = 
  | 'NEW' 
  | 'UNDER_REVIEW' 
  | 'ASSIGNED' 
  | 'IN_PROGRESS' 
  | 'COMPLETED' 
  | 'CANCELLED'
  | 'pending'
  | 'in_review'
  | 'approved'
  | 'completed';

export interface ServiceRequest {
  id: string;
  serviceId: string;
  serviceTitle: string;
  farmerName: string;
  phone: string;
  contactMethod?: 'phone' | 'whatsapp' | 'email';
  farmLocation: string;
  areaHectares: number;
  areaDunams?: number;
  date: string;
  status: ServiceRequestStatus;
  notes?: string;
  assignedSpecialist?: string;
}

export type CommercialAdPlacement = 
  | 'hero_banner' 
  | 'marketplace_top' 
  | 'services_sidebar' 
  | 'knowledge_spotlight';

export interface CommercialAd {
  id: string;
  merchantName: string;
  companyName: string;
  phone: string;
  email?: string;
  title: { ar: string; en: string };
  description: { ar: string; en: string };
  badge?: { ar: string; en: string };
  placement: CommercialAdPlacement;
  priceYER: number;
  durationMonths: number;
  bannerGradient?: string;
  actionUrl?: string;
  actionText: { ar: string; en: string };
  status: 'ACTIVE' | 'PENDING' | 'EXPIRED';
  createdAt: string;
}

export interface CommercialAdRequest {
  id: string;
  merchantName: string;
  companyName: string;
  phone: string;
  email: string;
  adTitle: string;
  adDescription: string;
  targetUrl: string;
  placement: CommercialAdPlacement;
  durationMonths: number;
  estimatedCostYER: number;
  notes?: string;
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
  createdAt: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  status: 'NEW' | 'REPLIED' | 'ARCHIVED';
  createdAt: string;
}

export interface SecurityAuditEntry {
  id: string;
  timestamp: string;
  actor: string;
  role: string;
  action: string;
  ipAddress: string;
  status: 'SUCCESS' | 'WARNING' | 'DENIED';
  details: string;
}

export interface AlertNotification {
  id: string;
  title: { ar: string; en: string };
  message: { ar: string; en: string };
  time: string;
  priority: 'info' | 'warning' | 'critical';
  read: boolean;
}
