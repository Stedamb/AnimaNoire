const Header = () => {
    return (
        <div className="h-[60vh] flex flex-col items-center justify-center relative container-2xl py-[20vh]">
            <div className="text-center container-sm gap-4">
                <div className="text-6xl font-title font-bold mb-4">Artisti</div>
                <p className="text-lg mb-4 px-8">
                    Embark on a thrilling journey through the picturesque landscapes of the Netherlands.
                    Glide along smooth bike paths, explore charming Dutch towns, and experience the
                    freedom of longboarding in one of Europe's most bike-friendly countries.
                </p>
            </div>

            <img
            src="/assets/tattoo.svg"
            alt="Logo"
            width="640"
            height="640"
            className="absolute w-3/4 -z-10"
          />
        </div>
    );
};

export default Header;
