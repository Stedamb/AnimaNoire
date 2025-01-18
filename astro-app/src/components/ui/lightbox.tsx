'use client';

import { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface LightboxProps {
  images: {
    url: string;
    title?: string;
    technique?: string;
  }[];
  currentIndex: number;
  onClose: () => void;
  onIndexChange: (index: number) => void;
}

export function Lightbox({ images, currentIndex, onClose, onIndexChange }: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          onIndexChange(Math.max(0, currentIndex - 1));
          break;
        case 'ArrowRight':
          onIndexChange(Math.min(images.length - 1, currentIndex + 1));
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onIndexChange, currentIndex, images.length]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
        onClick={onClose}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-white hover:opacity-75 transition-opacity"
          aria-label="Chiudi"
        >
          <X className="h-8 w-8" />
        </button>

        {/* Navigation Buttons */}
        {currentIndex > 0 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onIndexChange(currentIndex - 1);
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:opacity-75 transition-opacity"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
        )}
        {currentIndex < images.length - 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onIndexChange(currentIndex + 1);
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:opacity-75 transition-opacity"
            aria-label="Next image"
          >
            <ChevronRight className="h-8 w-8" />
          </button>
        )}

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", duration: 0.3 }}
          className="relative max-h-[90vh] max-w-[90vw]"
          onClick={(e) => e.stopPropagation()}
        >
          <motion.img
            key={images[currentIndex].url}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            src={images[currentIndex].url}
            alt={images[currentIndex].title || ''}
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />
          
          {(images[currentIndex].title || images[currentIndex].technique) && (
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ delay: 0.1 }}
              className="absolute bottom-0 left-0 right-0 bg-black/50 p-4 text-white backdrop-blur-sm"
            >
              {images[currentIndex].title && (
                <h3 className="text-lg font-semibold">{images[currentIndex].title}</h3>
              )}
              {images[currentIndex].technique && (
                <p className="text-sm opacity-75">{images[currentIndex].technique}</p>
              )}
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export function useLightbox() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  return {
    isOpen,
    currentIndex,
    openLightbox,
    setIsOpen,
    setCurrentIndex,
  };
}
