import Link from "next/link";
import JourneyAnimation from "../public/components_assets/JourneysSectionAssets/JourneyAnimation";

class JourneysSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animationHeight: "100vh",
    };
    this.journeyAnimationRef = React.createRef();
  }

  componentDidMount() {
    this.setState({
      //animationHeight: this.journeyAnimationRef.current.offsetHeight,
    });
  }

  render() {
    return (
      <div>
        <div id="journeysSectionContainer">
          <div id="journeysSectionLeft" ref={this.journeyAnimationRef}>
            <JourneyAnimation height={this.state.animationHeight} />
          </div>
          <div id="journeysSectionRight">
            <div id="journeysSectionHeader">Journeys</div>
            <div id="journeysSectionText">
              I shared some of my code-journeys, hope helpful for you{" "}
            </div>
            <div id="journeysSectionButtonContainer">
              <Link href="/Journeys">
                <button id="journeysSectionButton">see</button>
              </Link>
            </div>
          </div>
        </div>
        <style jsx>{`
          #journeysSectionContainer {
            width: 100%;
            height: 100vh;
            display: grid;
            grid-template-columns: 48% 1fr;
            grid-template-rows: 100%;
            grid-template-areas: "journeysSectionLeft journeysSectionRight";
          }
          #journeysSectionLeft {
            grid-area: journeysSectionLeft;
            background-color: #01294a;
          }
          #journeysSectionRight {
            grid-area: journeysSectionRight;
            display: grid;
            grid-template-columns: 100%;
            grid-template-rows: 32% 22% 1fr;
            grid-template-areas:
              "journeysSectionHeader"
              "journeysSectionText"
              "journeysSectionButtonContainer";
          }
          #journeysSectionHeader {
            grid-area: journeysSectionHeader;
            font-family: Roboto-Regular;
            font-size: 53px;
            color: #535353;
            text-align: center;
            align-self: center;
            margin-top: 20px;
          }
          #journeysSectionText {
            grid-area: journeysSectionText;
            font-family: Roboto-Light;
            font-size: 35px;
            color: #535353;
            text-align: center;
            align-self: center;
            padding-left: 130px;
            padding-right: 130px;
          }
          #journeysSectionButtonContainer {
            grid-area: journeysSectionButtonContainer;
            text-align: center;
          }
          #journeysSectionButton {
            width: 125px;
            height: 72px;
            background-color: #30c872;
            outline: none;
            border: none;
            border-radius: 21px;
            font-family: Roboto-Regular;
            font-size: 31px;
            color: #f1f1f1;
            margin-top: 70px;
          }
          #journeysSectionButton:hover {
            cursor: pointer;
          }
          #journeysSectionButton:active {
            transform: scaleX(0.97);
          }
        `}</style>
        <style jsx global>
          {`
            @font-face {
              font-family: Roboto-Regular;
              src: url("/fonts/Roboto-Regular.ttf");
            }
            @font-face {
              font-family: Roboto-Light;
              src: url("/fonts/Roboto-Light.ttf");
            }
          `}
        </style>
      </div>
    );
  }
}

export default JourneysSection;
