import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Users, Trophy, MapPin, Clock, DollarSign, AlertCircle, CheckCircle, ArrowLeft, Phone, Mail, User } from 'lucide-react';
import { eventsData, categories } from '../data/events';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const EventDetail = () => {
  const { id } = useParams();
  
  // Scroll to top when component mounts or id changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Handle data loading issues
  if (!eventsData || !categories) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  const event = eventsData.find(e => e.id === parseInt(id));

  if (!event) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Event Not Found</h2>
        <p className="text-gray-600 mb-8">The event with ID {id} could not be found.</p>
        <Link to="/events" className="text-blue-600 hover:underline flex items-center">
          <ArrowLeft size={20} className="mr-2" /> Back to Events
        </Link>
      </div>
    );
  }

  const category = categories.find(c => c.id === event.category);
  const categoryName = category ? category.name : 'Event';

  return (
    <>
    <Navbar />
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link to="/events" className="inline-flex items-center text-gray-600 hover:text-blue-600 mb-8 transition-colors">
          <ArrowLeft size={20} className="mr-2" /> Back to Events
        </Link>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header Image */}
          <div className="relative h-64 md:h-96">
            <img 
              src={event.image} 
              alt={event.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white">
              <span className="inline-block py-1 px-3 rounded-full bg-blue-600/80 text-white text-sm font-semibold mb-4 backdrop-blur-sm">
                {categoryName}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{event.title}</h1>
              <div className="flex flex-wrap gap-6 text-sm md:text-base font-medium text-gray-200">
                <div className="flex items-center">
                  <Calendar size={18} className="mr-2 text-blue-400" />
                  {event.date}
                </div>
                <div className="flex items-center">
                  <MapPin size={18} className="mr-2 text-blue-400" />
                  {event.venue}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8 md:p-12">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About the Event</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {event.description}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <AlertCircle className="mr-2 text-blue-600" /> Rules & Regulations
                </h2>
                <ul className="space-y-3">
                  {event.rules.map((rule, index) => (
                    <li key={index} className="flex items-start text-gray-600">
                      <CheckCircle size={18} className="mr-3 mt-1 text-green-500 flex-shrink-0" />
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Eligibility</h2>
                <p className="bg-blue-50 p-4 rounded-lg text-blue-800 border-l-4 border-blue-600">
                  {event.eligibility}
                </p>
              </section>

            </div>

            {/* Sidebar Details */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Event Details</h3>
                
                <div className="space-y-6">
                  <DetailRow 
                    icon={<Users className="text-purple-600" />} 
                    label="Team Size" 
                    value={event.teamSize} 
                  />
                  <DetailRow 
                    icon={<Trophy className="text-yellow-600" />} 
                    label="Prize Pool" 
                    value={event.prize} 
                  />
                  <DetailRow 
                    icon={<DollarSign className="text-green-600" />} 
                    label="Registration Fee" 
                    value={event.fee} 
                  />
                  <DetailRow 
                    icon={<Clock className="text-red-600" />} 
                    label="Schedule" 
                    value={event.schedule} 
                  />
                  <DetailRow 
                    icon={<AlertCircle className="text-orange-600" />} 
                    label="Difficulty" 
                    value={event.difficulty} 
                  />
                </div>

                {/* Contact Lead Section */}
                {event.contactLead && (
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Contact Lead</h4>
                    <div className="flex items-start mb-3">
                      <div className="p-1.5 bg-blue-50 rounded-full mr-3 text-blue-600">
                        <User size={16} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">{event.contactLead.name}</p>
                        <p className="text-xs text-gray-500">Lead Organizer</p>
                      </div>
                    </div>
                    <div className="space-y-2 ml-10">
                      <a href={`tel:${event.contactLead.phone}`} className="flex items-center text-sm text-gray-600 hover:text-primary transition-colors">
                        <Phone size={14} className="mr-2" />
                        {event.contactLead.phone}
                      </a>
                      <a href={`mailto:${event.contactLead.email}`} className="flex items-center text-sm text-gray-600 hover:text-primary transition-colors">
                        <Mail size={14} className="mr-2" />
                        {event.contactLead.email}
                      </a>
                    </div>
                  </div>
                )}

                <div className="mt-8">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                    Register Now
                  </button>
                  <p className="text-xs text-center text-gray-500 mt-4">
                    Registration closes 24 hours before the event.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

const DetailRow = ({ icon, label, value }) => (
  <div className="flex items-start">
    <div className="p-2 bg-white rounded-lg shadow-sm mr-4 text-gray-700">
      {icon}
    </div>
    <div>
      <p className="text-sm text-gray-500 mb-1">{label}</p>
      <p className="font-semibold text-gray-900">{value}</p>
    </div>
  </div>
);

export default EventDetail;
