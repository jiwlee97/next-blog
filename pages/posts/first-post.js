import { readFile } from "fs/promises";
import Head from "next/head";

export const getStaticProps = async () => {
  console.log("[FirstPostPage] getStaticProps()");
  const data = await readFile("content/posts/first-post.json", "utf8");
  const post = JSON.parse(data);

  return {
    props: {
      post,
    },
  };
};

const FirstPostPage = ({ post }) => {
  console.log("[FirstPostPage] render", post);
  return (
    <>
      <Head>
        <title>{post.title} - My Blog</title>
      </Head>

      <main>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </main>
    </>
  );
};

export default FirstPostPage;
