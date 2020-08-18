import Link from "next/link";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="navbarContainer">
          <div id="baLogo"></div>
          <div id="navbar">
            <div className="navbarItem">
              <Link href="/">
                <a style={{ color: "inherit", textDecoration: "none" }}>Home</a>
              </Link>
            </div>
            <div className="navbarItem">
              <Link href="/Journeys">
                <a style={{ color: "inherit", textDecoration: "none" }}>
                  Journeys
                </a>
              </Link>
            </div>
            <div className="navbarItem">Hire</div>
          </div>
          <div id="communicationsContainer">
            <div id="devLogo"></div>
            <div id="githubLogo"></div>
            <div id="linkedinLogo"></div>
          </div>
        </div>
        <style jsx>
          {`
            .navbarContainer {
              width: 100%;
              height: 107px;
              background-color: #00345f;
              display: grid;
              grid-template-columns: 150px 1fr 180px;
              grid-template-rows: 100%;
              grid-template-areas: "baLogo navbar communicationLogos";
            }
            #baLogo {
              grid-area: baLogo;
              background-image: url("/components_assets/NavbarAssets/Logo.png");
              background-repeat: no-repeat;
              background-size: contain;
            }
            #navbar {
              grid-area: navbar;
              display: flex;
              padding-left: 20px;
              align-items: center;
              justify-content: center;
            }
            .navbarItem {
              margin-left: 12%;
              font-size: 25px;
              color: #d9d9d9;
              font-family: Roboto-Regular;
            }
            #communicationsContainer {
              grid-area: communicationLogos;
              margin-top: 27px;
              margin-bottom: 27px;
              margin-left: 33px;
              margin-right: 33px;
              border: solid 2px #d9d9d9;
              display: grid;
              grid-template-columns: 1fr 1fr 1fr;
              grid-template-rows: 100%;
              grid-template-areas: "devLogo githubLogo linkedinLogo";
            }
            #devLogo {
              grid-area: devLogo;
              background-image: url("/components_assets/NavbarAssets/dev-logo.png");
              background-repeat: no-repeat;
              background-size: contain;
              background-position: center;
              margin-top: 10px;
              margin-bottom: 10px;
              margin-left: 6px;
              margin-right: 2px;
            }
            #githubLogo {
              grid-area: githubLogo;
              background-image: url("/components_assets/NavbarAssets/github-logo.png");
              background-repeat: no-repeat;
              background-size: contain;
              background-position: center;
              margin-top: 12px;
              margin-bottom: 13px;
              margin-left: 7px;
              margin-right: 6px;
            }
            #linkedinLogo {
              grid-area: linkedinLogo;
              background-image: url("/components_assets/NavbarAssets/linkedin-logo.png");
              background-repeat: no-repeat;
              background-size: contain;
              background-position: center;
              margin-top: 10px;
              margin-bottom: 12px;
              margin-left: 7px;
              margin-right: 11px;
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

export default Navbar;
