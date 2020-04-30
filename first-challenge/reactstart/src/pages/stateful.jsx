import React, { Component } from "react";
import axios from "axios";
import Stateless from "../components/props";

class Stateful extends Component {
  state = {
    title: "this is ata batch 5",
    data: [],
  };
  getData = async () => {
    const response = await axios.get(
      "https://5e9921015eabe7001681c784.mockapi.io/mentees"
    );
    console.log("response", response.data);
    this.setState({ data: response.data });
  };
  componentDidMount() {
    console.log("mounted");
    this.getData();
  }
  render() {
    return (
      <div>
        {this.state.data.map((el, index) => (
          <div key={index}>
            <Stateless
              name={el.name}
              content={el.content}
              hashTag={el.hashTag}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Stateful;
