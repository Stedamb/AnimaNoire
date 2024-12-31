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

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  artist?: string;
}

interface GallerySliderProps {
  images: GalleryImage[];
}

export default function GallerySlider({ images }: GallerySliderProps) {
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      opts={{
        align: 'center',
        loop: true,
      }}
    >
      <CarouselContent>
        {images.map((image) => (
          <CarouselItem key={image.id} className="lg:basis-2/3">
            <div className="relative aspect-[16/9] w-full overflow-hidden group">
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-6">
                <h3 className="text-xl font-semibold text-white">{image.title}</h3>
                {image.artist && (
                  <p className="text-gray-300">{image.artist}</p>
                )}
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center gap-2 pt-4">
        <CarouselPrevious className="static !m-0 translate-y-0" />
        <CarouselNext className="static !m-0 translate-y-0" />
      </div>
    </Carousel>
  );
}
