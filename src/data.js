// Features for WhyChooseUs (shared for both sites unless split later)
import { FaBook, FaCrown, FaChalkboardTeacher, FaTasks, FaClipboardCheck, FaFileAlt, FaMedal, FaUsers, FaTrophy } from 'react-icons/fa';

export const highlightedFeatures = [
  { icon: <FaBook className="text-amber-400 text-4xl mb-2" />, title: "Comprehensive Curriculum", description: "Syllabus designed by GM Niaz Murshed to provide a holistic chess education.", link: null },
  { icon: <FaChalkboardTeacher className="text-amber-400 text-4xl mb-2" />, title: "Top Tier Guidance", description: "Insights and techniques from GM Saptarshi Roychowdhury and GM Sayantan Das.", link: null },
  { icon: <FaCrown className="text-amber-400 text-4xl mb-2" />, title: "Expert Coaching Panel", description: "Led by IM Somak Palit, FM Joydeep Dutta, and IM-elect Arpan Das for personalized mentorship.", link: null },
];

export const features = [
  { icon: <FaTasks className="text-amber-400 text-4xl mb-2" />, title: "Weekly Practice Classes", description: "Interactive sessions to refine your strategies and enhance performance.", link: null },
  { icon: <FaClipboardCheck className="text-amber-400 text-4xl mb-2" />, title: "Regular Homeworks", description: "Engaging assignments and puzzles to keep you challenged and motivated.", link: null },
  { icon: <FaFileAlt className="text-amber-400 text-4xl mb-2" />, title: "Internal Assessments", description: "Track progress through structured assessments and advance to higher batches.", link: null },
  { icon: <FaFileAlt className="text-amber-400 text-4xl mb-2" />, title: "Detailed Report Card", description: "Receive personalized feedback to identify strengths and areas for growth.", link: null },
  { icon: <FaMedal className="text-amber-400 text-4xl mb-2" />, title: "Achievement Recognition", description: "Celebrate your milestones and achievements with certificates and awards.", link: null },
  { icon: <FaUsers className="text-amber-400 text-4xl mb-2" />, title: "Community Support", description: "Join our community forum to discuss ideas, share experiences, and get support.", link: null },
  { icon: <FaTrophy className="text-amber-400 text-4xl mb-2" />, title: "Tournament Participation", description: "Participate in local and international tournaments to test your skills and gain experience.", link: null },
  { icon: <FaChalkboardTeacher className="text-amber-400 text-4xl mb-2" />, title: "Student Dashboard", description: "A personalized dashboard to track your learning journey, achievements, and upcoming classes at a glance.", link: null },
  { icon: <FaBook className="text-amber-400 text-4xl mb-2" />, title: "Learning Management System", description: "Access structured lessons, assignments, and resources in one seamless platform designed for effective learning.", link: null },
];
// Universal achievements and testimonials
export const coaches = [
  { name: 'GM Sayantan Das', role: 'Guest Coach & Opening Expert', image: '/Team/sayantan.jpg', description: `India's 81st GM, is an invaluable part of our coaching team, bringing over two decades of experience and deep opening knowledge.` },
  { name: 'GM Saptarshi Roy Chowdhury', role: 'Chief Advisor & Strategy Maker', image: '/Team/saptarshi.jpg', description: `Grandmaster Saptarshi Roy Chowdhury, with over 15 years of coaching experience, is our chief advisor and strategy maker.` },
  { name: 'IM Somak Palit', role: 'Coach', image: '/Team/somak.jpg', description: `A prominent member of the Indian Railway Chess Team, brings a unique and simplified approach to our academy. His mentorship is invaluable.` },
  { name: 'FM Joydeep Dutta', role: 'Coach', image: '/Team/joydeep.jpg', description: `FM Dutta, with a peak Elo of 2355, has claimed numerous national titles, bringing his prowess to develop various chess talents.` },
  { name: 'Arpan Das', role: 'Coach', image: '/Team/arpan.jpg', description: `A passionate chess player with 13 years of experience, a peak Elo rating of 2423, and two International Master norms. Focuses on youth development.` }
];
export const faqs = {
  aspirechess: [
    {
      category: "General",
      items: [
        {
          question: "What is the age requirement to join AspireChess Academy?",
          answer: "We welcome students of all ages, starting from 4 years old. While we believe there should be no age barrier to learning, younger children may require additional attention. Our courses cater to all skill levels, from beginners to advanced players.",
        },
        {
          question: "Do I need any prior chess experience to enrol?",
          answer: "No prior experience is necessary. We offer courses for all levels, including complete beginners who are just starting to learn the game.",
        },
      ],
    },
    {
      category: "Courses & Classes",
      items: [
        {
          question: "How are classes conducted?",
          answer: "Our classes are primarily held online for flexibility. However, we also provide in-person sessions at our facility.",
        },
        {
          question: "What is the fee structure?",
          answer: "Our fees vary depending on the course level and duration. You can check the 'Courses' section on our website or contact us directly for a detailed breakdown of pricing.",
        },
        {
          question: "Do you offer a trial class?",
          answer: "We don't provide a free trial class. However, we offer a provisional admission with a rigorous entry test, followed by a 7-day, no-questions-asked money-back guarantee. Students are evaluated within the first month, with placement at the appropriate level based on coach assessment & the batch assignment is at coaches discretion.",
        },
        {
          question: "Do you offer customized training?",
          answer: "Yes, we provide personalized coaching tailored to each student's strengths, weaknesses, and goals. You can find more by contacting us.",
        },
        {
          question: "How can I sign up for the academy’s trial program or provisional admission?",
          answer: "Interested candidates must complete an entry test except the Beginner level for whom taking the entry test is optional. Based on the results, students may join on a provisional basis, with a 7-day, no-questions-asked money-back guarantee.",
        },
      ],
    },
    {
      category: "Tournaments",
      items: [
        {
          question: "How can I stay updated on tournaments organized by the academy?",
          answer: "You can find all upcoming and past tournaments in the ‘Events’ section on our website. This section is regularly updated with in-person and online events.",
        },
        {
          question: "What types of tournaments do you organize?",
          answer: "We host regular local and rated tournaments for practical experience. Additionally, we offer online tournaments every two weeks to keep students engaged and improving.",
        },
      ],
    },
    {
      category: "Policies & Refunds",
      items: [
        {
          question: "Is there a refund policy?",
          answer: "Yes, we offer a full refund, no question asked, if you cancel within the first 7 days of payment. We aim for your satisfaction, so if you’re not fully happy with our services within this period, we’ll provide a hassle-free refund.",
        },
      ],
    },
    {
      category: "Partnerships & Collaborations",
      items: [
        {
          question: "How do I become a referral partner?",
          answer: "For those interested in becoming a referral partner, please visit our 'Collaborate with Us' section for further details.",
        },
        {
          question: "How can I partner or collaborate with AspireChess Academy?",
          answer: "We welcome collaborations and partnerships. Visit our 'Collaborate with Us' section to learn more.",
        },
      ],
    },
    {
      category: "Scholarships & Newsletter",
      items: [
        {
          question: "What is your scholarship program?",
          answer: "We award monthly scholarships across different levels (Beginner, Intermediate, Advanced, Expert). Selection is based on coach recommendations, tournament performance, and active participation.",
        },
        {
          question: "What are the benefits of subscribing to your newsletter?",
          answer: "Our newsletter provides insightful articles on various chess topics, including strategy, psychology, and training techniques. Subscribers receive exclusive updates on academy events, glimpses into our Pro Members Club, and a first look at new content.",
        },
      ],
    },
  ],
};
export const coursesData = [
  {
    title: 'Beginner Course',
    description: [
      'Introduction to Chess',
      'Piece Movement',
      'Superpowers of Pieces',
      'Mates with Major Pieces',
      'Types of Draws',
      'Candidate Moves',
      'Tactical Patterns',
      'Basics of Endgames',
    ],
    duration: '12 months',
    site: 'aspirechess',
  },
  {
    title: 'Intermediate Course',
    description: [
      'Forcing Moves',
      'Openings',
      'Endgames (Rook, Pawn & Knights)',
      'Minor Piece Mates',
      'Learn from World Champions',
      'Fundamental Strategies (Open File, Outpost, Center, Space & Exchanges)',
    ],
    duration: '18 months',
    site: 'aspirechess',
  },
  {
    title: 'Advanced Course',
    description: [
      'Complete Endgames',
      'Attack & Initiative',
      'Calculation',
      'Colour Complex Piece Play',
    ],
    duration: '24 months',
    site: 'aspirechess',
  },
  {
    title: 'Expert Course',
    description: [
      'Pawn Play',
      'Pawn Structures',
      'Conversions',
      'Prophylaxis',
      'Building a Tailored Opening Repertoire',
    ],
    duration: 'Ongoing',
    site: 'aspirechess',
  },
  {
    title: 'Private Classes',
    description: [
      'Comprehensive Support on behalf of our Academy:',
      '1. Structured methodology and curriculum (designed by GM Niaz Murshed)',
      '2. Expertly curated customized openings (by IMs/GMs)',
      '3. Bi-monthly Parent-Teacher Meetings (PTMs)',
      '4. Customized routines and study materials by one of our dedicated coaches.',
      '5. In-depth classical game analysis with PDF explanations of all World Champions',
      'Contact us: as that would be tailored to your needs. The pricing and timings will vary according to your needs and wants.',
    ],
    duration: 'Flexible',
    site: 'aspirechess',
  },
  {
    title: 'Yuddho Raja-y Raja-y',
    description: [
      'Structured, high-quality chess practice sessions with FIDE-rated players and top coaches.',
      '2-hour sessions, 3 days a week (Mon, Wed, Fri)',
      'Play with ~2000 elo FIDE-rated players',
      'Free access to our chess library',
      'Exclusive opportunity to train with Arpan Das (Jr.) & FM Joydeep Dutta (limited period only)',
      'Prime location: Only 1 km from Dum Dum Station',
      'Professional chess sets and clocks',
      'Just ₹100 per session, 12 sessions/month for ₹1200',
      'Open to all clubs/academies',
    ],
    duration: 'Monthly',
    site: 'aspirechess',
    redirect: '/aspirechess/exclusives/yuddho-raja',
  },
];
export const benefits = [
  "Helps in Problem Solving & Memory Retention",
  "Assured Positive Impact in Academic Performance",
  "Enhances Creativity, Analytical and Critical Thinking",
  "Improves Focus & Time Management",
  "Stimulates Growth of Neuron Dendrites",
  "Therapeutic for Anxiety & ADHD", // Shortened for better display
];
export const achievementsData = [
  { title: "Adreesh Dey's International FIDE Rating", description: "Big Congratulations to Adreesh Dey! We are thrilled to share that our student, Adreesh Dey, has achieved his first international FIDE rating of 1589!", image: "/Achievements/1.jpg" },
  { title: "Champion's Moment!", description: "Congratulations to Anshuman Dey, crowned Tournament Champion at the Knight's Quest: Invitational Chess Meet.", image: "/Achievements/2.png" }
];

export const testimonials = [
  { quote: "If you’re serious about improving your chess skills, I wholeheartedly recommend Arpan Sir and Joydeep Sir [Aspire Chess Academy]. None came close to what I’ve gained under Arpan Sir and Joydeep Sir. Before them, I struggled with positional understanding, planning, and other fundamentals. Here, I’m learning these every day along with so much more. What sets them apart is their friendly and approachable teaching style, which bridges the usual gap between a coach and a student, which makes learning enjoyable and breaks the usual coach-student barrier. They also provide practice sessions that have helped me a lot. I’m truly grateful for their guidance.", name: "Dhruv Kar", role: "Chess Enthusiast", avatar: "/testimonials/dhruv.png" },
  { quote: "Players get wonderful exposure here and get a chance to play with quality players who are high rated who also frequently visit the sessions. The sessions are conducted in a friendly environment and constant learning. My experience was wonderful. Highly recommended.", name: "Megha Patra", role: "Chess Enthusiast", avatar: "/testimonials/megha.png" }
];

export const FAQs = [
  { question: 'What is the age limit for joining?', answer: 'Students aged 4 years and above can join our courses.' },
  { question: 'Do I need prior experience in chess?', answer: 'No, beginners are welcome to join our introductory courses.' },
  { question: 'How do I pay for the course?', answer: 'Payments can be made online through our secure payment gateway.' },
  {
    question: 'What are the eligibility criteria?',
    answer: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Age: 6 years and above.</li>
        <li>No prior chess experience required for beginner courses.</li>
        <li>Basic chess knowledge is necessary for advanced courses.</li>
        <li>Commitment to attend classes regularly.</li>
      </ul>
    ),
  },
];

export const collaborationModels = [
    {
        title: "Group Classes",
        points: [
            "Structure: Payment based on hourly remuneration for the coach.",
            "Platform: Classes are conducted on Zoom.",
            "Support: We provide full technical support, curriculum, and high-quality coaching resources.",
            "Additional Benefit: After two successful batches, class duration extends to 1.5 hours for the third batch onward."
        ]
    },
    {
        title: "1:1 Individual Classes",
        points: [
            "Structure: Revenue-sharing model where your academy manages marketing and outreach.",
            "Platform: Classes are conducted on Zoom.",
            "Support: We provide full technical support, curriculum, and high-quality coaching resources.",
            "Coming Soon: A fully automated online classroom and advanced dashboard (Jan 2025)."
        ]
    }
];

export const services = [
    {
        title: "Group Class Services",
        points: [
            "Coach Profile: Led by an experienced coach with a minimum peak rating of 1800.",
            "Curriculum: Topic Summarization prepared by GM Saptarshi Roy Chowdhury.",
            "Assignments: Homework after each topic provided by our mentors IM Somak Palit & FM Joydeep Dutta.",
            "Evaluation: Quarterly physical mark sheets sent to your academy HQ.",
            "Feedback: Bi-monthly student progress reports and PTM with coaches and titled players.",
            "Perks: 10% discount on KCA camps/tournaments and events."
        ]
    },
    {
        title: "1:1 Private Class Services",
        points: [
            "Coach Profile: Class led by an experienced coach based on the student's level.",
            "Personalized Coaching: Customized material and opening preparation for each player.",
            "Study Material: Detailed topics on our website with PDFs and Lichess links.",
            "Advanced Study: Classical Game Study curated by our Mentors FM Joydeep Dutta and Arpan Das.",
            "Guidance: Routine and Book Recommendations prepared by titled players."
        ]
    }
];

export const pricing = [
    {
        title: "Group Class",
        price: "₹1200 per hour",
        details: "Max 10-12 students. Coach with 1800+ FIDE Rating. 1.5 hours for 3rd batch onwards."
    },
    {
        title: "1:1 Private Class",
        price: "₹800 per hour",
        details: "For a coach of ~1800 level. Partnered academies: 20% revenue share. Non-tied academies: 15% revenue share."
    },
    {
        title: "Premium Game Analysis",
        price: "5 Games: ₹1000 | 10 Games: ₹1800",
        details: "In-depth analysis by FMs, IMs, or GMs. Includes overview of playing style, areas for improvement, and book recommendations. Turnaround time is approx. one week."
    }
];

export const schoolDetails = [
    { title: "Structured Lessons", details: ["Tailored chess lessons designed to improve cognitive skills and problem-solving abilities."] },
    { title: "Tournaments & Competitions", details: ["Encourage students to showcase their skills and build confidence through competitive events."] },
  ];

export const workspaceDetails = [
    { title: "Workshops & Training", details: ["Interactive sessions to hone cognitive and analytical skills."] },
    { title: "Team Building", details: ["Encourage collaboration and camaraderie through chess."] },
    { title: "Corporate Tournaments", details: ["Host engaging tournaments for your organization."] },
  ];

export const eventsData = [
    { title: "Invitational Inter-Club U-25 Chess Tournament 2024", date: "2024-10-02", mode: "Offline", link: null, image: "/events/2024-10-02.jpg" },
    { title: "Invitational Inter-Club U-25 Chess Tournament 2024", date: "2024-11-15", mode: "Offline", link: "https://forms.gle/zBsTohCXppUNCWjU6", image: "/events/2024-11-15.jpg" },
    {
      title: "ASPIRE CHESS ACADEMY Presents GRAND INAUGURATION & INVITATIONAL INTER-CLUB TOURNAMENT 2025",
      date: "2025-08-17",
      mode: "Offline",
      link: "https://forms.gle/RL7tEqVVndVGC1bt9",
      image: '/events/2025-08-17.png',
      details: {
        message: "https://chat.whatsapp.com/ES9wSKIaTcoE5nQPvvgoMY?mode=ac_t",
        registration: "https://circlechess.com/registration?id=38458",
        time: "11:00 am onwards",
        location: "Parnasree Nababani Sangha, Airport More, Behala, Kolkata - 700060",
        map: "https://maps.app.goo.gl/dBzYZ2vBUtzfKmUt5?g_st=aw",
        format: "15+5 | RAPID | 5 Rounds",
        entryFees: "₹500",
        prizeFund: "₹12,000",
        contact: [
          { name: "Aspire Chess Academy", phone: "9830149852" },
          { name: "Soumk Dutta", phone: "8335965569" },
          { name: "Partha Basu", phone: "9903857820" }
        ],
        prizes: [
          { place: 1, prize: "₹2,000 + 🏆" },
          { place: 2, prize: "₹1,400 + 🏆" },
          { place: 3, prize: "₹1,000 + 🏆" },
          { place: 4, prize: "₹800" },
          { place: 5, prize: "₹700" },
          { place: 6, prize: "₹600" },
          { place: 7, prize: "₹500" }
        ],
        ageCategories: ["U7", "U9", "U11", "U13"],
        ageCategoryPrizes: [
          { place: 1, prize: "🏆" },
          { place: 2, prize: "🏅" },
          { place: 3, prize: "🏅" }
        ],
        specialCategory: ["Best Woman", "Youngest Participant"]
      }
    }
  ];

// Data for blogs
export const blogsData = [
  {
    title: "Chess Blog: PDF Insight",
    date: "2025-07-28",
    author: "AspireChess Team",
    link: "/blogs/1.pdf",
    image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: "View the full blog in PDF format."
  }
];

export const proMembershipDetails = [
    {
      title: "Calculation Pack",
      details: [
        "Structure: 9 curated puzzles every week, divided in 3 levels prepared by a GM.",
        "Frequency: 3 days/week.",
        "Support: You can self-check the positions.",
      ],
    },
    {
      title: "Game Analysis",
      details: [
        "Structure: 8 in-depth game modern and classical analysis, with in-game solvable Diagrams.",
        "Frequency: 8 games to analyse, learn & study for a month.",
        "Support: Deep Dive by Titled Players and their personal insights.",
      ],
    },
    {
      title: "Hot Topic Summarizations",
      details: [
        "Structure: Video explanation Course with Positions- 1 Topic every Month of Beginner & 1 Topic of Intermediate or Advance or Expert Level presented by FM Joydeep Dutta & Arpan Das.",
        "Frequency: 2 Topics every Month.",
        "Support: Homework of specific Topics Presented to work at Home.",
      ],
    },
    {
      title: "Additional Benefits",
      details: [
        "Access to Exclusive Bonus Content.",
        "Access to our exclusive Pro Members Community Forum where we discuss daily ideas around chess!",
      ],
    },
  ];

export const pricingPlans = [
    { plan: "Monthly", price: "₹999 / $14.99" },
    { plan: "Half-Yearly", price: "₹4,999 / $74.99" },
    { plan: "Yearly", price: "₹8,999 / $134.99" },
  ];

export const referralDetails = [
    { title: "Earn Discounts", details: ["Receive exclusive discounts for every successful referral."] },
    { title: "Share the Benefits", details: ["Introduce others to the joy of learning chess with us."] },
    { title: "Simple Process", details: ["Refer, enroll, and get rewarded!"] },
  ];

export const scholarshipDetails = [
    {
      category: "For our Young FIDE rated & USCF 1200+ rated Stars:",
      benefits: [
        "One-month free subscription to our “Pro Membership”",
      ],
    },
    {
      category: "For our State Age Group category winners:",
      benefits: [
        "1st & 2nd Rank Holders: Six (6) months free subscription to “Pro Membership”",
        "Exclusive 1st Rank Holder: 5 Game Analysis",
        "3rd Rank: 2 Months free “Pro Membership”",
        "4th Rank: 1 Month free “Pro Membership”",
      ],
    },
    {
      category: "For our National Age Group category winners:",
      benefits: [
        "1st & 2nd Rank Holders: 1 year free subscription to “Pro Membership”",
        "Exclusive 1st Rank Holder: Quarterly 5 Game Analysis",
        "Exclusive 2nd Rank Holder: 1 time 5 Game Analysis",
        "3rd Rank: 6 Months free “Pro Membership” & 1 time 5 Game Analysis",
        "4th Rank: 4 Months free “Pro Membership”",
        "5th Rank: 2 Months free “Pro Membership”",
      ],
    },
    {
      category: "Additional Incentives to all Categories:",
      benefits: [
        "Achievement Highlight on all our Social Media Platforms",
        "Personalized Merchandize Gifts",
        "Selected One Kolkata Chess free Registration",
      ],
    },
  ];