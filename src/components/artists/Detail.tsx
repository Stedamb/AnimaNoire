// import FadeInAnimation from '@/components/ui/animations/FadeInAnimation';
import Gallery from "./Gallery";
const allImages = import.meta.glob('/public/artists/**/*.{jpeg,jpg,png,gif}');

function ArtistPage({ artist }: ArtistPageProps) {
    // const artistRef = useRef<HTMLDivElement>(null);

    const artistImages = Object.keys(allImages).filter(
        (path) =>
            path.includes(`/artists/${artist.slug}/`) &&
            !path.endsWith('profilo.jpg')
    );
    const formattedArtistImages = artistImages.map((image) => image.replace('/public', ''));

    return (
        <div>
            <div className="relative container-lg grid grid-cols-1 lg:grid-cols-2 pb-16 lg:py-[20vh]">
                <div className="flex flex-col p-8 gap-4">
                    {artist.name && <div className="text-6xl font-title font-bold">{artist.name}</div>}
                    <p className="text-lg">
                        Embark on a thrilling journey through the picturesque landscapes of the Netherlands.
                        Glide along smooth bike paths, explore charming Dutch towns, and experience the
                        freedom of longboarding in one of Europe's most bike-friendly countries.
                    </p>
                </div>
                <div className="order-first lg:order-last lg:ml-auto">
                    <img
                        src={"/artists/" + artist.slug + "/profilo.jpg"}
                        alt="Foto profilo"
                        width="640"
                        height="640"
                        className="w-full lg-max:max-h-[300px] lg:max-w-[400px] object-cover"
                    />
                </div>
                <img
                    src="/assets/tattoo.svg"
                    alt="Tattoo"
                    width="640"
                    height="640"
                    className="absolute inset-0 w-full -z-10"
                />
            </div>
            <Gallery items={formattedArtistImages}></Gallery>
        </div>
    );
}

export default ArtistPage;
