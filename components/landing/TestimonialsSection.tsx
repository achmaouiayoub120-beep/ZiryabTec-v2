"use client";

import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { SectionWrapper, FadeInChild } from "@/components/ui/SectionWrapper";
import { useLanguage } from "@/lib/i18n/LanguageContext";

// Import Swiper React components and modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function TestimonialsSection() {
  const { language } = useLanguage();

  return (
    <section className="py-24 md:py-32 bg-gray-50/50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-500/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-500/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <SectionWrapper>
        {/* Header */}
        <FadeInChild className="text-center mb-16 relative z-10">
          <p className="text-sm text-blue-600 font-bold uppercase tracking-[0.2em] mb-4">
            {language === "fr" ? "Témoignages" : "Testimonials"}
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-display font-bold tracking-tight mb-6 text-gray-900">
            {language === "fr" ? "Ce que disent nos clients" : "What our clients say"}
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            {language === "fr" 
              ? "La confiance de nos partenaires est notre plus belle réussite. Découvrez leurs retours sur notre collaboration." 
              : "The trust of our partners is our greatest success. Discover their feedback on our collaboration."}
          </p>
        </FadeInChild>

        {/* Swiper Slider Container */}
        <FadeInChild className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8">
          <div 
            className="testimonials-swiper-wrapper"
            style={{ 
              "--swiper-theme-color": "#2563EB",
              "--swiper-navigation-size": "20px",
              "--swiper-navigation-color": "#2563EB",
              "--swiper-pagination-color": "#2563EB",
              "--swiper-pagination-bullet-inactive-color": "#cbd5e1"
            } as React.CSSProperties}
          >
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              navigation={true}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              className="!pb-16 !pt-4 !px-4"
            >
              {TESTIMONIALS.map((testimonial) => {
                const initials = testimonial.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("");

                return (
                  <SwiperSlide key={testimonial.id} className="h-auto">
                    <div className="h-full bg-white rounded-2xl p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col relative border border-gray-100 overflow-hidden group">
                      
                      {/* Decorative quote mark */}
                      <div className="absolute top-4 right-4 text-blue-600 opacity-5 group-hover:scale-110 transition-transform duration-500">
                        <Quote size={80} strokeWidth={1.5} className="rotate-12" />
                      </div>

                      {/* Stars Rating */}
                      <div className="flex items-center gap-1.5 mb-6 relative z-10">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            size={18}
                            className="text-yellow-400 fill-yellow-400"
                          />
                        ))}
                      </div>

                      {/* Testimonial Text */}
                      <blockquote className="flex-1 relative z-10 mb-8">
                        <p className="text-gray-600 leading-relaxed italic text-[1.05rem]">
                          "{testimonial.content}"
                        </p>
                      </blockquote>

                      {/* Divider */}
                      <div className="h-px w-full bg-gray-100 mb-6 relative z-10" />

                      {/* Author Info */}
                      <div className="flex items-center gap-4 relative z-10 mt-auto">
                        <img 
                          src={(testimonial as any).avatar} 
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover shadow-sm ring-2 ring-white"
                        />
                        <div>
                          <p className="font-display font-bold text-gray-900 text-base">
                            {testimonial.name}
                          </p>
                          <p className="text-sm font-medium text-gray-500">
                            {testimonial.role}, <span className="text-blue-600">{(testimonial as any).company}</span>
                          </p>
                        </div>
                      </div>

                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </FadeInChild>
      </SectionWrapper>
    </section>
  );
}
