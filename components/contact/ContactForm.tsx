import React from 'react';

const ContactForm = () => {
    return (
        <div className="w-full max-w-2xl bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Bize Yazın</h2>
            <p className="text-gray-500 mb-8">Formu doldurun, en kısa sürede size dönüş yapalım.</p>

            <form className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-sm font-semibold text-gray-700">Adınız Soyadınız</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="John Doe"
                            className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 outline-none text-gray-900 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-sm font-semibold text-gray-700">E-posta Adresiniz</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="ornek@email.com"
                            className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 outline-none text-gray-900 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="subject" className="text-sm font-semibold text-gray-700">Konu</label>
                    <select
                        id="subject"
                        className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 outline-none text-gray-900 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300"
                    >
                        <option value="">Bir konu seçin</option>
                        <option value="general">Genel Bilgi</option>
                        <option value="membership">Üyelik İşlemleri</option>
                        <option value="partnership">Sponsorluk & İşbirliği</option>
                        <option value="feedback">Geri Bildirim</option>
                    </select>
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm font-semibold text-gray-700">Mesajınız</label>
                    <textarea
                        id="message"
                        rows={5}
                        placeholder="Mesajınızı buraya yazın..."
                        className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 outline-none text-gray-900 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 resize-none"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full md:w-auto self-end bg-gray-900 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-blue-600 transition-all duration-300 flex items-center justify-center gap-2 group mt-2"
                >
                    <span>Mesajı Gönder</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                        <path d="M5 12h14m-7-7 7 7-7 7" />
                    </svg>
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
