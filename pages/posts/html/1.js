import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Layout from "../../../components/Layout";
import PostPageTitle from "../../../components/PostPageTitle";

const htmlPost = () => {
  //  const router = useRouter();
  //  const postId = router.query.postId;
  //  const PostTitle = dynamic(() =>
  //    import(`../../../public/posts/html/1/title.json`)
  //  );
  return (
    <Layout>
      <div>xcf</div>
    </Layout>
  );
};

export default htmlPost;
