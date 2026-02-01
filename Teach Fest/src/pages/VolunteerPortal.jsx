import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  UserCheck,
  Calendar,
  MapPin,
  Clock,
  Users,
  Award,
  FileText,
  Download,
  CheckCircle2,
  AlertCircle,
  Headphones
} from "lucide-react";

export default function VolunteerPortal() {
  const [selectedShift, setSelectedShift] = useState("day1");

  const shifts = {
    day1: [
      { time: "08:00 AM - 12:00 PM", location: "Registration Desk", team: "Registration Team", slots: 8 },
      { time: "12:00 PM - 04:00 PM", location: "Main Hall", team: "Event Coordination", slots: 10 },
      { time: "04:00 PM - 08:00 PM", location: "Workshop Rooms", team: "Technical Support", slots: 6 },
    ],
    day2: [
      { time: "08:00 AM - 12:00 PM", location: "Competition Arena", team: "Competition Support", slots: 12 },
      { time: "12:00 PM - 04:00 PM", location: "Food Court", team: "Hospitality Team", slots: 8 },
      { time: "04:00 PM - 08:00 PM", location: "Stage Area", team: "Event Management", slots: 10 },
    ],
    day3: [
      { time: "08:00 AM - 12:00 PM", location: "Award Ceremony Hall", team: "Ceremony Coordination", slots: 15 },
      { time: "12:00 PM - 04:00 PM", location: "Exhibition Area", team: "Expo Support", slots: 8 },
      { time: "04:00 PM - 08:00 PM", location: "Main Entrance", team: "Closing Support", slots: 6 },
    ],
  };

  const resources = [
    { name: "Volunteer Handbook", icon: FileText, size: "2.4 MB", link: "#" },
    { name: "Event Schedule", icon: Calendar, size: "1.1 MB", link: "#" },
    { name: "Venue Map", icon: MapPin, size: "850 KB", link: "#" },
    { name: "Emergency Contacts", icon: Headphones, size: "320 KB", link: "#" },
  ];

  const tasks = [
    { task: "Complete Online Training", status: "completed", deadline: "Feb 1, 2026" },
    { task: "Attend Volunteer Orientation", status: "completed", deadline: "Feb 8, 2026" },
    { task: "Submit Availability Form", status: "pending", deadline: "Feb 15, 2026" },
    { task: "Collect Volunteer Kit", status: "upcoming", deadline: "March 10, 2026" },
  ];

  const benefits = [
    "Official TechFest Volunteer Certificate",
    "Exclusive Volunteer T-Shirt & Badge",
    "Free Meals During Your Shift",
    "Access to All Sessions & Workshops",
    "Networking with Industry Leaders",
    "Community Service Hours Certificate",
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="px-4 lg:px-40 py-20 bg-gradient-to-br from-primary/5 to-tech-purple/5">
        <div className="max-w-[1200px] mx-auto text-center">
          <span className="inline-block mb-4 px-4 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full">
            Volunteer Portal
          </span>

          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
            Welcome, <span className="text-gradient">TechFest Volunteers!</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Thank you for being part of TechFest 2026. Access your shifts, download resources, and stay updated with everything you need.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="p-6 bg-white rounded-xl shadow-lg">
              <Users className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-bold text-lg">150+ Volunteers</h3>
              <p className="text-sm text-gray-600">Making it happen</p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-lg">
              <Calendar className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-bold text-lg">3 Days Event</h3>
              <p className="text-sm text-gray-600">March 15-17, 2026</p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-lg">
              <Award className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-bold text-lg">Certificates & Perks</h3>
              <p className="text-sm text-gray-600">For all volunteers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Dashboard */}
      <section className="px-4 lg:px-40 py-12 -mt-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">12</div>
                <div className="text-sm text-gray-600 mt-1">Hours Volunteered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">3/4</div>
                <div className="text-sm text-gray-600 mt-1">Tasks Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">8</div>
                <div className="text-sm text-gray-600 mt-1">Shifts Assigned</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-500">Active</div>
                <div className="text-sm text-gray-600 mt-1">Volunteer Status</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Tasks Section */}
      <section className="px-4 lg:px-40 py-12">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-extrabold mb-8">
            My <span className="text-gradient">Tasks</span>
          </h2>

          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="divide-y divide-gray-100">
              {tasks.map((item, index) => (
                <div key={index} className="p-6 flex items-center justify-between hover:bg-gray-50 transition">
                  <div className="flex items-center gap-4">
                    {item.status === "completed" && (
                      <CheckCircle2 className="w-6 h-6 text-green-500" />
                    )}
                    {item.status === "pending" && (
                      <AlertCircle className="w-6 h-6 text-amber-500" />
                    )}
                    {item.status === "upcoming" && (
                      <Clock className="w-6 h-6 text-blue-500" />
                    )}
                    <div>
                      <h3 className="font-semibold">{item.task}</h3>
                      <p className="text-sm text-gray-500">Deadline: {item.deadline}</p>
                    </div>
                  </div>
                  <div>
                    {item.status === "completed" && (
                      <span className="px-4 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                        Completed
                      </span>
                    )}
                    {item.status === "pending" && (
                      <span className="px-4 py-1 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full">
                        Pending
                      </span>
                    )}
                    {item.status === "upcoming" && (
                      <span className="px-4 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                        Upcoming
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Shift Schedule Section */}
      <section className="px-4 lg:px-40 py-12 bg-gray-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-extrabold mb-8">
            My <span className="text-gradient">Shift Schedule</span>
          </h2>

          {/* Day Selector */}
          <div className="flex gap-4 mb-8">
            {["day1", "day2", "day3"].map((day, index) => (
              <button
                key={day}
                onClick={() => setSelectedShift(day)}
                className={`px-6 py-3 rounded-xl font-semibold transition ${selectedShift === day
                    ? "bg-gradient-to-r from-primary to-tech-purple text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
              >
                Day {index + 1} - March {15 + index}
              </button>
            ))}
          </div>

          {/* Shifts */}
          <div className="grid md:grid-cols-3 gap-6">
            {shifts[selectedShift].map((shift, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-100 p-6 shadow-lg hover:-translate-y-2 transition"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="font-bold text-lg">{shift.time}</span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-gray-500 mt-1" />
                    <div>
                      <p className="text-sm font-semibold">{shift.location}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Users className="w-4 h-4 text-gray-500 mt-1" />
                    <div>
                      <p className="text-sm font-semibold">{shift.team}</p>
                      <p className="text-xs text-gray-500">{shift.slots} volunteers needed</p>
                    </div>
                  </div>
                </div>

                <button className="mt-4 w-full px-4 py-2 bg-primary/10 text-primary font-semibold rounded-lg hover:bg-primary/20 transition">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="px-4 lg:px-40 py-12">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-extrabold mb-8">
            Volunteer <span className="text-gradient">Resources</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-6 bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <resource.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{resource.name}</h3>
                    <p className="text-sm text-gray-500">{resource.size}</p>
                  </div>
                </div>
                <a
                  href={resource.link}
                  className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary font-semibold rounded-lg hover:bg-primary/20 transition"
                >
                  <Download className="w-4 h-4" />
                  Download
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Benefits */}
      <section className="px-4 lg:px-40 py-12 bg-gray-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-extrabold mb-8 text-center">
            Your Volunteer <span className="text-gradient">Benefits</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-6 bg-white rounded-xl shadow hover:-translate-y-1 transition"
              >
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="font-medium text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="px-4 lg:px-40 py-12">
        <div className="max-w-[800px] mx-auto bg-gradient-to-br from-primary to-tech-purple rounded-2xl p-12 text-center text-white shadow-2xl">
          <Headphones className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Need Help?</h2>
          <p className="text-white/90 mb-8">
            Our volunteer coordination team is here to support you 24/7 during the event.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:volunteers@techfest2026.pk"
              className="px-8 py-3 bg-white text-primary font-semibold rounded-xl hover:scale-105 transition"
            >
              Email Support
            </a>
            <a
              href="tel:+923000000000"
              className="px-8 py-3 bg-white/20 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/30 transition"
            >
              Call Hotline
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
