import { ReactGoogleReviews } from "react-google-reviews";
import "react-google-reviews/dist/index.css";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Reviews = () => {
    const featurableWidgetId = "3669524a-ad1f-43aa-b568-5819d4a2a1d3";

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
