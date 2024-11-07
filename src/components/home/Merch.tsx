import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y } from 'swiper/modules';
import { Button } from '../ui/button';
import { Card, CardContent, CardFooter } from '../ui/card';

import 'swiper/css';

import { merchItems } from '@/data/merch';
import FadeInAnimation from '../ui/animations/FadeInAnimation';

const Merch = () => {
    const merchRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={merchRef} className="relative container-xl mt-16">
            <div className="flex flex-col items-center gap-4">

                <FadeInAnimation triggerRef={merchRef}>
                    <div className="text-6xl font-title font-bold mb-4">Merchandise</div>
                </FadeInAnimation>

                <FadeInAnimation triggerRef={merchRef} delay={0.2}>
                    <p className="text-lg text-center mb-4 px-8">
                        Embark on a thrilling journey through the picturesque landscapes of the Netherlands.
                        Glide along smooth bike paths, explore charming Dutch towns, and experience the
                        freedom of longboarding in one of Europe's most bike-friendly countries.
                    </p>
                </FadeInAnimation>

            </div>

            <FadeInAnimation triggerRef={merchRef} delay={0.4}>
                <div className="w-full flex items-center pt-16">
                    <Swiper
                        modules={[A11y]}
                        spaceBetween={20}
                        slidesPerView={1.3}
                        centeredSlides={true}
                        initialSlide={Math.floor(merchItems.length / 2)}
                        breakpoints={{
                            640: {
                                slidesPerView: 1.5,
                            },
                            768: {
                                slidesPerView: 3,
                            },
                        }}
                    >
                        {merchItems.map((item, index) => (
                            <SwiperSlide key={index}>
                                <Card className="card-hover-effect">
                                    <CardContent>
                                        <img src="/merch1.png" alt="merch1" className="w-full object-cover" />
                                    </CardContent>
                                    <CardFooter className="flex justify-between items-center">
                                        <span className="text-lg font-bold">{item.title}</span>
                                        <span className="text-lg font-bold">${item.price.toFixed(2)}</span>
                                    </CardFooter>
                                </Card>
                            </SwiperSlide>
                        ))}

                    </Swiper>
                </div>
            </FadeInAnimation>

            <div className="flex justify-center pt-16">

                <FadeInAnimation triggerRef={merchRef} delay={0.6}>
                    <Button size="md" asChild>
                        <a href="/artisti">Vai allo shop</a>
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

export default Merch;
