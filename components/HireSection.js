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
            <HireAnimation showModal={this.props.showModal} />
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
              transition: 0.3s ease-in-out;
            }
            #hireSectionAnimationContainer {
              width: 100%;
              height: 90vh;
              display: flex;
              justify-content: center;
              align-items: center;
            }

            @media only screen and (max-width: 800px) {
              #hireSectionHeader {
                font-size: 40px;
                margin-top: 50px;
              }
            }
            @media only screen and (max-width: 650px) {
              #hireSectionHeader {
                font-size: 30px;
                margin-top: 50px;
              }
            }
            @media only screen and (max-width: 400px) {
              #hireSectionHeader {
                font-size: 24px;
                margin-top: 50px;
              }
            }
          `}
        </style>
        <style jsx global>
          {`
            @font-face {
              font-family: Roboto-Regular;
              src: url("/fonts/Roboto-Regular.ttf");
            }
          `}
        </style>
      </div>
    );
  }
}

export default HireSection;
