import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y } from 'swiper/modules';
import { Button } from '../ui/button';
import FadeInAnimation from '../ui/animations/FadeInAnimation';

import 'swiper/css';

import { merchItems } from '@/data/merch';

const Gallery = () => {
    const galleryRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={galleryRef} className="relative pt-32">
            <div className="flex flex-col items-center gap-4">
                <FadeInAnimation triggerRef={galleryRef}>
                    <div className="text-6xl font-title font-bold mb-4">Gallery</div>
                </FadeInAnimation>
            </div>
            <FadeInAnimation triggerRef={galleryRef} delay={0.2}>
                <div className="w-full flex items-center pt-8">
                    <Swiper
                        modules={[A11y]}
                        spaceBetween={20}
                        slidesPerView={1.2}
                        centeredSlides={true}
                        initialSlide={2}
                        breakpoints={{
                            768: {
                                slidesPerView: 1.5,
                                spaceBetween: 60
                            },
                        }}
                    >
                        {merchItems.map((item, index) => (
                            <SwiperSlide key={index}>
                                <img className="w-full h-auto object-cover" src="gallery.jpg" alt={item.title} />
                            </SwiperSlide>
                        ))}

                    </Swiper>
                </div>
            </FadeInAnimation>
            <div className="flex justify-center pt-16">
                <FadeInAnimation triggerRef={galleryRef} delay={0.6}>
                    <Button size="md" asChild>
                        <a href="/artisti">Vai alla gallery</a>
                    </Button>
                </FadeInAnimation>
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
