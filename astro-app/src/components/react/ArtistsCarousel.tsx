import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { urlFor } from '@/utils/image';
import type { Artist } from '@/utils/sanity';

interface ArtistsCarouselProps {
  artists: Artist[];
}

export default function ArtistsCarousel({ artists }: ArtistsCarouselProps) {
  return (
    <Carousel className="mx-4 w-[calc(100%-2rem)]">
      <CarouselContent className="ml-8 xl:-mr-24">
        {artists.map((artist) => (
          <CarouselItem key={`${artist.name}-${artist.surname}`} className="-ml-8 basis-full md:basis-1/2 xl:basis-1/3">
            <a
              className="block aspect-square min-h-[300px] rounded-full"
              href={`/artist/${artist.slug}`}
            >
              {artist.mainImage && (
                <img
                  className="size-full overflow-hidden rounded-full object-cover"
                  src={urlFor(artist.mainImage).width(500).height(300).url()}
                  alt={`${artist.name} ${artist.surname}`}
                />
              )}
            </a>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center gap-2 pt-4 lg:justify-end lg:pr-8">
        <CarouselPrevious className="static !m-0 translate-y-0" />
        <CarouselNext className="static !m-0 translate-y-0" />
      </div>
    </Carousel>
  );
}
