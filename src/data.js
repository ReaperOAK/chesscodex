// Universal achievements and testimonials
export const achievementsData = [
  { title: "Adreesh Dey's International FIDE Rating", description: "Big Congratulations to Adreesh Dey! We are thrilled to share that our student, Adreesh Dey, has achieved his first international FIDE rating of 1589! ...", image: "/Achievements/1.jpg" }
];

export const testimonials = [
  { quote: "If you’re serious about improving your chess skills, I wholeheartedly recommend Arpan Sir and Joydeep Sir [Aspire Chess Academy]. None came close to what I’ve gained under Arpan Sir and Joydeep Sir. Before them, I struggled with positional understanding, planning, and other fundamentals. Here, I’m learning these every day along with so much more. What sets them apart is their friendly and approachable teaching style, which bridges the usual gap between a coach and a student, which makes learning enjoyable and breaks the usual coach-student barrier. They also provide practice sessions that have helped me a lot. I’m truly grateful for their guidance.", name: "Dhruv Kar", role: "Chess Enthusiast", avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUPrloGLYTtuRAB7qTnRTnQ35fAmk1NEaxWqTQhbUML5qX5Ovg=w108-h108-p-rp-mo-br100" },
  { quote: "Players get wonderful exposure here and get a chance to play with quality players who are high rated who also frequently visit the sessions. The sessions are conducted in a friendly environment and constant learning. My experience was wonderful. Highly recommended.", name: "Megha Patra", role: "Chess Enthusiast", avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXGUStEJ5_047_ExA4qYJj3KThVcb6HJ9aSLMdoEFxw6WvUFLI=w108-h108-p-rp-mo-br100" }
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
      image: null,
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