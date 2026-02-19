export const categories = [
  { id: 'all', name: 'All Events' },
  { id: 'programming', name: 'Programming' },
  { id: 'ai', name: 'Artificial Intelligence' },
  { id: 'cybersecurity', name: 'Cybersecurity' },
  { id: 'robotics', name: 'Robotics' },
  { id: 'startup', name: 'Startup Expo' },
  { id: 'gaming', name: 'Gaming' },
  { id: 'design', name: 'Design & Media' },
  { id: 'non-tech', name: 'Non-Technical' },
];

export const eventsData = [
  {
    id: 1,
    title: "CodeSprint 2026",
    category: "programming",
    date: "2026-03-15",
    teamSize: "1-3 Members",
    prize: "PKR 50,000",
    fee: "PKR 1,500 per team",
    type: "Paid",
    difficulty: "Hard",
    venue: "Lab 3, CS Department",
    schedule: "10:00 AM - 2:00 PM",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80",
    description: "A fast-paced competitive programming contest testing your algorithmic skills.",
    rules: [
      "Languages allowed: C++, Java, Python.",
      "Internet access is restricted.",
      "Plagiarism will lead to immediate disqualification.",
      "Teams must consist of enrolled students."
    ],
    eligibility: "Undergraduate students from any university.",
    contactLead: {
      name: "Ahmed Khan",
      phone: "+92 300 1234567",
      email: "ahmed.codesprint@techfest.com"
    }
  },
  {
    id: 2,
    title: "RoboWar",
    category: "robotics",
    date: "2026-03-16",
    teamSize: "3-5 Members",
    prize: "PKR 100,000",
    fee: "PKR 3,000 per team",
    type: "Paid",
    difficulty: "Expert",
    venue: "Main Auditorium",
    schedule: "11:00 AM - 5:00 PM",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80",
    description: "Build your combat robot and fight for supremacy in the arena.",
    rules: [
      "Robot weight limit: 15kg.",
      "No flammable or explosive weapons allowed.",
      "Matches will be 3 minutes long.",
      "Safety gear is mandatory for operators."
    ],
    eligibility: "Open to all.",
    contactLead: {
      name: "Bilal Ahmed",
      phone: "+92 321 9876543",
      email: "bilal.robowar@techfest.com"
    }
  },
  {
    id: 3,
    title: "AI Hackathon",
    category: "ai",
    date: "2026-03-15",
    teamSize: "2-4 Members",
    prize: "PKR 80,000",
    fee: "PKR 2,000 per team",
    type: "Paid",
    difficulty: "Hard",
    venue: "Innovation Center",
    schedule: "24 Hours (Overnight)",
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80",
    description: "Solve real-world problems using Machine Learning and AI models in 24 hours.",
    rules: [
      "Problem statement will be released on spot.",
      "Pre-trained models are allowed.",
      "Code must be hosted on GitHub.",
      "Final presentation is mandatory."
    ],
    eligibility: "Students and Professionals.",
    contactLead: {
      name: "Sara Ali",
      phone: "+92 333 4567890",
      email: "sara.ai@techfest.com"
    }
  },
  {
    id: 4,
    title: "Capture The Flag",
    category: "cybersecurity",
    date: "2026-03-17",
    teamSize: "1-3 Members",
    prize: "PKR 60,000",
    fee: "PKR 1,500 per team",
    type: "Paid",
    difficulty: "Hard",
    venue: "Lab 1, CS Department",
    schedule: "9:00 AM - 3:00 PM",
    image: "https://images.unsplash.com/photo-1563206767-5b1d9728c5c7?auto=format&fit=crop&q=80",
    description: "Test your hacking and security skills in this intense CTF challenge.",
    rules: [
      "Jeopardy style CTF.",
      "Do not attack the infrastructure.",
      "Flag sharing is prohibited.",
      "Bring your own laptops (Kali Linux recommended)."
    ],
    eligibility: "Undergraduate students.",
    contactLead: {
      name: "Hamza Malik",
      phone: "+92 312 3456789",
      email: "hamza.ctf@techfest.com"
    }
  },
  {
    id: 5,
    title: "FIFA 26 Tournament",
    category: "gaming",
    date: "2026-03-16",
    teamSize: "Individual",
    prize: "PKR 20,000",
    fee: "PKR 500 per person",
    type: "Paid",
    difficulty: "Medium",
    venue: "Student Lounge",
    schedule: "10:00 AM onwards",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80",
    description: "Battle it out on the virtual pitch to become the champion.",
    rules: [
      "Platform: PlayStation 5.",
      "Half length: 5 minutes.",
      "Legacy defending allowed.",
      "Knockout format."
    ],
    eligibility: "Open to all.",
    contactLead: {
      name: "Omar Farooq",
      phone: "+92 345 6789012",
      email: "omar.gaming@techfest.com"
    }
  },
  {
    id: 6,
    title: "Startup Pitch",
    category: "startup",
    date: "2026-03-17",
    teamSize: "2-5 Members",
    prize: "Investment Opportunity",
    fee: "PKR 2,500 per team",
    type: "Paid",
    difficulty: "Medium",
    venue: "Conference Room B",
    schedule: "2:00 PM - 6:00 PM",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80",
    description: "Pitch your startup idea to a panel of investors and industry experts.",
    rules: [
      "Pitch deck must be submitted 2 days prior.",
      "7 minutes for pitch, 3 minutes for Q&A.",
      "Prototype/MVP is a plus.",
      "Business casual attire required."
    ],
    eligibility: "Students and Early-stage Startups.",
    contactLead: {
      name: "Zainab Raza",
      phone: "+92 301 2345678",
      email: "zainab.startup@techfest.com"
    }
  },
  {
    id: 7,
    title: "UI/UX Design Challenge",
    category: "design",
    date: "2026-03-15",
    teamSize: "Individual",
    prize: "PKR 30,000",
    fee: "PKR 1,000",
    type: "Paid",
    difficulty: "Medium",
    venue: "Design Studio",
    schedule: "10:00 AM - 4:00 PM",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80",
    description: "Redesign a popular app or create a new interface from scratch.",
    rules: [
      "Software: Figma or Adobe XD.",
      "Assets will be provided.",
      "Judging criteria: Usability, Aesthetics, Creativity.",
      "Submission via Figma link."
    ],
    eligibility: "Open to all.",
    contactLead: {
      name: "Fatima Noor",
      phone: "+92 332 1122334",
      email: "fatima.design@techfest.com"
    }
  },
  {
    id: 8,
    title: "Scavenger Hunt",
    category: "non-tech",
    date: "2026-03-16",
    teamSize: "3-5 Members",
    prize: "PKR 15,000",
    fee: "Free",
    type: "Free",
    difficulty: "Easy",
    venue: "Campus Grounds",
    schedule: "3:00 PM - 6:00 PM",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80",
    description: "Explore the campus and solve riddles to find the hidden treasure.",
    rules: [
      "Teams must stay together.",
      "Use of vehicles is not allowed.",
      "Time based competition.",
      "Fun is mandatory!"
    ],
    eligibility: "Open to all.",
    contactLead: {
      name: "Hassan Ali",
      phone: "+92 315 5566778",
      email: "hassan.hunt@techfest.com"
    }
  },
];
