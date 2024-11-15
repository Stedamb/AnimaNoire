import FadeInAnimation from '../ui/animations/FadeInAnimation';
import { useRef } from 'react';
import { Card, CardContent, CardTitle } from '../ui/card';
import { artistItems } from '@/data/artists';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';

const List = () => {
    const artistsRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={artistsRef} className="bg-background-alt relative py-32">
            <div className="container-xl grid grid-cols-2 lg:grid-cols-3 ">
                {artistItems.map((artist, index) => (
                    <FadeInAnimation triggerRef={artistsRef} delay={index * 0.2}>
                        <Card className="m-4">
                            <CardContent>
                                <AspectRatio ratio={4 / 3}>
                                    <img className="size-full object-cover shaded" src={artist.photoSrc} alt={artist.name} />
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-50 shadow-lg"></div>
                                </AspectRatio>
                            </CardContent>
                            <CardTitle className="absolute bottom-0 px-2 py-6 text-white text-center">
                                {artist.name} {artist.surname}
                            </CardTitle>
                            <a href={`/artists/${artist.slug}`} className="absolute inset-4">
                            </a>
                        </Card>
                    </FadeInAnimation>
                ))}
            </div>

        </div>
    );
};

export default List;
