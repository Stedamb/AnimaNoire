import { ReactGoogleReviews } from "react-google-reviews";
import "react-google-reviews/dist/index.css";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


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
