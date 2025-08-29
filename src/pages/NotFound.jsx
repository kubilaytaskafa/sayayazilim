import { Link } from "react-router-dom";
import Logo from "../images/saya-logo.webp"; // Kendi logonuzu buraya ekleyin
export default function NotFound() {
  return (
    <>
      {/* SEO ve Head Etiketleri */}
      <head>
        <title>404 - Sayfa Bulunamadı</title>
        <meta
          name="description"
          content="Aradığınız sayfa bulunamadı veya henüz kodlamadık. Ana sayfaya geri dönebilirsiniz."
        />
        <meta name="robots" content="noindex, nofollow" />
      </head>

      {/* Sayfa İçeriği */}
      <div className="min-h-screen flex items-center justify-center bg-white px-6">
        <div className="flex flex-col md:flex-row items-center md:space-x-12 text-center md:text-left">
          {/* Firma Logosu */}
          <img
            src={Logo}
            alt="Firma Logosu"
            className="w-32 h-32 mb-6 md:mb-0"
          />

          {/* İçerik */}
          <div>
            <h1 className="text-6xl font-extrabold text-main">404</h1>
            <p className="mt-4 text-xl font-semibold max-w-md text-main">
              404 NotFound : Aradığınız sayfa bulunamadı veya henüz kodlamadık
              :)
            </p>

            <Link
              to="/"
              className="mt-6 inline-block px-6 py-3 rounded-xl shadow-md transition"
              style={{
                backgroundColor: "#673FFD",
                color: "white",
              }}
            >
              Ana Sayfaya Dön
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
