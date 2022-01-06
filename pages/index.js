import Head from "next/head";
import Link from "next/link";
import { getPosts } from "../lib/posts";

export const getStaticProps = async () => {
  const posts = await getPosts();
  return {
    props: {
      posts,
    },
  };
};

function HomePage({ posts }) {
  console.log("[HomePage] render");
  return (
    <>
      <Head>
        <title>My Blog</title>
      </Head>
      <main>
        <h1>My Blog</h1>
        <ul>
          {posts.map((post) => {
            const { slug, title } = post;
            return (
              <li key={slug}>
                <Link href={`/posts/${slug}`}>
                  <a>{title}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
}

export default HomePage;
