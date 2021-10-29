import Post from "./models/Post";
import { PersistentVector, Context } from "near-sdk-as";
import Comment from "./models/Comment";

const postssssss = new PersistentVector<Post>("d");

export function greet(): string {
  return "Hello world";
}

export function createPost(title: string, description: string): string {
  const newPost = new Post(Context.sender, title, description);
  postssssss.push(newPost);
  return "Post created succesfully";
}

export function listPosts(): Post[] {
  const listPosts = new Array<Post>(postssssss.length);
  for (let i = 0; i < postssssss.length; i++) {
    listPosts[i] = postssssss[i];
  }
  return listPosts;
}

export function getMyPosts(): Post[] {
  let userPostsQuantity = 0;
  for (let i = 0; i < postssssss.length; i++) {
    if (postssssss[i].creator === Context.sender) {
      userPostsQuantity += 1;
    }
  }

  let userPosts = new Array<Post>(userPostsQuantity);
  for (let i = 0; i < postssssss.length; i++) {
    if (postssssss[i].creator == Context.sender) {
      userPosts.push(postssssss[i]);
    }
  }

  return userPosts;
}

function findPostIndex(postID: string): number {
  const listPosts = new Array<Post>(postssssss.length);
  let index: number = -1;
  for (let i = 0; i < postssssss.length; i++) {
    if (postssssss[i].id == postID) {
      index = i;
    }
  }
  return index;
}

function findPost(postID: string): Post {
  let post = postssssss[<i32>findPostIndex(postID)];
  return post;
}

export function handlePostLike(postID: string): void {
  let currentPost = findPost(postID);
  if (currentPost.likes.includes(Context.sender)) {
    let index = currentPost.likes.indexOf(Context.sender);
    currentPost.likes.splice(index, 1);
  } else {
    currentPost.likes.push(Context.sender);
  }
  postssssss.replace(<i32>findPostIndex(postID), currentPost);
  return;
}

export function removePost(postID: string): string {
  const postIndex = findPostIndex(postID);

  if (!postssssss.containsIndex(<i32>postIndex)) {
    return "Post not found";
  }
  if (postssssss[<i32>postIndex].creator != Context.sender) {
    return "Post can only be removed by creator.";
  }
  postssssss.swap_remove(<i32>postIndex);
  return "Post removed";
}

// Comments

export function createComment(label: string, postID: string): string {
  const newComment = new Comment(Context.sender, label);
  const postIndex = findPostIndex(postID);
  let post = findPost(postID);
  post.comments.push(newComment);
  postssssss.replace(<i32>postIndex, post);
  return "Comment created succesfully";
}
export function removeComment(postID: string, commentID: string): string {
  const postIndex = findPostIndex(postID);
  let post = findPost(postID);
  let commentIndex = -1;
  for (let i = 0; i < post.comments.length; i++) {
    if (post.comments[i].commentID == commentID) {
      commentIndex = i;
    }
  }
  post.comments.splice(commentIndex, 1);
  postssssss.replace(<i32>postIndex, post);
  return "Comment deleted succesfully";
}
