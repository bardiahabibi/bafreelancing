import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Layout from "../../../components/Layout";
import PostPageTitle from "../../../components/PostPageTitle";
import data from "../../../public/posts/html/1/title.json";

const htmlPost = ({ fetchdata }) => {
  const router = useRouter();
  const postId = router.query.postId;
  const id = 1;
  const PostPageBody = dynamic(() =>
    import(`../../../public/posts/html/${postId}/PostPageBody`)
  );
  console.log();
  return (
    <Layout>
      <div>
        <PostPageBody />
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
  const fetchdata = data;
  return {
    props: { fetchdata }, // will be passed to the page component as props
  };
}

export default htmlPost;
