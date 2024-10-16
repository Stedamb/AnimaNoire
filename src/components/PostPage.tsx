import RevealAnimation from "./ui/animations/animations";
import PostDetails from "./PostDetails";

function PostPage({ post, children }: PostPageProps) {
  RevealAnimation("RevealAnimation");

  return (
    <div className="relative">
        {children && <div className="absolute h-50vh">{children}</div>}
      <div className="container-sm relative pt-16">
        <PostDetails post={post} /> 
      </div>
    </div>
  );
}

export default PostPage;
