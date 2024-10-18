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

const Merch = () => {
    return (
        <div className="relative container-xl mt-16">
            <div className="flex flex-col items-center gap-4">
                <div className="text-6xl font-title font-bold mb-4 RevealAnimation">Merchandise</div>
                <p className="text-lg text-center mb-4 RevealAnimation">
                    Embark on a thrilling journey through the picturesque landscapes of the Netherlands.
                    Glide along smooth bike paths, explore charming Dutch towns, and experience the
                    freedom of longboarding in one of Europe's most bike-friendly countries.
                </p>

            </div>
            <div className="w-full flex items-center pt-16">
                <Swiper
                    modules={[A11y]}
                    spaceBetween={80}
                    slidesPerView={3}
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
            <div className="flex justify-center pt-16">

                <Button size="md" asChild>
                    <a href="/artisti">Vai allo shop</a>
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

export default Merch;
