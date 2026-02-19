
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { Users } from "lucide-react";

// const teams = [
//   {
//     department: "Core Team",
//     members: [
//       { name: "Ali Haider", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop" },
//       { name: "Anusha Afzal", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop" },
//       { name: "Mohsin Nawaz", image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=400&h=400&fit=crop" }
//     ]
//   },
//   {
//     department: "Media Team",
//     members: [
//       { name: "Ahmed Raza", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" },
//       { name: "Fatima Noor", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop" },
//       { name: "Hassan Ali", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop" }
//     ]
//   },
//   {
//     department: "Technical Team",
//     members: [
//       { name: "Bilal Hussain", image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=400&fit=crop" },
//       { name: "Ayesha Malik", image: "https://images.unsplash.com/photo-1517486808981-366d15fbc348?w=400&h=400&fit=crop" },
//       { name: "Saad Khan", image: "https://images.unsplash.com/photo-1519085360771-9852ef158dbb?w=400&h=400&fit=crop" }
//     ]
//   },
//   {
//     department: "Management Team",
//     members: [
//       { name: "Hina Shah", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop" },
//       { name: "Zain Ahmed", image: "https://images.unsplash.com/photo-1514306688941-586cb221d7d7?w=400&h=400&fit=crop" },
//       { name: "Noor Fatima", image: "https://images.unsplash.com/photo-1506576454947-e4a2e0055e8c?w=400&h=400&fit=crop" }
//     ]
//   },
//   {
//     department: "Registration Team",
//     members: [
//       { name: "Faizan Ali", image: "https://images.unsplash.com/photo-1534308143481-c55f00be8e23?w=400&h=400&fit=crop" },
//       { name: "Sara Khan", image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=400&h=400&fit=crop" }
//     ]
//   }
// ];

// export default function Community() {
//   return (
//     <>
//       <Navbar />
      
//       <section className="px-4 lg:px-40 py-28 bg-white">
//         <div className="max-w-[1200px] mx-auto">
//           <div className="text-center mb-20">
//             <span className="inline-block mb-4 px-4 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full">
//               Our Community
//             </span>
//             <h1 className="text-5xl font-extrabold leading-tight mb-4">
//               TechFest <span className="text-gradient">Team & Community</span>
//             </h1>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Meet the passionate individuals and teams making TechFest 2026 possible
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-10">
//             {teams.map((team, index) => (
//               <div
//                 key={index}
//                 className="group relative p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200 shadow hover:-translate-y-3 hover:shadow-xl transition-all duration-300"
//               >
//                 <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-tech-purple/5 opacity-0 group-hover:opacity-100 transition"></div>
                
//                 <div className="relative">
//                   <div className="flex items-center gap-3 mb-6">
//                     <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-tech-purple flex items-center justify-center">
//                       <Users className="w-6 h-6 text-white" />
//                     </div>
//                     <h2 className="text-2xl font-semibold text-gray-900">{team.department}</h2>
//                   </div>

//                   <div className="space-y-3">
//                     {team.members.map((member, i) => (
//                       <div
//                         key={i}
//                         className="flex items-center gap-3 p-3 rounded-lg bg-white/50 backdrop-blur-sm hover:bg-white/80 transition"
//                       >
//                         <img
//                           src={member.image}
//                           alt={member.name}
//                           className="w-10 h-10 rounded-full object-cover border-2 border-primary/20"
//                         />
//                         <span className="font-medium text-gray-800">{member.name}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="px-4 lg:px-40 py-28 bg-gray-50">
//         <div className="max-w-[1200px] mx-auto text-center">
//           <h2 className="text-5xl font-extrabold mb-6">
//             Join Our <span className="text-gradient">Community</span>
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
//             Be part of Pakistan's premier tech event and grow with thousands of students
//           </p>
          
//           <div className="grid md:grid-cols-3 gap-10">
//             <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow hover:-translate-y-3 hover:shadow-xl transition-all">
//               <div className="w-14 h-14 mx-auto mb-6 rounded-xl bg-primary/10 flex items-center justify-center">
//                 <Users className="w-7 h-7 text-primary" />
//               </div>
//               <h3 className="text-xl font-semibold mb-2">Connect</h3>
//               <p className="text-gray-600 text-sm">Network with peers, mentors, and industry professionals</p>
//             </div>

//             <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow hover:-translate-y-3 hover:shadow-xl transition-all">
//               <div className="w-14 h-14 mx-auto mb-6 rounded-xl bg-primary/10 flex items-center justify-center">
//                 <Users className="w-7 h-7 text-primary" />
//               </div>
//               <h3 className="text-xl font-semibold mb-2">Collaborate</h3>
//               <p className="text-gray-600 text-sm">Work together on exciting projects and competitions</p>
//             </div>

//             <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow hover:-translate-y-3 hover:shadow-xl transition-all">
//               <div className="w-14 h-14 mx-auto mb-6 rounded-xl bg-primary/10 flex items-center justify-center">
//                 <Users className="w-7 h-7 text-primary" />
//               </div>
//               <h3 className="text-xl font-semibold mb-2">Grow</h3>
//               <p className="text-gray-600 text-sm">Develop skills and gain recognition in the tech ecosystem</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// }
import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Users, ChevronDown, ChevronUp, Mail, Linkedin, Award, Crown, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from 'framer-motion';

const teams = [
  {
    department: "Core Team",
    color: "from-primary to-primary",
    icon: Crown,
    lead: { 
      name: "Ali Haider", 
      role: "Team Lead",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
      email: "ali@techfest.com",
      linkedin: "#"
    },
    members: [
      { name: "Anusha Afzal", role: "Event Coordinator", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop" },
      { name: "Mohsin Nawaz", role: "Strategy Lead", image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=400&h=400&fit=crop" },
      { name: "Sarah Ahmed", role: "Communications", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop" },
      { name: "Hassan Khan", role: "Operations", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop" },
      { name: "Zara Malik", role: "Partnership Lead", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop" },
      { name: "Omar Siddiqui", role: "Finance Manager", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" },
      { name: "Fatima Noor", role: "Volunteer Coordinator", image: "https://images.unsplash.com/photo-1517486808981-366d15fbc348?w=400&h=400&fit=crop" },
      { name: "Ahmed Raza", role: "Logistics", image: "https://images.unsplash.com/photo-1519085360771-9852ef158dbb?w=400&h=400&fit=crop" },
      { name: "Aisha Tariq", role: "Marketing Lead", image: "https://images.unsplash.com/photo-1534308143481-c55f00be8e23?w=400&h=400&fit=crop" },
      { name: "Bilal Hussain", role: "Outreach Manager", image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=400&fit=crop" },
      { name: "Hina Shah", role: "Content Lead", image: "https://images.unsplash.com/photo-1506576454947-e4a2e0055e8c?w=400&h=400&fit=crop" },
      { name: "Kamran Ali", role: "Sponsorship", image: "https://images.unsplash.com/photo-1514306688941-586cb221d7d7?w=400&h=400&fit=crop" },
      { name: "Nida Khan", role: "PR Manager", image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=400&h=400&fit=crop" },
      { name: "Fahad Ahmed", role: "Experience Design", image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=400&fit=crop" },
      { name: "Sana Malik", role: "Community Manager", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop" },
      { name: "Usman Shah", role: "Brand Manager", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop" },
      { name: "Rabia Noor", role: "Social Media", image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=400&fit=crop" },
      { name: "Hamza Ali", role: "Operations", image: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=400&h=400&fit=crop" },
      { name: "Maryam Khan", role: "Design Lead", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop" },
      { name: "Saad Ahmed", role: "Event Planning", image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop" },
      { name: "Ayesha Imran", role: "Guest Relations", image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=400&h=400&fit=crop" },
      { name: "Faizan Raja", role: "Venue Manager", image: "https://images.unsplash.com/photo-1507081323647-4d250478b919?w=400&h=400&fit=crop" },
      { name: "Khadija Ali", role: "Program Director", image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop" },
      { name: "Talha Sheikh", role: "Quality Assurance", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop" },
    ]
  },
  {
    department: "Technical Team",
    color: "from-primary to-tech-purple",
    icon: Sparkles,
    lead: { 
      name: "Bilal Hussain", 
      role: "Tech Lead",
      image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=400&fit=crop",
      email: "bilal@techfest.com",
      linkedin: "#"
    },
    members: [
      { name: "Ayesha Malik", role: "Full Stack Developer", image: "https://images.unsplash.com/photo-1517486808981-366d15fbc348?w=400&h=400&fit=crop" },
      { name: "Saad Khan", role: "DevOps Engineer", image: "https://images.unsplash.com/photo-1519085360771-9852ef158dbb?w=400&h=400&fit=crop" },
      { name: "Zainab Ahmed", role: "Frontend Developer", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop" },
      { name: "Imran Ali", role: "Backend Developer", image: "https://images.unsplash.com/photo-1507081323647-4d250478b919?w=400&h=400&fit=crop" },
      { name: "Noor Fatima", role: "UI/UX Designer", image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=400&h=400&fit=crop" },
      { name: "Haris Sheikh", role: "Mobile Developer", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop" },
      { name: "Maham Raza", role: "QA Engineer", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop" },
      { name: "Abdullah Khan", role: "System Admin", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop" },
      { name: "Rafia Malik", role: "Database Admin", image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop" },
    ]
  },
  {
    department: "Media Team",
    color: "from-primary to-primary",
    icon: Award,
    lead: { 
      name: "Ahmed Raza", 
      role: "Media Lead",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      email: "ahmed@techfest.com",
      linkedin: "#"
    },
    members: [
      { name: "Fatima Noor", role: "Content Creator", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop" },
      { name: "Hassan Ali", role: "Videographer", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop" },
      { name: "Sana Ahmed", role: "Photographer", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop" },
      { name: "Umar Khan", role: "Social Media Manager", image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop" },
      { name: "Amna Tariq", role: "Graphic Designer", image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=400&fit=crop" },
      { name: "Nabeel Shah", role: "Video Editor", image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=400&fit=crop" },
      { name: "Aliza Malik", role: "Content Writer", image: "https://images.unsplash.com/photo-1517486808981-366d15fbc348?w=400&h=400&fit=crop" },
      { name: "Farhan Ali", role: "Media Coordinator", image: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=400&h=400&fit=crop" },
      { name: "Maha Noor", role: "Brand Designer", image: "https://images.unsplash.com/photo-1534308143481-c55f00be8e23?w=400&h=400&fit=crop" },
      { name: "Waqas Ahmed", role: "Motion Graphics", image: "https://images.unsplash.com/photo-1507081323647-4d250478b919?w=400&h=400&fit=crop" },
      { name: "Hiba Khan", role: "Communications", image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=400&h=400&fit=crop" },
    ]
  },
  {
    department: "Management Team",
    color: "from-primary to-tech-purple",
    icon: Users,
    lead: { 
      name: "Hina Shah", 
      role: "Management Lead",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      email: "hina@techfest.com",
      linkedin: "#"
    },
    members: [
      { name: "Zain Ahmed", role: "Operations Manager", image: "https://images.unsplash.com/photo-1514306688941-586cb221d7d7?w=400&h=400&fit=crop" },
      { name: "Noor Fatima", role: "HR Manager", image: "https://images.unsplash.com/photo-1506576454947-e4a2e0055e8c?w=400&h=400&fit=crop" },
      { name: "Kamran Sheikh", role: "Finance Head", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop" },
      { name: "Laiba Khan", role: "Admin Manager", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop" },
      { name: "Junaid Ali", role: "Resource Manager", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop" },
    ]
  },
  {
    department: "Registration Team",
    color: "from-primary to-primary",
    icon: Users,
    lead: { 
      name: "Faizan Ali", 
      role: "Registration Lead",
      image: "https://images.unsplash.com/photo-1534308143481-c55f00be8e23?w=400&h=400&fit=crop",
      email: "faizan@techfest.com",
      linkedin: "#"
    },
    members: [
      { name: "Sara Khan", role: "Registration Officer", image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=400&h=400&fit=crop" },
      { name: "Ali Raza", role: "Data Manager", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" },
      { name: "Maha Ahmed", role: "Support Coordinator", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop" },
      { name: "Hamza Sheikh", role: "Check-in Manager", image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop" },
    ]
  }
];

export default function Community() {
  const [expandedTeam, setExpandedTeam] = useState(null);

  const toggleTeam = (index) => {
    setExpandedTeam(expandedTeam === index ? null : index);
  };

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-tech-purple/5 pt-32 pb-20 px-4">
        <div className="absolute inset-0 bg-geometric opacity-30"></div>
        
        <motion.div
          className="relative z-10 max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-6 px-6 py-2 bg-primary/10 border border-primary/20 rounded-full"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-primary font-semibold">Our Community</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
            Meet Our Amazing{" "}
            <span className="text-gradient">
              Team
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto">
            Passionate individuals working together to make TechFest 2026 an unforgettable experience
          </p>

          <div className="flex justify-center gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-1">50+</div>
              <div className="text-gray-500 text-sm">Team Members</div>
            </div>
            <div className="w-px bg-gray-300"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-1">5</div>
              <div className="text-gray-500 text-sm">Departments</div>
            </div>
            <div className="w-px bg-gray-300"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-1">1</div>
              <div className="text-gray-500 text-sm">Vision</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Teams Section */}
      <section className="px-4 lg:px-40 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8">
            {teams.map((team, index) => (
              <motion.div
                key={index}
                className="group relative bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Team Header with Lead */}
                <div className="relative">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${team.color} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                  
                  <div className="relative p-8 md:p-10">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                      {/* Team Info */}
                      <div className="flex items-center gap-6">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${team.color} flex items-center justify-center shadow-lg`}>
                          <team.icon className="w-8 h-8 text-white" />
                        </div>
                        
                        <div>
                          <h2 className="text-3xl font-bold text-gray-900 mb-1">{team.department}</h2>
                          <p className="text-gray-500 font-medium">
                            {team.members.length + 1} talented members
                          </p>
                        </div>
                      </div>

                      {/* Team Lead Card */}
                      <div className="flex items-center gap-4 bg-gradient-to-br from-gray-50 to-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                        <div className="relative">
                          <img
                            src={team.lead.image}
                            alt={team.lead.name}
                            className="w-16 h-16 rounded-xl object-cover border-2 border-white shadow-md"
                          />
                          <div className={`absolute -top-2 -right-2 w-7 h-7 bg-gradient-to-br ${team.color} rounded-full flex items-center justify-center border-2 border-white shadow-lg`}>
                            <Crown className="w-3.5 h-3.5 text-white" />
                          </div>
                        </div>
                        
                        <div>
                          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-0.5">
                            {team.lead.role}
                          </div>
                          <div className="font-bold text-gray-900">{team.lead.name}</div>
                          
                          <div className="flex gap-2 mt-2">
                            <a 
                              href={`mailto:${team.lead.email}`}
                              className="text-gray-400 hover:text-blue-600 transition-colors"
                            >
                              <Mail size={14} />
                            </a>
                            <a 
                              href={team.lead.linkedin}
                              className="text-gray-400 hover:text-blue-600 transition-colors"
                            >
                              <Linkedin size={14} />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Expand Button */}
                    <motion.button
                      onClick={() => toggleTeam(index)}
                      className={`mt-6 w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                        expandedTeam === index
                          ? 'bg-primary text-white shadow-lg'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <span>
                        {expandedTeam === index ? 'Hide' : 'View'} Team Members
                      </span>
                      {expandedTeam === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </motion.button>
                  </div>
                </div>

                {/* Expandable Team Members */}
                <AnimatePresence>
                  {expandedTeam === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 md:px-10 pb-10 pt-2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                          {team.members.map((member, idx) => (
                            <motion.div
                              key={idx}
                              className="group/card relative bg-gradient-to-br from-gray-50 to-white p-4 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: idx * 0.03 }}
                              whileHover={{ y: -4 }}
                            >
                              <div className="flex items-center gap-3">
                                <img
                                  src={member.image}
                                  alt={member.name}
                                  className="w-14 h-14 rounded-lg object-cover border-2 border-white shadow-sm group-hover/card:scale-105 transition-transform"
                                />
                                <div className="flex-1 min-w-0">
                                  <div className="font-semibold text-gray-900 truncate">
                                    {member.name}
                                  </div>
                                  <div className="text-xs text-gray-500 truncate">
                                    {member.role}
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community CTA Section */}
      <section className="px-4 lg:px-40 py-28 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-geometric opacity-20"></div>
        
        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Join Our <span className="text-gradient">Community</span>
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Be part of Pakistan's premier tech event and connect with thousands of passionate students and professionals
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Connect",
                description: "Network with peers, mentors, and industry professionals ",
                color: "from-primary to-primary"
              },
              {
                icon: Sparkles,
                title: "Collaborate",
                description: "Work together on exciting projects, hackathons, and competitions",
                color: "from-primary to-tech-purple"
              },
              {
                icon: Award,
                title: "Grow",
                description: "Develop your skills and gain recognition in the tech ecosystem",
                color: "from-primary to-primary"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <div className="relative p-8 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <a href="/register">
            <button className="px-10 py-4 bg-gradient-to-r from-primary to-tech-purple text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              Register for TechFest 2026
            </button>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}