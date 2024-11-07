import React, { useRef } from 'react';
import { Button } from '../ui/button';
import FadeInAnimation from '../ui/animations/FadeInAnimation';

const Introduction = () => {
  const introductionRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={introductionRef} className="relative container-lg">
      <div className="container-md text-center flex flex-col items-center gap-4 py-32 xl:py-52">
        <FadeInAnimation triggerRef={introductionRef}>
          <div className="text-6xl font-title font-bold mb-4">Benvenuti da AnimaNoire</div>
        </FadeInAnimation>

        <FadeInAnimation triggerRef={introductionRef} delay={0.2}>
          <p className="text-lg mb-4 px-8">
            Embark on a thrilling journey through the picturesque landscapes of the Netherlands.
            Glide along smooth bike paths, explore charming Dutch towns, and experience the
            freedom of longboarding in one of Europe's most bike-friendly countries.
          </p>
        </FadeInAnimation>

        <FadeInAnimation triggerRef={introductionRef} delay={0.4}>
          <Button size="lg" asChild>
            <a href="/prenota">Prenota Ora</a>
          </Button>
        </FadeInAnimation>

          <img
            src="/assets/tattoo.svg"
            alt="Logo"
            width="640"
            height="640"
            className="absolute top-[22%] lg:-top-[20%] w-full -z-10"
          />
      </div>
    </div>
  );
};

export default Introduction;