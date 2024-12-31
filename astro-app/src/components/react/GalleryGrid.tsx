import { useState } from 'react';
import { Lightbox } from '../ui/lightbox';

interface GalleryGridProps {
  images: {
    url: string;
    title?: string;
    technique?: string;
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
          <div className="opacity-0" key={index} data-animation="fadeInUp" data-delay={index * 0.2}>
            <div 
              className="group relative h-fit cursor-zoom-in break-inside-avoid overflow-hidden bg-muted"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.url}
                alt={image.title || ''}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {image.technique && <p className="text-sm text-white/80">{image.technique}</p>}
              </div>
            </div>
          </div>
        ))}
      </div>

      {lightboxOpen && (
        <Lightbox
          images={images}
          currentIndex={currentImageIndex}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
}
