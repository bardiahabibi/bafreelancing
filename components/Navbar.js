import Link from "next/link";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  showForm = () => {
    this.props.showModal();
  };

  render() {
    return (
      <div>
        <div className="navbarContainer">
          <div id="baLogo"></div>
          <div id="navbar">
            <div className="navbarItem">
              <Link href="/">
                <a
                  style={{
                    color: this.props.page == "Home" ? "white" : "inherit",
                    textDecoration: "none",
                  }}
                >
                  Home
                </a>
              </Link>
            </div>
            <div className="navbarItem">
              <Link href="/Journeys">
                <a
                  style={{
                    color: this.props.page == "Journeys" ? "white" : "inherit",
                    textDecoration: "none",
                  }}
                >
                  Journeys
                </a>
              </Link>
            </div>
            <div className="navbarItem" onClick={this.showForm}>
              Hire
            </div>
          </div>
          {/* <div id="communicationsContainer">
            <div id="devLogo">
              <a href="https://dev.to/bardiahabibi" target="_blank">
                <div style={{ height: "100%", weight: "100%" }}></div>
              </a>
            </div>

            <div id="githubLogo">
              <a href="https://github.com/bardiahabibi" target="_blank">
                <div style={{ height: "100%", weight: "100%" }}></div>
              </a>
            </div>
            <div id="linkedinLogo">
              <a
                href="https://linkedin.com/in/bardia-habibi-freelance"
                target="_blank"
              >
                <div style={{ height: "100%", weight: "100%" }}></div>
              </a>
            </div>
          </div> */}
        </div>
        <style jsx>
          {`
            .navbarContainer {
              width: 100%;
              height: 55px;
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
              font-size: 16px;
              color: #e8e8e8;
              font-family: Montserrat;
              font-weight: 500;
              transition: 0.2s ease-in-out;
            }
            .navbarItem :hover {
              cursor: pointer;
              color: white;
              transition: 0.2s ease-in-out;
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
              box-sizing: border-box;
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

            @media only screen and (max-width: 820px) {
              .navbarContainer {
                grid-template-columns: 150px 1fr;
                grid-template-areas: "baLogo navbar ";
              }
              #communicationsContainer {
                display: none;
              }
            }

            @media only screen and (max-width: 600px) {
              #navbar {
                padding-left: 10px;
                padding-right: 20px;
                align-items: center;
                justify-content: center;
              }
              .navbarItem {
                margin-left: 8%;
                font-size: 16px;
                font-family: Montserrat;
              }
              .navbarContainer {
                grid-template-columns: 130px 1fr;
                grid-template-areas: "baLogo navbar ";
              }
              #communicationsContainer {
                display: none;
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

export default Navbar;
