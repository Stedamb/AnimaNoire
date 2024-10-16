import React from "react";
import { ArrowLeft } from "lucide-react";
import RevealAnimation from "./ui/animations/animations";
import { getDate } from "@/utils/dateUtils";
import Markdown from "react-markdown";
import { Button } from "./ui/button";

interface PostDetailsProps {
    post: Post;
}

const PostDetails: React.FC<PostDetailsProps> = ({ post }) => {
    RevealAnimation("RevealAnimation");

    return (
        <div className="flex flex-col items-center">
            <h3 className="RevealAnimation drop-shadow-lg">{post?.title}</h3>
            <p className="RevealAnimation">{post?.date && getDate(post.date)}</p>
            <div className="RevealAnimation flex flex-col w-full px-8 py-12 bg-secondary rounded-xl m-8">
            <Markdown className="FormattedText text-lg">{post.content}</Markdown> 
            </div>
            <Button variant={"secondary"} size={"lg"} className="">
                <ArrowLeft className="RevealAnimation" size={16} />
                <a href="/blog">Torna indietro</a>
            </Button>
        </div>
    );
};

export default PostDetails;
