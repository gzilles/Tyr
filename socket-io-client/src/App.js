import React, { Component } from 'react';
import socketIOClient from "socket.io-client";

class App extends Component 
{
  constructor() 
  {
    super();
    this.state = 
    {
      response: false,
      endpoint: "http://127.0.0.1:4001",
      text: ""
    };
  }

componentDidMount() 
  { 
    const obj = this.state;
    const socket = socketIOClient(obj.endpoint);
    socket.on("connect", data => 
    {
      obj.text = data;
      if(obj.text === typeof String)
      {
        obj.response = true;
      }
      this.state = obj;
    }
    ,(err) => {console.log(err)});
  }
  
render() 
{
  console.log("React component!");
    const obj = this.state;
    return (
      <div style={{ textAlign: "center", 
                    border: "2px solid #E5D7FF" }}>
        {obj.response
          ? <p>
              {obj.text}
            </p>
          : <p>Loading...</p>}
      </div>
    );
  }
}
export default App;