import React, { useState } from 'react';
import { ProductListing, Language, CommercialAd } from '../types';
import { ShoppingBag, Tag, Check, CheckCircle2, ShieldCheck, MapPin, Package, X, ShoppingCart } from 'lucide-react';
import { SponsoredAdBanner } from './SponsoredAdBanner';

interface ProductsModuleProps {
  products: ProductListing[];
  language: Language;
  sponsoredAd?: CommercialAd;
  onNavigateToAds?: () => void;
}

export const ProductsModule: React.FC<ProductsModuleProps> = ({ 
  products, 
  language,
  sponsoredAd,
  onNavigateToAds
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProduct, setSelectedProduct] = useState<ProductListing | null>(null);
  const [orderQuantity, setOrderQuantity] = useState(1);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const isAr = language === 'ar';

  const categories = [
    { id: 'all', labelAr: 'كافة المعروضات', labelEn: 'All Listings' },
    { id: 'harvest', labelAr: 'محاصيل المزارع', labelEn: 'Fresh Harvest' },
    { id: 'seeds', labelAr: 'بذور وتقاوي', labelEn: 'Seeds & Seedlings' },
    { id: 'fertilizer', labelAr: 'أسمدة ومحسنات', labelEn: 'Bio-Fertilizers' },
  ];

  const filtered = products.filter((p) => {
    if (selectedCategory === 'all') return true;
    return p.category === selectedCategory;
  });

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedProduct) return;

    setToastMessage(
      isAr 
        ? `تم تسجيل طلبك لشراء ${orderQuantity} ${selectedProduct.unit.ar} بنجاح! سيتم التوصيل عبر شبكة أثر اللوجستية.` 
        : `Order confirmed for ${orderQuantity} ${selectedProduct.unit.en}! Dispatched via ATHAR logistics.`
    );
    setSelectedProduct(null);
    setOrderQuantity(1);
    setTimeout(() => setToastMessage(null), 4000);
  };

  return (
    <div className="space-y-6">
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-emerald-800 text-white text-xs font-bold py-3 px-5 rounded-xl shadow-xl flex items-center gap-2 border border-emerald-600 animate-in slide-in-from-bottom">
          <CheckCircle2 className="w-4 h-4 text-emerald-300" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header */}
      <div className="pb-4 border-b border-stone-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-1">
            <ShoppingBag className="w-4 h-4" />
            <span>{isAr ? 'سوق المزارع والمستلزمات الزراعية' : 'Cooperative Farmers & Supplies Marketplace'}</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            {isAr ? 'منتجات أعضاء الجمعية والمدخلات المعتمدة' : 'Cooperative Harvest & Verified Inputs'}
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 mt-0.5">
            {isAr ? 'تسويق مباشر من الحقل إلى المستهلك والتعاونيات بأسعار عادلة' : 'Direct farm-to-table channels ensuring fair margins and certified organic standards'}
          </p>
        </div>

        <div className="flex items-center gap-2 bg-stone-100 px-3 py-1.5 rounded-xl text-xs text-stone-600">
          <ShieldCheck className="w-4 h-4 text-emerald-700" />
          <span>{isAr ? 'ضمان الجودة والفحص المخبري لكل شحنة' : 'Lab-tested certified harvests'}</span>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
              selectedCategory === cat.id
                ? 'bg-emerald-700 text-white shadow-xs'
                : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-50'
            }`}
          >
            {isAr ? cat.labelAr : cat.labelEn}
          </button>
        ))}
      </div>

      {/* Commercial Sponsored Ad in Marketplace */}
      {sponsoredAd && (
        <SponsoredAdBanner
          ad={sponsoredAd}
          language={language}
          onNavigateToAds={onNavigateToAds}
          compact
        />
      )}

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {filtered.map((prod) => (
          <div
            key={prod.id}
            className="bg-white rounded-2xl border border-stone-200 p-5 flex flex-col justify-between hover:border-emerald-300 hover:shadow-md transition-all group"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                {prod.isOrganic ? (
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                    {isAr ? 'عضوي معتمد 🌱' : 'Organic Certified 🌱'}
                  </span>
                ) : (
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-stone-100 text-stone-600">
                    {isAr ? 'إنتاج محلي' : 'Local Crop'}
                  </span>
                )}
                <span className="text-[11px] text-stone-400">
                  {isAr ? `متوفر: ${prod.stock}` : `Stock: ${prod.stock}`}
                </span>
              </div>

              <h3 className="text-sm font-bold text-stone-900 mb-2 leading-snug group-hover:text-emerald-800 transition-colors">
                {isAr ? prod.title.ar : prod.title.en}
              </h3>

              <div className="flex items-center gap-1 text-xs text-stone-500 mb-4">
                <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                <span className="truncate">{isAr ? prod.farmOrigin.ar : prod.farmOrigin.en}</span>
              </div>
            </div>

            <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
              <div>
                <span className="text-lg font-extrabold text-stone-900">
                  {prod.price.toLocaleString('en-US')}
                </span>
                <span className="text-xs text-stone-500 mr-1 ml-1 font-bold">
                  {isAr ? 'ر.ي' : 'YER'}
                </span>
                <div className="text-[10px] text-stone-400 font-medium">
                  {isAr ? prod.unit.ar : prod.unit.en}
                </div>
              </div>

              <button
                onClick={() => setSelectedProduct(prod)}
                className="bg-emerald-700 hover:bg-emerald-800 text-white p-2 rounded-xl transition-all shadow-xs flex items-center justify-center"
                title={isAr ? 'طلب الشراء' : 'Order Now'}
              >
                <ShoppingCart className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Order Requisition Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-7 shadow-2xl border border-stone-200 relative animate-in zoom-in-95">
            <button
              onClick={() => setSelectedProduct(null)}
              className={`absolute top-5 text-stone-400 hover:text-stone-700 p-1 rounded-lg ${isAr ? 'left-5' : 'right-5'}`}
            >
              <X className="w-5 h-5" />
            </button>

            <form onSubmit={handlePlaceOrder} className="space-y-4">
              <div>
                <span className="text-xs font-bold text-emerald-700 uppercase">
                  {isAr ? 'طلب شراء مباشر من المزرعة' : 'Direct Farm Requisition'}
                </span>
                <h3 className="text-base font-bold text-stone-900 mt-1">
                  {isAr ? selectedProduct.title.ar : selectedProduct.title.en}
                </h3>
                <div className="text-xs text-stone-500 mt-0.5">
                  {isAr ? selectedProduct.farmOrigin.ar : selectedProduct.farmOrigin.en}
                </div>
              </div>

              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 space-y-2 text-xs">
                <div className="flex justify-between text-stone-600">
                  <span>{isAr ? 'سعر الوحدة:' : 'Unit Price:'}</span>
                  <span className="font-bold text-stone-900">
                    {selectedProduct.price.toLocaleString('en-US')} {isAr ? 'ر.ي' : 'YER'} / {isAr ? selectedProduct.unit.ar : selectedProduct.unit.en}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-stone-200">
                  <label className="font-semibold text-stone-700">
                    {isAr ? 'الكمية المطلوبة:' : 'Quantity:'}
                  </label>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setOrderQuantity(Math.max(1, orderQuantity - 1))}
                      className="w-7 h-7 rounded-lg bg-stone-200 hover:bg-stone-300 flex items-center justify-center font-bold"
                    >
                      -
                    </button>
                    <span className="w-8 text-center font-bold text-stone-900">{orderQuantity}</span>
                    <button
                      type="button"
                      onClick={() => setOrderQuantity(orderQuantity + 1)}
                      className="w-7 h-7 rounded-lg bg-stone-200 hover:bg-stone-300 flex items-center justify-center font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex justify-between pt-2 border-t border-stone-200 text-sm font-bold text-emerald-950">
                  <span>{isAr ? 'الإجمالي التقديري:' : 'Total Estimate:'}</span>
                  <span>{(selectedProduct.price * orderQuantity).toLocaleString('en-US')} {isAr ? 'ر.ي' : 'YER'}</span>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedProduct(null)}
                  className="px-4 py-2 rounded-lg text-xs font-semibold text-stone-600 hover:bg-stone-100"
                >
                  {isAr ? 'إلغاء' : 'Cancel'}
                </button>
                <button
                  type="submit"
                  className="bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-md transition-all flex items-center gap-2"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>{isAr ? 'تأكيد طلب الشراء' : 'Confirm Order'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
