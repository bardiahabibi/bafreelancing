class Preloader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    window.addEventListener("load", this.loadEventhHandeler, true);
  }

  componentWillUnmount() {
    window.removeEventListener("load", this.loadEventhHandeler, true);
  }

  loadEventhHandeler = () => {
    const preload = document.querySelector(".preload");
    preload.classList.add("preloadFadeOut");
    setTimeout(() => {
      preload.classList.add("preloadRemove");
    }, 350);
  };

  render() {
    return (
      <div>
        <div className="preload">
          <img
            className="spacecraft"
            src="/components_assets/Preloader/spacecraft.png"
            alt="aircraft"
          />
          <img
            className="fire"
            src="/components_assets/Preloader/fire.png"
            alt="fire"
          />
          <img
            className="stone1"
            src="/components_assets/Preloader/stone.png"
            alt="stone1"
          />
          <img
            className="stone2"
            src="/components_assets/Preloader/stone.png"
            alt="stone2"
          />
          <img
            className="star1"
            src="/components_assets/Preloader/star.png"
            alt="star1"
          />
          <img
            className="star2"
            src="/components_assets/Preloader/star.png"
            alt="star2"
          />
          <img
            className="star3"
            src="/components_assets/Preloader/star.png"
            alt="star3"
          />
          <img
            className="star4"
            src="/components_assets/Preloader/star.png"
            alt="star4"
          />
          <div className="loadingText">Loading . . .</div>
        </div>
        <style jsx>{`
          .preload {
            position: fixed;
            top: 0px;
            width: 100%;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background: rgb(2, 0, 36);
            background: linear-gradient(
              180deg,
              rgba(2, 0, 36, 1) 0%,
              rgba(9, 9, 121, 1) 65%,
              rgba(5, 99, 180, 1) 87%,
              rgba(0, 212, 255, 1) 100%
            );
            transition: opacity 0.3s ease;
            z-index: 100;
          }

          .preloadFadeOut {
            opacity: 0;
          }

          .preloadRemove {
            display: none;
          }

          .star1,
          .star2,
          .star3,
          .star4 {
            position: absolute;
            height: 4vh;
          }

          .stone1,
          .stone2 {
            position: absolute;
            height: 45vh;
          }

          .spacecraft {
            height: 30vh;
            position: absolute;
            animation-name: spacecraftAnimation;
            animation-duration: 4s;
            animation-iteration-count: infinite;
            animation-timing-function: linear;
          }

          .fire {
            height: 5vh;
            position: absolute;
            top: 65vh;
            animation-name: fireAnimation;
            animation-duration: 4s;
            animation-iteration-count: infinite;
            animation-timing-function: linear;
            z-index: -5;
          }

          .star1 {
            top: 50vh;
            left: 8vw;
          }

          .star2 {
            top: 15vh;
            left: 85vw;
          }

          .star3 {
            top: 10vh;
            left: 15vw;
          }

          .star4 {
            top: 25vh;
            left: 55vw;
          }

          .stone1 {
            top: -50vh;
            left: 8vw;
            animation-name: stones;
            animation-duration: 4s;
            animation-iteration-count: infinite;
            animation-timing-function: linear;
          }

          .stone2 {
            top: -50vh;
            left: 75vw;
            animation-name: stones;
            animation-duration: 5s;
            animation-iteration-count: infinite;
            animation-timing-function: linear;
            animation-delay: 3s;
          }

          .loadingText {
            z-index: 5;
            font-size: 4vh;
            font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
            color: white;
            position: absolute;
            top: 75vh;
            animation-name: textAnimation;
            animation-duration: 1s;
            animation-iteration-count: infinite;
            animation-timing-function: linear;
          }

          @keyframes fireAnimation {
            0% {
              transform: translateX(0.5vw) scaleY(1);
            }
            25% {
              transform: scaleY(1.5);
            }
            50% {
              transform: translateX(-0.5vw) scaleY(1);
            }
            75% {
              transform: scaleY(1.5);
            }
            100% {
              transform: translateX(0.5vw) scaleY(1);
            }
          }

          @keyframes spacecraftAnimation {
            0% {
              transform: translateX(0.5vw);
            }
            50% {
              transform: translateX(-0.5vw);
            }
            100% {
              transform: translateX(0.5vw);
            }
          }

          @keyframes stones {
            0% {
              transform: translateY(0);
            }
            100% {
              transform: translateY(250vh);
            }
          }

          @keyframes textAnimation {
            0% {
              opacity: 1;
            }
            50% {
              opacity: 0.3;
            }
            100% {
              opacity: 1;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default Preloader;
