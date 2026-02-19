import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ChevronDown, ChevronUp } from 'lucide-react';

const TermsAndConditions = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const sections = [
    {
      title: '1. Acceptance of Terms',
      content: `Use of the website or participation in any Tech Fest IMSciences 2026 activity constitutes full acceptance of these Terms and Conditions.`
    },
    {
      title: '2. Eligibility and Registration',
      content: `Participation is subject to eligibility criteria defined by the organizers and IMSciences. Submission of an application or registration does not guarantee approval. The organizing committee reserves the right to accept or reject applications without obligation to provide justification.`
    },
    {
      title: '3. Appropriate Use',
      content: `Users and participants agree to:

• Use the website and event platforms solely for lawful and official purposes
• Provide accurate, complete, and authentic information
• Avoid activities that disrupt, misuse, or compromise event operations or digital systems`
    },
    {
      title: '4. Intellectual Property Rights',
      content: `All website content, including text, logos, graphics, photographs, videos, designs, and branding, is the intellectual property of Tech Fest IMSciences 2026 and/or IMSciences, unless otherwise stated. Unauthorized reproduction or distribution is prohibited.`
    },
    {
      title: '5. Media Consent',
      content: `By participating in Tech Fest IMSciences 2026, participants grant permission for the use of their name, image, audio, and video recordings for official documentation, academic records, promotional materials, and digital publications, unless formally declined in writing prior to the event.`
    },
    {
      title: '6. Event Changes',
      content: `The organizing committee reserves the right to modify, reschedule, postpone, or cancel any part of the event due to administrative decisions, unforeseen circumstances, or institutional requirements.`
    },
    {
      title: '7. Limitation of Liability',
      content: `IMSciences and the Tech Fest IMSciences 2026 organizing committee shall not be held responsible for any loss, damage, injury, or inconvenience arising directly or indirectly from participation in the event or use of the website.`
    },
    {
      title: '8. Code of Conduct',
      content: `All participants must adhere to principles of professionalism, respect, and ethical conduct. Any violation of institutional policies or disruptive behavior may result in disqualification or removal from the event without entitlement to compensation.`
    },
    {
      title: '9. Governing Law',
      content: `These Terms and Conditions shall be governed by the applicable laws of Pakistan and the rules, regulations, and policies of IMSciences.`
    },
    {
      title: '10. Amendments',
      content: `The organizing committee reserves the right to amend these Terms and Conditions at any time. Continued use of the website or participation in the event indicates acceptance of such amendments.`
    },
    {
      title: '11. Contact',
      content: `For matters related to these Terms and Conditions, please contact the Tech Fest IMSciences 2026 Organizing Committee through official channels provided on the website.`
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
            Terms & <span className="text-primary">Conditions</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-poppins">
            Please read these terms carefully before participating in Tech Fest
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 p-6 bg-blue-50 rounded-lg border-l-4 border-primary">
            <p className="text-sm font-semibold text-primary mb-2">Effective Date: 1 March 2026</p>
            <p className="text-gray-700 leading-relaxed">
              These Terms and Conditions govern the use of the official website and participation in Tech 
              Fest IMSciences 2026, organized under the authority of Institute of Management Sciences 
              (IMSciences). By accessing this website or participating in the event, users agree to comply 
              with the following terms.
            </p>
          </div>
        </div>
      </section>

      {/* Terms Sections */}
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

      {/* Important Notice Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-secondary/10 to-primary/10 p-8 rounded-xl border-2 border-secondary/20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-heading">Important Notice</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              By accessing this website or participating in Tech Fest IMSciences 2026, you acknowledge that 
              you have read, understood, and agree to be bound by these Terms and Conditions.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <span className="font-semibold">© 2026 Tech Fest IMSciences</span> - All Rights Reserved.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsAndConditions;
