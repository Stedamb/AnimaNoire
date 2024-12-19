'use client';

import { ReactGoogleReviews } from 'react-google-reviews';
import "react-google-reviews/dist/index.css";

export default function ReviewsCarousel() {
  const featurableWidgetId = "3669524a-ad1f-43aa-b568-5819d4a2a1d3";

  return (
    <div className="max-w-6xl mx-auto">
      <ReactGoogleReviews layout="carousel" featurableId={featurableWidgetId} />
    </div>
  );
}
