import Head from "next/head";
import getPost from "../../lib/posts";

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { slug: "first-post" } },
      { params: { slug: "second-post" } },
    ],
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  console.log("[PostPage] getStaticProps()");
  const post = await getPost(slug);

  return {
    props: {
      post,
    },
  };
};

const PostPage = ({ post }) => {
  console.log("[PostPage] render", post);
  return (
    <>
      <Head>
        <title>{post.title} - My Blog</title>
      </Head>

      <main>
        <p>{post.date}</p>
        <h1>{post.title}</h1>
        <article dangerouslySetInnerHTML={{ __html: post.body }} />
      </main>
    </>
  );
};

export default PostPage;
