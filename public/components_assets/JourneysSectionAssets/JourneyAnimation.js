import Lottie from "react-lottie";
import journeyanimation from "./journeysSectionAnimation.json";

class JourneyAnimation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isStopped: false, isPaused: false };
    this.lottieRef = React.createRef();
  }

  componentDidMount() {}

  componentWillUnmount() {}

  animation_play = () => {};

  animation_stop = () => {};

  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: journeyanimation,
      //renderer: "canvas",
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
    return (
      <div
        id="journeylottie"
        style={{ height: this.props.height }}
        ref={this.lottieRef}
        // onMouseOver={this.animation_play}
        // onMouseLeave={this.animation_stop}
      >
        <Lottie
          options={defaultOptions}
          padding={"0px"}
          width={"100%"}
          height={"100%"}
          isStopped={this.state.isStopped}
          isPaused={this.state.isPaused}
        />
        <style jsx>{``}</style>
      </div>
    );
  }
}

export default JourneyAnimation;
