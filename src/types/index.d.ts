interface menuItem {
    title: string,
    url: string,
}

interface Video {
    source: string;
    title: string;
    description: string;
    preview: string;
    date: string;
    link: string;
    youtube?: string;
};

interface AnimationOptions {
    repeat?: number;
    yoyo?: boolean;
    repeatDelay?: number;
    duration?: number;
    ease?: string;
    delay?: number;
    stagger?: number;
}

interface Artist {
    name: string;
    surname: string;
    role: string;
    slug: string;
  }

interface ArtistPageProps {
    artist: Artist;
    children?: ReactNode;
}

interface Merch {
    title: string;
    description: string;
    photoSrc: string;
    price: number;
  }
  
