import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projects: [
    {
      id: 1,
      title: "Laboratuvar Doku Takip ve Üretim Yazılımı",
      description:
        "Doku üretim süreçlerini dijitalleştirir, takip ve planlama sağlar.",
    },
    {
      id: 2,
      title: "Alsancak Tarım Web Sitesi",
      description:
        "Tarım firmasının mobil uyumlu, kolay güncellenebilir kurumsal web sitesi.",
    },
    {
      id: 3,
      title: "Mobil Uygulama",
      description:
        "Saha ekipleri için veri girişi, raporlama ve görev takibi sağlayan mobil uygulama.",
    },
    {
      id: 4,
      title: "Doku ve Üretim Takip Sistemi Yazılımı",
      description:
        "Masaüstü uygulama ile üretim süreçlerini, kalite ve stok takibini yönetir.",
    },
    {
      id: 5,
      title: "Sera Plastik İşletme ve Üretim Yazılımı",
      description:
        "Sera plastik üretiminden sevkiyata kadar tüm süreçleri dijital takip eder.",
    },
    {
      id: 6,
      title: "İşletme Yazılımı",
      description:
        "Tüm işletme operasyonlarını entegre eder; stok, satış, üretim ve personel yönetimi.",
    },
    {
      id: 7,
      title: "Hal Ardiye Bant Takip Yazılımı",
      description:
        "Sebze ve meyve hallerinde ürün hareketlerini izleyen kapalı sistem yazılımı.",
    },
    {
      id: 8,
      title: "Deniz Araçları Üretim ve Takip Yazılımı",
      description:
        "Deniz aracı üretim süreçlerini kayıt altına alan proje bazlı takip sistemi.",
    },
    {
      id: 9,
      title: "Makine Bakım Yazılımı",
      description:
        "Sanayi makinelerinin bakım planlaması ve arıza takibini yapan yazılım.",
    },
    {
      id: 10,
      title: "Termin ve İş Planı Yazılımı",
      description:
        "Proje ve üretim termin planlarını Gantt şemasıyla yöneten iş planlama aracı.",
    },
    {
      id: 11,
      title: "Kapı ve İşletme Yazılımı",
      description:
        "Kapı üretiminden teslimata kadar süreçleri yöneten merkezi işletme yazılımı.",
    },
    {
      id: 12,
      title: "Plastik Yazılımı",
      description:
        "Plastik üretim hatlarını izleyen, reçete ve kalite kontrol yönetimi sağlar.",
    },
    {
      id: 13,
      title: "Araç Takip Yazılımı",
      description:
        "Araç filolarını GPS ile izleyen, bakım ve performans raporları sunan sistem.",
    },
  ],
};

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    // İstersen proje ekleme, silme, güncelleme gibi işlemler burada olabilir
  },
});

export default projectsSlice.reducer;
