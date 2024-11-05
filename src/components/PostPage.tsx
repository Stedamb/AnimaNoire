import PostDetails from "./PostDetails";

function PostPage({ post, children }: PostPageProps) {

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
