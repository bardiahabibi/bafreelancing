import Navbar from "./Navbar";
import Footer from "./Footer";
import Preloader from "./Preloader";

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Preloader />
        <Navbar page={this.props.page} showModal={this.props.showModal} />
        {this.props.children}
        <Footer />
        <style jsx global>{`
          body {
            margin: 0;
          }
          @font-face {
            font-family: Roboto-Regular;
            src: url("/fonts/Roboto-Regular.ttf");
          }
        `}</style>
      </div>
    );
  }
}

export default Layout;
