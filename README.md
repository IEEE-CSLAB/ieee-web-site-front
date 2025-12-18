# IEEE Web Site Frontend

IEEE web sitesi için Next.js Frontend projesi. Bu proje modern web teknolojileri kullanılarak kullanıcı dostu ve performansı yüksek bir arayüz sunar.

## 🚀 Teknolojiler

- **Next.js 16.0** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **ESLint** & **Prettier**

## 📋 Özellikler

### Event Management UI
- Etkinliklerin listelenmesi (Grid/List görünümü)
- Detaylı etkinlik sayfaları
- Komite bazlı etkinlik filtreleme
- Önemli ve yaklaşan etkinlikler showcase
- Etkinlik galerileri entegrasyonu

### Blog Post UI
- Blog yazıları listeleme
- Zengin içerikli blog detay sayfası
- Kategori ve komite bazlı filtreleme
- Son blog yazılarını öne çıkarma

### Committee Pages
- Komitelerin tanıtım sayfaları
- Komite bazlı etkinlik ve blog yazılarının gösterimi
- Dinamik komite detay sayfaları

### Design & UX
- Responsive (Mobil Uyumlu) tasarım
- Modern UI bileşenleri (Glassmorphism, vb.)
- Hızlı sayfa geçişleri ve animasyonlar

## 📁 Proje Yapısı

```
IEEEFrontend/
├── app/                  # App Router Sayfaları ve Layout
├── components/           # UI Bileşenleri
│   ├── about/            # Hakkımızda sayfası bileşenleri
│   ├── blog/             # Blog sayfası bileşenleri
│   ├── committees/       # Komite sayfası bileşenleri
│   ├── common/           # Ortak kullanılan bileşenler
│   ├── home/             # Ana sayfa bileşenleri
│   └── layout/           # Header, Footer vb. yapılar
├── data/                 # Statik veriler ve sabitler
├── lib/                  # Yardımcı fonksiyonlar ve API istemcileri
├── public/               # Statik dosyalar (görseller, fontlar)
```

## 📚 Önemli Dökümantasyon

**🎨 Tasarım Sistemi Rehberi**: Kodlamaya başlamadan önce mutlaka okuyun!
- [TASARIM_SISTEMI.md](./TASARIM_SISTEMI.md) - Tailwind kullanımı, renkler, spacing ve sayfa bazında rehber

**⚠️ Başlamadan Önce**: 
- [components/BaslamadanOnce.md](./components/BaslamadanOnce.md) - Proje kuralları ve çalışma prensipleri

## 🛠️ Kurulum

### Gereksinimler

- Node.js 18.17 veya üzeri
- npm veya yarn

### Adımlar

1. **Repository'yi klonlayın**
   ```bash
   git clone https://github.com/IEEE-CSLAB/ieee-web-site-front.git
   cd ieee-web-site-front
   ```

2. **Bağımlılıkları yükleyin**
   ```bash
   npm install
   ```

3. **Çevre Değişkenlerini Ayarlayın**
   Ana dizinde `.env.local` dosyası oluşturun ve API adresini tanımlayın:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:5001/api
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

4. **Geliştirme Sunucusunu Başlatın**
   ```bash
   npm run dev
   ```

5. **Tarayıcıda Görüntüleyin**
   [http://localhost:3000](http://localhost:3000) adresine gidin.

## 📡 Backend Entegrasyonu

Bu proje, verileri çekmek için **IEEE Web Site Backend** projesine ihtiyaç duyar. Backend projesinin [README](https://github.com/IEEE-CSLAB/ieee-web-site-backend) dosyasındaki kurulum adımlarını takip ederek API'yi ayağa kaldırın.

---

Bu proje **IEEE CSLAB** organizasyonu altındadır.
