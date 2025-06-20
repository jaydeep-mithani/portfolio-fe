"use client";

import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { sendEmail } from "@/lib/email/sendEmail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { basicDetails } from "@/constants/data";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    // Initialize EmailJS
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);
  }, []);

  useEffect(() => {
    if (status !== "idle") {
      setShowMessage(true);
      const timer = setTimeout(() => {
        setShowMessage(false);
        setTimeout(() => setStatus("idle"), 300);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const closeMessage = () => {
    setShowMessage(false);
    setTimeout(() => setStatus("idle"), 300);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("idle");

    try {
      const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
      const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
      const confirmationTemplateID =
        process.env.NEXT_PUBLIC_EMAILJS_CONFIRMATION_TEMPLATE_ID!;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

      // Send email to you
      await sendEmail(
        {
          sender_name: formData.name,
          sender_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        serviceID,
        templateID,
        publicKey
      );

      // Send confirmation email to sender
      await sendEmail(
        {
          sender_name: formData.name,
          sender_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        serviceID,
        confirmationTemplateID,
        publicKey
      );

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Email sending failed:", error);
      setStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative">
      {/* Animated Message Overlay */}
      {status !== "idle" && (
        <div
          className={`fixed inset-0 z-50 flex items-start justify-center pt-8 px-4 transition-all duration-500 ${
            showMessage
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div
            className={`transform transition-all duration-500 ease-out ${
              showMessage
                ? "translate-y-0 scale-100"
                : "-translate-y-8 scale-95"
            }`}
          >
            <div
              className={`relative px-8 py-6 rounded-2xl shadow-2xl backdrop-blur-md border max-w-md mx-auto ${
                status === "success"
                  ? "bg-emerald-500/20 border-emerald-400/50 shadow-emerald-500/25"
                  : "bg-red-500/20 border-red-400/50 shadow-red-500/25"
              }`}
            >
              {/* Close Button */}
              <button
                onClick={closeMessage}
                className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Message Content */}
              <div className="flex items-center space-x-4">
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                    status === "success" ? "bg-emerald-500/30" : "bg-red-500/30"
                  }`}
                >
                  {status === "success" ? (
                    <svg
                      className="w-6 h-6 text-emerald-400 animate-bounce"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6 text-red-400 animate-pulse"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  )}
                </div>
                <div className="flex-1">
                  <h3
                    className={`font-semibold text-lg mb-1 ${
                      status === "success" ? "text-emerald-400" : "text-red-400"
                    }`}
                  >
                    {status === "success" ? "Message Sent!" : "Send Failed"}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {status === "success"
                      ? "Thank you for reaching out! I'll get back to you within 24 hours."
                      : "Something went wrong. Please try again or contact me directly."}
                  </p>
                </div>
              </div>
              <div
                className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r rounded-b-2xl transition-all duration-[4000ms] ease-linear ${
                  status === "success"
                    ? "from-emerald-400 to-emerald-600"
                    : "from-red-400 to-red-600"
                } ${showMessage ? "w-0" : "w-full"}`}
              ></div>
            </div>
          </div>
        </div>
      )}
      <section id="contact" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold gradient-text mb-4">
              Let's Work Together
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Ready to bring your next project to life? Let's discuss how I can
              help you achieve your goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="glass-effect p-6 rounded-2xl">
                <h3 className="text-2xl font-bold gradient-text mb-4">
                  Get in Touch
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <i className="fas fa-envelope text-purple-400 text-xl"></i>
                    <span className="text-gray-300">{basicDetails.email}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <i className="fas fa-phone text-purple-400 text-xl"></i>
                    <span className="text-gray-300">{basicDetails.phone}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <i className="fas fa-map-marker-alt text-purple-400 text-xl"></i>
                    <span className="text-gray-300">
                      {basicDetails.location}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex space-x-6">
                <a
                  href="https://github.com/jaydeep-mithani"
                  className="p-3 rounded-full glass-effect border border-white/20 flex items-center justify-center text-gray-400 hover:text-purple-400 hover:!border-purple-400/50 transition-all duration-300 hover:scale-110"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="text-2xl px-0.5"
                  />
                </a>
                <a
                  href="https://linkedin.com/in/jaydeep-mithani"
                  className="p-3 rounded-full glass-effect border border-white/20 flex items-center justify-center text-gray-400 hover:text-purple-400 hover:!border-purple-400/50 transition-all duration-300 hover:scale-110"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="text-2xl px-0.5"
                  />
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=9054722745"
                  className="p-3 rounded-full glass-effect border border-white/20 flex items-center justify-center text-gray-400 hover:text-purple-400 hover:!border-purple-400/50 transition-all duration-300 hover:scale-110"
                >
                  <FontAwesomeIcon
                    icon={faWhatsapp}
                    className="text-2xl px-0.5"
                  />
                </a>
              </div>
            </div>

            <div className="glass-effect p-8 rounded-2xl relative">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full bg-[#ffffff11] border border-[#ffffff33] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full bg-[#ffffff11] border border-[#ffffff33] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="w-full bg-[#ffffff11] border border-[#ffffff33] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                    required
                  />
                </div>
                <div>
                  <textarea
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    className="w-full bg-[#ffffff11] border border-[#ffffff33] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors resize-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="magnetic-btn w-full gradient-bg py-3 rounded-lg text-white font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <span>Send Message</span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
