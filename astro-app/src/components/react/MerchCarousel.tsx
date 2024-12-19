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
}

const merchItems: MerchItem[] = [
  {
    id: '1',
    title: 'Classic Black Hoodie',
    description: 'Premium cotton blend hoodie with AnimaNoire logo',
    price: 59.99,
    image: '/merch1.png',
  },
  {
    id: '2',
    title: 'Art Print Collection',
    description: 'Set of 3 limited edition art prints',
    price: 45.00,
    image: '/merch1.png',
  },
  {
    id: '3',
    title: 'Studio T-Shirt',
    description: 'Organic cotton t-shirt with custom artwork',
    price: 29.99,
    image: '/merch1.png',
  },
  {
    id: '4',
    title: 'Tattoo Aftercare Kit',
    description: 'Complete kit for proper tattoo healing',
    price: 34.99,
    image: '/merch1.png',
  },
];

export default function MerchCarousel() {
  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        {merchItems.map((item) => (
          <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
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
                <Button className="w-full">Add to Cart</Button>
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
