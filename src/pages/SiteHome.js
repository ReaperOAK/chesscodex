import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import WhyChooseUs from '../components/WhyChooseUs';

const SiteHome = () => {
  const location = useLocation();
  const isAspireChess = location.pathname.startsWith('/aspirechess');
  const siteName = isAspireChess ? 'AspireChess' : 'Kolkata Chess Academy';
  const siteDescription = isAspireChess
    ? 'Welcome to AspireChess. Elevate your chess skills with expert training and comprehensive courses.'
    : 'Welcome to Kolkata Chess Academy. Elevate your chess skills with expert training and comprehensive courses.';
  const siteKeywords = isAspireChess
    ? 'AspireChess, chess training, chess courses, chess coaching, chess academy'
    : 'Kolkata Chess Academy, chess training, chess courses, chess coaching, chess academy';

  // A helper to define section styles based on the theme
  const sectionClass = isAspireChess 
    ? "bg-black bg-opacity-20 backdrop-blur-sm rounded-xl" 
    : "bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent";

  const testimonialSectionClass = isAspireChess ? "py-20" : "bg-brand-light py-20";
  const testimonialCardClass = isAspireChess 
    ? "italic text-gray-200 bg-black bg-opacity-30 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300"
    : "italic text-brand-text bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300";

  return (
    <div className={isAspireChess ? "space-y-16 py-16 px-4" : ""}>
      <Helmet>
        <title>Home - {siteName}</title>
        <meta name="description" content={siteDescription} />
        <meta name="keywords" content={siteKeywords} />
      </Helmet>

      {/* Hero Section */}
      <section className={isAspireChess ? "" : "py-24 text-center"}>
        <div className={`${isAspireChess ? "max-w-6xl mx-auto text-center p-10 " + sectionClass : "max-w-6xl mx-auto px-6"}`}>
          <h1 className="text-5xl font-bold mb-6 text-white">Welcome to {siteName}</h1>
          <p className="text-lg mb-4 text-amber-300">{isAspireChess ? 'Aspiring for 100% Titled Players' : 'Striving for 100% Rated Players'}</p>
          <p className="text-md mb-6 max-w-3xl mx-auto text-gray-200">
            {isAspireChess
              ? 'AspireChess aims to create a community of rated players, enhancing their skills through world-class coaching and resources.'
              : 'Started as Kolkata Chess Academy, we strive to create a community of rated players, enhancing their skills through world-class coaching and resources.'}
          </p>
          <span>{isAspireChess ? 'AspireChess: Modern Chess Education' : 'Kolkata Chess Academy: Modern Chess Education'}</span>
        </div>
      </section>
      <WhyChooseUs />

      {/* Scholarship, Collaboration, and Pro Members Sections */}
      {[ 
        { title: "Scholarship Programs", description: "Recognizing talent and hard work, we offer scholarships to support dedicated students with exceptional potential in chess.", link: isAspireChess ? "/aspirechess/exclusives/scholarships" : "/contact", cta: "Learn More" },
        { title: "Collaborate with Us", description: `Partner with ${siteName} to promote chess and create a meaningful impact in the community.`, link: isAspireChess ? "/aspirechess/collaborate-with-us" : "/collaborate-with-us", cta: "Learn More" },
        { title: "Pro Members", description: "Unlock premium benefits such as exclusive content, personalized coaching, and advanced resources by becoming a Pro Member.", link: isAspireChess ? "/aspirechess/exclusives/pro-membership" : "/contact", cta: "Join Pro Membership" }
      ].map((item, index) => (
        <section key={index} className={isAspireChess ? "" : "text-white py-20 " + sectionClass}>
          <div className={`${isAspireChess ? "max-w-6xl mx-auto text-center p-10 " + sectionClass : "max-w-6xl mx-auto px-6 text-center"}`}>
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
      <section className={testimonialSectionClass}>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className={`text-4xl font-bold mb-12 ${isAspireChess ? 'text-amber-400' : 'text-brand-primary'}`}>What Our Students Say</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              `"${siteName} made learning chess accessible and enjoyable. Highly recommended!" - Sarah K.`,
              `"The online sessions are engaging, and the tutors are exceptional!" - David L.`,
              `"${siteName} helped me master chess without leaving my home!" - Emily R.`,
            ].map((testimonial, index) => (
              <blockquote key={index} className={testimonialCardClass}>
                {testimonial}
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SiteHome;