import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  about: {
    title: "Biz Kimiz?",
    description: `Firmamız, 2003 yılında Antalya’da sera plastikleri tedarikçilerine yönelik özel bir işletme programı geliştirerek yazılım dünyasına ilk adımını attı. Bu sektöre özgü yazılımlarımızla kısa sürede kendimize sağlam bir yer edinmeyi başardık ve sektördeki firmaların güvenini kazandık. Elde ettiğimiz bu başarı sayesinde, üretim sektöründeki diğer firmalar da bizden projeler talep etmeye başladı. Geri dönüşüm ve plastik jumbo üretim sektörlerinde geliştirdiğimiz yeni yazılımlar ile müşterilerimize sürekli güncelleme ve kesintisiz destek sağladık.`,
    description2: `Özel çözümler ürettiğimiz bu yolda, zamanla Kordon kanı bankacılığı ve laboratuvar sektörlerinden gelen talepler doğrultusunda projeler geliştirmeye başladık ve bu alanlarda da başarılı işlere imza attık. Yazılım kodlama stilimizdeki yenilikçi yaklaşımımız ve ekip içi çalışma düzenimiz sayesinde, müşterilerimize hızlı, güvenilir, destekleyici ve akılcı çözümler sunuyoruz. Her zaman olduğu gibi, yazılım sektöründeki farkımızı göstermeye ve büyümeye devam ediyoruz.`,
  },
  experience: {
    title: "Yönetim Deneyimleri",
    description: `20 yılı aşkın süredir sektörde edindiğimiz deneyim ile müşterilerimize en iyi hizmeti sunmaya devam ediyoruz. Web geliştirme, mobil uygulama ve özel yazılım çözümleri konusunda uzman ekibimizle çalışıyoruz.`,
  },
  companyValues: {
    title: `Değerlerimiz`,
    description: [
      `Hızlı, stabil ve yüksek performanslı yazılımlar geliştiriyoruz.`,
      `Kullanıcıların ihtiyaçlarına en uygun, kullanımı kolay yazılımlar sunuyoruz.`,
      `Kaliteli ve güvenilir hizmet sunuyoruz.`,
      `Müşteri memnuniyeti odaklı çalışmalar gerçekleştiriyoruz.`,
      `Sürdürülebilir başarı hedefliyoruz.`,
    ],
  },
  mission: {
    title: `Misyonumuz`,
    description: `Müşterilerimize yenilikçi, güvenilir ve ihtiyaca yönelik yazılım çözümleri sunarak iş süreçlerini dijital dünyaya entegre etmelerine katkı sağlamak. Teknolojik gelişmeleri yakından takip ederek, her projede kalite ve verimliliği en üst seviyede tutmayı amaçlıyoruz. Sektördeki gelişmelere hızla uyum sağlayarak, müşterilerimizin iş hedeflerine ulaşmalarına destek oluyor ve onlara değer katıyoruz. Ulusal ve uluslararası pazarda sürdürülebilir başarıya ulaşmak için, etik değerlere bağlı, müşteri memnuniyetini ön planda tutan bir yaklaşım benimsiyoruz.`,
  },
  vision: {
    title: `Vizyonumuz`,
    description: `Yazılım sektöründe yenilikçi yaklaşımlarımız ve farklı bakış açımızla sektöre yeni bir soluk kazandırmayı hedefliyoruz. Amacımız, sürekli gelişen teknoloji dünyasında yaratıcı çözümler sunarak sadece yerel pazarda değil, uluslararası alanda da öncü bir konuma gelmektir. Yenilikçi projelerimiz ve müşteri odaklı yaklaşımlarımızla, global ölçekte kalıcı başarılar elde etmeyi ve sektörde her zaman güncel, güvenilir ve dinamik kalmayı amaçlıyoruz. Bu doğrultuda, teknolojiyi en verimli şekilde kullanarak, yazılım dünyasına değer katmaya devam edeceğiz.`,
  },
  coreValue: {
    title: `Temel Değerlerimiz`,
    description: [
      `Müşteri ihtiyaçlarına uygun yazılım`,
      `Müşteri odaklılık ve memnuniyet`,
      `Sürekli gelişim ve inovasyon`,
      `Kalite ve güvenilirlik`,
      `Etik değerlere bağlılık`,
      `Takım ruhu ve işbirliği`,
      `Çevreye ve topluma duyarlılık`,
    ],
  },
  missionGoals: {
    title: `Hedeflerimiz`,
    description: [
      `Teknolojik gelişmeleri yakından takip etmek`,
      `Müşteri portföyümüzü genişletmek`,
      `Uluslararası pazarda büyümek`,
      `Ar-Ge çalışmalarına yatırım yapmak`,
      `Çalışan memnuniyetini en üst düzeyde tutmak`,
    ],
  },
};

const aboutSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
});

export default aboutSlice.reducer;
