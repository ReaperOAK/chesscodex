import React from 'react'

const WhyChooseUs = () => {
  return (
    <section className="py-20">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold mb-6">Why Choose Us?</h2>
      <p className="text-lg mb-8">
        At ChessCodex, we are committed to nurturing the next generation of chess champions.
        Whether you're a beginner, an intermediate player, or an advanced player aiming to master the game, our expert coaches guide you every step of the way.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
        <div className="p-6 bg-gray-100 rounded-lg shadow">
          <h3 className="text-2xl font-semibold mb-2">Comprehensive Curriculum</h3>
          <p className="text-gray-700">Our syllabus is designed by Grandmaster Niaz Murshed, Asia’s first Grandmaster, to ensure a well-rounded chess education.</p>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg shadow">
          <h3 className="text-2xl font-semibold mb-2">Expert Coaching Panel</h3>
          <p className="text-gray-700">Led by International Master Somak Palit, FIDE Master Joydeep Dutta, and IM-elect Arpan Das, our coaches ensure expert guidance.</p>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg shadow">
          <h3 className="text-2xl font-semibold mb-2">Top Tier Guidance</h3>
          <p className="text-gray-700">With Chief Advisor GM Saptarshi Roychowdhury and GM Sayantan Das, students receive unparalleled insights and techniques.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-left mt-8">
        <div className="p-6 bg-gray-100 rounded-lg shadow">
          <h3 className="text-2xl font-semibold mb-2">Weekly Practice Classes</h3>
          <p className="text-gray-700">Regular practice sessions to hone your skills and strategies.</p>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg shadow">
          <h3 className="text-2xl font-semibold mb-2">Regular Homeworks</h3>
          <p className="text-gray-700">Assignments and puzzles to keep you engaged and improving.</p>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg shadow">
          <h3 className="text-2xl font-semibold mb-2">Regular Internal Assessments</h3>
          <p className="text-gray-700">Assessments to track your progress and promote you to the next batch.</p>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg shadow">
          <h3 className="text-2xl font-semibold mb-2">Report Card</h3>
          <p className="text-gray-700">Detailed report cards based on internal assessments to help you understand your strengths and areas for improvement.</p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default WhyChooseUs