class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div id="landingContainer">
          <div id="landingHeader">Welcome to BaFreeLancing</div>
          <div id="landingText">
            I am Bardia and Here I manage freelancing part of my life also share
            some experiences
          </div>
        </div>
        <style jsx>
          {`
            #landingContainer {
              width: 100%;
              height: calc(100vh - 107px);
              background-color: #01294a;
              display: grid;
              grid-template-columns: 100%;
              grid-template-rows: 50% 1fr;
              grid-template-areas:
                "landingHeader"
                "landingText";
            }
            #landingHeader {
              grid-area: landingHeader;
              font-family: Roboto-Regular;
              font-size: 75px;
              color: #d9d9d9;
              text-align: center;
              align-self: center;
            }
            #landingText {
              grid-area: landingText;
              font-family: Roboto-Light;
              font-size: 53px;
              color: #d9d9d9;
              text-align: center;
              padding-left: 50px;
              padding-right: 50px;
              line-height: 70px;
            }

            @media only screen and (max-width: 950px) {
              #landingHeader {
                font-size: 60px;
              }
              #landingText {
                font-size: 40px;
                line-height: 60px;
              }
            }

            @media only screen and (max-width: 800px) {
              #landingHeader {
                font-size: 50px;
              }
              #landingText {
                font-size: 30px;
                line-height: 50px;
              }
            }

            @media only screen and (max-width: 650px) {
              #landingHeader {
                font-size: 40px;
              }
              #landingText {
                font-size: 22px;
                line-height: 40px;
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

export default Landing;
