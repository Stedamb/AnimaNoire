'use client';

import { ReactGoogleReviews, type ReactGoogleReview } from 'react-google-reviews';
import "react-google-reviews/dist/index.css";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

export default function ReviewsCarousel() {
  const featurableWidgetId = "e45ca299-cfed-4e01-94bd-45ba952e7ffe";

  const renderStars = (rating: ReactGoogleReview['starRating']) => {
    return (
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <span 
            key={star} 
            className={`text-2xl ${star <= rating ? 'text-yellow-400' : 'text-gray-400'}`}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  const processComment = (comment: string) => {
    const parts = comment.split('(Translated by Google)');
    // Take the original Italian text (first part)
    const text = parts[0].trim();
    return text.length > 200 ? text.slice(0, 200).trim() + '...' : text;
  };

  return (
    <div className="max-w-6xl mx-auto">
      <ReactGoogleReviews 
        layout="custom" 
        featurableId={featurableWidgetId}
        maxCharacters={200}
        theme="dark"
        renderer={(reviews) => (
            <Carousel opts={{ align: "center", loop: true }} className="w-full">
              <CarouselContent>
                {reviews.map((review) => (
                  <CarouselItem key={review.reviewId} className="basis-3/4 md:basis-1/2 lg:basis-1/3">
                    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 shadow-lg h-full">
                      <div className="flex items-center gap-4 mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-white">
                            {review.reviewer.displayName}
                          </h3>
                          {renderStars(review.starRating)}
                        </div>
                      </div>
                      <p className="text-gray-300">{processComment(review.comment)}</p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-2 pt-4">
        <CarouselPrevious className="static !m-0 translate-y-0" />
        <CarouselNext className="static !m-0 translate-y-0" />
      </div>
            </Carousel>
        )} 
      />
    </div>
  );
}
