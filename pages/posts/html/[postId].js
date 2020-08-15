import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Layout from "../../../components/Layout";
import PostPageTitle from "../../../components/PostPageTitle";
//import ff from "../../../public/posts/html/1/title.json";

const htmlPost = ({ fd }) => {
  const router = useRouter();
  const postId = router.query.postId;

  const id = 1;
  const PostPage = dynamic(() =>
    import(`../../../public/posts/html/${postId}/PostPage`)
  );
  console.log(fd);
  return (
    <Layout>
      <div>
        <PostPage />
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { postId: "1" } }, // See the "paths" section below
    ],
    fallback: false, // See the "fallback" section below
  };
}

export async function getStaticProps() {
  const fd = dynamic(() => import(`../../../public/posts/html/1/title.js`));
  console.log(fd);
  const title = fd;
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default htmlPost;
