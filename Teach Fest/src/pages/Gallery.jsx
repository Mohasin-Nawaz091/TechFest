import React, { useState } from 'react';
import { Download, Camera, Video, Film, Grid, Play, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery = () => {
    const [filter, setFilter] = useState('All');
    const [selectedItem, setSelectedItem] = useState(null);

    const mediaItems = [
        { id: 1, type: 'Photos', src: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80', height: 400 },
        { id: 2, type: 'Videos', src: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&q=80', height: 500, isReel: true },
        { id: 3, type: 'Behind the Scenes', src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80', height: 500 },
        { id: 4, type: 'Photos', src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80', height: 350 },
        { id: 5, type: 'Videos', src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80', height: 450, isReel: true },
        { id: 6, type: 'Photos', src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80', height: 300 },
        { id: 7, type: 'Behind the Scenes', src: 'https://images.unsplash.com/photo-1496065187959-7f07b8353c55?auto=format&fit=crop&w=800&q=80', height: 400 },
        { id: 8, type: 'Photos', src: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80', height: 600 },
        { id: 9, type: 'Videos', src: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=80', height: 350 },
        { id: 10, type: 'Photos', src: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80', height: 420 },
    ];

    const filteredItems = filter === 'All'
        ? mediaItems
        : mediaItems.filter(item => item.type === filter);

    const categories = [
        { name: 'All', icon: Grid },
        { name: 'Photos', icon: Camera },
        { name: 'Videos', icon: Video },
        { name: 'Behind the Scenes', icon: Film },
    ];

    return (
        <div className="min-h-screen px-4 lg:px-40 py-28 bg-gray-50 text-gray-900 font-sans">
            <header className="text-center mb-16">
                <motion.h1
                    className="text-5xl font-extrabold mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    Gallery
                </motion.h1>

                <div className="flex justify-center gap-4 flex-wrap mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat.name}
                            className={`px-5 py-2.5 rounded-full font-medium flex items-center gap-2 transition-all duration-300 border ${filter === cat.name
                                ? 'bg-primary text-white border-primary shadow-lg shadow-primary/30'
                                : 'bg-white text-gray-600 border-gray-200 hover:bg-primary hover:text-white hover:border-primary'
                                }`}
                            onClick={() => setFilter(cat.name)}
                        >
                            <cat.icon size={18} />
                            {cat.name}
                        </button>
                    ))}
                </div>
            </header>

            <div className="max-w-[1200px] mx-auto min-h-[600px]">
                <motion.div
                    className="columns-1 md:columns-2 lg:columns-4 gap-6 space-y-6"
                    initial="hidden"
                    animate="show"
                    variants={{
                        hidden: { opacity: 0 },
                        show: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1
                            }
                        }
                    }}
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredItems.map((item) => (
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0 },
                                    show: { opacity: 1 }
                                }}
                                initial="hidden"
                                animate="show"
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                key={item.id}
                                className="break-inside-avoid relative rounded-2xl overflow-hidden bg-white shadow-md border border-gray-100 group cursor-pointer hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
                                onClick={() => setSelectedItem(item)}
                            >
                                <img
                                    src={item.src}
                                    alt={item.type}
                                    className="w-full h-auto block"
                                    loading="lazy"
                                />
                                {item.type === 'Videos' && (
                                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md w-10 h-10 rounded-full flex items-center justify-center border border-white/20 z-10">
                                        <Play fill="white" size={20} className="text-white ml-1" />
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <button className="bg-white text-primary px-6 py-2 rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        {item.type === 'Videos' ? 'Watch Reel' : 'View Image'}
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            <motion.div
                className="flex justify-center mt-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                <button className="flex items-center gap-3 px-8 py-4 bg-electric-blue text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-blue-600">
                    <Download size={20} />
                    Download Media Kit
                </button>
            </motion.div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedItem && (
                    <motion.div
                        className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedItem(null)}
                    >
                        <motion.div
                            className="relative max-w-5xl max-h-[90vh] bg-black rounded-2xl overflow-hidden shadow-2xl"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/80 transition-all z-10"
                                onClick={() => setSelectedItem(null)}
                            >
                                <X size={24} />
                            </button>
                            <img
                                src={selectedItem.src}
                                alt={selectedItem.type}
                                className="max-w-full max-h-[85vh] object-contain block"
                            />
                            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                                <h3 className="text-xl font-bold">{selectedItem.type}</h3>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Gallery;
