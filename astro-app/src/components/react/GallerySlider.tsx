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

const galleryImages = [
  {
    id: '1',
    src: '/gallery.jpg',
    alt: 'Tattoo artwork 1',
  },
  {
    id: '2',
    src: '/gallery.jpg',
    alt: 'Tattoo artwork 2',
  },
  {
    id: '3',
    src: '/gallery.jpg',
    alt: 'Tattoo artwork 3',
  },
  {
    id: '4',
    src: '/gallery.jpg',
    alt: 'Tattoo artwork 4',
  },
  {
    id: '5',
    src: '/gallery.jpg',
    alt: 'Tattoo artwork 5',
  },
];

export default function GallerySlider() {
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
        {galleryImages.map((image) => (
          <CarouselItem key={image.id} className="basis-2/3">
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
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
