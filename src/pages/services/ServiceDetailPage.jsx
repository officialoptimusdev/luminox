import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "@/components/Atoms/Breadcrumb";
import { serviceDetailData } from "@/constants/serviceDetailData";
import { ArrowRight, Calendar, CheckCircle2, ChevronDown, ChevronUp, AlertCircle } from "lucide-react";

const BOOK_SESSION_URL = "https://d2oe0ra32qx05a.cloudfront.net/?practiceKey=k_1_101680";

const ServiceDetailPage = ({ serviceKey }) => {
  const service = serviceDetailData[serviceKey];
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceKey]);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Service Not Found</h1>
        <p className="text-gray-600 mb-6">The service page you are looking for does not exist.</p>
        <Link
          to="/services"
          className="inline-flex items-center px-6 py-3 bg-[#3E757B] text-white rounded-xl font-medium hover:bg-[#325e63] transition-colors"
        >
          View All Services
        </Link>
      </div>
    );
  }

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-gray-50/50 pb-16">
      {/* Hero Banner */}
      <section className={`w-full py-12 md:py-20 ${service.bgColor} ${service.textColor} transition-all`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-white/20 backdrop-blur-sm border border-white/30">
                Luminox Mental Health Care
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
                {service.title}
              </h1>
              <p className="text-base sm:text-lg opacity-90 leading-relaxed font-normal">
                {service.intro}
              </p>
              <div className="pt-2">
                <a
                  href={BOOK_SESSION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-gray-900 font-semibold rounded-xl shadow-lg hover:bg-gray-100 transition-all hover:scale-[1.02] text-sm md:text-base"
                >
                  <Calendar className="w-5 h-5 text-[#3E757B]" />
                  Book Session Now
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>

            {service.image && (
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-md aspect-4/3 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Breadcrumb Navigation */}
        <Breadcrumb
          items={[
            { label: "Services", href: "/services" },
            { label: service.title },
          ]}
        />

        {/* Detailed Sections */}
        <div className="space-y-12 bg-white p-6 sm:p-10 rounded-2xl shadow-sm border border-gray-100">
          {service.sections?.map((section, sIdx) => (
            <section key={sIdx} className="space-y-4 pb-8 border-b border-gray-100 last:border-b-0 last:pb-0">
              {section.heading && (
                <h2 className="text-2xl sm:text-3xl font-bold text-[#3E757B] tracking-tight">
                  {section.heading}
                </h2>
              )}

              {/* Paragraphs */}
              {section.paragraphs?.map((para, pIdx) => (
                <p key={pIdx} className="text-gray-700 leading-relaxed text-base md:text-lg">
                  {para}
                </p>
              ))}

              {/* Section Intro */}
              {section.intro && (
                <p className="text-gray-800 font-medium text-base md:text-lg">
                  {section.intro}
                </p>
              )}

              {/* Bullet Points */}
              {section.bullets && section.bullets.length > 0 && (
                <ul className="grid grid-cols-1 gap-2.5 my-4">
                  {section.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3 bg-teal-50/50 p-3 rounded-xl border border-teal-100/60">
                      <CheckCircle2 className="w-5 h-5 text-[#3E757B] shrink-0 mt-0.5" />
                      <span className="text-gray-800 text-sm sm:text-base leading-snug">{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Subsections */}
              {section.subsections && section.subsections.length > 0 && (
                <div className="grid grid-cols-1 gap-4 mt-6">
                  {section.subsections.map((sub, subIdx) => (
                    <div
                      key={subIdx}
                      className="bg-gray-50/80 rounded-xl p-5 border border-gray-100 space-y-2 hover:border-teal-200 transition-colors"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#3E757B]"></span>
                        {sub.subheading}
                      </h3>
                      {sub.text && (
                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed pl-4">
                          {sub.text}
                        </p>
                      )}
                      {sub.bullets && sub.bullets.length > 0 && (
                        <ul className="space-y-2 pl-4 pt-1">
                          {sub.bullets.map((sb, sbIdx) => (
                            <li key={sbIdx} className="flex items-start gap-2.5 text-sm text-gray-700">
                              <span className="text-[#3E757B] font-bold">•</span>
                              <span>{sb}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Outro */}
              {section.outro && (
                <p className="text-gray-700 italic bg-gray-50 p-4 rounded-xl border-l-4 border-[#3E757B] text-sm sm:text-base">
                  {section.outro}
                </p>
              )}
            </section>
          ))}

          {/* Frequently Asked Questions */}
          {service.faq && service.faq.length > 0 && (
            <section className="pt-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                {service.faq.map((item, fIdx) => (
                  <div
                    key={fIdx}
                    className="border border-gray-200 rounded-xl overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => toggleFaq(fIdx)}
                      className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-semibold text-gray-900 bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      <span className="text-base sm:text-lg pr-4">{item.q}</span>
                      {openFaqIndex === fIdx ? (
                        <ChevronUp className="w-5 h-5 text-[#3E757B] shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                      )}
                    </button>
                    {openFaqIndex === fIdx && (
                      <div className="p-4 sm:p-5 bg-white border-t border-gray-100 text-gray-700 leading-relaxed text-sm sm:text-base">
                        {item.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Book Session CTA Card */}
          <section className="mt-12 bg-gradient-to-br from-[#3E757B] to-[#2b5358] text-white rounded-2xl p-8 sm:p-10 text-center shadow-xl space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
              Ready to Take the Next Step?
            </h2>
            <p className="text-teal-50 max-w-2xl mx-auto text-base sm:text-lg">
              Get personalized, compassionate mental health care from the comfort and privacy of your home across Maryland, Washington D.C., and Virginia.
            </p>
            <div>
              <a
                href={BOOK_SESSION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-white text-[#3E757B] font-bold rounded-xl shadow-lg hover:bg-gray-100 hover:scale-105 transition-all text-base sm:text-lg"
              >
                <Calendar className="w-5 h-5" />
                {service.ctaText || "Book Your Session Today"}
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </section>

          {/* Crisis Disclaimer */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 sm:p-5 flex items-start gap-3.5 text-amber-900 text-xs sm:text-sm leading-relaxed">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold mb-1">Important Crisis Information:</p>
              <p>
                {service.crisisNote ||
                  "Luminox Healthcare Services LLC is not an emergency or crisis response service. If you are experiencing a psychiatric emergency or are in immediate danger, please call 911 or go to the nearest emergency room. In the US, you can call or text 988 to reach the Suicide & Crisis Lifeline."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ServiceDetailPage;
