import React from 'react';
import { Target, Lightbulb, Users, Clock, HelpCircle, User, ChevronDown, ChevronUp } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white">
  
      <div className="relative bg-[#0A0A0B] py-32 overflow-hidden">
       
        <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] animate-spin-slow opacity-10" 
                 style={{background: 'conic-gradient(from 0deg, transparent 0deg, #1976D2 90deg, transparent 180deg, #9C27B0 270deg, transparent 360deg)'}}>
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,transparent_0%,#0A0A0B_70%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight font-heading">
            About <span className="text-primary">TechFest</span> <span className="text-secondary">2026</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-poppins">
            Redefining the future of technology through innovation, collaboration, and excellence.
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 font-heading">What is TechFest?</h2>
            <p className="text-gray-600 text-lg leading-relaxed font-sans">
            TechFest is the annual science and technology festival of the Institute of Management Sciences. Established in 2018, it has grown to become one of the largest student-organized tech events in the region. We bring together students, academia, and industry leaders to celebrate innovation, creativity, and technical prowess through a series of competitions, workshops, and exhibitions.
            </p>
        </div>
      </section>

    
      <section className="py-20 bg-[#F2F4F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-heading">Vision & Goals</h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-poppins">Our mission is to foster a culture of innovation and technological advancement.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-primary text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                <Lightbulb size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-heading">Innovation</h3>
              <p className="text-gray-600 font-sans">To provide a platform for students to showcase their innovative ideas and solutions to real-world problems.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-secondary text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-6 text-secondary">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-heading">Collaboration</h3>
              <p className="text-gray-600 font-sans">To bridge the gap between academia and industry by facilitating networking and mentorship.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-accent text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-cyan-50 rounded-full flex items-center justify-center mx-auto mb-6 text-accent">
                <Target size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-heading">Excellence</h3>
              <p className="text-gray-600 font-sans">To encourage technical excellence and competitive spirit among the youth of Pakistan.</p>
            </div>
          </div>
        </div>
      </section>

     
      <section className="py-24 bg-white overflow-x-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 font-heading">Our Journey</h2>
          </div>
          
          <div className="relative min-w-[800px] py-10">
            
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2"></div>
            
            <div className="grid grid-cols-5 gap-4 relative z-10">
                <TimelineItemHorizontal year="2018" title="Inception" description="TechFest founded with 200 participants." />
                <TimelineItemHorizontal year="2020" title="Virtual Era" description="First fully virtual tech conference." />
                <TimelineItemHorizontal year="2022" title="Expansion" description="National level participation." />
                <TimelineItemHorizontal year="2024" title="Partnerships" description="20+ Industry partners joined." />
                <TimelineItemHorizontal year="2026" title="Global" description="Aiming for international impact." active />
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-20 bg-[#F2F4F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-heading">Organizing Team</h2>
            <p className="text-gray-600 font-poppins">The dedicated students working behind the scenes.</p>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-800 font-heading">Core Committee</h3>
            <div className="flex flex-wrap justify-center gap-12">
              <TeamMember name="Sarah Khan" role="President" image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80" />
              <TeamMember name="Ali Raza" role="Vice President" image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80" />
              <TeamMember name="Zainab Ahmed" role="General Secretary" image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80" />
            </div>
          </div>

          <div>
             <h3 className="text-2xl font-bold text-center mb-8 text-gray-800 font-heading">Leads</h3>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <TeamMember name="Bilal" role="Technical Lead" size="small" image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80" />
                <TeamMember name="Ayesha" role="Marketing Lead" size="small" image="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80" />
                <TeamMember name="Omar" role="Logistics Lead" size="small" image="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80" />
                <TeamMember name="Fatima" role="Design Lead" size="small" image="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80" />
             </div>
          </div>
        </div>
      </section>

     
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-heading">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-4">
            <FAQItem question="Who can participate in TechFest?" answer="TechFest is open to students from all universities and colleges. Some events are also open to high school students." />
            <FAQItem question="Is there a registration fee?" answer="Yes, there is a nominal fee for each competition to cover administrative costs and prizes. Workshops may have separate fees." />
            <FAQItem question="Can I participate in multiple events?" answer="Absolutely! However, please check the schedule to ensure there are no timing clashes between your chosen events." />
            <FAQItem question="Is accommodation provided for out-of-city participants?" answer="Yes, we provide accommodation packages for teams traveling from other cities. Please contact our logistics team for details." />
          </div>
        </div>
      </section>
    </div>
  );
};

const TimelineItemHorizontal = ({ year, title, description, active }) => (
    <div className="flex flex-col items-center text-center group">
        <div className={`w-6 h-6 rounded-full border-4 mb-4 z-20 transition-all duration-300 ${active ? 'bg-primary border-white ring-4 ring-primary/30 scale-125' : 'bg-white border-gray-300 group-hover:border-primary'}`}></div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all w-full h-full">
            <span className={`block font-bold text-lg mb-1 ${active ? 'text-primary' : 'text-gray-500'}`}>{year}</span>
            <h3 className="font-bold text-gray-900 mb-2 text-sm">{title}</h3>
            <p className="text-xs text-gray-600">{description}</p>
        </div>
    </div>
);

const TeamMember = ({ name, role, image, size = "normal" }) => (
  <div className="text-center group">
    <div className={`${size === "normal" ? "w-40 h-40" : "w-28 h-28"} mx-auto rounded-full overflow-hidden mb-4 border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300 bg-gray-200`}>
      {image ? (
        <img src={image} alt={name} className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400">
            <User size={size === "normal" ? 48 : 32} />
        </div>
      )}
    </div>
    <h3 className={`font-bold text-gray-900 font-heading ${size === "normal" ? "text-lg" : "text-base"}`}>{name}</h3>
    <p className="text-primary font-medium text-sm">{role}</p>
  </div>
);

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
      <button 
        className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none hover:bg-gray-50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-gray-900 font-poppins">{question}</span>
        {isOpen ? <ChevronUp className="text-gray-500" /> : <ChevronDown className="text-gray-500" />}
      </button>
      {isOpen && (
        <div className="px-6 pb-4 text-gray-600 font-sans text-sm leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
};

export default About;
