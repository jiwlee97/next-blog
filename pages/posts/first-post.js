import Head from "next/head";

export const getStaticProps = async () => {
  return {
    props: {
      post: {
        title: "Fist Post",
        body: "My first post, as static props.",
      },
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
