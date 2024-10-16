import RevealAnimation from './ui/animations/animations';
import { Button } from './ui/button';

const Introduction = () => {
  RevealAnimation('RevealAnimation');
  RevealAnimation('RevealAnimationDelay', { delay: 1 });

  return (

    <div className="relative container-lg">
      <div className="container-md text-center flex flex-col items-center gap-4 py-64">
        <div className="text-6xl font-title font-bold mb-4 RevealAnimation">Benvenuti da AnimaNoire</div>
        <p className="text-lg mb-4 RevealAnimation">
          Embark on a thrilling journey through the picturesque landscapes of the Netherlands.
          Glide along smooth bike paths, explore charming Dutch towns, and experience the
          freedom of longboarding in one of Europe's most bike-friendly countries.
        </p>
        <Button size="lg" asChild>
          <a href="/prenota">Prenota Ora</a>
        </Button>
      </div>
      <img
        src="/assets/tattoo.svg"
        alt="Logo"
        width="640"
        height="640"
        className="absolute -top-[20%] w-full RevealAnimation"
      />
    </div>
  );
};

export default Introduction;
