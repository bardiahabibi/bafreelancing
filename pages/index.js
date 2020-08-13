import Layout from "../components/Layout";
import Landing from "../components/Landing";
import Technologies from "../components/Technologies";
import JourneysSection from "../components/JourneysSection";
import HireSection from "../components/HireSection";

class index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Layout>
        <Landing />
        <Technologies />
        <JourneysSection />
        <HireSection />
      </Layout>
    );
  }
}

export default index;
