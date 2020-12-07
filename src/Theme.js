import { Component } from 'react';
import ThemeItems from './ThemeItems';

export default class Theme extends Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: true
    };
  }

  componentDidMount() {
    const theme = JSON.parse(localStorage.getItem("theme"));
    this.setState({ theme });
  }

  componentDidUpdate() {
    localStorage.setItem("theme", this.state.theme);
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
        backgroundColor: "blue",
      }
    }

    return (
      <div style={bgStyle}>
        <ThemeItems theme={theme} handleChange={this.toggleTheme} />
      </div>
    );
  }
}
