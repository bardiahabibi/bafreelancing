import Head from "next/head";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Layout from "../../../components/Layout";
import numberOfPosts from "../../../public/posts/html/numberOfPosts.json";
import HireForm from "../../../components/HireForm";
import Modal from "../../../components/Modal";

const htmlPost = ({ NumberOfPosts }) => {
  const [modalShow, setModalShow] = useState(false);
  const router = useRouter();
  const postId = router.query.postId;
  const PostPage = dynamic(() => import(`../../../public/posts/html/PostPage`));
  const imageUrl = `/posts/html/${postId}/header.png`;

  const showModal = () => {
    setModalShow(true);
  };

  const hideModal = () => {
    setModalShow(false);
  };

  return (
    <div>
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-176061274-1"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-176061274-1');
  `,
          }}
        />
        <title>Post</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout showModal={showModal}>
        <div>
          <PostPage Image={imageUrl} postId={postId} />
        </div>
        <Modal show={modalShow} hideModal={hideModal}>
          <HireForm />
        </Modal>
      </Layout>
    </div>
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
