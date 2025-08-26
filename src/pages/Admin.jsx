import { useState } from "react";
import Logo from "../images/saya-logo.webp";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Admin = () => {
  const [showPassword, setShowPassword] = useState(true);

  const showPasswordHandler = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <>
      {/* SEO Meta Etiketleri */}
      <title>Saya Yazılım - Admin Paneli | Yönetim Paneli</title>
      <meta
        name="description"
        content="Saya Yazılım admin paneli. Güvenli giriş ile yönetim işlemlerinizi gerçekleştirin."
      />
      <meta
        name="keywords"
        content="Saya Yazılım admin, yönetim paneli, admin girişi, güvenli giriş"
      />
      <meta name="author" content="Saya Yazılım" />
      <meta name="robots" content="noindex, nofollow" />
      <meta name="language" content="tr" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Canonical URL */}
      <link rel="canonical" href="https://sayayazilim.com/admin" />

      {/* Open Graph Meta Etiketleri */}
      <meta
        property="og:title"
        content="Saya Yazılım - Admin Paneli | Yönetim Paneli"
      />
      <meta
        property="og:description"
        content="Saya Yazılım admin paneli. Güvenli giriş ile yönetim işlemlerinizi gerçekleştirin."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://sayayazilim.com/admin" />
      <meta
        property="og:image"
        content="https://sayayazilim.com/src/images/saya-logo.webp"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Saya Yazılım" />
      <meta property="og:locale" content="tr_TR" />

      {/* Twitter Card Meta Etiketleri */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Saya Yazılım - Admin Paneli | Yönetim Paneli"
      />
      <meta
        name="twitter:description"
        content="Saya Yazılım admin paneli. Güvenli giriş ile yönetim işlemlerinizi gerçekleştirin."
      />
      <meta
        name="twitter:image"
        content="https://sayayazilim.com/src/images/saya-logo.webp"
      />

      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/src/images/saya-logo.ico" />
      <link rel="apple-touch-icon" href="/src/images/saya-logo.webp" />

      {/* Security Headers */}
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta
        httpEquiv="Referrer-Policy"
        content="strict-origin-when-cross-origin"
      />

      {/* Schema.org Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Saya Yazılım Admin Paneli",
          description: "Saya Yazılım admin paneli giriş sayfası",
          url: "https://sayayazilim.com/admin",
          isPartOf: {
            "@type": "WebSite",
            name: "Saya Yazılım",
            url: "https://sayayazilim.com",
          },
        })}
      </script>

      <main className="flex items-center justify-center bg-gray-200 w-full h-screen">
        <section
          id="admin"
          className="flex items-center justify-center bg-secondary flex-col gap-12 rounded-lg shadow-2xl shadow-main border border-gray-300  "
        >
          <article className="flex items-center justify-center flex-col p-8 lg:py-10 lg:px-20 gap-8 ">
            <img
              src={Logo}
              alt="Saya Yazılım Logosu"
              className="  w-24 lg:w-60"
            />
            <h1 className="text-md lg:text-3xl font-bold text-main italic">
              Saya Yazılım Admin Paneli
            </h1>
            <form className="flex items-center justify-center flex-col gap-4 lg:gap-6">
              <div className="flex items-center justify-center gap-4 lg:gap-6 flex-col lg:flex-row ">
                <label htmlFor="username" className=" text-main text-md">
                  Kullanıcı Adı
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Kullanıcı Adı"
                  className="px-6 py-2  border border-gray-300 rounded-md focus:outline-none focus:ring-2 lg:ml-6 focus:ring-main focus:border-transparent"
                  required
                />
              </div>
              <div className="flex items-center justify-center gap-4 lg:gap-24 flex-col lg:flex-row">
                <label htmlFor="password" className="text-center text-main">
                  Şifre
                </label>

                {/* Container for input + button */}
                <div className=" flex items-center justify-center gap-12 relative w-full max-w-[250px]">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="Şifre"
                    className=" px-4 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-main focus:border-transparent"
                    required
                  />
                  <button
                    type="button"
                    onClick={showPasswordHandler}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-main"
                  >
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                  </button>
                </div>
              </div>

              <button className="px-4 py-2 bg-main text-white rounded-md">
                Giriş Yap
              </button>
            </form>
          </article>
        </section>
      </main>
    </>
  );
};

export default Admin;
