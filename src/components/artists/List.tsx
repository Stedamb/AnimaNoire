import FadeInAnimation from '../ui/animations/FadeInAnimation';
import { useRef } from 'react';
import { Card, CardContent, CardTitle } from '../ui/card';
import { artistItems } from '@/data/artists';

const List = () => {
    const artistsRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={artistsRef} className="bg-background-alt relative py-16">
            <div className="container-xl grid grid-cols-2 lg:grid-cols-3 ">
                {artistItems.map((artist, index) => (
                    <FadeInAnimation triggerRef={artistsRef} delay={index * 0.2}>
                        <Card className="m-4">
                            <CardContent>
                                <img className="w-full h-auto shaded" src={artist.photoSrc} alt={artist.name} />
                                <div className="absolute inset-4 bg-gradient-to-b from-transparent to-gray-900 opacity-50 shadow-lg"></div>
                            </CardContent>
                            <CardTitle className="absolute bottom-0  text-white text-center">
                                {artist.name} {artist.surname}
                            </CardTitle>
                        </Card>
                    </FadeInAnimation>
                ))}
            </div>

        </div>
    );
};

export default List;
