class PostPageBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div id="postPageBodyContainer">
          <p>
            Typography starts by setting a foundation of font families and
            weights along with fallbacks. It then explores how to build
            hierarchy using size, color, additional details like line-height,
            and layering responsiveness. Those models are then applied to
            components in a system’s library (like Article and Header) as well
            as custom components made by other teams.
          </p>
          <p>
            using size, color, additional details like line-height, and layering
            responsiveness. Those models are then applied to components in a
            system’s library (like Article and Header) as well as custom
            components made by other teams.
          </p>
        </div>
        <style jsx>
          {`
            #postPageBodyContainer {
              font-family: Roboto-Regular;
              font-size: 21px;
              line-height: 29px;
              color: #535353;
              padding-left: 260px;
              padding-right: 260px;
            }
            #postPageBodyContainer p {
              margin-bottom: 30px;
            }
          `}
        </style>
        <style jsx global>
          {`
            @font-face {
              font-family: Roboto-Regular;
              src: url("./fonts/Roboto-Regular.ttf");
            }
            @font-face {
              font-family: Roboto-Light;
              src: url("./fonts/Roboto-Light.ttf");
            }
          `}
        </style>
      </div>
    );
  }
}

export default PostPageBody;
