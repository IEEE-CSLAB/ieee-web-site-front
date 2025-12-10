import React from 'react';

const ContactForm = () => {
    return (
        <div className="w-full max-w-2xl bg-white rounded-[2rem] p-8 md:p-12 shadow-2xl border border-gray-100 relative overflow-hidden group">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -mr-32 -mt-32 opacity-50 group-hover:opacity-70 transition-opacity duration-700" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-50 rounded-full blur-3xl -ml-32 -mb-32 opacity-50 group-hover:opacity-70 transition-opacity duration-700" />

            <div className="relative z-10">
                <form className="flex flex-col gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="text-sm font-semibold text-gray-700 ml-1">Adınız Soyadınız</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="John Doe"
                                className="w-full px-5 py-4 rounded-xl bg-gray-50/50 border border-gray-200 outline-none text-gray-900 focus:ring-2 focus:ring-black/5 focus:border-black/20 transition-all duration-300 placeholder:text-gray-400 hover:bg-gray-50"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-sm font-semibold text-gray-700 ml-1">E-posta Adresiniz</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="ornek@email.com"
                                className="w-full px-5 py-4 rounded-xl bg-gray-50/50 border border-gray-200 outline-none text-gray-900 focus:ring-2 focus:ring-black/5 focus:border-black/20 transition-all duration-300 placeholder:text-gray-400 hover:bg-gray-50"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="subject" className="text-sm font-semibold text-gray-700 ml-1">Konu</label>
                        <div className="relative">
                            <select
                                id="subject"
                                className="w-full px-5 py-4 rounded-xl bg-gray-50/50 border border-gray-200 outline-none text-gray-900 focus:ring-2 focus:ring-black/5 focus:border-black/20 transition-all duration-300 appearance-none hover:bg-gray-50 cursor-pointer"
                            >
                                <option value="">Bir konu seçin</option>
                                <option value="general">Genel Bilgi</option>
                                <option value="membership">Üyelik İşlemleri</option>
                                <option value="partnership">Sponsorluk & İşbirliği</option>
                                <option value="feedback">Geri Bildirim</option>
                            </select>
                            <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="m6 9 6 6 6-6" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="message" className="text-sm font-semibold text-gray-700 ml-1">Mesajınız</label>
                        <textarea
                            id="message"
                            rows={5}
                            placeholder="Mesajınızı buraya yazın..."
                            className="w-full px-5 py-4 rounded-xl bg-gray-50/50 border border-gray-200 outline-none text-gray-900 focus:ring-2 focus:ring-black/5 focus:border-black/20 transition-all duration-300 resize-none placeholder:text-gray-400 hover:bg-gray-50"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full md:w-auto self-end bg-black text-white px-10 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-3 group mt-2 shadow-lg hover:shadow-xl hover:-translate-y-1"
                    >
                        <span>Mesajı Gönder</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                            <path d="M5 12h14m-7-7 7 7-7 7" />
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
