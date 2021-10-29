import { context } from 'near-sdk-as'
import Comment from './Comment'


@nearBindgen
class Post {
  creator: string;
  id: string;
  title: string;
  likes: string[];
  description: string;
  comments: Comment[]  

  constructor(creator: string, title: string, description: string) {
    this.id = `${creator}:${context.blockTimestamp}`;
    this.creator = creator;
    this.title = title;
    this.description = description;
    this.likes = [];
    this.comments = [];
  }
}

export default Post;
