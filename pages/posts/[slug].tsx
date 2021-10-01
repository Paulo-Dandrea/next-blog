import * as React from "react";
import {
  PostContentProps,
  PostContent,
} from "../../components/layout/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "../../lib/posts-util";

function PostDetailPage({ post }: { post: PostContentProps }) {
  return (
    <div>
      <PostContent post={post} />
    </div>
  );
}

export function getStaticProps(context) {
  const {
    params: { slug },
  } = context;

  return {
    props: { post: getPostData(slug) },
    revalidate: 600,
  };
}

// As we are working with a dynamic generated path, we should work also with:
export function getStaticPaths() {
  const postFileNames = getPostsFiles();
  const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false
  };
}

export default PostDetailPage;
