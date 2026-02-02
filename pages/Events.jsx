import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, Calendar, Users, Trophy, Filter, ArrowRight } from 'lucide-react';
import { categories, eventsData } from '../data/events';

const Events = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentCategory = searchParams.get('cat') || 'all';
  const [searchTerm, setSearchTerm] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');

  const filteredEvents = eventsData.filter(event => {
    const matchesCategory = currentCategory === 'all' || event.category === currentCategory;
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDifficulty = difficultyFilter === 'all' || event.difficulty === difficultyFilter;
    const matchesType = typeFilter === 'all' || event.type === typeFilter;
    
    return matchesCategory && matchesSearch && matchesDifficulty && matchesType;
  });

  const handleCategoryChange = (catId) => {
    setSearchParams({ cat: catId });
  };

  const difficulties = ['Easy', 'Medium', 'Hard', 'Expert'];
  const types = ['Free', 'Paid'];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 font-heading">All Competitions & Workshops</h1>
          <p className="text-gray-600 max-w-2xl mx-auto font-poppins">
            Browse through our diverse range of technical and non-technical events.
          </p>
        </div>

      
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-8">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
           
                <div className="relative w-full md:w-64">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search size={18} className="text-gray-400" />
                    </div>
                    <input
                    type="text"
                    placeholder="Search events..."
                    className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

              
                <div className="flex flex-wrap gap-4 w-full md:w-auto items-center">
                    <div className="flex items-center gap-2 w-full md:w-auto">
                        <Filter size={18} className="text-gray-500" />
                        <span className="text-sm font-medium text-gray-700">Filters:</span>
                    </div>

                    
                    <select 
                        value={difficultyFilter}
                        onChange={(e) => setDifficultyFilter(e.target.value)}
                        className="px-3 py-2 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                        <option value="all">Any Difficulty</option>
                        {difficulties.map(d => <option key={d} value={d}>{d}</option>)}
                    </select>

                    {/* Type */}
                    <select 
                        value={typeFilter}
                        onChange={(e) => setTypeFilter(e.target.value)}
                        className="px-3 py-2 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                        <option value="all">Any Type</option>
                        {types.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                </div>
            </div>

          
            <div className="mt-6 hidden md:flex flex-wrap gap-2 border-t border-gray-100 pt-4">
                {categories.map(cat => (
                <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    currentCategory === cat.id
                        ? 'bg-primary text-white shadow-md'
                        : 'bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-200'
                    }`}
                >
                    {cat.name}
                </button>
                ))}
            </div>

            {/* Category Select (Mobile) */}
            <div className="mt-4 md:hidden">
                <select 
                value={currentCategory}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50"
                >
                {categories.map(cat => (
                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
                </select>
            </div>
        </div>

       
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map(event => (
              <div key={event.id} className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary uppercase tracking-wide shadow-sm">
                      {categories.find(c => c.id === event.category)?.name}
                    </div>
                    {event.type === 'Free' && (
                        <div className="absolute top-4 left-4 bg-green-500/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-white uppercase tracking-wide shadow-sm">
                            Free
                        </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 font-heading group-hover:text-primary transition-colors">{event.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2 font-sans">{event.description}</p>
                    
                    <div className="mt-auto space-y-3 mb-6">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar size={16} className="mr-2 text-primary" />
                        {event.date}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Users size={16} className="mr-2 text-secondary" />
                        {event.teamSize}
                      </div>
                      <div className="flex items-center text-sm font-semibold text-gray-700">
                        <Trophy size={16} className="mr-2 text-yellow-500" />
                        {event.prize}
                      </div>
                    </div>

                    <Link 
                        to={`/events/${event.id}`} 
                        className="w-full mt-2 flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-primary hover:bg-blue-700 transition-colors btn"
                    >
                        View Details
                        <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-xl border border-gray-100 border-dashed">
            <p className="text-xl text-gray-500 font-poppins">No events found matching your criteria.</p>
            <button 
                onClick={() => {
                    setSearchParams({ cat: 'all' }); 
                    setSearchTerm('');
                    setDifficultyFilter('all');
                    setTypeFilter('all');
                }}
                className="mt-4 text-primary hover:underline font-medium"
            >
                Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
