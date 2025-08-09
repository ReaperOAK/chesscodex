import React from 'react';
import SEO from '../../components/SEO';
import WhyChooseUs from '../../components/WhyChooseUs';

const AspireHome = () => {
  // AspireChess only
  const siteName = 'AspireChess';
  const siteDescription = 'Welcome to AspireChess. Elevate your chess skills with expert training and comprehensive courses.';
  const siteKeywords = 'AspireChess, chess training, chess courses, chess coaching, chess academy';

  const sectionClass = "bg-black bg-opacity-20 backdrop-blur-sm rounded-xl";
  const testimonialSectionClass = "py-20";
  const testimonialCardClass = "italic text-gray-200 bg-black bg-opacity-30 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300";

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

      {/* Hero Section */}
      <section>
        <div className={"max-w-6xl mx-auto text-center p-10 " + sectionClass}>
          <h1 className="text-5xl font-bold mb-6 text-white">Welcome to {siteName}</h1>
          <p className="text-lg mb-4 text-amber-300">Aspiring for 100% Titled Players</p>
          <p className="text-md mb-6 max-w-3xl mx-auto text-gray-200">
            AspireChess aims to create a community of rated players, enhancing their skills through world-class coaching and resources.
          </p>
          <span>AspireChess: Modern Chess Education</span>
        </div>
      </section>
      <WhyChooseUs />

      {/* Scholarship, Collaboration, and Pro Members Sections */}
      {[
        { title: "Scholarship Programs", description: "Recognizing talent and hard work, we offer scholarships to support dedicated students with exceptional potential in chess.", link: "/aspirechess/exclusives/scholarships", cta: "Learn More" },
        { title: "Collaborate with Us", description: `Partner with AspireChess to promote chess and create a meaningful impact in the community.`, link: "/aspirechess/collaborate-with-us", cta: "Learn More" },
        { title: "Pro Members", description: "Unlock premium benefits such as exclusive content, personalized coaching, and advanced resources by becoming a Pro Member.", link: "/aspirechess/exclusives/pro-membership", cta: "Join Pro Membership" }
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
      <section className={testimonialSectionClass}>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12 text-amber-400">What Our Students Say</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              `"AspireChess made learning chess accessible and enjoyable. Highly recommended!" - Sarah K.`,
              `"The online sessions are engaging, and the tutors are exceptional!" - David L.`,
              `"AspireChess helped me master chess without leaving my home!" - Emily R.`,
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

export default AspireHome;