import { context } from 'near-sdk-as'

@nearBindgen
class Comment {
  creator: string;
  commentID: string;
  label: string;

  constructor(creator: string, label: string) {
    this.commentID = `${creator}:${context.blockTimestamp}`;
    this.creator = creator;
    this.label = label;
  }
}

export default Comment