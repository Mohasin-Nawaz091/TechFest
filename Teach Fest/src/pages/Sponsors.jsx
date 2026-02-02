import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Building2,
  Users,
  TrendingUp,
  Award,
  Megaphone,
  Handshake,
  Check,
  Mail,
  Phone,
  FileText,
  Star
} from "lucide-react";

export default function Sponsors() {
  const sponsorshipTiers = [
    {
      tier: "Platinum Sponsor",
      price: "PKR 500,000",
      gradient: "from-gray-400 to-gray-600",
      features: [
        "Premium logo placement on all materials",
        "10-minute keynote speaking slot",
        "Exclusive booth space (100 sq ft)",
        "25 complimentary passes",
        "Brand integration in all promotional campaigns",
        "Dedicated social media spotlight",
        "VIP networking dinner access",
        "First priority for future events"
      ],
      popular: false
    },
    {
      tier: "Gold Sponsor",
      price: "PKR 300,000",
      gradient: "from-yellow-400 to-yellow-600",
      features: [
        "Logo on website & event materials",
        "5-minute speaking opportunity",
        "Premium booth space (75 sq ft)",
        "15 complimentary passes",
        "Social media recognition",
        "Email campaign inclusion",
        "Access to participant database",
        "Certificate of appreciation"
      ],
      popular: true
    },
    {
      tier: "Silver Sponsor",
      price: "PKR 150,000",
      gradient: "from-gray-300 to-gray-500",
      features: [
        "Logo on website & banners",
        "Standard booth space (50 sq ft)",
        "10 complimentary passes",
        "Social media shoutout",
        "Branded promotional materials",
        "Networking opportunities",
        "Event recognition",
        "Certificate of sponsorship"
      ],
      popular: false
    }
  ];

  const currentSponsors = {
    platinum: [
      { name: "Google", logo: "google", tagline: "Technology Partner" },
      { name: "Microsoft", logo: "microsoft", tagline: "Innovation Partner" }
    ],
    gold: [
      { name: "Amazon", logo: "amazon", tagline: "Cloud Partner" },
      { name: "Meta", logo: "meta", tagline: "Social Partner" },
      { name: "IBM", logo: "ibm", tagline: "Enterprise Partner" }
    ],
    silver: [
      { name: "Intel", logo: "intel" },
      { name: "Oracle", logo: "oracle" },
      { name: "Cisco", logo: "cisco" },
      { name: "Samsung", logo: "samsung" }
    ]
  };

  const benefits = [
    {
      icon: Users,
      title: "Direct Access to 2000+ Students",
      description: "Connect with Pakistan's brightest tech talent and future leaders"
    },
    {
      icon: Megaphone,
      title: "Brand Visibility",
      description: "Maximum exposure across digital, print, and on-campus channels"
    },
    {
      icon: TrendingUp,
      title: "Recruitment Opportunities",
      description: "Early access to top performers and competition winners"
    },
    {
      icon: Handshake,
      title: "Community Engagement",
      description: "Build lasting relationships with academic institutions and industry"
    }
  ];

  const stats = [
    { number: "2000+", label: "Attendees" },
    { number: "50+", label: "Events" },
    { number: "15+", label: "Universities" },
    { number: "100K+", label: "Social Reach" }
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="px-4 lg:px-40 py-20 bg-gradient-to-br from-primary/5 to-tech-purple/5">
        <div className="max-w-[1200px] mx-auto text-center">
          <span className="inline-block mb-4 px-4 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full">
            Sponsorship Opportunities
          </span>

          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
            Partner with <span className="text-gradient">TechFest 2026</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Join Pakistan's premier technology festival and connect with the next generation of innovators, developers, and tech leaders.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#packages"
              className="px-8 py-4 bg-gradient-to-r from-primary to-tech-purple text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              View Packages
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-white text-primary font-bold rounded-xl border-2 border-primary hover:bg-primary hover:text-white transition-all"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 lg:px-40 py-12 -mt-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-extrabold text-primary">{stat.number}</div>
                  <div className="text-sm text-gray-600 mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Sponsor Section */}
      <section className="px-4 lg:px-40 py-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold">
              Why <span className="text-gradient">Sponsor TechFest?</span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Position your brand at the forefront of Pakistan's tech innovation movement
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex gap-6 p-8 bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-tech-purple rounded-xl flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Packages */}
      <section id="packages" className="px-4 lg:px-40 py-20 bg-gray-50">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold">
              Sponsorship <span className="text-gradient">Packages</span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Choose the package that best fits your goals and budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {sponsorshipTiers.map((tier, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl border-2 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all ${tier.popular ? "border-primary scale-105" : "border-gray-200"
                  }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 bg-gradient-to-r from-primary to-tech-purple text-white text-xs font-bold rounded-full shadow-lg">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <div className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${tier.gradient} rounded-xl flex items-center justify-center mb-6`}>
                    <Award className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-2">{tier.tier}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-extrabold text-primary">{tier.price}</span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className={`block text-center w-full py-3 rounded-xl font-semibold transition-all ${tier.popular
                        ? "bg-gradient-to-r from-primary to-tech-purple text-white shadow-lg hover:shadow-xl"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                  >
                    Become a Sponsor
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Sponsors */}
      <section className="px-4 lg:px-40 py-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold">
              Our <span className="text-gradient">Valued Partners</span>
            </h2>
            <p className="mt-4 text-gray-600">
              Proudly supported by industry leaders
            </p>
          </div>

          {/* Platinum Sponsors */}
          <div className="mb-16">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Star className="w-6 h-6 text-gray-400" />
              <h3 className="text-2xl font-bold text-gray-600">Platinum Sponsors</h3>
              <Star className="w-6 h-6 text-gray-400" />
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {currentSponsors.platinum.map((sponsor, index) => (
                <div
                  key={index}
                  className="group h-40 bg-white rounded-2xl border-2 border-gray-200 shadow-lg flex flex-col items-center justify-center hover:shadow-2xl hover:-translate-y-2 transition-all"
                >
                  <img
                    src={`https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${sponsor.logo}.svg`}
                    alt={sponsor.name}
                    className="h-16 w-auto grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  />
                  <p className="text-sm text-gray-500 mt-4 font-semibold">{sponsor.tagline}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Gold Sponsors */}
          <div className="mb-16">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Star className="w-5 h-5 text-yellow-500" />
              <h3 className="text-xl font-bold text-gray-600">Gold Sponsors</h3>
              <Star className="w-5 h-5 text-yellow-500" />
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {currentSponsors.gold.map((sponsor, index) => (
                <div
                  key={index}
                  className="group h-32 bg-white rounded-xl border border-gray-200 shadow flex flex-col items-center justify-center hover:shadow-xl hover:-translate-y-1 transition-all"
                >
                  <img
                    src={`https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${sponsor.logo}.svg`}
                    alt={sponsor.name}
                    className="h-12 w-auto grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  />
                  <p className="text-xs text-gray-500 mt-3 font-semibold">{sponsor.tagline}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Silver Sponsors */}
          <div>
            <div className="flex items-center justify-center gap-3 mb-8">
              <Star className="w-4 h-4 text-gray-400" />
              <h3 className="text-lg font-bold text-gray-600">Silver Sponsors</h3>
              <Star className="w-4 h-4 text-gray-400" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {currentSponsors.silver.map((sponsor, index) => (
                <div
                  key={index}
                  className="group h-24 bg-white rounded-xl border border-gray-100 shadow flex items-center justify-center hover:shadow-lg hover:-translate-y-1 transition-all"
                >
                  <img
                    src={`https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${sponsor.logo}.svg`}
                    alt={sponsor.name}
                    className="h-10 w-auto grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-4 lg:px-40 py-20 bg-gray-50">
        <div className="max-w-[800px] mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-12">
            <div className="text-center mb-10">
              <Building2 className="w-16 h-16 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-extrabold">
                Become a <span className="text-gradient">Sponsor</span>
              </h2>
              <p className="mt-4 text-gray-600">
                Let's discuss how we can create a customized partnership that meets your goals
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 p-6 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Email us at</p>
                  <a href="mailto:sponsors@techfest2026.pk" className="font-semibold text-primary hover:underline">
                    sponsors@techfest2026.pk
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-6 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Call us at</p>
                  <a href="tel:+923000000000" className="font-semibold text-primary hover:underline">
                    +92 300 0000000
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-6 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Download our</p>
                  <a href="#" className="font-semibold text-primary hover:underline">
                    Sponsorship Prospectus (PDF)
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10 text-center">
              <a
                href="mailto:sponsors@techfest2026.pk"
                className="inline-block px-10 py-4 bg-gradient-to-r from-primary to-tech-purple text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                Request Sponsorship Package
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

