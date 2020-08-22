import emailjs from "emailjs-com";

class HireForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: "",
      user_mail: "",
      user_message: "",
      user_allottedtime: 0,
      messageSent: "NO",
    };
  }

  nameChange = (event) => {
    this.setState({
      user_name: event.target.value,
    });
  };

  emailChange = (event) => {
    this.setState({
      user_mail: event.target.value,
    });
  };

  messageChange = (event) => {
    this.setState({
      user_message: event.target.value,
    });
  };

  allottedtimeChange = (event) => {
    this.setState({
      user_allottedtime: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const templateId = "bafreelancing_hire";
    this.sendHireForm(templateId, {
      user_name: this.state.user_name,
      user_mail: this.state.user_mail,
      user_message: this.state.user_message,
      user_allottedtime: this.state.user_allottedtime,
    });
  };

  sendHireForm = (templateId, variables) => {
    emailjs
      .send(
        "bafreelancing_gmail",
        templateId,
        variables,
        process.env.EMAILJS_KEY
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          this.setState({ messageSent: "SUCCESS" });
        },
        (err) => {
          console.log("FAILED...", err);
          this.setState({ messageSent: "FAILED" });
        }
      );
  };

  render() {
    if (this.state.messageSent == "NO") {
      return (
        <div>
          <div id="form">
            <form className="hiringForm" onSubmit={this.handleSubmit} action="">
              <div id="formContainer">
                <div id="fromNameContainer">
                  <label className="labels" htmlFor="name">
                    name
                  </label>
                  <br />
                  <input
                    className="inputText"
                    type="text"
                    name="user_name"
                    id="name"
                    required
                    onChange={this.nameChange}
                  />
                </div>
                <div id="formEmailContainer">
                  <label className="labels" htmlFor="email">
                    Email
                  </label>
                  <br />
                  <input
                    className="inputText"
                    type="text"
                    name="user_mail"
                    id="email"
                    required
                    onChange={this.emailChange}
                  />
                </div>
                <div id="formMessageContainer">
                  <label className="labels" htmlFor="message">
                    brief of work
                  </label>
                  <br />
                  <textarea
                    className="messageText"
                    name="user_message"
                    id="message"
                    required
                    cols="50"
                    rows="8"
                    onChange={this.messageChange}
                  ></textarea>
                </div>
                <div id="formAllottedTimeContainer">
                  <label className="labels" htmlFor="allottedtime">
                    allotted time (days)
                  </label>
                  <br />
                  <input
                    className="inputText"
                    type="number"
                    name="user_allottedtime"
                    id="allottedtime"
                    min="1"
                    max="210"
                    required
                    onChange={this.allottedtimeChange}
                  />
                </div>
                <div id="formButtonContainer">
                  <input id="formButton" type="submit" value="send" />
                </div>
              </div>
            </form>
          </div>
          <style jsx>
            {`
              #formContainer {
                width: 60vw;
                height: 97vh;
                box-shadow: 1px 3px 6px rgba(0, 0, 0, 0.16);
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-template-rows: 25% 50% 1fr;
                grid-template-areas:
                  "fromNameContainer formEmailContainer"
                  "formMessageContainer formMessageContainer"
                  "formAllottedTimeContainer formButtonContainer";
                box-sizing: border-box;
              }

              #formContainer .labels {
                font-family: Roboto-Light;
                font-size: 27px;
                color: #535353;
              }

              #formContainer .inputText {
                height: 40px;
                font-family: Roboto-Regular;
                font-size: 23px;
                color: #535353;
                border: solid 2px #7fa7ce;
                border-radius: 10px;
                margin-top: 18px;
                padding-left: 10px;
                outline: none;
                transition: 0.2s ease-in-out;
              }

              #formContainer .inputText :focus {
                border: solid 2px #2d8fef;
                transition: 0.2s ease-in-out;
              }

              #formContainer .messageText {
                width: 91%;
                font-family: Roboto-Regular;
                font-size: 23px;
                color: #535353;
                border: solid 2px #7fa7ce;
                border-radius: 10px;
                margin-top: 18px;
                padding-left: 10px;
                outline: none;
                resize: none;
                transition: 0.2s ease-in-out;
              }

              #formContainer .messageText :focus {
                border: solid 2px #2d8fef;
                transition: 0.2s ease-in-out;
              }

              #formButton {
                width: 100px;
                height: 50px;
                border: none;
                border-radius: 10px;
                outline: none;
                text-decoration: none;
                background-color: #30c872;
                color: #fcfcfc;
                font-family: Roboto-Regular;
                font-size: 25px;
                color: #f1f1f1;
              }
              #formButton :hover {
                cursor: pointer;
              }
              #formButton :active {
                transform: scale(0.97);
              }

              #fromNameContainer {
                grid-area: fromNameContainer;
                padding-top: 25px;
                padding-left: 25px;
              }
              #formEmailContainer {
                grid-area: formEmailContainer;
                padding-top: 25px;
                padding-left: 25px;
              }
              #formMessageContainer {
                grid-area: formMessageContainer;
                padding-top: 25px;
                padding-left: 25px;
              }
              #formAllottedTimeContainer {
                grid-area: formAllottedTimeContainer;
                padding-top: 25px;
                padding-left: 25px;
              }
              #formButtonContainer {
                grid-area: formButtonContainer;
                padding-right: 30px;
                padding-bottom: 30px;
                display: flex;
                justify-content: flex-end;
                align-items: flex-end;
              }

              @media only screen and (max-width: 1050px) {
                #formContainer .labels {
                  font-size: 23px;
                }
                #formContainer .inputText {
                  width: 85%;
                  height: 35px;
                  font-size: 18px;
                  margin-top: 18px;
                  padding-left: 10px;
                }
                #formContainer .messageText {
                  width: 91%;
                  font-size: 20px;
                  margin-top: 18px;
                  padding-left: 10px;
                }
                #formButton {
                  width: 90px;
                  height: 45px;
                  font-size: 22px;
                }
              }

              @media only screen and (max-width: 730px) {
                #formContainer .labels {
                  font-size: 18px;
                }
                #formContainer .inputText {
                  width: 85%;
                  height: 35px;
                  font-size: 16px;
                  margin-top: 18px;
                  padding-left: 10px;
                }
                #formContainer .messageText {
                  width: 91%;
                  font-size: 16px;
                  margin-top: 18px;
                  padding-left: 10px;
                }
                #formButton {
                  width: 80px;
                  height: 40px;
                  font-size: 18px;
                }
              }

              @media only screen and (max-width: 650px) {
                #formContainer .labels {
                  font-size: 17px;
                }
                #formContainer .inputText {
                  width: 85%;
                  height: 35px;
                  font-size: 16px;
                  margin-top: 18px;
                  padding-left: 10px;
                }
                #formContainer .messageText {
                  width: 91%;
                  font-size: 16px;
                  margin-top: 18px;
                  padding-left: 10px;
                }
                #formButton {
                  width: 80px;
                  height: 40px;
                  font-size: 18px;
                }
                #formContainer {
                  width: 90vw;
                  height: 85vh;
                }
                #fromNameContainer {
                  grid-area: fromNameContainer;
                  padding-top: 25px;
                  padding-left: 10px;
                }
                #formEmailContainer {
                  grid-area: formEmailContainer;
                  padding-top: 25px;
                  padding-left: 10px;
                }
                #formMessageContainer {
                  grid-area: formMessageContainer;
                  padding-top: 25px;
                  padding-left: 10px;
                }
                #formAllottedTimeContainer {
                  grid-area: formAllottedTimeContainer;
                  padding-top: 10%;
                  padding-left: 10px;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                }
                #formAllottedTimeContainer .inputText {
                  margin-top: 0px;
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
    } else if (this.state.messageSent == "SUCCESS") {
      return (
        <div>
          <div id="successContainer">
            <div>Thanks!</div>
            <div>I will contact as soon as possible</div>
          </div>
          <style jsx>
            {`
              #successContainer {
                width: 60vw;
                height: 97vh;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-align: center;
                font-family: Roboto-Light;
                font-size: 45px;
                color: #535353;
                line-height: 100px;
              }
              @media only screen and (max-width: 650px) {
                #successContainer {
                  width: 100%;
                  height: 100%;
                  font-size: 25px;
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
    } else if (this.state.messageSent == "FAILED") {
      return (
        <div>
          <div id="successContainer">
            <div>Sorry!</div>
            <div>Failed to send message</div>
          </div>
          <style jsx>
            {`
              #successContainer {
                width: 60vw;
                height: 97vh;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-align: center;
                font-family: Roboto-Light;
                font-size: 45px;
                color: #535353;
                line-height: 100px;
              }
              @media only screen and (max-width: 650px) {
                #successContainer {
                  width: 100%;
                  height: 100%;
                  font-size: 25px;
                }
              }
            `}
          </style>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default HireForm;
