import { useState } from "react";
import { ChevronDown, Globe, Users, Award } from "lucide-react";
import { useCms } from "@/contexts/CmsContext";
import RichText from "@/components/RichText";

export default function Destinations() {
  const [expandedCountry, setExpandedCountry] = useState<string | null>(null);
  const { content } = useCms();
  const countries = content.destinations;
  const page = content.destinationsPage;
  const g = content.global;

  return (
    <div className="bg-off-white">
      {/* Hero Section */}
      <section className="py-8 sm:py-10 md:py-12 bg-gradient-to-br from-light-golden to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 sm:mb-6">
              {page.heroTitle} <span className="text-golden">{page.heroHighlight}</span>
            </h1>
            <RichText as="p" className="text-sm sm:text-base md:text-lg text-gray leading-relaxed" text={page.heroSubtitle} />
          </div>
        </div>
      </section>

      {/* Countries Grid */}
      <section className="py-8 sm:py-10 md:py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {countries.map((country) => (
              <div
                key={country.name}
                className="bg-light-golden rounded-xl overflow-hidden border-2 border-golden hover:border-dark-golden transition-all duration-300"
              >
                {/* Card Header */}
                <div className="bg-gradient-to-r from-golden to-dark-golden p-4 sm:p-6 text-black">
                  <div className="flex items-center gap-3 sm:gap-4 mb-2 sm:mb-3">
                    <span className="text-4xl sm:text-5xl">{country.flag}</span>
                    <h3 className="text-xl sm:text-2xl font-bold">{country.name}</h3>
                  </div>
                  <RichText as="p" className="text-xs sm:text-sm opacity-90" text={country.shortDescription} />
                </div>

                {/* Card Body */}
                <div className="p-4 sm:p-6">
                  {/* Highlights */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {country.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="text-xs font-semibold bg-white text-golden px-2 sm:px-3 py-1 rounded-full border border-golden"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Expandable Content */}
                  {expandedCountry === country.name && (
                    <div className="mb-4 p-3 sm:p-4 bg-white rounded-lg border-l-4 border-golden">
                      <RichText as="p" className="text-xs sm:text-sm text-gray leading-relaxed" text={country.fullDescription} />
                    </div>
                  )}

                  {/* Explore More Button */}
                  <button
                    onClick={() =>
                      setExpandedCountry(
                        expandedCountry === country.name ? null : country.name
                      )
                    }
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-black text-white font-semibold rounded-lg hover:bg-opacity-90 transition-all text-sm sm:text-base"
                  >
                    {expandedCountry === country.name ? "Show Less" : "Explore More"}
                    <ChevronDown
                      size={18}
                      className={`transition-transform ${
                        expandedCountry === country.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Study Abroad */}
      <section className="py-8 sm:py-10 md:py-12 bg-light-golden">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-8 sm:mb-12 text-center">
            {page.whyTitle} <span className="text-golden">{page.whyHighlight}</span>?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
            {page.whyCards.map((card, index) => {
              const Icon = [Globe, Users, Award][index % 3];
              return (
                <div key={card.id} className="bg-white rounded-xl p-6 sm:p-8 text-center border-2 border-golden">
                  <Icon size={36} className="text-golden mx-auto mb-4" />
                  <h3 className="text-lg sm:text-xl font-bold text-black mb-2 sm:mb-3">{card.title}</h3>
                  <RichText as="p" className="text-xs sm:text-sm md:text-base text-gray" text={card.description} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-golden to-dark-golden text-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            {page.ctaTitle}
          </h2>
          <RichText as="p" className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto" text={page.ctaSubtitle} />
          <a
            href={g.registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-black text-white font-bold rounded-lg hover:bg-opacity-90 transition-all text-sm sm:text-base"
          >
            Get Counseling
          </a>
        </div>
      </section>
    </div>
  );
}
