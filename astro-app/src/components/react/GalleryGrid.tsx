import { useState } from 'react';
import { motion } from 'framer-motion';
import { Lightbox } from '../ui/lightbox';
import type { GalleryImage } from '@/utils/sanity';
import { urlFor } from '@/utils/image';

interface GalleryGridProps {
  images: (GalleryImage & { artistName?: string })[];
}

export function GalleryGrid({ images = [] }: GalleryGridProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const validImages = images.filter(img => img && img.asset && img._key);

  if (validImages.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No images available</p>
      </div>
    );
  }

  return (
    <>
      <div className="max-w-7xl mx-auto gap-4 columns-2 lg:columns-3 [&>div]:mb-4">
        {validImages.map((image, index) => {
          const imageUrl = urlFor(image.asset).url();
          if (!imageUrl) return null;
          
          return (
            <motion.div
              key={image._key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index % 4 * 0.2 }}
            >
              <div 
                className="group relative h-fit cursor-zoom-in break-inside-avoid overflow-hidden bg-muted"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={imageUrl}
                  alt={image.alt || ''}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-4">
                  {image.artistName && (
                    <p className="text-white text-sm">{image.artistName}</p>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {lightboxOpen && (
        <Lightbox
          images={validImages.map(img => ({
            url: urlFor(img.asset).url() || '',
            title: img.artistName || ''
          }))}
          currentIndex={currentImageIndex}
          onClose={() => setLightboxOpen(false)}
          onIndexChange={setCurrentImageIndex}
        />
      )}
    </>
  );
}