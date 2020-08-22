class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div id="footerContainer">
          <div id="footerLogosContainer">
            <div id="footerGithub">
              <a href="https://github.com/bardiahabibi" target="_blank">
                <div style={{ height: "100%", weight: "100%" }}></div>
              </a>
            </div>
            <div id="footerDev">
              <a href="https://dev.to/bardiahabibi" target="_blank">
                <div style={{ height: "100%", weight: "100%" }}></div>
              </a>
            </div>
            <div id="footerLinkedin">
              <a
                href="https://linkedin.com/in/bardia-habibi-freelance"
                target="_blank"
              >
                <div style={{ height: "100%", weight: "100%" }}></div>
              </a>
            </div>
          </div>
          <div id="footerEmail">bardiafreelancing(at)gmail.com</div>
          <div id="footerCopyRight">
            Copyright &#169; 2020 bafreelancing.com. All Rights Reserved
          </div>
        </div>
        <style jsx>{`
          #footerContainer {
            width: 100%;
            height: 230px;
            background-color: #01294a;
          }
          #footerLogosContainer {
            width: 100%;
            height: 90px;
            display: flex;
            justify-content: center;
            align-items: flex-end;
          }
          #footerGithub {
            width: 60px;
            height: 60px;
            background-image: url("/components_assets/FooterAssets/github-logo.png");
            background-repeat: no-repeat;
            background-size: contain;
          }
          #footerDev {
            width: 70px;
            height: 70px;
            background-image: url("/components_assets/FooterAssets/dev-logo.png");
            background-repeat: no-repeat;
            background-size: contain;
            background-position: bottom center;
            margin-left: 60px;
          }
          #footerLinkedin {
            width: 40px;
            height: 40px;
            background-image: url("/components_assets/FooterAssets/linkedin-logo.png");
            background-repeat: no-repeat;
            background-size: contain;
            margin-left: 60px;
          }
          #footerEmail {
            width: 100%;
            text-align: center;
            font-family: Roboto-Regular;
            font-size: 35px;
            color: #ffffff;
            margin-top: 30px;
          }
          #footerCopyRight {
            width: 100%;
            text-align: center;
            font-family: Roboto-Regular;
            font-size: 15px;
            color: #ffffff;
            margin-top: 30px;
          }

          @media only screen and (max-width: 600px) {
            #footerEmail {
              font-family: Roboto-Regular;
              font-size: 22px;
              margin-top: 30px;
            }
            #footerCopyRight {
              font-size: 15px;
              margin-top: 30px;
            }
            #footerDev {
              margin-left: 40px;
            }
            #footerLinkedin {
              margin-left: 40px;
            }
          }
        `}</style>
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

export default Footer;
