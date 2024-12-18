import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { urlFor } from "@/utils/image";
import type { Post } from "@/utils/sanity";

interface ArtistsCarouselProps {
  posts: Post[];
}

export default function ArtistsCarousel({ posts }: ArtistsCarouselProps) {
  return (
    <Carousel className="w-[calc(100%-2rem)] mx-4">
      <CarouselContent className="ml-8">
        {posts.map((post) => (
          <CarouselItem key={post.title} className="-ml-8 basis-full md:basis-1/2 xl:basis-1/3">
            <a className="aspect-square min-h-[300px] block rounded-full" href={`/artist/${post.slug.current}`}>
                  {post.mainImage && (
                    <img className="size-full object-cover overflow-hidden rounded-full"
                      src={urlFor(post.mainImage).width(500).height(300).url()} 
                      alt={post.title} 
                    />
                  )}
            </a>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center lg:justify-end gap-2 lg:pr-24 pt-4">
        <CarouselPrevious className="static translate-y-0 !m-0" />
        <CarouselNext className="static translate-y-0 !m-0" />
      </div>
    </Carousel>
  );
}
