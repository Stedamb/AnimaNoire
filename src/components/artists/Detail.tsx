function ArtistPage({ artist, children }: ArtistPageProps) {
  return (
    <div className="relative">
        {children && <div className="absolute h-50vh">{children}</div>}
      <div className="container-sm relative pt-16">
        {artist.name && <div className="text-6xl font-title font-bold mb-12">{artist.name}</div>}
      </div>
    </div>
  );
}

export default ArtistPage;
