import Head from "next/head";
import Layout from "../components/Layout";
import Landing from "../components/Landing";
import Technologies from "../components/Technologies";
import JourneysSection from "../components/JourneysSection";
import HireSection from "../components/HireSection";
import HireForm from "../components/HireForm";
import Modal from "../components/Modal";

class index extends React.Component {
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
          <title>BaFreelancing</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link rel="canonical" href="https://bafreelancing.com" />
          <meta name="yandex-verification" content="5729b5eb025aad53" />
        </Head>
        <Layout page="Home" showModal={this.showModal}>
          <Landing />
          <Technologies />
          <JourneysSection />
          <HireSection showModal={this.showModal} />
          <Modal show={this.state.modalShow} hideModal={this.hideModal}>
            <HireForm />
          </Modal>
        </Layout>
      </div>
    );
  }
}

export default index;
