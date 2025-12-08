export interface Blog {
    id: number;
    title: string;
    description: string;
    category: string;
    image: string;
    date: string;
    author?: string;
    link?: string;
    className?: string;
    isImportant?: boolean;
    content?: string;
}

export const blogs: Blog[] = [
    {
        id: 1,
        title: "Yapay Zeka ve Gelecek",
        description: "Yapay zeka teknolojilerinin gelecekteki rolü ve mühendislik alanındaki etkileri hakkında kapsamlı bir analiz. Makine öğrenmesi, derin öğrenme ve yapay zeka uygulamalarının endüstriye etkileri.",
        category: "Teknoloji",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        date: "15 Mart 2024",
        author: "IEEE Akdeniz",
        isImportant: true,
        content: `Yapay zeka (AI), son yıllarda teknoloji dünyasında en hızlı gelişen alanlardan biri haline geldi. Makine öğrenmesi, derin öğrenme ve doğal dil işleme gibi teknolojiler, günlük hayatımızı ve iş dünyasını köklü bir şekilde değiştiriyor.

## Yapay Zekanın Günümüzdeki Rolü

Yapay zeka teknolojileri, sağlık sektöründen finans sektörüne, otomotiv endüstrisinden eğitim alanına kadar pek çok sektörde devrim niteliğinde değişikliklere neden oluyor. Özellikle makine öğrenmesi algoritmaları, büyük veri setlerini analiz ederek insan zekasının ötesinde sonuçlar üretebiliyor.

## Gelecek Perspektifleri

Gelecekte yapay zeka teknolojilerinin daha da gelişmesi bekleniyor. Özellikle:

- **Otonom Sistemler**: Kendi kendine karar verebilen ve öğrenebilen sistemler
- **Kişiselleştirilmiş Deneyimler**: Her kullanıcı için özel çözümler
- **Etik ve Güvenlik**: AI'nın sorumlu kullanımı ve güvenlik standartları

## Mühendislik Alanındaki Etkileri

Mühendislik alanında yapay zeka, tasarım süreçlerini optimize ediyor, üretim hatlarını iyileştiriyor ve kalite kontrol sistemlerini geliştiriyor. Özellikle endüstriyel otomasyon ve akıllı fabrikalar, AI teknolojilerinin en belirgin uygulama alanları arasında yer alıyor.

IEEE olarak, yapay zeka teknolojilerinin etik ve sorumlu bir şekilde geliştirilmesi için çalışmalar yürütüyoruz. Geleceğin mühendisleri olarak, bu teknolojileri anlamak ve doğru bir şekilde kullanmak bizim sorumluluğumuz.`
    },
    {
        id: 2,
        title: "IEEE'de Kariyer Yolculuğu",
        description: "IEEE üyeliğinin kariyerinize nasıl katkı sağlayacağı ve hangi fırsatları sunacağı hakkında detaylı bilgiler. Networking, sertifikasyon ve kariyer gelişim fırsatları.",
        category: "Kariyer",
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        date: "22 Mart 2024",
        author: "IEEE Akdeniz",
        isImportant: true,
        content: `IEEE üyeliği, mühendislik ve teknoloji alanında kariyer yapmak isteyen herkes için büyük fırsatlar sunuyor. Bu yazıda, IEEE'nin kariyerinize nasıl katkı sağlayabileceğini detaylı bir şekilde ele alacağız.

## Networking Fırsatları

IEEE, dünya çapında 400.000'den fazla üyeye sahip bir organizasyon. Bu geniş ağ sayesinde:

- Sektör profesyonelleriyle tanışma fırsatı
- Mentorluk programlarına katılım
- Uluslararası konferanslarda networking
- Yerel ve global etkinliklere erişim

## Sertifikasyon Programları

IEEE, çeşitli sertifikasyon programları sunuyor:

- **IEEE Professional Development**: Sürekli eğitim ve gelişim programları
- **IEEE Certificates**: Özel konularda sertifikasyon
- **Continuing Education Units (CEUs)**: Profesyonel gelişim kredileri

## Kariyer Gelişim Fırsatları

IEEE üyeliği ile:

- İş ilanlarına öncelikli erişim
- Kariyer danışmanlığı hizmetleri
- CV ve özgeçmiş geliştirme desteği
- Endüstri trendleri ve araştırmalarına erişim

## IEEE Öğrenci Kolu Avantajları

Öğrenci üyeler için özel avantajlar:

- Komite üyeliği ve liderlik fırsatları
- Proje geliştirme ve yarışmalara katılım
- Staj ve iş imkanları
- Akademik ve profesyonel gelişim desteği

IEEE üyeliği, kariyerinizde önemli bir adım. Hem teknik bilginizi geliştirmek hem de profesyonel ağınızı genişletmek için IEEE'ye katılın!`
    },
    {
        id: 3,
        title: "Robotik ve Otomasyon",
        description: "Modern robotik sistemler ve endüstriyel otomasyonun mühendislik dünyasındaki yeri. Endüstri 4.0 ve akıllı fabrikaların geleceği.",
        category: "Mühendislik",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        date: "5 Nisan 2024",
        author: "IEEE Akdeniz",
        content: `Robotik ve otomasyon, modern mühendisliğin en dinamik alanlarından biri. Bu yazıda, robotik sistemlerin gelişimi ve endüstriyel uygulamalarını ele alacağız.

## Modern Robotik Sistemler

Günümüzde robotik sistemler, sadece üretim hatlarında değil, sağlık, tarım, lojistik ve hizmet sektörlerinde de yaygın olarak kullanılıyor. Sensör teknolojileri, yapay zeka entegrasyonu ve makine öğrenmesi sayesinde robotlar, giderek daha akıllı ve bağımsız hale geliyor.

## Endüstri 4.0 ve Akıllı Fabrikalar

Endüstri 4.0, üretim süreçlerinin dijitalleşmesi ve otomasyonu anlamına geliyor. Akıllı fabrikalarda:

- IoT sensörleri ile gerçek zamanlı veri toplama
- Yapay zeka destekli karar verme sistemleri
- Otonom robotlar ve AGV'ler
- Bulut tabanlı üretim yönetimi

## Gelecek Trendleri

Robotik alanındaki gelecek trendleri:

- **Collaborative Robots (Cobots)**: İnsanlarla birlikte çalışan robotlar
- **Soft Robotics**: Esnek ve uyumlu robotik sistemler
- **Swarm Robotics**: Birbirleriyle koordine çalışan robot grupları
- **AI-Powered Robotics**: Yapay zeka destekli öğrenen robotlar

Robotik ve otomasyon, mühendislik kariyeri için çok önemli bir alan. IEEE olarak, bu alandaki gelişmeleri takip ediyor ve öğrencilerimizi destekliyoruz.`
    },
    {
        id: 4,
        title: "Web3 ve Blockchain",
        description: "Blockchain teknolojisi ve Web3'ün gelecekteki uygulamaları hakkında güncel gelişmeler. DeFi, NFT ve merkezi olmayan uygulamalar.",
        category: "Teknoloji",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        date: "10 Nisan 2024",
        author: "IEEE Akdeniz",
        content: `Web3 ve blockchain teknolojileri, internetin geleceğini şekillendiriyor. Bu yazıda, bu teknolojilerin temellerini ve uygulama alanlarını inceleyeceğiz.

## Blockchain Teknolojisinin Temelleri

Blockchain, dağıtık bir defter teknolojisi olarak, verilerin güvenli ve şeffaf bir şekilde saklanmasını sağlıyor. Her blok, önceki bloğa kriptografik olarak bağlı, bu da veri bütünlüğünü garanti ediyor.

## Web3 ve Merkezi Olmayan Uygulamalar

Web3, merkezi olmayan bir internet vizyonu. Bu vizyonun temel bileşenleri:

- **DeFi (Decentralized Finance)**: Merkezi olmayan finansal sistemler
- **NFT (Non-Fungible Tokens)**: Benzersiz dijital varlıklar
- **DAOs (Decentralized Autonomous Organizations)**: Merkezi olmayan özerk organizasyonlar
- **Smart Contracts**: Otomatik çalışan sözleşmeler

## Uygulama Alanları

Blockchain teknolojisi:

- Finansal hizmetler
- Tedarik zinciri yönetimi
- Dijital kimlik doğrulama
- Oylama sistemleri
- Fikri mülkiyet koruması

## Gelecek Perspektifleri

Web3 ve blockchain teknolojileri hala gelişim aşamasında. Önümüzdeki yıllarda:

- Ölçeklenebilirlik sorunlarının çözülmesi
- Enerji verimliliğinin artırılması
- Daha kullanıcı dostu arayüzler
- Yaygın benimsenme

IEEE olarak, blockchain teknolojilerinin etik ve güvenli kullanımı için standartlar geliştiriyoruz.`
    },
    {
        id: 5,
        title: "Sürdürülebilir Enerji Çözümleri",
        description: "Yenilenebilir enerji kaynakları ve sürdürülebilir teknolojilerin önemi. Güneş, rüzgar ve hidroelektrik enerji sistemleri.",
        category: "Mühendislik",
        image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        date: "20 Nisan 2024",
        author: "IEEE Akdeniz",
        content: `Sürdürülebilir enerji çözümleri, geleceğimiz için kritik öneme sahip. Bu yazıda, yenilenebilir enerji kaynakları ve teknolojilerini inceleyeceğiz.

## Yenilenebilir Enerji Kaynakları

Güneş, rüzgar, hidroelektrik ve jeotermal enerji gibi kaynaklar, sürdürülebilir bir gelecek için vazgeçilmez. Bu kaynaklar:

- Çevre dostu ve temiz
- Tükenmeyen kaynaklar
- Düşük işletme maliyetleri
- Yerel kaynak kullanımı

## Güneş Enerjisi Sistemleri

Fotovoltaik (PV) sistemler ve güneş termal teknolojileri, en yaygın kullanılan yenilenebilir enerji çözümleri arasında. Modern güneş panelleri, verimlilik açısından sürekli gelişiyor.

## Rüzgar Enerjisi

Rüzgar türbinleri, özellikle kıyı bölgelerinde etkili bir enerji kaynağı. Offshore rüzgar çiftlikleri, geleceğin enerji altyapısının önemli bir parçası.

## Sürdürülebilir Gelecek

IEEE olarak, sürdürülebilir enerji teknolojilerinin geliştirilmesi ve yaygınlaştırılması için çalışıyoruz.`
    },
    {
        id: 6,
        title: "IEEE Etkinliklerinden Notlar",
        description: "Son düzenlediğimiz etkinliklerden öne çıkan anlar ve katılımcıların deneyimleri. Konferanslar, workshoplar ve networking etkinlikleri.",
        category: "Etkinlik",
        image: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        date: "28 Nisan 2024",
        author: "IEEE Akdeniz",
        content: `IEEE Akdeniz Üniversitesi olarak düzenlediğimiz etkinliklerden öne çıkan anları sizlerle paylaşıyoruz.

## Konferanslar

Bu dönem düzenlediğimiz konferanslarda, sektörün önde gelen isimleriyle bir araya geldik. Teknoloji, mühendislik ve inovasyon konularında değerli bilgiler paylaşıldı.

## Workshoplar

Hands-on workshoplarımızda, katılımcılar pratik deneyim kazandı. Robotik, yazılım geliştirme ve IoT gibi konularda uygulamalı eğitimler düzenlendi.

## Networking Etkinlikleri

Networking etkinliklerimiz, öğrenciler ve profesyoneller arasında köprü kurdu. Kariyer fırsatları ve iş birliği imkanları değerlendirildi.

## Katılımcı Geri Bildirimleri

Etkinliklerimize katılan öğrencilerden aldığımız geri bildirimler, gelecek etkinliklerimizi şekillendirmemize yardımcı oluyor.`
    },
    {
        id: 7,
        title: "Startup Ekosistemi",
        description: "Teknoloji startup'ları ve girişimcilik ekosistemindeki son gelişmeler. Yatırım trendleri ve başarı hikayeleri.",
        category: "Girişimcilik",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        date: "8 Mayıs 2024",
        author: "IEEE Akdeniz",
        content: `Startup ekosistemi, teknoloji dünyasının en dinamik alanlarından biri. Bu yazıda, girişimcilik dünyasındaki son gelişmeleri ele alacağız.

## Teknoloji Startup'ları

Yapay zeka, blockchain, IoT ve SaaS gibi alanlarda faaliyet gösteren startup'lar, ekosistemin lokomotifi. Bu şirketler, inovasyon ve istihdam yaratıyor.

## Yatırım Trendleri

Venture capital ve angel yatırımları, teknoloji startup'larının büyümesinde kritik rol oynuyor. Son dönemde özellikle deep tech ve sustainability odaklı startup'lar öne çıkıyor.

## Başarı Hikayeleri

IEEE öğrenci üyelerimizden çıkan başarılı startup hikayeleri, girişimcilik yolculuğunda ilham veriyor. Bu hikayeler, mühendislik eğitimi ve girişimcilik arasındaki bağlantıyı gösteriyor.

## IEEE Girişimcilik Desteği

IEEE olarak, öğrenci girişimcilerine mentorluk, networking ve kaynak desteği sağlıyoruz.`
    },
    {
        id: 8,
        title: "IEEE Standartları ve İnovasyon",
        description: "IEEE standartlarının teknoloji dünyasındaki rolü ve inovasyona katkıları. Endüstri standartları ve uyumluluk.",
        category: "Teknoloji",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        date: "15 Mayıs 2024",
        author: "IEEE Akdeniz",
        content: `IEEE standartları, teknoloji dünyasının temel taşlarından biri. Bu yazıda, standartların rolünü ve inovasyona katkılarını inceleyeceğiz.

## IEEE Standartlarının Önemi

IEEE standartları, teknolojilerin uyumluluğunu, güvenliğini ve kalitesini garanti ediyor. Bu standartlar, endüstri genelinde kabul görmüş spesifikasyonlar içeriyor.

## İnovasyona Katkılar

Standartlar, inovasyonu destekliyor çünkü:

- Teknoloji geliştiricilerine net yönergeler sağlıyor
- Uyumluluk sorunlarını çözüyor
- Pazar büyümesini hızlandırıyor
- Yeni teknolojilerin benimsenmesini kolaylaştırıyor

## Endüstri Uyumluluğu

IEEE standartları, farklı üreticilerin ürünlerinin birbirleriyle uyumlu çalışmasını sağlıyor. Bu, tüketiciler ve endüstri için büyük bir avantaj.

## Gelecek Standartları

Yapay zeka, IoT, blockchain ve kuantum hesaplama gibi yeni teknolojiler için standartlar geliştirilmeye devam ediyor.`
    }
];

// Geri kalan bloglar için varsayılan içerik
const remainingBlogs = [
    { id: 9, title: "Siber Güvenlik ve Veri Koruma", category: "Teknoloji", date: "22 Mayıs 2024" },
    { id: 10, title: "Mobil Uygulama Geliştirme", category: "Teknoloji", date: "30 Mayıs 2024" },
    { id: 11, title: "Bulut Bilişim ve DevOps", category: "Mühendislik", date: "5 Haziran 2024" },
    { id: 12, title: "IEEE Öğrenci Kolu Rehberi", category: "Kariyer", date: "12 Haziran 2024", isImportant: true },
    { id: 13, title: "IoT ve Akıllı Şehirler", category: "Mühendislik", date: "18 Haziran 2024" },
    { id: 14, title: "Veri Bilimi ve Makine Öğrenmesi", category: "Teknoloji", date: "25 Haziran 2024" },
    { id: 15, title: "IEEE Konferanslarına Katılım", category: "Kariyer", date: "2 Temmuz 2024" },
    { id: 16, title: "5G ve Gelecek Nesil İletişim", category: "Teknoloji", date: "10 Temmuz 2024" },
    { id: 17, title: "Yazılım Mimarisi ve Tasarım Desenleri", category: "Mühendislik", date: "17 Temmuz 2024" },
    { id: 18, title: "IEEE Projeleri ve Yarışmaları", category: "Etkinlik", date: "24 Temmuz 2024" },
    { id: 19, title: "Kuantum Hesaplama", category: "Teknoloji", date: "1 Ağustos 2024" },
    { id: 20, title: "IEEE Üyelik Avantajları", category: "Kariyer", date: "8 Ağustos 2024", isImportant: true },
    { id: 21, title: "Otonom Araçlar ve Sürücüsüz Teknoloji", category: "Mühendislik", date: "15 Ağustos 2024" },
    { id: 22, title: "Dijital Dönüşüm ve Endüstri 4.0", category: "Mühendislik", date: "22 Ağustos 2024" },
    { id: 23, title: "IEEE Mentorluk Programı", category: "Kariyer", date: "29 Ağustos 2024" },
    { id: 24, title: "Yapay Zeka Etik ve Sorumluluk", category: "Teknoloji", date: "5 Eylül 2024" }
];

remainingBlogs.forEach(blog => {
    blogs.push({
        ...blog,
        description: `${blog.title} hakkında detaylı bilgiler ve içgörüler.`,
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        author: "IEEE Akdeniz",
        content: `${blog.title} konusunda detaylı içerik burada yer alacak. Bu blog yazısı, konu hakkında kapsamlı bilgiler ve analizler içermektedir.`
    });
});

export function getBlogById(id: number): Blog | undefined {
    return blogs.find(blog => blog.id === id);
}

