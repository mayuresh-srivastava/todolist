import { Component } from "react";
import ThemeItems from "./ThemeItems";

export default class Theme extends Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: false
    };
  }

  componentDidMount() {
    const theme = JSON.parse(localStorage.getItem("theme"));
    if (theme) {
      this.setState({ theme });
    } else {
      localStorage.setItem("theme", JSON.stringify(this.state.theme));
    }
  }

  componentDidUpdate() {
    localStorage.setItem("theme", JSON.stringify(this.state.theme));
  }

  toggleTheme = () => {
    this.setState({
      theme: !this.state.theme
    });
  }

  render() {
    const theme = this.state.theme;
    let bgStyle;

    if(this.state.theme === true) {
      bgStyle = {
        backgroundColor: "#3B3B3B",
      }
    } else if(this.state.theme === false){
      bgStyle={
        backgroundColor: "white",
      }
    }

    return (
      <div style={bgStyle}>
        <ThemeItems theme={theme} handleChange={this.toggleTheme} />
      </div>
    );
  }
}
