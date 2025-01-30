import React, { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade'
import { cn } from '@/lib/utils';

const images = [
  {
    url: '/studio-1.jpeg',
    alt: 'Slide 1',
  },
  {
    url: '/studio-2.jpeg',
    alt: 'Slide 2',
  },
  {
    url: '/studio-3.jpeg',
    alt: 'Slide 3',
  },
];

const HeaderCarousel = () => {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  React.useEffect(() => {
    // Preload images
    const imagePromises = images.map((image) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = image.url;
        img.onload = resolve;
        img.onerror = reject;
      });
    });

    Promise.all(imagePromises)
      .then(() => setImagesLoaded(true))
      .catch((error) => console.error('Error loading carousel images:', error));
  }, []);

  React.useEffect(() => {
    if (!api) return;

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="relative h-full">
      {imagesLoaded && (
        <Carousel
          opts={{
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 6000,
            }),
            Fade()
          ]}
          setApi={setApi}
          className="h-full"
        >
          <CarouselContent className="h-full">
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <img
                  src={image.url}
                  alt={image.alt || `Slide ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      )}
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-6 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={cn(
              'size-4 rounded-full transition-all',
              current === index ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeaderCarousel;