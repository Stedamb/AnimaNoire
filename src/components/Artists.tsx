import RevealAnimation from './ui/animations/animations';
import { Button } from './ui/button';

const Artists = () => {
    RevealAnimation('RevealAnimation');
    RevealAnimation('RevealAnimationDelay', { delay: 1 });

    return (

        <div className="container-xl grid grid-cols-2">
            <div className="flex flex-col items-start gap-4 py-64">
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
            <div className="">
                <img
                    src="/assets/tattoo.svg"
                    alt="Logo"
                    width="640"
                    height="640"
                    className="RevealAnimation"
                />
            </div>
        </div>
    );
};

export default Artists;
