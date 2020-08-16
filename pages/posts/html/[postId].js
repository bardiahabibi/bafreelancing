import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Layout from "../../../components/Layout";
import numberOfPosts from "../../../public/posts/html/numberOfPosts.json";

const htmlPost = ({ NumberOfPosts }) => {
  const router = useRouter();
  const postId = router.query.postId;
  const PostPage = dynamic(() =>
    import(`../../../public/posts/html/${postId}/PostPage`)
  );
  const imageUrl = `/posts/html/${postId}/header.png`;
  return (
    <Layout>
      <div>
        <PostPage Image={imageUrl} />
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  let param = [];
  for (let i = 1; i <= numberOfPosts.number; i++) {
    param.push(i);
  }
  const path = param.map((item) => {
    let postId = item.toString();
    let params = { postId };
    return { params };
  });
  return {
    paths: path,
    fallback: false,
  };
}

export async function getStaticProps() {
  const NumberOfPosts = numberOfPosts;
  return {
    props: { NumberOfPosts },
  };
}

export default htmlPost;
