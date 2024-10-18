import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import RevealAnimation from './ui/animations/animations';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { merchItems } from '@/data/merch';

const Gallery = () => {
    return (
        <div className="relative mt-64">
            <div className="flex flex-col items-center gap-4">
                <div className="text-6xl font-title font-bold mb-4 RevealAnimation">Gallery</div>
            </div>
            <div className="w-full flex items-center pt-16">
                <Swiper
                    modules={[A11y]}
                    spaceBetween={80}
                    slidesPerView={1.5}
                    centeredSlides={true}
                >
                    {merchItems.map((item, index) => (
                        <SwiperSlide key={index}>
                            <img className="w-full h-auto object-cover" src="gallery.jpg" alt={item.title} />
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
            <div className="flex justify-center pt-16">

                <Button size="md" asChild>
                    <a href="/artisti">Vai alla gallery</a>
                </Button>
            </div>
            <img
                src="/assets/tattoo2.svg"
                alt="Logo"
                width="640"
                height="640"
                className="absolute top-1/2 w-[50%] left-1/2 -translate-x-1/2 RevealAnimation"
            />
        </div>
    );
};

export default Gallery;
