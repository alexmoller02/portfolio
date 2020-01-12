import React from 'react';
import './global.css';

export default class textBox extends React.Component {

constructor(props){
  super(props)
  this.state = {input:"", chatlog:[{
    message:("Hi, how can i help you?"), chatBot:true
  }]}
}





  componentDidMount() {
   const url = "/hello2";
   const response = fetch(url);
  }



  async enter(enter) {

   if (enter.key==="Enter"){
  await    this.callChatBot()
}
}


  async callChatBot() {

    this.state.chatlog.push({
      message:this.state.input,
      chatBot:false
    })

    const url = "/hello?textMessage="+encodeURIComponent(this.state.input);
    const response = await fetch(url);

    const data = await response.json();

    await this.setState({ bot: data.text,input: '', chatlog:[...this.state.chatlog,{
      message:data.text,
      chatBot:true
    }]});

}
  render() {

console.log(this.state.chatlog)
    return (
  <div className="chatInterFace">

        <div className="chatbox">
          <div className="botHeader">
            <p>Chatbot</p>
          </div>
            {this.state.chatlog.map((element,index)=>{

              return(<div>
                {element.chatBot?
                <div>
                  <div className="BotType">
                  Chatbot
                  </div>

                  <div>
                    {element.message}
                  </div>
                </div>

                :
                <div>
                  <div className="UserType">
                  You
                  </div>

                  <div>
                    {element.message}
                  </div>
                </div>

              }


        </div>      )
            })}




        </div>

        <input class="msgSend" type="text" title="Chatbot" onKeyPress={(enter)=>this.enter(enter)} onChange={(event)=>this.setState({...this.state,input:event.target.value})}value={this.state.input} />
        <button className="but" onClick={()=>this.callChatBot()}>
        {"Send"}

        </button>



  </div>
    );

  }
}
