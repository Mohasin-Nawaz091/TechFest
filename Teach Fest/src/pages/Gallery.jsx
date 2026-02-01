import React, { useState } from 'react';
import { Download, Camera, Video, Film, Grid, Play, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Gallery.css';

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
        <div className="gallery-container">
            <header className="gallery-header">
                <motion.h1
                    className="gallery-title"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    Gallery
                </motion.h1>



                <div className="filter-bar">
                    {categories.map((cat) => (
                        <button
                            key={cat.name}
                            className={`filter-btn ${filter === cat.name ? 'active' : ''}`}
                            onClick={() => setFilter(cat.name)}
                            style={filter === cat.name ? { background: 'var(--electric-blue)', color: 'white' } : {}}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>
            </header>

            <div className="gallery-grid-wrapper" style={{ position: 'relative' }}>
                <motion.div className="gallery-grid"
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
                                className="gallery-item"
                                onClick={() => setSelectedItem(item)}
                            >
                                <img
                                    src={item.src}
                                    alt={item.type}
                                    className="media-content"
                                    style={{ height: 'auto', display: 'block', minHeight: item.height }}
                                    loading="lazy"
                                />
                                {item.type === 'Videos' && (
                                    <div className="video-indicator">
                                        <Play fill="white" size={20} />
                                    </div>
                                )}
                                <div className="item-overlay">
                                    <button className="view-btn">
                                        {item.type === 'Videos' ? 'Watch Reel' : 'View Image'}
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

            </div>

            <motion.div
                className="cta-container"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                <button className="btn-large" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Download size={20} />
                    Download Media Kit
                </button>
            </motion.div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedItem && (
                    <motion.div
                        className="lightbox-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedItem(null)}
                    >
                        <motion.div
                            className="lightbox-content"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="close-btn" onClick={() => setSelectedItem(null)}>
                                <X size={24} />
                            </button>
                            <img
                                src={selectedItem.src}
                                alt={selectedItem.type}
                                className="lightbox-image"
                            />
                            <div className="lightbox-info">
                                <h3>{selectedItem.type}</h3>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Gallery;
