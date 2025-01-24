import { useState } from 'react';
import { motion } from 'framer-motion';
import { Lightbox } from '../ui/lightbox';

interface GalleryGridProps {
  images: {
    id: string;
    src: string;
    alt: string;
    artist?: string;
  }[];
}

export function GalleryGrid({ images }: GalleryGridProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <div className="max-w-7xl mx-auto gap-4 columns-2 lg:columns-3 [&>div]:mb-4">
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div 
              className="group relative h-fit cursor-zoom-in break-inside-avoid overflow-hidden bg-muted"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-4">
                {image.artist && (
                  <p className="text-white text-sm">{image.artist}</p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {lightboxOpen && (
        <Lightbox
          images={images.map(img => ({ url: img.src, title: img.artist || '' }))}
          currentIndex={currentImageIndex}
          onClose={() => setLightboxOpen(false)}
          onIndexChange={setCurrentImageIndex}
        />
      )}
    </>
  );
}