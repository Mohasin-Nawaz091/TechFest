import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import { Wrench, Award, Users, TrendingUp } from "lucide-react";
import { Linkedin, Twitter } from "lucide-react";
import {
  Code,
  Bot,
  Brain,
  Shield,
  Gamepad2,
  Rocket,
} from "lucide-react";
import { Star } from "lucide-react";
const testimonials = [
  {
    name: "Ali Raza",
    role: "BS Software Engineering",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    review:
      "TechFest completely changed my perspective. The competitions and networking opportunities were unreal.",
  },
  {
    name: "Ayesha Khan",
    role: "AI Enthusiast",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    review:
      "From workshops to speakers, everything was top-notch. One of the best tech events I’ve attended.",
  },
  {
    name: "Hassan Ali",
    role: "Flutter Developer",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
    review:
      "Amazing environment, great mentors, and perfect exposure for students aiming for the tech industry.",
  },
];

const competitions = [
  {
    title: "Programming Competitions",
    desc: "Algorithmic challenges and competitive coding events",
    icon: Code,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Robotics Challenges",
    desc: "Design, build, and program intelligent robots",
    icon: Bot,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "AI & ML Events",
    desc: "Solve real-world problems using artificial intelligence",
    icon: Brain,
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    title: "Cybersecurity Workshops",
    desc: "Learn ethical hacking and system defense",
    icon: Shield,
    gradient: "from-red-500 to-orange-500",
  },
  {
    title: "Gaming Arena",
    desc: "Compete in high-energy esports tournaments",
    icon: Gamepad2,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "Startup Expo",
    desc: "Pitch ideas and connect with mentors & investors",
    icon: Rocket,
    gradient: "from-yellow-500 to-orange-500",
  },
];



const whyJoin = [
  {
    title: "Skill Development",
    desc: "Hands-on experience through competitions, workshops, and challenges",
    icon: Wrench,
  },
  {
    title: "Certifications & Awards",
    desc: "Earn certificates, prizes, and recognition for your achievements",
    icon: Award,
  },
  {
    title: "Networking Opportunities",
    desc: "Connect with industry experts, mentors, and like-minded peers",
    icon: Users,
  },
  {
    title: "Career Growth",
    desc: "Boost your resume and open doors to internships and jobs",
    icon: TrendingUp,
  },
];


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

    
      <section className="px-4 lg:px-40 py-28">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block mb-4 px-4 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full">
              About TechFest
            </span>

            <h2 className="text-5xl font-extrabold leading-tight">
              Pakistan’s Premier <br />
              <span className="text-gradient">Tech Festival</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              TechFest is Pakistan’s flagship student technology festival,
              bringing innovation, competition, and industry collaboration
              under one platform.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-8">
              <Stat number="2000+" label="Participants" />
              <Stat number="50+" label="Events" />
              <Stat number="15+" label="Departments" />
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-tech-purple/30 blur-3xl rounded-3xl"></div>
            <img
              className="relative rounded-3xl shadow-2xl"
              src="https://images.unsplash.com/photo-1556761175-129418cb2dfe"
              alt="Tech Conference"
            />
          </div>
        </div>
      </section>

      {/* <section className="px-4 lg:px-40 py-28 bg-gray-50">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-5xl font-extrabold">
            Explore Our <span className="text-gradient">Competitions</span>
          </h2>
          <p className="mt-4 text-gray-600">
            Choose from technical, creative, and competitive events
          </p>

          <div className="mt-16 grid md:grid-cols-3 gap-10">
            {competitions.map((c) => (
              <div
                key={c.title}
                className="p-8 bg-white rounded-2xl border shadow hover:-translate-y-2 hover:shadow-xl transition"
              >
                <div className="w-14 h-14 mb-5 rounded-xl bg-primary/10 flex items-center justify-center text-primary text-xl">
                  {c.icon}
                </div>
                <h3 className="text-xl font-bold">{c.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{c.desc}</p>
                <span className="inline-block mt-4 text-primary font-semibold">
                  Learn More →
                </span>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <section className="px-4 lg:px-40 py-28 bg-gray-50">
  <div className="max-w-[1200px] mx-auto text-center">
    <h2 className="text-5xl font-extrabold">
      Explore Our <span className="text-gradient">Competitions</span>
    </h2>

    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
      Choose from technical, creative, and competitive events
    </p>

    <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
      {competitions.map((item, index) => (
        <div
          key={index}
          className="group relative p-8 bg-white rounded-2xl border border-gray-100 shadow hover:-translate-y-3 hover:shadow-xl transition-all duration-300"
        >
         
          <div
            className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
          >
            <item.icon className="w-8 h-8 text-white" />
          </div>

         
          <h3 className="text-xl font-semibold mb-2">
            {item.title}
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            {item.desc}
          </p>

          <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
            Learn More →
          </span>

       
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-tech-purple/5 opacity-0 group-hover:opacity-100 transition"></div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* <section className="px-4 lg:px-40 py-28">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-5xl font-extrabold">
            Why Join <span className="text-gradient">TechFest 2026?</span>
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            TechFest is designed to empower students with skills, exposure, and
            opportunities.
          </p>

          <div className="mt-16 grid md:grid-cols-4 gap-10">
            {benefits.map((b) => (
              <div
                key={b}
                className="p-8 rounded-xl bg-gray-50 hover:bg-gradient-to-br hover:from-primary hover:to-tech-purple hover:text-white transition"
              >
                <div className="text-4xl mb-4">🚀</div>
                <h4 className="font-bold">{b}</h4>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <section className="px-4 lg:px-40 py-28 bg-white">
  <div className="max-w-[1200px] mx-auto text-center">
    <h2 className="text-5xl font-extrabold">
      Why Join <span className="text-gradient">TechFest 2026?</span>
    </h2>

    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
      TechFest is designed to empower students with skills, exposure, and opportunities.
    </p>

    <div className="mt-16 grid md:grid-cols-4 gap-10">
      {whyJoin.map((item, index) => (
        <div
          key={index}
          className="group p-8 rounded-2xl bg-gray-50 hover:bg-gradient-to-br hover:from-primary hover:to-tech-purple hover:text-white transition-all duration-300 shadow hover:-translate-y-2"
        >
    
          <div className="w-14 h-14 mx-auto mb-6 rounded-xl bg-primary/10 group-hover:bg-white/20 flex items-center justify-center transition">
            <item.icon className="w-7 h-7 text-primary group-hover:text-white transition" />
          </div>

          <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
          <p className="text-sm opacity-80">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* <section className="px-4 lg:px-40 py-28 bg-gray-50">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-5xl font-extrabold mb-16">
            Learn from <span className="text-gradient">Industry Leaders</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-10">
            {speakers.map((s) => (
              <div
                key={s.name}
                className="bg-white rounded-2xl shadow hover:-translate-y-2 transition"
              >
                <img
                  className="h-56 w-full object-cover rounded-t-2xl"
                  src={s.img}
                  alt={s.name}
                />
                <div className="p-6">
                  <h4 className="font-bold">{s.name}</h4>
                  <p className="text-sm text-gray-500">{s.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <section className="px-4 lg:px-40 py-28 bg-gray-50">
  <div className="max-w-[1200px] mx-auto text-center">
    <h2 className="text-5xl font-extrabold">
      Learn from <span className="text-gradient">Industry Leaders</span>
    </h2>

    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
      Get insights from experts shaping the future of technology.
    </p>

    <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
      {speakers.map((s, index) => (
        <div
          key={index}
          className="group bg-white rounded-2xl border border-gray-100 shadow hover:-translate-y-3 hover:shadow-xl transition-all duration-300"
        >
   
          <div className="relative overflow-hidden rounded-t-2xl">
            <img
              src={s.img}
              alt={s.name}
              className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-500"
            />

            
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-tech-purple/20 opacity-0 group-hover:opacity-100 transition"></div>
          </div>

         
          <div className="p-6 text-center">
            <h4 className="font-semibold text-lg">{s.name}</h4>
            <p className="text-sm text-gray-500">{s.role}</p>

            
            <div className="flex justify-center gap-4 mt-4 opacity-0 group-hover:opacity-100 transition">
              <Linkedin className="w-4 h-4 text-gray-400 hover:text-primary cursor-pointer" />
              <Twitter className="w-4 h-4 text-gray-400 hover:text-primary cursor-pointer" />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* <section className="px-4 lg:px-40 py-28">
        <h2 className="text-5xl font-extrabold text-center mb-16">
          Supported by <span className="text-gradient">Industry Giants</span>
        </h2>

        <div className="max-w-[1000px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
          {sponsors.map((s) => (
            <div className="h-20 bg-white rounded-xl shadow flex items-center justify-center hover:scale-105 transition">
  <img
    src={s.src}
    alt={s.name}
    className="h-10 w-auto opacity-70 hover:opacity-100 transition"
  />
</div>

          ))}
        </div>
      </section> */}
      <section className="px-4 lg:px-40 py-28 bg-white">
  <div className="max-w-[1200px] mx-auto text-center">
    <h2 className="text-5xl font-extrabold">
      Supported by <span className="text-gradient">Industry Giants</span>
    </h2>

    <p className="mt-4 text-gray-600 max-w-xl mx-auto">
      Partnering with leading technology companies worldwide.
    </p>

    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-10">
      {sponsors.map((s, index) => (
        <div
          key={index}
          className="group h-24 bg-white rounded-xl border border-gray-100 shadow flex items-center justify-center hover:-translate-y-2 hover:shadow-lg transition-all"
        >
          <img
            src={`https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${s.icon}.svg`}
            alt={s.name}
            className="h-10 w-auto grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
          />
        </div>
      ))}
    </div>
  </div>
</section>
  

  <section className="px-4 lg:px-40 py-28 bg-gray-50">
  <div className="max-w-[1200px] mx-auto text-center">
    <h2 className="text-5xl font-extrabold">
      What People Say About <span className="text-gradient">TechFest</span>
    </h2>

    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
      Hear from participants who experienced TechFest firsthand.
    </p>

    <div className="mt-16 grid md:grid-cols-3 gap-10">
      {testimonials.map((t, index) => (
        <div
          key={index}
          className="group relative bg-white/70 backdrop-blur-xl rounded-2xl p-8 border border-white/40 shadow hover:-translate-y-3 hover:shadow-xl transition-all"
        >
        
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 text-yellow-400 fill-yellow-400"
              />
            ))}
          </div>

          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            “{t.review}”
          </p>

          <div className="flex items-center justify-center gap-4">
            <img
              src={t.image}
              alt={t.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="text-left">
              <p className="font-semibold">{t.name}</p>
              <p className="text-xs text-gray-500">{t.role}</p>
            </div>
          </div>

          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-tech-purple/5 opacity-0 group-hover:opacity-100 transition"></div>
        </div>
      ))}
    </div>
  </div>
</section>

     <section className="px-4 lg:px-40 py-28 bg-white">
  <div className="max-w-[1200px] mx-auto text-center">
    <h2 className="text-5xl font-extrabold">
      Moments from <span className="text-gradient">TechFest</span>
    </h2>

    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
      A glimpse into the energy, innovation, and excitement of TechFest.
    </p>

    <div className="mt-16 columns-1 sm:columns-2 lg:columns-3 gap-6">
      {galleryImages.map((img, index) => (
        <div
          key={index}
          className="group relative mb-6 overflow-hidden rounded-2xl shadow hover:shadow-xl transition"
        >
          <img
            src={img}
            alt="TechFest Gallery"
            className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
          />

          <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-tech-purple/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
            <span className="text-white font-semibold">View Image</span>
          </div>
        </div>
      ))}
    </div>

    <div className="mt-16">
      <a
        href="/gallery"
        className="inline-flex items-center gap-2 px-10 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-primary to-tech-purple shadow-lg hover:shadow-xl hover:scale-105 transition-all"
      >
        View Full Gallery
        <span className="text-lg">→</span>
      </a>
    </div>
  </div>
</section>

      <section className="px-4 lg:px-40 py-28">
        <div className="max-w-[1200px] mx-auto bg-gradient-to-br from-primary to-tech-purple rounded-3xl p-20 text-center text-white shadow-2xl">
          <h2 className="text-5xl font-extrabold">
            Ready to Make Your Mark?
          </h2>
          <p className="mt-4 text-white/80">
            Join thousands of students at TechFest 2026
          </p>
          <button className="mt-10 px-10 py-4 bg-white text-primary font-bold rounded-xl hover:scale-105 transition">
            Register Now
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
}


function Stat({ number, label }) {
  return (
    <div>
      <p className="text-4xl font-extrabold text-primary">{number}</p>
      <p className="text-sm text-gray-500">{label}</p>
    </div>
  );
}


const benefits = [
  "Skill Development",
  "Certifications",
  "Networking",
  "Career Growth",
];

const speakers = [
  {
    name: "Dr. Sarah Ahmed",
    role: "AI Researcher",
    img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39",
  },
  {
    name: "Hassan Ali",
    role: "Software Architect",
    img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
  },
  {
    name: "Ayesha Khan",
    role: "Startup Mentor",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
  },
  {
    name: "Ali Raza",
    role: "Cybersecurity Expert",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
  },
];


const sponsors = [
  { name: "Google", icon: "google" },
  { name: "Microsoft", icon: "microsoft" },
  { name: "Amazon", icon: "amazon" },
  { name: "Meta", icon: "meta" },
  { name: "IBM", icon: "ibm" },
  { name: "Intel", icon: "intel" },
  { name: "Oracle", icon: "oracle" },
  { name: "Cisco", icon: "cisco" },
];
const galleryImages = [
  "https://images.unsplash.com/photo-1518770660439-4636190af475",
  "https://images.unsplash.com/photo-1556761175-129418cb2dfe",
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
];
