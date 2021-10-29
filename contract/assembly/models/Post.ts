import { context } from 'near-sdk-as'


@nearBindgen
class Post {
  creator: string;
  id: string;
  title: string;
  likes: string[];
  description: string;

  constructor(creator: string, title: string, description: string) {
    this.id = `${creator}:${context.blockTimestamp}`;
    this.creator = creator;
    this.title = title;
    this.description = description;
    this.likes = [];
  }
}

export default Post;
