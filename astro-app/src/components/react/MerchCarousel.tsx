'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface MerchItem {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  link: string;
}

interface MerchCarouselProps {
  items: MerchItem[];
}

export default function MerchCarousel({ items }: MerchCarouselProps) {
  return (
    <Carousel
      opts={{
        align: 'center',
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        {items.map((item) => (
          <CarouselItem key={item.id} className="basis-2/3 md:basis-1/2 lg:basis-1/3">
            <Card className="h-full">
              <CardHeader className="p-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full aspect-[3/4] object-cover rounded-t-lg"
                />
                <CardTitle className="!mt-8 px-6">{item.title}</CardTitle>
                <CardDescription className="px-6">{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-semibold">€{item.price.toFixed(2)}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    Buy Now
                  </a>
                </Button>
              </CardFooter>
            </Card>
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
