import { useRef } from "react";
import { AspectRatio } from "../ui/aspect-ratio";

interface GalleryProps {
    items: string[];
}

const Gallery: React.FC<GalleryProps> = ({ items }) => {
    const galleryRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={galleryRef} className="relative bg-background-alt py-16">
            <div className="flex flex-col items-center gap-4">
                <div className="text-6xl font-title font-bold mb-8">Gallery</div>
                <div className="container-lg w-full grid grid-cols-2">

                {items.map((item, index) => (
                    <div key={index}>                        
                        <AspectRatio ratio={4 / 3}>
                            <img className="size-full object-cover shaded" src={item} alt="Tattoo" />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-50 shadow-lg"></div>
                        </AspectRatio>
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery;

