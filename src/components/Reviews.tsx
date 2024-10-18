import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import RevealAnimation from './ui/animations/animations';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';

import { ReactGoogleReviews } from "react-google-reviews";
import "react-google-reviews/dist/index.css";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { merchItems } from '@/data/merch';

const Reviews = () => {
    const featurableWidgetId = "";

    return (
        <div className="relative mt-64">
                        <div className="flex flex-col items-center gap-4">
                <div className="text-6xl font-title font-bold mb-12 RevealAnimation">Recensioni</div>
            </div>
                <ReactGoogleReviews layout="carousel" featurableId={featurableWidgetId} />
        </div>
    );
};

export default Reviews;
