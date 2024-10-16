declare type Video = {
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

interface Post {
    id: string;
    slug: string;
    title: string;
    date: string;
    content: string;
}

interface PostPageProps {
    post: Post;
    children?: ReactNode;
}
