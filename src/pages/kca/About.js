
import React from 'react';
import SEO from '../../components/SEO';
import { FaChessKing, FaTrophy, FaQuoteLeft } from 'react-icons/fa';
import WhyChooseUs from '../../components/WhyChooseUs';
import Team from '../../components/Team';

const About = () => {
  const siteName = 'Kolkata Chess Academy';

  const heroSectionClasses = 'py-28';
  const sectionWrapperClasses = 'py-16 sm:py-24 space-y-20 px-4';
  const mainCardClasses = 'bg-black bg-opacity-25 backdrop-blur-md rounded-2xl p-8 sm:p-12 border border-gray-700/60 shadow-2xl';
  const missionVisionCardClasses = 'bg-black bg-opacity-20 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-pink-500/50 transition-all duration-300 shadow-lg hover:shadow-pink-500/10';
  const titleClasses = "text-cyan-400";
  const textClasses = "text-slate-200";
  const iconClasses = "text-pink-500";
  const missionTitleClasses = "text-cyan-400";
  const missionHighlightClasses = "text-pink-500";

  return (
    <div>
      <SEO
        title={`About Us - ${siteName}`}
        description={`Learn about ${siteName}, our mission, vision, and the expert team behind our chess academy.`}
        keywords={'Kolkata Chess Academy, about, chess academy, mentors, mission, vision'}
        image={'https://kolkatachessacademy.in/kca.png'}
        url={'https://kolkatachessacademy.in/about'}
        type="article"
        canonical={'https://kolkatachessacademy.in/about'}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: siteName,
          url: 'https://kolkatachessacademy.in/about',
          description: `Learn about ${siteName}, our mission, vision, and the expert team behind our chess academy.`
        }}
      />

      <section className={heroSectionClasses}>
        <div className="max-w-5xl mx-auto text-center px-4">
          <h1 className="text-5xl sm:text-6xl font-bold mb-4 text-white" style={{textShadow: '0 2px 10px rgba(0,0,0,0.5)'}}>About {siteName}</h1>
          <p className="text-lg font-medium text-pink-400">
            Striving for 100% Rated Players
          </p>
        </div>
      </section>

      <div>
        <section className={sectionWrapperClasses}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className={mainCardClasses}>
              <FaQuoteLeft className={`text-5xl ${titleClasses} opacity-20 mb-6`} />
              <h2 className={`text-3xl sm:text-4xl font-bold text-center mb-6 ${titleClasses}`}>
                Striving to Help All Players Achieve and Improve Their Chess Rating
              </h2>
              <p className={`text-lg leading-relaxed mb-6 ${textClasses}`}>
                Started out with Kolkata Chess Academy our singular goal was of making India the leading nation in chess titles. Our academy provides structured, professional chess education that supports each student’s unique growth, whether they are absolute beginners or seasoned tournament players.
              </p>
              <p className={`text-lg leading-relaxed ${textClasses}`}>
                At {siteName}, we are committed to nurturing the next generation of chess champions. Whether you're just starting out, an intermediate player aiming for the next level, or an advanced player looking to master the game, our panel of expert coaches is here to guide you every step of the way.
              </p>
            </div>
          </div>
        </section>

        <section className={sectionWrapperClasses}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className={`text-4xl font-bold mb-4 ${titleClasses}`}>Our Philosophy</h2>
              <p className={`text-lg ${textClasses}`}>
                Committed to creating a chess culture that inspires and empowers players worldwide.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className={`flex-1 ${missionVisionCardClasses}`}>
                <FaChessKing className={`mx-auto text-6xl mb-6 ${iconClasses}`} />
                <h3 className={`text-2xl font-bold mb-4 ${missionTitleClasses}`}>Our Mission</h3>
                  <p className={textClasses}>
                    <span className={`font-semibold ${missionHighlightClasses}`}>To spread complete chess support remotely to everyone in need.</span>
                    Our ever-growing LMS system enables us to deliver high-quality chess education, resources, and mentorship to players everywhere, regardless of location or background.
                  </p>
              </div>
              <div className={`flex-1 ${missionVisionCardClasses}`}>
                <FaTrophy className={`mx-auto text-6xl mb-6 ${iconClasses}`} />
                <h3 className={`text-2xl font-bold mb-4 ${missionTitleClasses}`}>Our Vision</h3>
                <p className={textClasses}>
                  <span className={`font-semibold ${missionHighlightClasses}`}>
                    Striving for 100% Rated Players.
                  </span>
                  Cultivate a love for chess through structured programs, fostering critical thinking and creativity in every player.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={sectionWrapperClasses} id="team">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className={`text-4xl font-bold text-center mb-12 ${titleClasses}`}>Meet Our Mentors</h2>
            <Team />
          </div>
        </section>

        <section className={sectionWrapperClasses}>
          <div className="max-w-7xl mx-auto px-6">
            <WhyChooseUs />
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
