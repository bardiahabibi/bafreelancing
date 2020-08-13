import Lottie from "react-lottie";
import hireAnimation from "./hire-animation.json";

class HireAnimation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isStopped: true, isPaused: false };
    this.lottieRef = React.createRef();
  }

  componentDidMount() {}

  componentWillUnmount() {}

  animation_play = () => {
    this.setState({
      isStopped: false,
    });
  };

  animation_stop = () => {
    this.setState({
      isStopped: true,
    });
  };

  render() {
    const defaultOptions = {
      loop: false,
      autoplay: false,
      animationData: hireAnimation,
      //renderer: "canvas",
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
    return (
      <div
        id="lottie"
        style={{ width: "265px" }}
        ref={this.lottieRef}
        onMouseOver={this.animation_play}
        onMouseLeave={this.animation_stop}
      >
        <Lottie
          options={defaultOptions}
          padding={"0px"}
          width={"100%"}
          // height={"100%"}
          isStopped={this.state.isStopped}
          isPaused={this.state.isPaused}
        />
        <style jsx>
          {`
            #lottie {
              transition: transform 0.1s ease-in-out;
            }
            #lottie:hover {
              cursor: pointer;
            }
            #lottie:active {
              transform: scale(0.98);
              transition: transform 0.1s ease-in-out;
            }
          `}
        </style>
      </div>
    );
  }
}

export default HireAnimation;
