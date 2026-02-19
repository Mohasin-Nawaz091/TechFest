import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ChevronDown, ChevronUp } from 'lucide-react';

const PrivacyPolicy = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const sections = [
    {
      title: '1. Information Collection',
      content: `We may collect information through online forms, registrations, applications, and website interactions, including but not limited to:

• Personal Information: Name, email address, contact number, academic or institutional affiliation, and other details voluntarily submitted.

• Media Content: Photographs, audio, and video recordings captured during Tech Fest IMSciences 2026 activities, events, or promotional video shoots conducted with institutional approval.

• Technical Data: IP address, browser type, device information, and website usage data collected for analytics and system performance.`
    },
    {
      title: '2. Purpose of Data Use',
      content: `Collected information may be used for the following official purposes:

• Event registration, coordination, and communication
• Academic, administrative, and institutional documentation
• Promotion of Tech Fest IMSciences through official channels
• Website maintenance, analytics, and service improvement
• Compliance with IMSciences policies and applicable regulations`
    },
    {
      title: '3. Information Sharing',
      content: `Personal information is not sold, traded, or commercially exploited. Information may be shared only:

• With authorized IMSciences officials and Tech Fest organizing committees
• With approved service providers strictly for operational purposes
• Where disclosure is required by law, regulatory authorities, or institutional policy`
    },
    {
      title: '4. Data Protection and Security',
      content: `Reasonable technical and administrative safeguards are implemented to protect data against unauthorized access, loss, or misuse. While all efforts are made to ensure security, absolute protection cannot be guaranteed for online systems.`
    },
    {
      title: '5. Cookies and Website Analytics',
      content: `The website may use cookies or similar technologies to enhance user experience and analyze website traffic. Users may disable cookies via browser settings; however, certain features may not function optimally.`
    },
    {
      title: '6. External Links',
      content: `The website may contain links to third-party websites. Tech Fest IMSciences 2026 and IMSciences are not responsible for the privacy practices or content of external platforms.`
    },
    {
      title: '7. Consent',
      content: `By accessing this website or participating in Tech Fest IMSciences 2026, users provide informed consent for the collection and use of their information in accordance with this Privacy Policy.`
    },
    {
      title: '8. Policy Updates',
      content: `This Privacy Policy may be revised periodically. Any updates will be published on this page, and continued use of the website constitutes acceptance of the revised policy.`
    },
    {
      title: '9. Contact',
      content: `For privacy-related queries, please contact the Tech Fest IMSciences 2026 Organizing Committee through the official contact information available on the website.`
    }
  ];

  const toggleSection = (index) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <div className="relative bg-[#0A0A0B] py-32 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] animate-spin-slow opacity-10"
            style={{
              background:
                'conic-gradient(from 0deg, transparent 0deg, #1976D2 90deg, transparent 180deg, #9C27B0 270deg, transparent 360deg)',
            }}
          ></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,transparent_0%,#0A0A0B_70%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight font-heading">
            Privacy <span className="text-primary">Policy</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-poppins">
            Your privacy and data security are important to us
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 p-6 bg-blue-50 rounded-lg border-l-4 border-primary">
            <p className="text-sm font-semibold text-primary mb-2">Effective Date: 2026</p>
            <p className="text-gray-700 leading-relaxed">
              This Privacy Policy applies to the official website and digital platforms of Tech Fest 
              IMSciences 2026, organized under the supervision of the Institute of Management 
              Sciences (IMSciences). We are committed to ensuring the privacy, confidentiality, and 
              security of information provided by visitors, participants, sponsors, and stakeholders.
            </p>
          </div>
        </div>
      </section>

      {/* Policy Sections */}
      <section className="py-16 bg-[#F2F4F7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {sections.map((section, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <button
                  onClick={() => toggleSection(index)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 text-left">{section.title}</h3>
                  <div className="text-primary flex-shrink-0">
                    {expandedSection === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                  </div>
                </button>

                {expandedSection === index && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700 whitespace-pre-wrap leading-relaxed font-poppins">
                      {section.content}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-heading">Your Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We believe in transparency and your right to your own data. If you have any questions 
              about how we collect, use, or protect your information, or if you wish to exercise any 
              rights regarding your data, please don't hesitate to contact us.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Your trust is essential to us, and we are committed to maintaining the highest standards 
              of data protection and privacy.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
