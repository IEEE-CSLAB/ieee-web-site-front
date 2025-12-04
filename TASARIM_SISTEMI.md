# Tasarım Sistemi ve Tailwind Kullanım Rehberi

## 📋 Genel Kurallar

- **Her sayfa için kendi klasöründe componentler oluşturun**
- **Sadece size atanan componentleri düzenleyin** (conflict önlemek için)
- **Tutarlılık için aşağıdaki renk ve spacing değerlerini kullanın**

---

## 🎨 Renkler (globals.css'de tanımlı)

### Ana Renkler
- **Primary (IEEE Mavisi)**: `bg-primary`, `text-primary`
- **Background**: `bg-background`
- **Foreground (Metin)**: `text-foreground`

### Vurgu Renkleri
- **Yeşil**: `bg-accent-green`, `text-accent-green`
- **Sarı**: `bg-accent-yellow`, `text-accent-yellow`
- **Mavi**: `bg-accent-blue`, `text-accent-blue`

### Yardımcı Renkler
- **Secondary**: `bg-secondary`, `text-secondary`
- **Muted (Yumuşak)**: `bg-muted`, `text-muted-foreground`
- **Card**: `bg-card`, `text-card-foreground`

### Durum Renkleri
- **Success**: `bg-success`, `text-success`
- **Warning**: `bg-warning`, `text-warning`
- **Error**: `bg-destructive`, `text-destructive`

---

## 📏 Spacing (Boşluklar)

### Kartlar için
- **Kart içi padding**: `p-6` (1.5rem / 24px)
- **Kartlar arası boşluk**: `gap-6` (1.5rem / 24px)

### Bölümler için
- **Bölümler arası boşluk**: `section-spacing` class'ı kullanın
- **Container padding**: `container-custom` class'ı otomatik hallediyor

### Genel Tailwind Spacing
- Küçük: `p-2`, `m-2` (0.5rem / 8px)
- Orta: `p-4`, `m-4` (1rem / 16px)
- Büyük: `p-6`, `m-6` (1.5rem / 24px)
- Çok Büyük: `p-8`, `m-8` (2rem / 32px)

---

## 🔲 Border Radius (Yuvarlatılmış Köşeler)

- **Kartlar**: `rounded-2xl` (1rem / 16px)
- **Küçük öğeler**: `rounded-lg` (0.5rem / 8px)
- **Butonlar**: `rounded-xl` (1rem / 16px) veya `rounded-full` (tam yuvarlak)

---

## 📦 Hazır Component Class'ları

### Container
```tsx
<div className="container-custom">
  {/* İçerik */}
</div>
```
- Merkezlenmiş, maksimum genişlik 1200px
- Otomatik padding ekler

### Section (Bölüm)
```tsx
<section className="section-spacing">
  {/* İçerik */}
</section>
```
- Bölümler arası tutarlı boşluk
- Mobilde otomatik küçülür

### Card (Kart)
```tsx
<div className="card">
  {/* İçerik */}
</div>
```

Hover efekti için:
```tsx
<div className="card card-hover">
  {/* İçerik */}
</div>
```

### Butonlar
```tsx
<button className="btn btn-primary">Primary Buton</button>
<button className="btn btn-secondary">Secondary Buton</button>
<button className="btn btn-outline">Outline Buton</button>
```

### Başlıklar
```tsx
<h1 className="heading-1">Ana Başlık</h1>
<h2 className="heading-2">Alt Başlık</h2>
<h3 className="heading-3">Küçük Başlık</h3>
```

---

## 📄 Sayfa Bazında Kullanım Rehberi

### 🏠 Ana Sayfa (Home/Index)
**Kullanılacaklar:**
- Hero section: `bg-primary` veya gradient arka plan
- Büyük başlık: `heading-1` + `text-white` (koyu arka plan üzerinde)
- CTA butonları: `btn btn-primary` veya `btn btn-outline`
- Kartlar: `card card-hover` (özellikler, hizmetler için)
- Container: `container-custom`

**Örnek Yapı:**
- Hero bölümü (büyük görsel + metin)
- Welcome/About bölümü (kartlar ile)
- Facilities bölümü (kart grid'i)
- CTA bölümü

---

### 📖 About Sayfası
**Kullanılacaklar:**
- Başlık: `heading-1` veya `heading-2`
- Metin: `text-foreground` (varsayılan)
- İkincil metin: `text-muted-foreground`
- Kartlar: `card` (misyon, vizyon, değerler için)
- Container: `container-custom`
- Section: `section-spacing`

**Örnek Yapı:**
- Hero/Header bölümü
- Misyon bölümü (kart)
- Vizyon bölümü (kart)
- Takım bölümü (kart grid'i)
- Değerler bölümü (ikonlar + kartlar)

---

### 👥 Committees Sayfası
**Kullanılacaklar:**
- Başlık: `heading-2`
- Komite kartları: `card card-hover` (grid layout)
- Renk vurguları: Her komite için farklı `accent-green`, `accent-yellow`, `accent-blue`
- Container: `container-custom`
- Grid: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`

**Örnek Yapı:**
- Başlık bölümü
- Komite kartları grid'i
- Her kart: görsel + başlık + açıklama + buton

---

### 📅 Events Sayfası
**Kullanılacaklar:**
- Başlık: `heading-2`
- Etkinlik kartları: `card card-hover`
- Tarih badge: `bg-primary text-primary-foreground rounded-lg px-3 py-1`
- Durum badge: `bg-success` (yaklaşan), `bg-muted` (geçmiş)
- Container: `container-custom`
- Grid veya liste: `flex flex-col gap-6` veya `grid`

**Örnek Yapı:**
- Filtre bölümü (yaklaşan/geçmiş)
- Etkinlik listesi/grid'i
- Her etkinlik kartı: görsel + tarih + başlık + açıklama + buton

---

## 🎯 Genel Tailwind Kullanım İpuçları

### Layout
- **Flexbox**: `flex`, `flex-col`, `items-center`, `justify-between`
- **Grid**: `grid`, `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- **Gap**: `gap-4`, `gap-6` (öğeler arası boşluk)

### Responsive
- **Mobil**: Varsayılan (ön ek yok)
- **Tablet**: `md:` öneki (768px+)
- **Desktop**: `lg:` öneki (1024px+)
- **Büyük ekran**: `xl:` öneki (1280px+)

**Örnek:**
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
```

### Typography
- **Font weight**: `font-normal`, `font-medium`, `font-semibold`, `font-bold`
- **Font size**: `text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl`
- **Line height**: `leading-tight`, `leading-normal`, `leading-relaxed`

### Shadows
- **Kartlar**: `shadow-sm` veya `shadow-md`
- **Hover**: `hover:shadow-lg`

### Transitions
- **Smooth**: `transition-all duration-300`
- **Hover effects**: `hover:scale-105`, `hover:opacity-80`

---

## ⚠️ Önemli Notlar

1. **Renkleri değiştirmeyin**: `globals.css`'deki renk değişkenlerini kullanın
2. **Spacing tutarlılığı**: `p-6`, `gap-6` gibi değerleri tercih edin
3. **Responsive düşünün**: Her zaman mobil-first yaklaşım
4. **Card kullanımı**: İçerik blokları için `card` class'ını kullanın
5. **Container**: Her sayfa `container-custom` ile başlamalı

---

## 🚀 Hızlı Başlangıç Örneği

```tsx
// Basit bir sayfa yapısı
export default function PageName() {
  return (
    <div className="container-custom section-spacing">
      <h1 className="heading-1 text-primary mb-6">Başlık</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="card card-hover">
          <h3 className="heading-3 mb-4">Kart Başlığı</h3>
          <p className="text-muted-foreground">Açıklama metni</p>
          <button className="btn btn-primary mt-4">Buton</button>
        </div>
      </div>
    </div>
  );
}
```

---

## 📚 Ek Kaynaklar

- [Tailwind CSS Dokümantasyonu](https://tailwindcss.com/docs)
- `globals.css` dosyasındaki tüm tanımlar
- Örnek tasarım görseli (Velocity Club benzeri)

---

**Sorularınız için:** Tasarım sistemi ile ilgili sorularınızı takım liderine iletin.

