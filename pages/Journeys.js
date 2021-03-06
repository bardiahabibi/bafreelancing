import Head from "next/head";
import Layout from "../components/Layout";
import HtmlPostsSection from "../components/HtmlPostsSection";
import CssPostsSection from "../components/CssPostsSection";
import JsPostsSection from "../components/JsPostSection";
import HireForm from "../components/HireForm";
import Modal from "../components/Modal";

class Journeys extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
    };
  }

  showModal = () => {
    this.setState({
      modalShow: true,
    });
  };

  hideModal = () => {
    this.setState({
      modalShow: false,
    });
  };

  render() {
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
          <title>Journeys</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link rel="canonical" href="https://bafreelancing.com/Journeys" />
          <meta
            name="description"
            content="Here are some code journeys I shared with you. They are categorized into different web technologies such as HTML, CSS, JS,..."
          ></meta>
          <meta
            name="keywords"
            content="Blog, Web Development, Posts, HTML, CSS"
          ></meta>
        </Head>
        <Layout page="Journeys" showModal={this.showModal}>
          <div id="journeysPage">
            <div id="journeysMargin"></div>
            <div id="Header">Journeys</div>
            <div id="postsContainer">
              <CssPostsSection />
              <JsPostsSection />
            </div>
          </div>
          <Modal show={this.state.modalShow} hideModal={this.hideModal}>
            <HireForm />
          </Modal>
        </Layout>
        <style jsx>{`
          #journeysPage {
            display: grid;
            grid-template-columns: 20% 1fr;
            grid-template-rows: 140px 1fr;
            grid-template-areas:
              "journeysMargin Header"
              "postsContainer postsContainer";
          }
          #Header {
            grid-area: Header;
            align-self: center;
            margin-left: 70px;
            padding-top: 50px;
            font-family: Roboto-Regular;
            font-size: 53px;
            color: #535353;
          }
          #postsContainer {
            grid-area: postsContainer;
          }
          #journeysMargin {
            grid-area: journeysMargin;
            background-color: #e8e8ff;
          }

          @media only screen and (max-width: 600px) {
            #journeysPage {
              grid-template-rows: 60px 1fr;
            }
            #Header {
              margin-left: 50px;
              font-size: 43px;
            }
          }
        `}</style>
        <style jsx global>
          {`
            @font-face {
              font-family: Roboto-Regular;
              src: url("./fonts/Roboto-Regular.ttf");
            }
            @font-face {
              font-family: Roboto-Light;
              src: url("./fonts/Roboto-Light.ttf");
            }
          `}
        </style>
      </div>
    );
  }
}

export default Journeys;
