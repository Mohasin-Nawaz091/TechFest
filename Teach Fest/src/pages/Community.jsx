
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Users } from "lucide-react";

const teams = [
  {
    department: "Core Team",
    members: [
      { name: "Ali Haider", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop" },
      { name: "Anusha Afzal", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop" },
      { name: "Mohsin Nawaz", image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=400&h=400&fit=crop" }
    ]
  },
  {
    department: "Media Team",
    members: [
      { name: "Ahmed Raza", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" },
      { name: "Fatima Noor", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop" },
      { name: "Hassan Ali", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop" }
    ]
  },
  {
    department: "Technical Team",
    members: [
      { name: "Bilal Hussain", image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=400&fit=crop" },
      { name: "Ayesha Malik", image: "https://images.unsplash.com/photo-1517486808981-366d15fbc348?w=400&h=400&fit=crop" },
      { name: "Saad Khan", image: "https://images.unsplash.com/photo-1519085360771-9852ef158dbb?w=400&h=400&fit=crop" }
    ]
  },
  {
    department: "Management Team",
    members: [
      { name: "Hina Shah", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop" },
      { name: "Zain Ahmed", image: "https://images.unsplash.com/photo-1514306688941-586cb221d7d7?w=400&h=400&fit=crop" },
      { name: "Noor Fatima", image: "https://images.unsplash.com/photo-1506576454947-e4a2e0055e8c?w=400&h=400&fit=crop" }
    ]
  },
  {
    department: "Registration Team",
    members: [
      { name: "Faizan Ali", image: "https://images.unsplash.com/photo-1534308143481-c55f00be8e23?w=400&h=400&fit=crop" },
      { name: "Sara Khan", image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=400&h=400&fit=crop" }
    ]
  }
];

export default function Community() {
  return (
    <>
      <Navbar />
      
      <section className="px-4 lg:px-40 py-28 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-20">
            <span className="inline-block mb-4 px-4 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full">
              Our Community
            </span>
            <h1 className="text-5xl font-extrabold leading-tight mb-4">
              TechFest <span className="text-gradient">Team & Community</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the passionate individuals and teams making TechFest 2026 possible
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {teams.map((team, index) => (
              <div
                key={index}
                className="group relative p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200 shadow hover:-translate-y-3 hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-tech-purple/5 opacity-0 group-hover:opacity-100 transition"></div>
                
                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-tech-purple flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-900">{team.department}</h2>
                  </div>

                  <div className="space-y-3">
                    {team.members.map((member, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 p-3 rounded-lg bg-white/50 backdrop-blur-sm hover:bg-white/80 transition"
                      >
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-10 h-10 rounded-full object-cover border-2 border-primary/20"
                        />
                        <span className="font-medium text-gray-800">{member.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 lg:px-40 py-28 bg-gray-50">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-5xl font-extrabold mb-6">
            Join Our <span className="text-gradient">Community</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            Be part of Pakistan's premier tech event and grow with thousands of students
          </p>
          
          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow hover:-translate-y-3 hover:shadow-xl transition-all">
              <div className="w-14 h-14 mx-auto mb-6 rounded-xl bg-primary/10 flex items-center justify-center">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Connect</h3>
              <p className="text-gray-600 text-sm">Network with peers, mentors, and industry professionals</p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow hover:-translate-y-3 hover:shadow-xl transition-all">
              <div className="w-14 h-14 mx-auto mb-6 rounded-xl bg-primary/10 flex items-center justify-center">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Collaborate</h3>
              <p className="text-gray-600 text-sm">Work together on exciting projects and competitions</p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow hover:-translate-y-3 hover:shadow-xl transition-all">
              <div className="w-14 h-14 mx-auto mb-6 rounded-xl bg-primary/10 flex items-center justify-center">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Grow</h3>
              <p className="text-gray-600 text-sm">Develop skills and gain recognition in the tech ecosystem</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
