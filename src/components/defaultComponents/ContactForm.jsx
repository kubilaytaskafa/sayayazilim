import React from "react";

const ContactForm = () => {
  return (
    <form className="max-w-md mx-auto p-6 md:p-12 border border-main rounded-lg shadow-2xs shadow-main flex flex-col gap-6">
      {/* Adınız */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4">
        <label
          htmlFor="name"
          className="w-full md:w-24 text-left md:text-right font-semibold"
        >
          Ad:
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="w-full md:flex-grow border border-gray-300 rounded-md p-2"
          required
        />
      </div>

      {/* Soyadınız */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4">
        <label
          htmlFor="surname"
          className="w-full md:w-24 text-left md:text-right font-semibold"
        >
          Soyad:
        </label>
        <input
          type="text"
          name="surname"
          id="surname"
          className="w-full md:flex-grow border border-gray-300 rounded-md p-2"
          required
        />
      </div>

      {/* Mail Adresiniz */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4">
        <label
          htmlFor="mail"
          className="w-full md:w-24 text-left md:text-right font-semibold"
        >
          Mail:
        </label>
        <input
          type="email"
          name="mail"
          id="mail"
          className="w-full md:flex-grow border border-gray-300 rounded-md p-2"
          required
        />
      </div>

      {/* Mesajınız */}
      <div className="flex flex-col md:flex-row items-start gap-2 md:gap-4">
        <label
          htmlFor="message"
          className="w-full md:w-24 text-left md:text-right font-semibold pt-1 md:pt-0"
        >
          Mesajınız
        </label>
        <textarea
          name="message"
          id="message"
          rows={5}
          className="w-full md:flex-grow border border-main rounded-md p-2 resize-y"
        />
      </div>
      <button className="py-4 px-8 rounded bg-button text-secondary font-semibold shadow-sm shadow-main hover:scale-105  hover:shadow-md transition duration-300">
        Gönder
      </button>
    </form>
  );
};

export default ContactForm;
