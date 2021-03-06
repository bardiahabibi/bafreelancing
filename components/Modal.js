class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  hideForm = () => {
    this.props.hideModal();
  };

  render() {
    return (
      <div>
        <div id="modalContainer">
          <div
            id="modal"
            style={{
              transform: this.props.show ? "scale(1)" : "scale(0)",
              opacity: this.props.show ? 1 : 0,
            }}
          >
            {this.props.children}
          </div>
          <div
            id="modalBackdrop"
            style={{
              display: this.props.show ? "block" : "none",
            }}
            onClick={this.hideForm}
          ></div>
        </div>
        <style jsx>
          {`
            #modalBackdrop {
              width: 100vw;
              height: 100vh;
              position: fixed;
              top: 0px;
              left: 0px;
              box-sizing: border-box;
              z-index: 80;
              background-color: rgb(0, 0, 0);
              opacity: ${this.props.show ? 0.5 : 0};
            }
            #modal {
              position: fixed;
              box-sizing: border-box;
              width: 60vw;
              height: 97vh;
              z-index: 100;
              left: 20vw;
              top: 2vh;
              background-color: white;
              border-radius: 5px;
              transition: all 0.3s ease-out;
            }

            @media only screen and (max-width: 650px) {
              #modal {
                width: 90vw;
                height: 85vh;
                left: 5vw;
              }
            }
          `}
        </style>
      </div>
    );
  }
}

export default Modal;
