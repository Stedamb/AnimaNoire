'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';
import type { GalleryImage } from '@/utils/sanity';
import { urlFor } from '@/utils/image';

interface GallerySliderProps {
  images: (GalleryImage & { artistName?: string })[];
}

export default function GallerySlider({ images }: GallerySliderProps) {
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  const validImages = images.filter(img => img && img.asset && img._key);

  if (validImages.length === 0) {
    return null;
  }

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      opts={{
        align: 'start',
        loop: true,
      }}
    >
      <CarouselContent>
        {validImages.map((image) => {
          const imageUrl = urlFor(image.asset).url();
          if (!imageUrl) return null;

          return (
            <CarouselItem key={image._key} className="md:basis-1/2 lg:basis-1/3">
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <img
                  src={imageUrl}
                  alt={image.alt || ''}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-4">
                  {image.artistName && (
                    <p className="text-white text-sm">{image.artistName}</p>
                  )}
                </div>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
