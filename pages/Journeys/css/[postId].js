import Head from "next/head";
import path from "path";
import fs from "fs";
import fetch from "isomorphic-unfetch";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Layout from "../../../components/Layout";
import postsUrlNames from "../../../public/posts/css/postsUrlNames.json";
import HireForm from "../../../components/HireForm";
import Modal from "../../../components/Modal";

const cssPost = ({ metaData }) => {
  const [modalShow, setModalShow] = useState(false);
  const router = useRouter();
  const postId = router.query.postId;
  const PostPage = dynamic(() => import(`../../../public/posts/css/PostPage`));
  const imageUrl = `/posts/css/${postId}/header.png`;

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
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>{metaData.headTitle}</title>
        <meta name="description" content={metaData.headDescription}></meta>
        <link
          rel="canonical"
          href={`https://bafreelancing.com/Journeys/css/${postId}`}
        />
        <meta name="keywords" content={metaData.headKeywords}></meta>
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
  let param = postsUrlNames.urls;
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

export async function getStaticProps(ctx) {
  const metaPath = path.join(
    process.cwd(),
    `public/posts/css/${ctx.params.postId}/meta.json`
  );
  const metaData = JSON.parse(fs.readFileSync(metaPath, "utf8"));
  return {
    props: { metaData },
  };
}

export default cssPost;
