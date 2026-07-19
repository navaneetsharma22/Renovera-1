"use client";

import { useRef, useState } from "react";
import { Upload, X, Loader2, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export function ConsultationForm({ className }) {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    propertyType: "villa",
    projectType: "full-renovation",
    budget: "",
    timeline: "",
    message: "",
    contactMethod: "email",
    agreePolicy: false
  });

  useGSAP(() => {
    gsap.fromTo(leftRef.current.children,
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      }
    );

    gsap.fromTo(rightRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      }
    );
  }, { scope: sectionRef });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleReset = () => {
    setFormData({
      fullName: "", email: "", phone: "", location: "",
      propertyType: "villa", projectType: "full-renovation",
      budget: "", timeline: "", message: "", contactMethod: "email", agreePolicy: false
    });
    setStatus("idle");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agreePolicy) return;
    
    setStatus("loading");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  return (
    <section id="consultation-form" ref={sectionRef} className={cn("py-24 md:py-32 bg-white", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
          
          {/* LEFT: Content */}
          <div ref={leftRef} className="flex flex-col lg:sticky lg:top-32">
            <h2 className="text-sm font-bold uppercase tracking-widest text-[#C5A059] mb-4">
              Consultation
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-[#09090B] tracking-tight mb-6">
              Start Your Project.
            </h3>
            <p className="text-lg md:text-xl text-[#52525B] leading-relaxed max-w-[500px]">
              Tell us about your vision and we'll arrange a personalized consultation with our design team to discuss feasibility, timelines, and architectural possibilities.
            </p>
          </div>

          {/* RIGHT: Form */}
          <div ref={rightRef} className="bg-[#FAFAFA] border border-[#E4E4E7] p-8 md:p-12 rounded-3xl">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center text-center py-20">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold font-heading text-[#09090B] mb-4">Request Received</h4>
                <p className="text-[#52525B] mb-8">Thank you for reaching out. Our team will contact you shortly to schedule your consultation.</p>
                <button 
                  onClick={handleReset}
                  className="px-8 py-4 bg-[#09090B] text-white font-bold uppercase tracking-widest text-xs hover:bg-[#C5A059] transition-colors"
                >
                  Send Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-[#09090B]">Full Name *</label>
                    <input type="text" name="fullName" required value={formData.fullName} onChange={handleChange} className="w-full bg-white border border-[#E4E4E7] px-4 py-3 focus:outline-none focus:border-[#C5A059] transition-colors" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-[#09090B]">Email Address *</label>
                    <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full bg-white border border-[#E4E4E7] px-4 py-3 focus:outline-none focus:border-[#C5A059] transition-colors" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-[#09090B]">Phone Number *</label>
                    <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="w-full bg-white border border-[#E4E4E7] px-4 py-3 focus:outline-none focus:border-[#C5A059] transition-colors" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-[#09090B]">Project Location</label>
                    <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="City or Neighborhood" className="w-full bg-white border border-[#E4E4E7] px-4 py-3 focus:outline-none focus:border-[#C5A059] transition-colors" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-[#09090B]">Property Type</label>
                    <select name="propertyType" value={formData.propertyType} onChange={handleChange} className="w-full bg-white border border-[#E4E4E7] px-4 py-3 focus:outline-none focus:border-[#C5A059] transition-colors appearance-none">
                      <option value="villa">Luxury Villa</option>
                      <option value="apartment">Penthouse / Apartment</option>
                      <option value="townhouse">Townhouse</option>
                      <option value="commercial">Commercial Space</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-[#09090B]">Project Type</label>
                    <select name="projectType" value={formData.projectType} onChange={handleChange} className="w-full bg-white border border-[#E4E4E7] px-4 py-3 focus:outline-none focus:border-[#C5A059] transition-colors appearance-none">
                      <option value="full-renovation">Full Renovation</option>
                      <option value="architecture">New Architecture Build</option>
                      <option value="interior">Interior Design</option>
                      <option value="turnkey">Turnkey Design & Build</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-[#09090B]">Estimated Budget</label>
                    <select name="budget" value={formData.budget} onChange={handleChange} className="w-full bg-white border border-[#E4E4E7] px-4 py-3 focus:outline-none focus:border-[#C5A059] transition-colors appearance-none">
                      <option value="" disabled>Select Budget Range</option>
                      <option value="100k-250k">$100k - $250k</option>
                      <option value="250k-500k">$250k - $500k</option>
                      <option value="500k-1m">$500k - $1M</option>
                      <option value="1m-plus">$1M+</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-[#09090B]">Preferred Contact</label>
                    <select name="contactMethod" value={formData.contactMethod} onChange={handleChange} className="w-full bg-white border border-[#E4E4E7] px-4 py-3 focus:outline-none focus:border-[#C5A059] transition-colors appearance-none">
                      <option value="email">Email</option>
                      <option value="phone">Phone Call</option>
                      <option value="whatsapp">WhatsApp</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#09090B]">Project Details & Vision</label>
                  <textarea 
                    name="message" 
                    rows={4} 
                    required 
                    value={formData.message} 
                    onChange={handleChange}
                    placeholder="Tell us a bit about your goals, style preferences, and current timeline..."
                    className="w-full bg-white border border-[#E4E4E7] px-4 py-3 focus:outline-none focus:border-[#C5A059] transition-colors resize-none" 
                  />
                </div>

                {/* File Upload (UI Only) */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#09090B]">Reference Images / Floor Plans (Optional)</label>
                  <div className="border-2 border-dashed border-[#E4E4E7] bg-white hover:bg-[#FAFAFA] transition-colors rounded-xl p-8 flex flex-col items-center justify-center cursor-pointer text-center group">
                    <div className="w-10 h-10 rounded-full bg-[#FAFAFA] border border-[#E4E4E7] flex items-center justify-center mb-3 group-hover:border-[#C5A059] group-hover:text-[#C5A059] transition-colors">
                      <Upload className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-bold text-[#09090B]">Click to upload or drag & drop</span>
                    <span className="text-xs text-[#52525B] mt-1">SVG, PNG, JPG or PDF (max. 10MB)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 mt-4">
                  <input 
                    type="checkbox" 
                    id="agreePolicy" 
                    name="agreePolicy"
                    checked={formData.agreePolicy}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 accent-[#09090B]"
                  />
                  <label htmlFor="agreePolicy" className="text-sm text-[#52525B]">
                    I agree to the <a href="#" className="text-[#09090B] underline hover:text-[#C5A059]">Privacy Policy</a> and consent to being contacted regarding my inquiry.
                  </label>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4 mt-6 pt-6 border-t border-[#E4E4E7]">
                  <button 
                    type="submit"
                    disabled={!formData.agreePolicy || status === "loading"}
                    className="w-full sm:w-auto px-10 py-5 bg-[#09090B] text-white font-bold uppercase tracking-widest text-xs hover:bg-[#C5A059] transition-colors duration-300 disabled:opacity-50 disabled:hover:bg-[#09090B] flex items-center justify-center gap-2"
                  >
                    {status === "loading" ? <Loader2 className="w-4 h-4 animate-spin" /> : "Schedule Consultation"}
                    {status !== "loading" && <ArrowRight className="w-4 h-4" />}
                  </button>

                  <button 
                    type="button"
                    onClick={handleReset}
                    className="w-full sm:w-auto px-8 py-5 bg-transparent text-[#52525B] font-bold uppercase tracking-widest text-xs hover:text-[#09090B] transition-colors duration-300"
                  >
                    Reset Form
                  </button>
                </div>

              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
