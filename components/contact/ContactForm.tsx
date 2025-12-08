"use client";

import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Form gönderme işlemi buraya eklenecek
        console.log('Form submitted:', formData);
        alert('Mesajınız gönderildi! En kısa sürede size dönüş yapacağız.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div className="bg-card rounded-lg p-5 border border-border card">
            <div className="mb-4">
                <span className="section-eyebrow block mb-1.5">Mesaj</span>
                <h3 className="heading-3 text-foreground">Bize Mesaj Gönderin</h3>
            </div>
            <form onSubmit={handleSubmit} className="space-y-3.5">
                <div>
                    <label htmlFor="name" className="block text-xs font-medium text-foreground mb-1.5">
                        Adınız Soyadınız
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3.5 py-2.5 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-foreground text-sm transition-all"
                        placeholder="Adınız ve soyadınız"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-xs font-medium text-foreground mb-1.5">
                        E-posta Adresiniz
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3.5 py-2.5 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-foreground text-sm transition-all"
                        placeholder="ornek@email.com"
                    />
                </div>

                <div>
                    <label htmlFor="subject" className="block text-xs font-medium text-foreground mb-1.5">
                        Konu
                    </label>
                    <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-3.5 py-2.5 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-foreground text-sm transition-all cursor-pointer"
                    >
                        <option value="">Konu seçiniz</option>
                        <option value="genel">Genel Bilgi</option>
                        <option value="komite">Komite Hakkında</option>
                        <option value="etkinlik">Etkinlik Hakkında</option>
                        <option value="basvuru">Üyelik Başvurusu</option>
                        <option value="isbirligi">İş Birliği</option>
                        <option value="diger">Diğer</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="message" className="block text-xs font-medium text-foreground mb-1.5">
                        Mesajınız
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-foreground text-sm resize-none transition-all"
                        placeholder="Mesajınızı buraya yazın..."
                    />
                </div>

                <button
                    type="submit"
                    className="btn btn-primary w-full mt-4"
                >
                    Mesaj Gönder
                </button>
            </form>
        </div>
    );
};

export default ContactForm;

