import React, { Component } from 'react'
import axios from "axios"
export default class App extends Component {
  constructor(props){
    super(props);
    console.log("");
  }

  componentDidMount(){
    console.log("component did mount");
    const getData=async()=>{
      const data=await axios.get("/api/project");
      console.log(data);
    }
    getData();
  }
  render() {
    return (
      <div>App</div>
    )
  }
}
