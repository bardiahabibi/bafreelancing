import Konva from "konva";
import { Stage, Layer, Rect, Image } from "react-konva";
import useImage from "use-image";

const Logos = (props) => {
  const [image] = useImage(
    `/components_assets/TechnologiesAssets/${props.name}.png`
  );
  return (
    <Image
      image={image}
      x={props.x}
      y={props.y}
      width={props.width}
      height={props.height}
      draggable={true}
    />
  );
};

class TechnologiesLogosCanvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Stage width={this.props.canvasWidth} height={this.props.canvasHeight}>
        <Layer>
          <Logos name={"html"} x={400} y={59} />
          <Logos name={"css"} x={650} y={300} />
        </Layer>
      </Stage>
    );
  }
}

class Technologies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      canvasWidth: 0,
      canvasHeight: 0,
    };
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    this.addResizeListener();
    this.setState({
      canvasWidth: this.canvasRef.current.offsetWidth,
      canvasHeight: this.canvasRef.current.offsetHeight,
    });
  }

  componentDidUpdate() {
    this.addResizeListener();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  addResizeListener = () => {
    window.addEventListener("resize", this.handleResize);
  };

  handleResize = () => {
    this.setState({
      canvasWidth: this.canvasRef.current.offsetWidth,
      canvasHeight: this.canvasRef.current.offsetHeight,
    });
  };

  render() {
    return (
      <div>
        <div id="technologiesContainer">
          <div id="technologiesHeader">Technologies Familiar With</div>
          <div ref={this.canvasRef} id="technologiesLogos">
            <TechnologiesLogosCanvas
              canvasWidth={this.state.canvasWidth}
              canvasHeight={this.state.canvasHeight}
            />
          </div>
        </div>
        <style jsx>{`
          #technologiesContainer {
            width: 100%;
            height: 120vh;
            display: grid;
            grid-template-columns: 100%;
            grid-template-rows: 22% 1fr;
            grid-template-areas:
              "technologiesHeader"
              "technologiesLogos";
          }
          #technologiesHeader {
            grid-area: technologiesHeader;
            text-align: center;
            align-self: center;
            font-family: Roboto-Regular;
            font-size: 53px;
            color: #535353;
          }
          #technologiesLogos {
            grid-area: technologiesLogos;
            with: 100%;
            height: 100%;
          }
        `}</style>
        <style jsx global>
          {`
            @font-face {
              font-family: Roboto-Regular;
              src: url("./fonts/Roboto-Regular.ttf");
            }
          `}
        </style>
      </div>
    );
  }
}

export default Technologies;
