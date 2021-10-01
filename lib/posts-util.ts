import fs from "fs";
import path from "path";
import matter from "gray-matter";
const postsDir = path.join(process.cwd());

function getPostData(filename) {
  const filePath = path.join(postsDir, filename);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postSlug = filename.replace(/\.md$/, ""); // removes the file extension

  const postData = {
    ...data,
    content,
    slug: postSlug,
    isFeatured: data.isFeatured as boolean,
  };

  return postData;
}

export function getAllPosts() {
  const postfiles = fs.readdirSync(postsDir);

  const allPosts = postfiles.map((postFile) => getPostData(postFile));

  const sortedPosts = allPosts.sort((postA, postB) => (postA > postB ? -1 : 1));

  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
}
