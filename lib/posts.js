import { readFile } from "fs/promises";

const getPost = async (slug) => {
  const data = await readFile(`content/posts/${slug}.json`, "utf8");
  return JSON.parse(data);
};

export default getPost;
