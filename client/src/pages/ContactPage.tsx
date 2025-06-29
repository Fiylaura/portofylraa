import React, { useState } from "react";
import { PageLayout } from "../components/ui/layout";
import { Card } from "@/components/ui/card";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: "/figmaAssets/linkedin.png",
      url: "https://www.linkedin.com/in/fiana-wahyu-laura-a6a127288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      color: "bg-[#0077B5]"
    },
    {
      name: "Instagram",
      icon: "/figmaAssets/instagram.png",
      url: "https://www.instagram.com/fiylra?igsh=MXZxN3puaWxiMXh4Nw==",
      color: "bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737]"
    },
    {
      name: "GitHub",
      icon: "/figmaAssets/github.png",
      url: " https://share.google/EDgfkacHwerAs7cJi",
      color: "bg-[#333333]"
    }
  ];

  const rateCards = [
    {
      title: "UI Design",
      rate: "$30-50/hour",
      description: "User interface design for web and mobile applications",
      services: [
        "Custom UI Components",
        "Design Systems",
        "Responsive Layouts",
        "Interactive Prototypes"
      ]
    },
    {
      title: "UX Design",
      rate: "$40-60/hour",
      description: "User experience design and research",
      services: [
        "User Research",
        "Wireframing",
        "User Flow Design",
        "Usability Testing"
      ]
    },
    {
      title: "Product Design",
      rate: "$50-70/hour",
      description: "End-to-end product design solutions",
      services: [
        "Product Strategy",
        "Feature Design",
        "Design Implementation",
        "Design QA"
      ]
    }
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data?.message || "Failed to send");

      setSubmitStatus({ type: "success", message: data.message || "Email sent!" });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error: any) {
      setSubmitStatus({ type: "error", message: error.message || "Send failed" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageLayout>
      <div className="w-full max-w-[1160px] mx-auto px-4 md:px-6">
        {/* Header */}
        <section className="py-12 md:py-16">
          <h1 className="font-bold text-[#222a47] text-3xl md:text-[40px] mb-4">
            Let's Connect
          </h1>
          <p className="text-[#222a47cc] text-lg mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </section>

        {/* Contact Info & Social Media */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-[#fbebe3] rounded-[20px] p-8">
            <h2 className="font-semibold text-[#222a47] text-2xl mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-[#e56815]">Email</h3>
                <p className="text-[#222a47]">fianawahyulaura@gmail.com</p>
              </div>
              <div>
                <h3 className="font-medium text-[#e56815]">Location</h3>
                <p className="text-[#222a47]">Tanjungpinang, Indonesia</p>
              </div>
              <div>
                <h3 className="font-medium text-[#e56815] mb-3">Social Media</h3>
                <div className="flex gap-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 ${link.color} rounded-full flex items-center justify-center hover:opacity-90 transition-opacity`}
                    >
                      <img src={link.icon} alt={link.name} className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-[20px] p-8 shadow-sm">
            <h2 className="font-semibold text-[#222a47] text-2xl mb-6">Send Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  required
                  className="w-full h-[45px] md:h-[55px] px-5 rounded-[12px] border-2 border-[#e56815] focus:outline-none focus:ring-2 focus:ring-[#e56815] bg-white transition-shadow hover:shadow-sm"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  required
                  className="w-full h-[45px] md:h-[55px] px-5 rounded-[12px] border-2 border-[#e56815] focus:outline-none focus:ring-2 focus:ring-[#e56815] bg-white transition-shadow hover:shadow-sm"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Subject"
                  required
                  className="w-full h-[45px] md:h-[55px] px-5 rounded-[12px] border-2 border-[#e56815] focus:outline-none focus:ring-2 focus:ring-[#e56815] bg-white transition-shadow hover:shadow-sm"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  required
                  rows={4}
                  className="w-full p-5 rounded-[12px] border-2 border-[#e56815] focus:outline-none focus:ring-2 focus:ring-[#e56815] bg-white transition-shadow hover:shadow-sm resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-[45px] md:h-[55px] bg-[#e56815] hover:bg-[#d55a12] text-white rounded-[12px] font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
              {submitStatus.message && (
                <p className={`text-center ${submitStatus.type === "success" ? "text-green-600" : "text-red-600"}`}>
                  {submitStatus.message}
                </p>
              )}
            </form>
          </div>
        </section>

        {/* Rate Cards */}
        <section className="py-12">
          <h2 className="font-bold text-[#222a47] text-2xl md:text-[32px] mb-8 text-center">
            Service Rates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rateCards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-[20px] p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-[#e56815] text-xl mb-2">
                  {card.title}
                </h3>
                <p className="font-bold text-[#222a47] text-2xl mb-4">
                  {card.rate}
                </p>
                <p className="text-[#222a47cc] mb-6">
                  {card.description}
                </p>
                <ul className="space-y-3">
                  {card.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-center text-[#222a47]">
                      <span className="w-2 h-2 bg-[#e56815] rounded-full mr-3"></span>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageLayout>
  );
} 