import React from "react";
import { css, keyframes } from "@emotion/react";

const caret = keyframes`
50% {
  color: transparent;
}
`;

class Typing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stoptime: 1000,
      forwardtime: 100,
      backwardtime: 30,
      forward: true,
      tempText: "",
    };
  }

  typingFunc() {
    const temp = this.state.tempText;
    const forward = this.state.forward;
    if (temp.length === 0) {
      clearTimeout(this.intervalFunc);
      this.intervalFunc = setTimeout(() => {
        this.setState({
          forward: true,
          tempText: this.props.text.substring(0, temp.length + 1),
        });
        this.typingFunc();
      }, this.state.stoptime);
    } else if (temp.length === this.props.text.length) {
      clearTimeout(this.intervalFunc);
      this.intervalFunc = setTimeout(() => {
        this.setState({
          forward: false,
          tempText: this.props.text.substring(0, temp.length - 1),
        });
        this.typingFunc();
      }, this.state.stoptime);
    } else if (forward) {
      this.setState({
        tempText: this.props.text.substring(0, temp.length + 1),
      });
      clearTimeout(this.intervalFunc);
      this.intervalFunc = setTimeout(
        this.typingFunc.bind(this),
        this.state.forwardtime
      );
    } else {
      this.setState({
        tempText: this.props.text.substring(0, temp.length - 1),
      });
      clearTimeout(this.intervalFunc);
      this.intervalFunc = setTimeout(
        this.typingFunc.bind(this),
        this.state.backwardtime
      );
    }
  }

  componentDidMount() {
    this.intervalFunc = setTimeout(
      this.typingFunc.bind(this),
      this.state.forwardtime
    );
  }

  componentWillUnmount() {
    clearTimeout(this.intervalFunc);
  }

  render() {
    return (
      <div
        css={css`
          margin: 0;
        `}
      >
        <span
          css={css`
            font-size: 22px;
            margin: 0;
          `}
        >
          {this.state.tempText}
        </span>
        <span
          css={css`
            font-size: 22px;
            margin: 0;
            animation: ${caret} 1s steps(1) infinite;
          `}
        >
          |
        </span>
      </div>
    );
  }
}

export default Typing;
