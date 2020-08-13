class PostPageHeaderImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div id="postPageHeaderImage"></div>
        <style jsx>
          {`
            #postPageHeaderImage {
              width: 100%;
              height: 60vh;
              background-image: url(${this.props.Image});
              background-repeat: no-repeat;
              background-size: cover;
              background-position: center center;
            }
          `}
        </style>
      </div>
    );
  }
}

export default PostPageHeaderImage;
