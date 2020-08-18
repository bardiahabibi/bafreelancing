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
      <Layout page="Home">
        <Landing />
        <Technologies />
        <JourneysSection />
        <HireSection showModal={this.showModal} />
        <Modal show={this.state.modalShow} hideModal={this.hideModal}>
          <HireForm />
        </Modal>
      </Layout>
    );
  }
}

export default index;
