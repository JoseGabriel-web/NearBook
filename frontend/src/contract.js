import contractInfo from "./contractInfo.json";
import { decode } from "./utils";

export const greet = async (wallet) => {
  const functionConfig = {
    contractId: contractInfo.name,
    methodName: contractInfo.methods.greet,
  };
  const result = await wallet.account().functionCall(functionConfig);
  return decode(result);
};

export const getPosts = async (wallet) => {
  const functionConfig = {
    contractId: contractInfo.name,
    methodName: contractInfo.methods.listPosts,
  };

  const result = await wallet.account().functionCall(functionConfig);
  return decode(result);
};

export const createPost = async (wallet, { title, description }) => {
  const functionConfig = {
    contractId: contractInfo.name,
    methodName: contractInfo.methods.createPost,
    args: {
      title,
      description,
    },
  };

  const result = await wallet.account().functionCall(functionConfig);
  return decode(result);
};

export const handlePostLike = async (wallet, {postID}) => {
  const functionConfig = {
    contractId: contractInfo.name,
    methodName: contractInfo.methods.handlePostLike,
    args: {
      postID: postID,
    },
  };
  const result = await wallet.account().functionCall(functionConfig);
  return decode(result);
};

export const getMyPosts = async (wallet) => {
  const functionConfig = {
    contractId: contractInfo.name,
    methodName: contractInfo.methods.getMyPosts,
  };

  const result = await wallet.account().functionCall(functionConfig);
  return decode(result);
};

export const addComment = async (wallet, { postID, label }) => {
  const functionConfig = {
    contractId: contractInfo.name,
    methodName: contractInfo.methods.addComment,
    args: {
      postID,
      label
    },
  };
  const result = await wallet.account().functionCall(functionConfig);
  return decode(result);
};

export const removeComment = async (wallet, { postID, commentID }) => {
  const functionConfig = {
    contractId: contractInfo.name,
    methodName: contractInfo.methods.removeComment,
    args: {
      postID,
      commentID
    },
  };
  const result = await wallet.account().functionCall(functionConfig);
  return decode(result);
};

export const removePost = async (wallet, { postID }) => {
  const functionConfig = {
    contractId: contractInfo.name,
    methodName: contractInfo.methods.removePost,
    args: {
      postID: postID,
    },
  };
  const result = await wallet.account().functionCall(functionConfig);
  return decode(result);
};
