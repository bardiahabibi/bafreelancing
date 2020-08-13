import HireAnimation from "../public/components_assets/HireSectionAssets/HireAnimation";

class HireSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div id="hireSectionContainer">
          <div id="hireSectionHeader">want to hire me?</div>
          <div id="hireSectionAnimationContainer">
            <HireAnimation />
          </div>
        </div>
        <style jsx>
          {`
            #hireSectionContainer {
              width: 100%;
              height: 110vh;
            }
            #hireSectionHeader {
              text-align: center;
              font-family: Roboto-Regular;
              font-size: 53px;
              color: #535353;
              margin-top: 50px;
            }
            #hireSectionAnimationContainer {
              width: 100%;
              height: 90vh;
              display: flex;
              justify-content: center;
              align-items: center;
            }
          `}
        </style>
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

export default HireSection;
