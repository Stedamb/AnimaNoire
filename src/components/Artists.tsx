import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import RevealAnimation from './ui/animations/animations';
import { Button } from './ui/button';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Artists = () => {
    return (
        <div className="relative grid grid-cols-2">
            <div className="flex flex-col items-start gap-4 pl-64 pr-16 py-64">
                <div className="text-6xl font-title font-bold mb-4 RevealAnimation">Artisti</div>
                <p className="text-lg mb-4 RevealAnimation">
                    Embark on a thrilling journey through the picturesque landscapes of the Netherlands.
                    Glide along smooth bike paths, explore charming Dutch towns, and experience the
                    freedom of longboarding in one of Europe's most bike-friendly countries.
                </p>
                <Button size="md" asChild>
                    <a href="/artisti">Vedi gli artisti</a>
                </Button>
            </div>
            <div className="w-full flex items-center">
                <Swiper
                    modules={[A11y]}
                    spaceBetween={30}
                    slidesPerView={2.2}
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

export default Artists;
