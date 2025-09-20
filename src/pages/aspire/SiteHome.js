import React from 'react';
import SEO from '../../components/SEO';
import WhyChooseUs from '../../components/WhyChooseUs';
import AspireHero from '../../components/AspireHero';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { testimonials } from '../../data';

const AspireHome = () => {
  // AspireChess only
  const siteName = 'AspireChess';
  const siteDescription = 'Welcome to AspireChess. Elevate your chess skills with expert training and comprehensive courses.';
  const siteKeywords = 'AspireChess, chess training, chess courses, chess coaching, chess academy';

  const sectionClass = "bg-black bg-opacity-20 backdrop-blur-sm rounded-xl";
  // Reused theme classes for testimonials (match KCA styling)
  const titleClasses = "text-white";
  const textClasses = "text-gray-200";
  const cardClasses = "group bg-black bg-opacity-30 p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex flex-col justify-between";
  const currentTestimonials = testimonials;

  return (
    <div className="space-y-16 py-16 px-4">
      <SEO
        title={`Home - ${siteName}`}
        description={siteDescription}
        keywords={siteKeywords}
        image={'https://kolkatachessacademy.in/aca.png'}
        url={'https://kolkatachessacademy.in/aspirechess'}
        type="website"
        canonical={'https://kolkatachessacademy.in/aspirechess'}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: siteName,
          url: 'https://kolkatachessacademy.in/aspirechess',
          logo: 'https://kolkatachessacademy.in/aca.png',
          sameAs: [
            'https://www.facebook.com/profile.php?id=61576362964556',
            'https://www.instagram.com/kolkatachessacademy/',
            'https://www.linkedin.com/company/kolkatachessacademy/?viewAsMember=true',
            'https://www.youtube.com/@kolkatachessacademy'
          ],
          description: siteDescription
        }}
      />

      {/* Hero Section - extracted component */}
      <AspireHero siteName={siteName} sectionClass={sectionClass} />
      <WhyChooseUs />

      {/* Scholarship, Collaboration, and Pro Members Sections */}
      {[
        { title: "Scholarship Programs", description: "Recognizing talent and hard work, we offer scholarships to support dedicated students with exceptional potential in chess.", link: "/aspirechess/exclusives/scholarships", cta: "Learn More" },
        { title: "Collaborate with Us", description: `Partner with AspireChess to promote chess and create a meaningful impact in the community.`, link: "/aspirechess/collaborate-with-us", cta: "Learn More" },
        { title: "Pro Members", description: "Unlock premium benefits such as exclusive content, personalized coaching, and advanced resources by becoming a Pro Member.", link: "/aspirechess/exclusives/pro-membership", cta: "Join Pro Membership" },
        { title: "Aspiring Stars", description: "See our students' achievements and hear from parents — success stories that inspire our aspiring stars.", link: "/aspirechess/achievements-testimonials", cta: "View Achievements" }
      ].map((item, index) => (
        <section key={index}>
          <div className={"max-w-6xl mx-auto text-center p-10 " + sectionClass}>
            <h2 className="text-4xl font-bold mb-6 text-white">{item.title}</h2>
            <p className="text-lg mb-6 text-gray-300">{item.description}</p>
            <a
              href={item.link}
              className="bg-amber-500 hover:bg-amber-400 text-gray-900 font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300"
            >
              {item.cta}
            </a>
          </div>
        </section>
      ))}

      {/* Testimonials Section */}
        <section>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className={`text-4xl font-bold text-center mb-12 ${titleClasses}`}>
              What Our Students Say
            </h2>
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              breakpoints={{ 1024: { slidesPerView: 2 }, 1440: { slidesPerView: 3 } }}
              className="pb-12"
            >
              {currentTestimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className={`${cardClasses} min-h-[220px]`}>
                    <div className="flex items-center mb-4">
                      <img className="w-16 h-16 rounded-full mr-4 border-2 border-amber-400/50" src={testimonial.avatar} alt={`${testimonial.name}'s avatar`} />
                      <div>
                        <h4 className="text-xl font-bold text-white">{testimonial.name}</h4>
                        <p className="text-amber-300">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className={textClasses}>"{testimonial.quote}"</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
    </div>
  );
};

export default AspireHome;