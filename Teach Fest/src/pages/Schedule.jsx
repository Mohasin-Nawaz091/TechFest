import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Clock, MapPin } from "lucide-react";

const schedule = [
  { time: "09:00 AM", event: "Opening Ceremony", venue: "Main Hall" },
  { time: "10:00 AM", event: "AI Workshop", venue: "Lab 1" },
  { time: "11:30 AM", event: "Cyber Security Talk", venue: "Auditorium" },
  { time: "01:00 PM", event: "Lunch Break", venue: "Cafeteria" },
  { time: "02:00 PM", event: "Startup Pitch", venue: "Conference Room" },
  { time: "03:00 PM", event: "Robotics Competition", venue: "Lab 2" },
  { time: "04:00 PM", event: "Gaming Arena", venue: "Hall B" },
  { time: "05:00 PM", event: "Panel Discussion", venue: "Auditorium" },
  { time: "06:00 PM", event: "Awards Ceremony", venue: "Main Hall" },
  { time: "07:00 PM", event: "Closing Ceremony", venue: "Main Hall" }
];

export default function Schedule() {
  return (
    <>
      <Navbar />
      
      <section className="px-4 lg:px-40 py-28 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-20">
            <span className="inline-block mb-4 px-4 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full">
              Event Timeline
            </span>
            <h1 className="text-5xl font-extrabold leading-tight mb-4">
              TechFest <span className="text-gradient">2026 Schedule</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Plan your day at TechFest with our detailed event schedule
            </p>
          </div>

          <div className="space-y-4">
            {schedule.map((item, index) => (
              <div
                key={index}
                className="group relative p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200 shadow hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-tech-purple/5 opacity-0 group-hover:opacity-100 transition"></div>
                
                <div className="relative flex items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-gradient-to-br from-primary to-tech-purple text-white">
                      <Clock className="w-8 h-8" />
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">{item.event}</h3>
                        <div className="flex items-center gap-2 text-gray-600">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{item.venue}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-primary">{item.time}</p>
                      </div>
                    </div>
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