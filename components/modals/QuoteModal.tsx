"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { useQuote } from "@/context/QuoteContext";

export default function QuoteModal() {
  const { isOpen, closeQuote } = useQuote();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    destination: "",
    travelDate: "",
    travellers: "",
    budget: "",
    message: "",
  });
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setStep(1);
        closeQuote();
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [closeQuote]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-999 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
      <div
        onClick={() => {
          setStep(1);
          closeQuote();
        }}
        className="absolute inset-0"
      />

      <div className="relative w-full max-w-5xl max-h-[95vh] overflow-y-auto rounded-4xl bg-white p-10 shadow-2xl animate-in fade-in zoom-in duration-300">
        <button
          onClick={() => {
            setStep(1);
            closeQuote();
          }}
          className="absolute right-6 top-6 rounded-full p-2 hover:bg-gray-100"
        >
          <X size={24} />
        </button>

        <p className="uppercase tracking-[0.35em] text-[#D4AF37] text-sm font-medium">
          GET A QUOTE
        </p>

        <h2 className="mt-3 font-serif text-5xl text-[#0F2747]">
          Let&apos;s Plan Your Journey
        </h2>

        <p className="mt-4 text-slate-600">
          Tell us about your travel plans and our experts will get in touch with
          you shortly.
        </p>
        <div className="mt-8">
          <div className="flex justify-between text-sm text-slate-500 mb-3">
            <span>Step {step} of 2</span>
            <span>{step === 1 ? "Personal Details" : "Trip Details"}</span>
          </div>

          <div className="h-2 w-full rounded-full bg-gray-200 overflow-hidden">
            <div
              className={`h-full bg-[#D4AF37] transition-all duration-500 ${
                step === 1 ? "w-1/2" : "w-full"
              }`}
            />
          </div>
        </div>

        <form className="mt-10">
          {step === 1 && (
            <div className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <input
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  type="text"
                  placeholder="Full Name *"
                  className={`rounded-xl border px-5 py-4 outline-none transition ${
                    errors.fullName
                      ? "border-red-500"
                      : "border-gray-300 focus:border-[#D4AF37]"
                  }`}
                />
                {errors.fullName && (
                  <p className="text-sm text-red-500 mt-1">{errors.fullName}</p>
                )}

                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Email Address *"
                  className={`rounded-xl border px-5 py-4 outline-none transition ${
                    errors.email
                      ? "border-red-500"
                      : "border-gray-300 focus:border-[#D4AF37]"
                  }`}
                />
                {errors.email && (
                  <p className="text-sm text-red-500 mt-1">{errors.email}</p>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  type="tel"
                  placeholder="Phone Number *"
                  className={`rounded-xl border px-5 py-4 outline-none transition ${
                    errors.phone
                      ? "border-red-500"
                      : "border-gray-300 focus:border-[#D4AF37]"
                  }`}
                />
                {errors.phone && (
                  <p className="text-sm text-red-500 mt-1">{errors.phone}</p>
                )}

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={`rounded-xl border px-5 py-4 outline-none transition ${
                    errors.service
                      ? "border-red-500"
                      : "border-gray-300 focus:border-[#D4AF37]"
                  }`}
                >
                  <option>Select Service</option>

                  <option>Corporate MICE</option>

                  <option>Destination Wedding</option>

                  <option>Domestic Tour</option>

                  <option>International Tour</option>

                  <option>Visa Assistance</option>
                </select>
                {errors.service && (
                  <p className="text-sm text-red-500 mt-1">{errors.service}</p>
                )}
              </div>

              <button
                type="button"
                onClick={() => {
                  if (validateStep1()) {
                    setStep(2);
                  }
                }}
                className="w-full rounded-full bg-[#0F2747] py-4 text-white font-semibold hover:bg-[#08192F]"
              >
                Continue →
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <input
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  type="text"
                  placeholder="Preferred Destination"
                  className="rounded-xl border border-gray-300 px-5 py-4 outline-none focus:border-[#D4AF37]"
                />

                <input
                  name="travelDate"
                  value={formData.travelDate}
                  onChange={handleChange}
                  type="date"
                  className="rounded-xl border border-gray-300 px-5 py-4 outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <input
                  name="travellers"
                  value={formData.travellers}
                  onChange={handleChange}
                  type="number"
                  placeholder="Travellers"
                  className="rounded-xl border border-gray-300 px-5 py-4 outline-none focus:border-[#D4AF37]"
                />

                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="rounded-xl border border-gray-300 px-5 py-4 outline-none focus:border-[#D4AF37]"
                >
                  <option>Estimated Budget</option>

                  <option>₹50,000 - ₹1 Lakh</option>

                  <option>₹1 - ₹3 Lakhs</option>

                  <option>₹3 - ₹5 Lakhs</option>

                  <option>₹5 Lakhs+</option>
                </select>
              </div>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                placeholder="Tell us about your journey..."
                className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none focus:border-[#D4AF37]"
              />

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-1/2 rounded-full border border-[#0F2747] py-4 font-semibold"
                >
                  ← Back
                </button>

                <button
                  type="submit"
                  className="w-1/2 rounded-full bg-[#D4AF37] py-4 font-semibold text-[#0F2747]"
                >
                  Request Quote
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
