import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y } from 'swiper/modules';
import { Button } from '../ui/button';

import 'swiper/css';

import FadeInAnimation from '../ui/animations/FadeInAnimation';
import { useRef } from 'react';

const Artists = () => {
    const artistsRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={artistsRef} className="relative grid grid-cols-1 lg:grid-cols-2 pb-16">
            <div className="flex flex-col items-center gap-4 pt-16 pb-8 px-8 lg:items-start lg:max-w-[640px] lg:ml-auto lg:pr-16 xl:py-32">
                <FadeInAnimation triggerRef={artistsRef}>
                    <div className="text-6xl font-title font-bold mb-4">Artisti</div>
                </FadeInAnimation>

                <FadeInAnimation triggerRef={artistsRef} delay={0.2}>
                    <p className="text-lg text-center lg:text-start mb-4">
                        Embark on a thrilling journey through the picturesque landscapes of the Netherlands.
                        Glide along smooth bike paths, explore charming Dutch towns, and experience the
                        freedom of longboarding in one of Europe's most bike-friendly countries.
                    </p>
                </FadeInAnimation>

                <FadeInAnimation triggerRef={artistsRef} delay={0.4}>
                    <Button size="md" className="hidden md:block" asChild>
                        <a href="/artisti">Vedi gli artisti</a>
                    </Button>
                </FadeInAnimation>
            </div>

            <FadeInAnimation triggerRef={artistsRef} delay={0.6}>
                <div className="h-full flex items-center">
                    <Swiper
                        modules={[A11y]}
                        spaceBetween={30}
                        slidesPerView={1.5}
                        centeredSlides={true}
                        breakpoints={{
                            640: {
                                slidesPerView: 1.8,
                                centeredSlides: true
                            },
                            1024: {
                                slidesPerView: 2.2,
                                centeredSlides: false
                            },
                            1400: {
                                slidesPerView: 3,
                                centeredSlides: false
                            },
                        }}
                    >
                        <SwiperSlide>
                            <img className="w-full h-auto" src="/artisti1.png" alt="Artisti" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="w-full h-auto" src="/artisti2.png" alt="Artisti" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="w-full h-auto" src="/artisti1.png" alt="Artisti" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </FadeInAnimation>

            <div className="flex justify-center pt-8 md:hidden">
                <FadeInAnimation triggerRef={artistsRef} delay={0.8}>
                    <Button size="md" asChild>
                        <a href="/artisti">Vedi gli artisti</a>
                    </Button>
                </FadeInAnimation>
            </div>
            <img
                src="/assets/tattoo2.svg"
                alt="Logo"
                width="640"
                height="640"
                className="absolute top-1/2 w-[50%] left-1/2 -translate-x-1/2 -z-10"
            />
        </div>
    );
};

export default Artists;
