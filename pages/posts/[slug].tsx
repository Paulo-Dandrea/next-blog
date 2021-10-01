import * as React from 'react';
import { PostContent } from '../../components/layout/posts/post-detail/post-content';

export interface IPostDetailPageProps {
}

function PostDetailPage (props: IPostDetailPageProps) {
  return (
    <div>
      <PostContent />
    </div>
  );
}

export default PostDetailPage