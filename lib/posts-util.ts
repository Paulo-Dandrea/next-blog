import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { TContactDetails, PostContentProps } from "../types/types";

const postsDir = path.join(process.cwd(), "posts");

export function getPostsFiles() {
  return fs.readdirSync(postsDir);
}

export function getPostData(postIdentifier: string) {
  const postSlug = postIdentifier.replace(/\.md$/, ""); // removes the file extension
  const filePath = path.join(postsDir, `${postSlug}.md`);

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  
  const postData = {
    ...data,
    content,
    slug: postSlug,
    isFeatured: data.isFeatured as boolean,
  };

  console.log({ postData });

  return postData;
}

export function getAllPosts() {
  const postfiles: string[] = getPostsFiles();

  const allPosts = postfiles.map((postFileName) =>
    getPostData(postFileName)
  ) as PostContentProps[];

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
}

export function isInputInvalid({ name, email, message }: TContactDetails) {
  return (
    !email ||
    !email.includes("@") ||
    !name ||
    name.trim() === "" ||
    !message ||
    message.trim() === ""
  );
}

