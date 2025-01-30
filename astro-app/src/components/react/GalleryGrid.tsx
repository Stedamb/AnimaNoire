import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Lightbox } from '../ui/lightbox';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  artist?: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
}

const ImageItem = ({ image, index, onImageClick }: { 
  image: GalleryImage; 
  index: number;
  onImageClick: () => void;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "100px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.4 + index%4 * 0.2 }}
    >
      <div 
        className="group relative h-fit cursor-zoom-in break-inside-avoid overflow-hidden bg-muted"
        onClick={onImageClick}
      >
        <img
          src={image.src}
          alt={image.alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-4">
          {image.artist && (
            <p className="text-white text-sm">{image.artist}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export function GalleryGrid({ images }: GalleryGridProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  // Calculate number of columns based on screen width
  const numColumns = typeof window !== 'undefined' && window.innerWidth >= 1024 ? 3 : 2;

  // Organize images into rows for horizontal animation
  const organizedImages = images;

  return (
    <>
      <div className="max-w-7xl mx-auto gap-4 columns-2 lg:columns-3 [&>div]:mb-4">
        {organizedImages.map((image, index) => (
          <ImageItem
            key={image.id}
            image={image}
            index={index}
            onImageClick={() => openLightbox(index)}
          />
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