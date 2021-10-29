import Post from "./models/Post";
import { PersistentVector, Context } from "near-sdk-as";

const postssss = new PersistentVector<Post>("c");

export function greet(): string {
  return "Hello world";
}

export function createPost(title: string, description: string): string {
  const newPost = new Post(Context.sender, title, description);
  postssss.push(newPost);
  return "Post created succesfully";
}

export function listPosts(): Post[] {
  const listPosts = new Array<Post>(postssss.length);
  for (let i = 0; i < postssss.length; i++) {
    listPosts[i] = postssss[i];
  }
  return listPosts;
}

export function getMyPosts(): Post[] {
  let userPostsQuantity = 0;
  for (let i = 0; i < postssss.length; i++) {
    if (postssss[i].creator === Context.sender) {
      userPostsQuantity += 1;
    }
  }

  let userPosts = new Array<Post>(userPostsQuantity);
  for (let i = 0; i < postssss.length; i++) {
    if (postssss[i].creator == Context.sender) {
      userPosts.push(postssss[i]);
    }
  }

  return userPosts;
}

function findPostIndex(postID: string): number {
  const listPosts = new Array<Post>(postssss.length);
  let index: number = -1;
  for (let i = 0; i < postssss.length; i++) {
    if (postssss[i].id == postID) {
      index = i;
    }
  }
  return index;
}

function findPost(postID: string): Post {
  let post = postssss[<i32>findPostIndex(postID)];
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
  postssss.replace(<i32>findPostIndex(postID), currentPost);
  return;
}

export function removePost(postID: string): string {
  const postIndex = findPostIndex(postID);

  if (!postssss.containsIndex(<i32>postIndex)) {
    return "Post not found";
  }
  if (postssss[<i32>postIndex].creator != Context.sender) {
    return "Post can only be removed by creator.";
  }
  postssss.swap_remove(<i32>postIndex);
  return "Post removed";
}
