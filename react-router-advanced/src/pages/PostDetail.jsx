// src/pages/PostDetail.jsx
import { useParams } from 'react-router-dom';

export default function PostDetail() {
  const { postId } = useParams();
  return (
    <div>
      <h1>Post Detail Page</h1>
      <p>Currently viewing post with ID: {postId}</p>
    </div>
  );
}
