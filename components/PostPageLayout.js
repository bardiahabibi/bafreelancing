class PostPageLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        {this.props.children}
        <style jsx global>
          {`
            #postPageBodyContainer {
              font-family: Montserrat;
              font-size: 16px;
              line-height: 24px;
              color: #303030;
              padding-left: 23%;
              padding-right: 23%;
              box-sizing: border-box;
            }
            #postPageBodyContainer p {
              margin-bottom: 30px;
            }
            #postPageBodyContainer .images {
              text-align: center;
              margin-top: 65px;
              margin-bottom: 65px;
            }
            #postPageBodyContainer a {
              text-decoration: underline dotted;
            }
            #postPageTitleContainer {
              with: 100%;
              padding-left: 14%;
              padding-right: 14%;
              text-align: center;
              padding-top: 0px;
              margin-bottom: 80px;
              box-sizing: border-box;
            }
            #postPageTitleContainer h1 {
              font-family: FiraSans-Medium;
              font-size: 32px;
              color: #303030;
            }
            #postPageHeaderImage {
              width: 60%;
              height: 35vw;
              margin-left: 20%;
              margin-top: 5vh;
              background-repeat: no-repeat;
              background-size: contain;
              background-position: center center;
            }
            @font-face {
              font-family: Roboto-Regular;
              src: url("/fonts/Roboto-Regular.ttf");
            }
            @font-face {
              font-family: Roboto-Light;
              src: url("/fonts/Roboto-Light.ttf");
            }
            @font-face {
              font-family: FiraSans-Medium;
              src: url("/fonts/FiraSans-Medium.ttf");
            }

            @media only screen and (max-width: 820px) {
              #postPageHeaderImage {
                width: 70%;
                height: 40vw;
                margin-left: 15%;
                margin-top: 5vh;
                background-repeat: no-repeat;
                background-size: contain;
                background-position: center center;
              }
              #postPageBodyContainer {
                font-size: 16px;
                line-height: 24px;
                padding-left: 13%;
                padding-right: 13%;
              }
              #postPageTitleContainer {
                padding-left: 10%;
                padding-right: 10%;
                margin-bottom: 40px;
              }
              #postPageTitleContainer h1 {
                font-size: 32px;
              }
            }

            @media only screen and (max-width: 450px) {
              #postPageHeaderImage {
                width: 90%;
                height: 50vw;
                margin-left: 5%;
                margin-top: 5vh;
                background-repeat: no-repeat;
                background-size: contain;
                background-position: center center;
              }
              #postPageBodyContainer {
                font-size: 16px;
                line-height: 24px;
                padding-left: 5%;
                padding-right: 5%;
              }
              #postPageTitleContainer {
                text-align: left;
                padding-left: 5%;
                padding-right: 5%;
                margin-bottom: 25px;
              }
              #postPageTitleContainer h1 {
                font-size: 24px;
              }
              #postPageBodyContainer p {
                margin-bottom: 20px;
              }
            }
          `}
        </style>
      </div>
    );
  }
}

export default PostPageLayout;
