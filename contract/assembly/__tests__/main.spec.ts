import * as contract from "../index";

describe("example", () => {
  it("Should create a post without errors.", () => {
    expect(() => {
      contract.createPost("first post", "this is the first post.");
    }).not.toThrow();
  });
  it("Should throw an error", () => {
    expect(() => {
      contract.createPost("", "");
    }).toThrow();
  });
  it("Should get list of all posts an not throw errors.", () => {
    expect(() => {
      contract.listPosts();
    }).not.toThrow();
  });
});
