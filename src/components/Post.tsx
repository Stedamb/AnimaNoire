import React from "react";
import { ArrowUpRight } from "lucide-react";
import RevealAnimation from "./ui/animations/animations";
import Markdown from "react-markdown";
import { Button } from "./ui/button";

interface PostProps {
    post: Post;
    getDayName: (dateString: string) => string;
}

const Post: React.FC<PostProps> = ({ post, getDayName }) => {
    RevealAnimation("RevealAnimation");

    return (
        <li>
            <div className="RevealAnimation flex flex-col gap-2 mb-8">
                <div className="flex justify-between items-baseline">
                    <h6>{post.title}</h6>
                    <p>{getDayName(post.date)}</p>
                </div>
                <div className="RevealAnimation flex flex-col px-8 py-6 bg-secondary rounded-xl">
                    <Markdown >{post.content.substring(0, 90).concat("...")}</Markdown>
                    <Button variant={"primary"} className="mt-4 ml-auto">
                        <a href={`/posts/${post.slug}`}>
                            Leggi
                        </a>
                        <ArrowUpRight size={18} />
                    </Button>
                </div>
            </div>
        </li>
    );
};

export default Post;
