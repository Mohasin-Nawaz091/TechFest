// import React, { useState } from 'react';
// import { Download, Camera, Video, Film, Grid, Play, X } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";


// const Gallery = () => {
//     const [filter, setFilter] = useState('All');
//     const [selectedItem, setSelectedItem] = useState(null);

//     const mediaItems = [
//         { id: 1, type: 'Photos', src: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80', height: 400 },
//         { id: 2, type: 'Videos', src: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&q=80', height: 500, isReel: true },
//         { id: 3, type: 'Behind the Scenes', src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80', height: 500 },
//         { id: 4, type: 'Photos', src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80', height: 350 },
//         { id: 5, type: 'Videos', src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80', height: 450, isReel: true },
//         { id: 6, type: 'Photos', src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80', height: 300 },
//         { id: 7, type: 'Behind the Scenes', src: 'https://images.unsplash.com/photo-1496065187959-7f07b8353c55?auto=format&fit=crop&w=800&q=80', height: 400 },
//         { id: 8, type: 'Photos', src: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80', height: 600 },
//         { id: 9, type: 'Videos', src: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=80', height: 350 },
//         { id: 10, type: 'Photos', src: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80', height: 420 },
//     ];

//     const filteredItems = filter === 'All'
//         ? mediaItems
//         : mediaItems.filter(item => item.type === filter);

//     const categories = [
//         { name: 'All', icon: Grid },
//         { name: 'Photos', icon: Camera },
//         { name: 'Videos', icon: Video },
//         { name: 'Behind the Scenes', icon: Film },
//     ];

//     return (
//         <>
//         <Navbar />
//         <div className="min-h-screen px-4 lg:px-40 py-28 bg-gray-50 text-gray-900 font-sans">
//             <header className="text-center mb-16">
//                 <motion.h1
//                     className="text-5xl font-extrabold mb-8"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 0.8 }}
//                 >
//                     Gallery
//                 </motion.h1>

//                 <div className="flex justify-center gap-4 flex-wrap mb-12">
//                     {categories.map((cat) => (
//                         <button
//                             key={cat.name}
//                             className={`px-5 py-2.5 rounded-full font-medium flex items-center gap-2 transition-all duration-300 border ${filter === cat.name
//                                 ? 'bg-primary text-white border-primary shadow-lg shadow-primary/30'
//                                 : 'bg-white text-gray-600 border-gray-200 hover:bg-primary hover:text-white hover:border-primary'
//                                 }`}
//                             onClick={() => setFilter(cat.name)}
//                         >
//                             <cat.icon size={18} />
//                             {cat.name}
//                         </button>
//                     ))}
//                 </div>
//             </header>

//             <div className="max-w-[1200px] mx-auto min-h-[600px]">
//                 <motion.div
//                     className="columns-1 md:columns-2 lg:columns-4 gap-6 space-y-6"
//                     initial="hidden"
//                     animate="show"
//                     variants={{
//                         hidden: { opacity: 0 },
//                         show: {
//                             opacity: 1,
//                             transition: {
//                                 staggerChildren: 0.1
//                             }
//                         }
//                     }}
//                 >
//                     <AnimatePresence mode='popLayout'>
//                         {filteredItems.map((item) => (
//                             <motion.div
//                                 variants={{
//                                     hidden: { opacity: 0 },
//                                     show: { opacity: 1 }
//                                 }}
//                                 initial="hidden"
//                                 animate="show"
//                                 exit={{ opacity: 0 }}
//                                 transition={{ duration: 0.5, ease: "easeInOut" }}
//                                 key={item.id}
//                                 className="break-inside-avoid relative rounded-2xl overflow-hidden bg-white shadow-md border border-gray-100 group cursor-pointer hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
//                                 onClick={() => setSelectedItem(item)}
//                             >
//                                 <img
//                                     src={item.src}
//                                     alt={item.type}
//                                     className="w-full h-auto block"
//                                     loading="lazy"
//                                 />
//                                 {item.type === 'Videos' && (
//                                     <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md w-10 h-10 rounded-full flex items-center justify-center border border-white/20 z-10">
//                                         <Play fill="white" size={20} className="text-white ml-1" />
//                                     </div>
//                                 )}
//                                 <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
//                                     <button className="bg-white text-primary px-6 py-2 rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
//                                         {item.type === 'Videos' ? 'Watch Reel' : 'View Image'}
//                                     </button>
//                                 </div>
//                             </motion.div>
//                         ))}
//                     </AnimatePresence>
//                 </motion.div>
//             </div>

//             <motion.div
//                 className="flex justify-center mt-20"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.5 }}
//             >
//                 <button className="flex items-center gap-3 px-8 py-4 bg-electric-blue text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-blue-600">
//                     <Download size={20} />
//                     Download Media Kit
//                 </button>
//             </motion.div>

//             {/* Lightbox Modal */}
//             <AnimatePresence>
//                 {selectedItem && (
//                     <motion.div
//                         className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         exit={{ opacity: 0 }}
//                         onClick={() => setSelectedItem(null)}
//                     >
//                         <motion.div
//                             className="relative max-w-5xl max-h-[90vh] bg-black rounded-2xl overflow-hidden shadow-2xl"
//                             initial={{ scale: 0.9, opacity: 0 }}
//                             animate={{ scale: 1, opacity: 1 }}
//                             exit={{ scale: 0.9, opacity: 0 }}
//                             onClick={(e) => e.stopPropagation()}
//                         >
//                             <button
//                                 className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/80 transition-all z-10"
//                                 onClick={() => setSelectedItem(null)}
//                             >
//                                 <X size={24} />
//                             </button>
//                             <img
//                                 src={selectedItem.src}
//                                 alt={selectedItem.type}
//                                 className="max-w-full max-h-[85vh] object-contain block"
//                             />
//                             <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
//                                 <h3 className="text-xl font-bold">{selectedItem.type}</h3>
//                             </div>
//                         </motion.div>
//                     </motion.div>
//                 )}
//             </AnimatePresence>
//         </div>
//         <Footer />
//         </>
//     );
// };

// export default Gallery;
import React, { useState } from 'react';
import { Download, Camera, Video, Film, Grid, Play, X, ZoomIn, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Gallery = () => {
    const [filter, setFilter] = useState('All');
    const [selectedItem, setSelectedItem] = useState(null);
    const [hoveredId, setHoveredId] = useState(null);

    const mediaItems = [
        { id: 1, type: 'Photos', src: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80', title: 'Tech Innovation', height: 400 },
        { id: 2, type: 'Videos', src: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&q=80', title: 'Code in Action', height: 500, isReel: true },
        { id: 3, type: 'Behind the Scenes', src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80', title: 'Team Collaboration', height: 500 },
        { id: 4, type: 'Photos', src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80', title: 'Digital Future', height: 350 },
        { id: 5, type: 'Videos', src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80', title: 'Workshop Highlights', height: 450, isReel: true },
        { id: 6, type: 'Photos', src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80', title: 'Creative Minds', height: 300 },
        { id: 7, type: 'Behind the Scenes', src: 'https://images.unsplash.com/photo-1496065187959-7f07b8353c55?auto=format&fit=crop&w=800&q=80', title: 'Event Setup', height: 400 },
        { id: 8, type: 'Photos', src: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80', title: 'Tech Summit', height: 600 },
        { id: 9, type: 'Videos', src: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=80', title: 'Speaker Series', height: 350 },
        { id: 10, type: 'Photos', src: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80', title: 'Innovation Hub', height: 420 },
        { id: 11, type: 'Behind the Scenes', src: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80', title: 'Prep Time', height: 380 },
        { id: 12, type: 'Photos', src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80', title: 'Networking', height: 450 },
    ];

    const filteredItems = filter === 'All'
        ? mediaItems
        : mediaItems.filter(item => item.type === filter);

    const categories = [
        { name: 'All', icon: Grid, count: mediaItems.length },
        { name: 'Photos', icon: Camera, count: mediaItems.filter(i => i.type === 'Photos').length },
        { name: 'Videos', icon: Video, count: mediaItems.filter(i => i.type === 'Videos').length },
        { name: 'Behind the Scenes', icon: Film, count: mediaItems.filter(i => i.type === 'Behind the Scenes').length },
    ];

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-white">
                {/* Hero Section */}
                <div className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-tech-purple/5 pt-32 pb-20 px-4">
                    <div className="absolute inset-0 bg-geometric opacity-30"></div>
                    
                    <motion.div
                        className="relative z-10 max-w-4xl mx-auto text-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
                            Our <span className="text-gradient">Gallery</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 font-light">
                            Moments that define our journey in tech excellence
                        </p>
                    </motion.div>
                </div>

                {/* Filter Tabs */}
                <div className="sticky top-20 z-40 bg-white/80 backdrop-blur-xl border-b border-gray-200 shadow-sm">
                    <div className="max-w-7xl mx-auto px-4 py-6">
                        <div className="flex justify-center gap-3 flex-wrap">
                            {categories.map((cat, idx) => (
                                <motion.button
                                    key={cat.name}
                                    className={`group relative px-6 py-3 rounded-2xl font-semibold flex items-center gap-2.5 transition-all duration-300 ${
                                        filter === cat.name
                                            ? 'bg-primary text-white shadow-lg scale-105'
                                            : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-primary/50 hover:shadow-md'
                                    }`}
                                    onClick={() => setFilter(cat.name)}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <cat.icon size={20} />
                                    <span>{cat.name}</span>
                                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
                                        filter === cat.name 
                                            ? 'bg-white/20 text-white' 
                                            : 'bg-gray-100 text-gray-600 group-hover:bg-primary/10 group-hover:text-primary'
                                    }`}>
                                        {cat.count}
                                    </span>
                                </motion.button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Gallery Grid */}
                <div className="max-w-7xl mx-auto px-4 py-16">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={filter}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {filteredItems.map((item, idx) => (
                                <motion.div
                                    key={item.id}
                                    className="group relative rounded-3xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: idx * 0.05, duration: 0.4 }}
                                    whileHover={{ y: -8 }}
                                    onClick={() => setSelectedItem(item)}
                                    onMouseEnter={() => setHoveredId(item.id)}
                                    onMouseLeave={() => setHoveredId(null)}
                                >
                                    {/* Image Container */}
                                    <div className="relative overflow-hidden aspect-[4/5]">
                                        <motion.img
                                            src={item.src}
                                            alt={item.title}
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                            animate={{ scale: hoveredId === item.id ? 1.1 : 1 }}
                                            transition={{ duration: 0.6 }}
                                        />
                                        
                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        
                                        {/* Video Badge */}
                                        {item.type === 'Videos' && (
                                            <motion.div 
                                                className="absolute top-4 right-4 bg-primary w-12 h-12 rounded-full flex items-center justify-center shadow-lg z-10"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <Play fill="white" size={20} className="text-white ml-0.5" />
                                            </motion.div>
                                        )}

                                        {/* Category Badge */}
                                        <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-bold text-white bg-black/40 backdrop-blur-md border border-white/20">
                                            {item.type}
                                        </div>

                                        {/* Hover Content */}
                                        <motion.div
                                            className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: hoveredId === item.id ? 1 : 0, y: hoveredId === item.id ? 0 : 20 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <ZoomIn className="text-white mb-3" size={32} />
                                            <h3 className="text-white text-xl font-bold mb-2">{item.title}</h3>
                                            <button className="px-6 py-2.5 bg-white text-gray-900 rounded-full font-semibold text-sm hover:bg-primary hover:text-white transition-all duration-300 shadow-lg">
                                                {item.type === 'Videos' ? 'Watch Now' : 'View Full Size'}
                                            </button>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    {/* Empty State */}
                    {filteredItems.length === 0 && (
                        <motion.div
                            className="text-center py-20"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            <div className="text-gray-400 mb-4">
                                <Grid size={64} className="mx-auto" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-700 mb-2">No items found</h3>
                            <p className="text-gray-500">Try selecting a different category</p>
                        </motion.div>
                    )}
                </div>

                {/* Download CTA */}
                <motion.div
                    className="max-w-4xl mx-auto px-4 pb-20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <div className="bg-gradient-to-r from-primary to-tech-purple rounded-3xl p-12 text-center relative overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 bg-geometric opacity-20"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Need High-Resolution Assets?
                            </h2>
                            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                                Download our complete media kit with logos, photos, and brand guidelines
                            </p>
                            <motion.button 
                                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-primary rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Download size={24} />
                                Download Media Kit
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedItem && (
                    <motion.div
                        className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedItem(null)}
                    >
                        <motion.button
                            className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm transition-all z-20 border border-white/20"
                            onClick={() => setSelectedItem(null)}
                            whileHover={{ scale: 1.1, rotate: 90 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <X size={28} />
                        </motion.button>

                        <motion.div
                            className="relative max-w-6xl max-h-[90vh] w-full"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", damping: 25 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src={selectedItem.src}
                                    alt={selectedItem.title}
                                    className="w-full h-auto max-h-[85vh] object-contain"
                                />
                                
                                {/* Info Bar */}
                                <motion.div
                                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-8"
                                    initial={{ y: 100 }}
                                    animate={{ y: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className="text-sm text-white/60 mb-1">{selectedItem.type}</div>
                                            <h3 className="text-2xl md:text-3xl font-bold text-white">{selectedItem.title}</h3>
                                        </div>
                                        <motion.button
                                            className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md border border-white/20 font-semibold transition-all"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Download size={20} className="inline mr-2" />
                                            Download
                                        </motion.button>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Footer />
        </>
    );
};

export default Gallery;