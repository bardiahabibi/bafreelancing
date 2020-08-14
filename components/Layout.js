import Navbar from "./Navbar";
import Footer from "./Footer";

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Navbar />
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
