import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { User, Mail, Phone, Building2, Users, Calendar, CheckCircle2 } from "lucide-react";

export default function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    institution: "",
    department: "",
    registrationType: "individual",
    competitions: [],
  });

  const [submitted, setSubmitted] = useState(false);

  const competitions = [
    "Programming Competition",
    "Robotics Challenge",
    "AI & ML Event",
    "Cybersecurity Workshop",
    "Gaming Arena",
    "Startup Expo",
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData(prev => ({
        ...prev,
        competitions: checked
          ? [...prev.competitions, value]
          : prev.competitions.filter(c => c !== value)
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registration Data:", formData);
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        institution: "",
        department: "",
        registrationType: "individual",
        competitions: [],
      });
    }, 3000);
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="px-4 lg:px-40 py-20 bg-gradient-to-br from-primary/5 to-tech-purple/5">
        <div className="max-w-[1200px] mx-auto text-center">
          <span className="inline-block mb-4 px-4 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full">
            Registration Open
          </span>

          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
            Register for <span className="text-gradient">TechFest 2026</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Join 2000+ participants in Pakistan's premier technology festival. Choose your competitions and secure your spot today.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="p-6 bg-white rounded-xl shadow-lg">
              <Calendar className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-bold text-lg">March 15-17, 2026</h3>
              <p className="text-sm text-gray-600">3 Days of Innovation</p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-lg">
              <Users className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-bold text-lg">2000+ Participants</h3>
              <p className="text-sm text-gray-600">From Across Pakistan</p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-lg">
              <Building2 className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-bold text-lg">IMSciences Peshawar</h3>
              <p className="text-sm text-gray-600">State-of-the-art Venue</p>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section className="px-4 lg:px-40 py-20">
        <div className="max-w-[800px] mx-auto">

          {submitted ? (
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-12 text-center">
              <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-green-800 mb-4">Registration Successful!</h2>
              <p className="text-green-700 text-lg">
                Thank you for registering for TechFest 2026. Check your email for confirmation details.
              </p>
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 lg:p-12">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Complete Your <span className="text-gradient">Registration</span>
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Full Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Phone className="w-4 h-4 inline mr-2" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition"
                    placeholder="+92 300 0000000"
                  />
                </div>

                {/* Institution */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Building2 className="w-4 h-4 inline mr-2" />
                    Institution/University *
                  </label>
                  <input
                    type="text"
                    name="institution"
                    value={formData.institution}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition"
                    placeholder="Your institution name"
                  />
                </div>

                {/* Department */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Department/Program *
                  </label>
                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition"
                  >
                    <option value="">Select your department</option>
                    <option value="Computer Science">Computer Science</option>
                    <option value="Software Engineering">Software Engineering</option>
                    <option value="Information Technology">Information Technology</option>
                    <option value="Artificial Intelligence">Artificial Intelligence</option>
                    <option value="Data Science">Data Science</option>
                    <option value="Electrical Engineering">Electrical Engineering</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Registration Type */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Registration Type *
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <label className={`flex items-center justify-center p-4 border-2 rounded-xl cursor-pointer transition ${formData.registrationType === "individual"
                      ? "border-primary bg-primary/5"
                      : "border-gray-200 hover:border-primary/50"
                      }`}>
                      <input
                        type="radio"
                        name="registrationType"
                        value="individual"
                        checked={formData.registrationType === "individual"}
                        onChange={handleChange}
                        className="mr-3"
                      />
                      <span className="font-semibold">Individual</span>
                    </label>

                    <label className={`flex items-center justify-center p-4 border-2 rounded-xl cursor-pointer transition ${formData.registrationType === "team"
                      ? "border-primary bg-primary/5"
                      : "border-gray-200 hover:border-primary/50"
                      }`}>
                      <input
                        type="radio"
                        name="registrationType"
                        value="team"
                        checked={formData.registrationType === "team"}
                        onChange={handleChange}
                        className="mr-3"
                      />
                      <span className="font-semibold">Team (3-5 members)</span>
                    </label>
                  </div>
                </div>

                {/* Competitions */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Select Competitions (You can select multiple)
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {competitions.map((comp) => (
                      <label
                        key={comp}
                        className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition ${formData.competitions.includes(comp)
                          ? "border-primary bg-primary/5"
                          : "border-gray-200 hover:border-primary/50"
                          }`}
                      >
                        <input
                          type="checkbox"
                          value={comp}
                          checked={formData.competitions.includes(comp)}
                          onChange={handleChange}
                          className="mr-3 w-5 h-5 text-primary"
                        />
                        <span className="text-sm font-medium">{comp}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full mt-8 px-8 py-4 bg-gradient-to-r from-primary to-tech-purple text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Complete Registration
                </button>

                <p className="text-center text-sm text-gray-500 mt-4">
                  By registering, you agree to our Terms & Conditions and Privacy Policy
                </p>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* Why Register Section */}
      <section className="px-4 lg:px-40 py-20 bg-gray-50">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-12">
            What You'll Get as a <span className="text-gradient">Registered Participant</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-2xl shadow-lg hover:-translate-y-2 transition">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-tech-purple rounded-xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-3">Official Certificate</h3>
              <p className="text-gray-600">Receive an official participation certificate from IMSciences</p>
            </div>

            <div className="p-8 bg-white rounded-2xl shadow-lg hover:-translate-y-2 transition">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-tech-purple rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-3">Networking Access</h3>
              <p className="text-gray-600">Connect with 2000+ students and industry professionals</p>
            </div>

            <div className="p-8 bg-white rounded-2xl shadow-lg hover:-translate-y-2 transition">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-tech-purple rounded-xl flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-3">Workshop Access</h3>
              <p className="text-gray-600">Access to all workshops, talks, and technical sessions</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
