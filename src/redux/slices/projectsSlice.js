import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projects: [
    {
      id: 1,
      title: "Laboratuvar Doku Takip ve Üretim Yazılımı",
      description:
        "Laboratuvar ortamlarında gerçekleştirilen doku üretim süreçlerinin tüm aşamalarını dijital ortamda eksiksiz ve sistematik şekilde yöneten özel bir yazılımdır. Hücre ve doku örneklerinin takibinden başlayarak üretim planlaması, kalite kontrol, stok yönetimi gibi kritik süreçlerin tamamını entegre eder. Kullanıcı dostu arayüzü ve gelişmiş veri altyapısı sayesinde laboratuvar çalışanlarının iş yükünü azaltırken, hatasız ve izlenebilir bir üretim süreci sağlar. Ayrıca kapsamlı raporlama modülleriyle yöneticilere stratejik karar alma desteği sunar.",
    },
    {
      id: 2,
      title: "Alsancak Tarım Web Sitesi",
      description:
        "Alsancak Tarım’ın kurumsal kimliğini dijital platformda etkili biçimde yansıtan, kullanıcı deneyimini ön planda tutan mobil uyumlu ve modern bir web sitesidir. Firmanın hizmet portföyünü, ürün çeşitliliğini ve tarım sektöründeki uzmanlığını ziyaretçilere hızlı ve etkili şekilde sunar. Kolay kullanılabilir içerik yönetim sistemi sayesinde güncellemeler hızlı ve zahmetsiz yapılabilir. Aynı zamanda SEO optimizasyonlarıyla arama motorlarında güçlü bir görünürlük sağlar.",
      url: "https://alsancaktarim.com/",
    },
    {
      id: 3,
      title: "Mobil Uygulama",
      description:
        "İşletmelere özel olarak geliştirilen bu mobil uygulama, sahada çalışan ekiplerin merkezle anlık ve güvenilir veri alışverişi yapabilmesini mümkün kılar. Hem Android hem iOS platformlarında sorunsuz çalışan uygulama, veri girişi, görev takibi, raporlama ve bildirim alma gibi çok yönlü işlevleri tek bir kullanıcı dostu arayüzde toplar. Çevrimdışı çalışma desteği sayesinde internet erişiminin sınırlı olduğu ortamlarda bile kesintisiz operasyon sağlar ve saha verimliliğini artırır.",
    },
    {
      id: 4,
      title: "Doku ve Üretim Takip Sistemi Yazılımı",
      description:
        "Doku üretimi ve üretim proseslerinin her aşamasını detaylı şekilde izleyip kayıt altına alan masaüstü uygulamadır. Ürün bazında üretim süreçlerini, kalite kontrol noktalarını, stok durumlarını ve çalışan performans verilerini tek bir kontrol paneli üzerinden yönetebilme imkanı sağlar. Kapalı devre ve yüksek güvenlikli yapısıyla sadece yetkili personelin erişimine açıktır. Sektörel ihtiyaçlara göre kolayca özelleştirilebilen esnek altyapısıyla güçlü ve güvenilir bir çözüm sunar.",
    },
    {
      id: 5,
      title: "Sera Plastik İşletme ve Üretim Yazılımı",
      description:
        "Sera plastik üretimi yapan işletmeler için uçtan uca dijitalleşmiş bir üretim ve sevkiyat takip sistemidir. Hammadde girişinden nihai ürün çıkışına kadar tüm süreçleri kayıt altına alır, analiz eder ve optimize eder. İşletme kaynaklarının etkin yönetimini sağlayarak iş gücü ve zaman tasarrufu sunar. Kullanımı kolay ve sezgisel arayüzü ile operatörlerden yöneticilere kadar tüm kullanıcı gruplarına hitap eder. Ayrıca detaylı raporlama modülleri ile stratejik karar süreçlerine destek olur.",
    },
    {
      id: 6,
      title: "İşletme Yazılımı",
      description:
        "Küçükten büyüğe farklı ölçeklerdeki işletmelerin stok takibi, satış, satın alma, cari hesap yönetimi, üretim ve personel süreçlerini tek bir entegre platformda yönetmesini sağlayan kapsamlı bir yazılımdır. Departmanlar arasında güçlü veri akışı oluşturarak manuel iş yükünü azaltır ve verimliliği artırır. Kullanıcı rollerine göre yetkilendirme ve güvenlik önlemleri sayesinde hassas verilerin korunmasını garanti eder. Modüler yapısı sayesinde sektörel özel ihtiyaçlara kolayca adapte olur.",
    },
    {
      id: 7,
      title: "Hal Ardiye Bant Takip Yazılımı",
      description:
        "Sebze ve meyve hallerine özel olarak tasarlanmış bu yazılım, ardiye alanları ve bant sistemlerinden geçen tüm ürün hareketlerini detaylı şekilde izler, kayıt altına alır ve raporlar. Ürün giriş-çıkış takipleri, ardiye tahsilatları, sevkiyat planlaması ve ürün sınıflandırması gibi kritik süreçleri dijitalleştirerek hızlı ve hatasız veri yönetimi sağlar. Kapalı sistem yapısı ile yerel ağ üzerinde yüksek performans ve güvenlik sunar. Esnek raporlama modülleriyle yöneticilere güçlü analiz imkânı verir.",
    },
    {
      id: 8,
      title: "Deniz Araçları Üretim ve Takip Yazılımı",
      description:
        "Deniz araçları üretimi yapan işletmelere özel geliştirilen, üretim sürecinin başından sonuna kadar tüm verilerin detaylı kaydını tutan ve izlenmesini sağlayan kapsamlı yazılımdır. Malzeme yönetimi, iş emri takibi, kalite kontrol ve aşamalı üretim süreçleri ile üretim verimliliğini artırmayı hedefler. Proje bazlı çalışma yapısıyla her bir deniz aracı için ayrı takip ve belge yönetimi yapılmasına olanak tanır. Kullanıcı dostu arayüzü teknik ve idari ekiplerin süreçlere kolay hakimiyetini sağlar.",
    },
    {
      id: 9,
      title: "Makine Bakım Yazılımı",
      description:
        "Sanayi sektöründeki makinelerin bakım ve arıza yönetim süreçlerini etkin şekilde yöneten yazılımdır. Bakım planlarının oluşturulması, periyodik kontrollerin takibi ve geçmiş arızaların kaydı sayesinde beklenmedik duruşlar minimize edilir ve ekipmanların kullanım ömrü uzatılır. Bakım taleplerinin hızlı oluşturulması, ekipler arası koordinasyon ve gerçek zamanlı bildirim özellikleri ile teknik müdahalelerin zamanında yapılmasını destekler.",
    },
    {
      id: 10,
      title: "Termin ve İş Planı Yazılımı",
      description:
        "İşletmelerin proje ve üretim süreçlerinde termin planlarını etkili biçimde yönetmelerine yardımcı olan yazılımdır. Görevlerin süre, sorumlu kişi ve öncelik bazında planlanmasını sağlar. Gantt şemaları ve interaktif iş takvimleri ile kullanıcıların süreçlere kolay hakimiyetini destekler. Kaynak planlaması ve görev takibi özellikleriyle iş akışının kesintisiz sürdürülmesine katkıda bulunur. Ayrıca ekip içi iletişimi güçlendirerek gecikmelerin önlenmesine olanak tanır.",
    },
    {
      id: 11,
      title: "Kapı ve İşletme Yazılımı",
      description:
        "Kapı üretimi yapan işletmeler için siparişten teslimata kadar tüm üretim süreçlerini merkezi bir yapı altında yöneten kapsamlı bir yazılımdır. Model, ölçü, malzeme ve üretim aşamalarının detaylı takibini gerçekleştirir. Stok ve lojistik yönetimi modülleri tedarik zincirini optimize ederken, müşteri taleplerine göre üretim özelleştirmelerine olanak sağlar. Zaman ve maliyet tasarrufu sunar.",
    },
    {
      id: 12,
      title: "Plastik Yazılımı",
      description:
        "Plastik üretim firmalarının ihtiyaçları doğrultusunda geliştirilmiş, üretim hatlarının izlenmesi, reçete yönetimi, kalıp bilgileri ve üretim verilerinin detaylı takibini sağlayan yazılımdır. ",
    },
    {
      id: 13,
      title: "Araç Takip Yazılımı",
      description:
        "Şirket araçlarının konum, hız, kullanım alışkanlıkları ve bakım durumlarını gerçek zamanlı olarak izleyebilen kapsamlı bir filo yönetim yazılımıdır. GPS tabanlı konum takibi sayesinde rotaların efektif izlenmesini sağlar. Bakım, yakıt tüketimi gibi operasyonel verileri analiz ederek yöneticilerin araç performansını değerlendirmesine ve maliyetleri azaltacak stratejiler geliştirmesine olanak tanır.",
    },
  ],
};

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    // Proje ekleme, silme, güncelleme gibi işlemler eklenebilir
  },
});

export default projectsSlice.reducer;
