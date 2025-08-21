
import React, { useMemo, useState } from "react";
import { ShoppingCart, Phone, Search, Globe, MapPin, Clock, Truck, Percent } from "lucide-react";
import { motion } from "framer-motion";

const CATEGORIES = [
  { key: "spices", name_en: "Spices", name_ar: "بهارات", img: "https://images.unsplash.com/photo-1543339520-5c4aa4b7bb3f?q=80&w=1200&auto=format&fit=crop" },
  { key: "rice", name_en: "Rice & Grains", name_ar: "أرز وحبوب", img: "https://images.unsplash.com/photo-1615485737651-6f6a4d2f9b19?q=80&w=1200&auto=format&fit=crop" },
  { key: "dates", name_en: "Dates", name_ar: "تمر", img: "https://images.unsplash.com/photo-1604152135912-04a724de2176?q=80&w=1200&auto=format&fit=crop" },
  { key: "produce", name_en: "Fresh Produce", name_ar: "خضار وفواكه", img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200&auto=format&fit=crop" },
  { key: "bakery", name_en: "Bakery", name_ar: "مخبوزات", img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop" },
  { key: "beverages", name_en: "Beverages", name_ar: "مشروبات", img: "https://images.unsplash.com/photo-1541976076758-347942db1978?q=80&w=1200&auto=format&fit=crop" },
];

const PRODUCTS = [
  { id: 1, name_en: "Premium Basmati Rice 5kg", name_ar: "أرز بسمتي ممتاز 5كج", price: 39.0, img: "https://images.unsplash.com/photo-1606857521015-7f9fcf6f17b5?q=80&w=1200&auto=format&fit=crop", tag: "Best Seller" },
  { id: 2, name_en: "Ajwa Dates 1kg", name_ar: "تمر عجوة 1كج", price: 52.0, img: "https://images.unsplash.com/photo-1604908554007-1d4a1a278e64?q=80&w=1200&auto=format&fit=crop", tag: "Fresh" },
  { id: 3, name_en: "Garam Masala 200g", name_ar: "جرام ماسالا 200غ", price: 12.0, img: "https://images.unsplash.com/photo-1626133838367-a13ff2f0f2b2?q=80&w=1200&auto=format&fit=crop", tag: "New" },
  { id: 4, name_en: "Saffron 1g", name_ar: "زعفران 1غ", price: 29.0, img: "https://images.unsplash.com/photo-1584367369853-8b966cf2235d?q=80&w=1200&auto=format&fit=crop", tag: "Limited" },
];

export default function App() {
  const [lang, setLang] = useState("en");
  const dir = useMemo(() => (lang === "ar" ? "rtl" : "ltr"), [lang]);

  const t = useMemo(() => {
    const i18n = {
      en: {
        brand: "Indo&Arab Supermarket",
        tagline: "Where India meets Arabia",
        search: "Search products…",
        nav: { home: "Home", shop: "Shop", deals: "Deals", contact: "Contact" },
        categories: "Shop by Category",
        featured: "Featured Deals",
        delivery: "Fast delivery across Doha",
        hours: "Open daily 8:00 – 23:00",
        visit: "Visit us",
        whatsapp: "Order on WhatsApp",
        viewAll: "View all",
        language: "العربية",
        address: "Barwa Village, Doha, Qatar",
        rights: "All rights reserved.",
      },
      ar: {
        brand: "سوبرماركت إندو وآراب",
        tagline: "حيث تلتقي الهند بالعالم العربي",
        search: "ابحث عن المنتجات…",
        nav: { home: "الرئيسية", shop: "تسوق", deals: "العروض", contact: "تواصل" },
        categories: "تسوق حسب الفئة",
        featured: "عروض مميزة",
        delivery: "توصيل سريع داخل الدوحة",
        hours: "مفتوح يوميًا 8:00 – 23:00",
        visit: "زورونا",
        whatsapp: "اطلب عبر واتساب",
        viewAll: "عرض الكل",
        language: "English",
        address: "قرية بروة، الدوحة، قطر",
        rights: "جميع الحقوق محفوظة.",
      },
    };
    return i18n[lang];
  }, [lang]);

  return (
    <div className="min-h-screen bg-amber-50" dir={dir}>
      <div className="w-full bg-amber-900 text-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-2"><Truck size={16} />{t.delivery}</span>
            <span className="hidden sm:inline-flex items-center gap-2"><Clock size={16} />{t.hours}</span>
          </div>
          <button onClick={() => setLang(lang === "en" ? "ar" : "en")} className="inline-flex items-center gap-2 hover:opacity-90">
            <Globe size={16} /> {t.language}
          </button>
        </div>
      </div>

      <header className="bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-amber-600 grid place-content-center text-white"><ShoppingCart size={20} /></div>
            <div className="font-extrabold text-xl sm:text-2xl tracking-tight text-emerald-900">{t.brand}</div>
          </div>
          <nav className="ml-auto hidden md:flex items-center gap-6 text-emerald-900/90">
            <a className="hover:text-amber-700" href="#home">{t.nav.home}</a>
            <a className="hover:text-amber-700" href="#shop">{t.nav.shop}</a>
            <a className="hover:text-amber-700" href="#deals">{t.nav.deals}</a>
            <a className="hover:text-amber-700" href="#contact">{t.nav.contact}</a>
          </nav>
        </div>
      </header>

      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-100/60 to-amber-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl sm:text-5xl font-extrabold text-emerald-900 leading-tight">
              {t.tagline}
            </motion.h1>
            <p className="mt-3 text-emerald-950/70 max-w-xl">
              Authentic Indian staples and beloved Arabic goods in one market. Fresh produce, premium rice & grains, dates, spices, and more.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="relative flex-1 max-w-lg">
                <Search className="absolute top-1/2 -translate-y-1/2 start-3" size={18} />
                <input className="w-full ps-10 pe-4 py-3 rounded-2xl border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-300 bg-white" placeholder={t.search} />
              </div>
              <a href="https://wa.me/97400000000" target="_blank" className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl bg-emerald-700 text-white hover:bg-emerald-800">
                <Phone size={18} /> {t.whatsapp}
              </a>
            </div>

            <div className="mt-6 flex items-center gap-4 text-amber-800/80">
              <div className="inline-flex items-center gap-2"><Percent size={18}/> Weekly offers</div>
              <div className="inline-flex items-center gap-2"><MapPin size={18}/> {t.address}</div>
            </div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="md:ms-auto">
            <div className="aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-xl ring-1 ring-amber-200">
              <img alt="hero" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1509358271058-acd22cc93898?q=80&w=1600&auto=format&fit=crop"/>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="shop" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-emerald-900">{t.categories}</h2>
          <a href="#" className="text-amber-800 hover:underline">{t.viewAll}</a>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {CATEGORIES.map((c) => (
            <motion.a whileHover={{ y: -4 }} key={c.key} href={`#cat-${c.key}`} className="group rounded-3xl overflow-hidden shadow hover:shadow-lg ring-1 ring-amber-200 bg-white">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img alt={c.name_en} src={c.img} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"/>
              </div>
              <div className="p-4 flex items-center justify-between">
                <div className="font-semibold text-emerald-900">{lang === "en" ? c.name_en : c.name_ar}</div>
                <span className="text-amber-700 text-sm">Explore →</span>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      <section id="deals" className="bg-white/70 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-emerald-900 mb-6">{t.featured}</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
            {PRODUCTS.map((p) => (
              <motion.div whileHover={{ y: -4 }} key={p.id} className="rounded-3xl overflow-hidden bg-white shadow ring-1 ring-amber-200">
                <div className="aspect-square overflow-hidden">
                  <img alt={p.name_en} src={p.img} className="w-full h-full object-cover"/>
                </div>
                <div className="p-4">
                  <div className="text-sm text-amber-700 mb-1">{p.tag}</div>
                  <div className="font-semibold text-emerald-900">{lang === "en" ? p.name_en : p.name_ar}</div>
                  <div className="mt-2 flex items-center justify-between">
                    <div className="text-emerald-900 font-bold">QAR {p.price.toFixed(2)}</div>
                    <button className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-amber-600 text-white hover:bg-amber-700">
                      <ShoppingCart size={16}/> Add
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl bg-gradient-to-br from-emerald-800 to-emerald-600 text-emerald-50 p-6">
            <h3 className="text-xl font-bold mb-2">{t.visit}</h3>
            <p className="opacity-90 flex items-center gap-2"><MapPin size={18}/> {t.address}</p>
            <p className="mt-2 opacity-90 flex items-center gap-2"><Clock size={18}/> {t.hours}</p>
            <a href="https://wa.me/97400000000" className="mt-4 inline-flex items-center gap-2 px-4 py-3 rounded-2xl bg-amber-500 text-emerald-950 hover:bg-amber-400">
              <Phone size={18}/> {t.whatsapp}
            </a>
          </div>
          <div className="rounded-3xl overflow-hidden ring-1 ring-amber-200 bg-white">
            <iframe
              title="map"
              className="w-full h-72"
              loading="lazy"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.207049170676!2d51.530!3d25.215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDEyJzU0LjAiTiA1McKwMzEnNDguMCJF!5e0!3m2!1sen!2sqa!4v1700000000000"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <footer className="border-t bg-white/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-sm text-emerald-900/80 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} {t.brand}. {t.rights}</div>
          <div className="flex items-center gap-4">
            <a className="hover:text-amber-700" href="#">Privacy</a>
            <a className="hover:text-amber-700" href="#">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
