import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Linkedin, Twitter } from "lucide-react";

const speakers = [
  { 
    name: "Ali Khan", 
    title: "AI Researcher", 
    topic: "Future of AI",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop"
  },
  { 
    name: "Sara Ahmed", 
    title: "Cyber Expert", 
    topic: "Cyber Security Trends",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop"
  },
  { 
    name: "Usman Raza", 
    title: "Startup Mentor", 
    topic: "Building Startups",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=400&h=400&fit=crop"
  },
  { 
    name: "Ayesha Noor", 
    title: "ML Engineer", 
    topic: "Machine Learning 101",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
  },
  { 
    name: "Bilal Hussain", 
    title: "Robotics Lead", 
    topic: "Robotics in 2026",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
  },
  { 
    name: "Hina Malik", 
    title: "UI/UX Designer", 
    topic: "Design Thinking",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
  },
  { 
    name: "Faizan Ali", 
    title: "Blockchain Dev", 
    topic: "Web3 World",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
  },
  { 
    name: "Noor Fatima", 
    title: "Tech Speaker", 
    topic: "Women in Tech",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop"
  }
];

export default function Speakers() {
  return (
    <>
      <Navbar />
      
      <section className="px-4 lg:px-40 py-28 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-20">
            <span className="inline-block mb-4 px-4 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full">
              Industry Leaders
            </span>
            <h1 className="text-5xl font-extrabold leading-tight mb-4">
              Meet Our <span className="text-gradient">Speakers</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Learn from industry experts shaping the future of technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {speakers.map((speaker, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl border border-gray-100 shadow hover:-translate-y-3 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative overflow-hidden rounded-t-2xl">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-tech-purple/20 opacity-0 group-hover:opacity-100 transition"></div>
                </div>

                <div className="p-6 text-center">
                  <h4 className="font-semibold text-lg">{speaker.name}</h4>
                  <p className="text-sm text-gray-500 mb-2">{speaker.title}</p>
                  <p className="text-sm text-primary font-medium mb-4">{speaker.topic}</p>

                  <div className="flex justify-center gap-4 opacity-0 group-hover:opacity-100 transition">
                    <Linkedin className="w-4 h-4 text-gray-400 hover:text-primary cursor-pointer" />
                    <Twitter className="w-4 h-4 text-gray-400 hover:text-primary cursor-pointer" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}