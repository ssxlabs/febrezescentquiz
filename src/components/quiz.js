import React, {Component} from 'react';


export default class Quiz extends Component {

    constructor(props) {
      super(props);
      this.state = { step: 0, a: 0, b:0, c:0, d:0}
    }

componentDidMount(){
   window.addEventListener('click', this.setGlobalResetTimer);
}

answerSelected = ( answer) => {
  console.log('answer: ' + answer)
  this.setState({ step: this.state.step + 1, [answer]: this.state[answer] + 1})
}

formSelected = (form) => {
  this.setState({ step: this.state.step + 1, form: form})
}

setGlobalResetTimer = () =>{

  let {globalResetTimer} = this.state
  if ( globalResetTimer ){
    console.log('clear timer')
    clearTimeout(globalResetTimer)
  }

  let tempglobalResetTimer = window.setTimeout( ()=>  {
    console.log('timer expired: reseting page!')
    this.setState({step: 0,  a: 0, b:0, c:0, d:0})
  }, 30000 )

  this.setState({ globalResetTimer: tempglobalResetTimer})

}


render(){

  console.log(this.state)

    let questionText = 'Question-' + this.state.step.toString() + '_Text.png'
    let questionImage = 'Question-' + this.state.step.toString() + '_Image.png'

    let page = (
      <div className='questionScreen'>

        <div className='questionText' >
          <img src={'/img/02_Questions/' + questionText} />
        </div>

        <div className='questionBox' style={{background: 'url(/img/02_Questions/' + questionImage + ')', backgroundRepeat: 'no-repeat'}} >
          <div style={{flex: '1 1 50%'}} onClick={ ()=> this.answerSelected( 'a') } >
          </div>

          <div style={{flex: '1 1 50%'}} onClick={ ()=>this.answerSelected( 'b') } >

          </div>
          <div style={{flex: '1 1 50%'}} onClick={ ()=>this.answerSelected( 'c') } >
          </div>

          <div style={{flex: '1 1 50%'}} onClick={ ()=> this.answerSelected( 'd') } >

          </div>
        </div>
      </div>
    )

    if (this.state.step === 0 ){
      return(
      <div className='startScreen' onClick={ ()=> this.setState({step:1})} />
      );

    } else if (this.state.step === 7 ){


      let letterWinner
      let {a, b, c, d} = this.state


          if (a > b && a > c && a > d) {
            letterWinner = 'a'
          } else if (b > a && b > c && b > d) {
            letterWinner = 'b'
          } else if (c > b && c > a && c > d) {
            letterWinner = 'c'
          } else if (d > b && d > c && d > a) {
            letterWinner = 'd'
          } else {
            letterWinner = 'd'
          }

      console.log(letterWinner)

      let finishText =  letterWinner + '_text.png'
      let finishImage = letterWinner + '_image.png'

      return(
        <div className='finishScreen' onClick={ ()=> this.setState({step: 8})} >

          <div className='finishText' >
            <img src={'/img/03_Results/' + finishText} />
          </div>

          <div className='questionBox' style={{background: 'url(/img/03_Results/' + finishImage + ')', backgroundRepeat: 'no-repeat'}} />

          <div style={{position: 'absolute', bottom: '20px', justifyContent: 'center', display: 'flex', flex: 1, width: '100%'}} >
            <img  src={'/img/03_Results/NEXT_Button.png'} />
          </div>
        </div>
      );
    }  else if (this.state.step === 8 ){


      let letterWinner
      let {a, b, c, d} = this.state

          if (a > b && a > c && a > d) {
            letterWinner = 'a'
          } else if (b > a && b > c && b > d) {
            letterWinner = 'b'
          } else if (c > b && c > a && c > d) {
            letterWinner = 'c'
          } else if (d > b && d > c && d > a) {
            letterWinner = 'd'
          } else {
            letterWinner = 'd'
          }

      let finishText =  letterWinner + '_text.png'
      let finishOptions = letterWinner + '_options.png'

      return(
        <div className='finishScreen' onClick={ ()=> this.setState({step: 9})} >

          <div className='finishText' >
            <img src={'/img/03_Results/' + finishText} />
          </div>

          <div className='questionBox' style={{background: 'url(/img/03_Results/' + finishOptions + ')', backgroundRepeat: 'no-repeat'}} />

          <div style={{position: 'absolute', bottom: '20px', justifyContent: 'center', display: 'flex', flex: 1, width: '100%'}} >
            <img  src={'/img/03_Results/NEXT_Button.png'} />
          </div>

        </div>
      );
    } else if (this.state.step === 9 ){


      return(
        <div className='finishScreen' onClick={ ()=> this.setState({step: 0, a: 0, b: 0, c:0, d:0})} >

          <div className='finishText' >
            <img src='/img/04_FinalFrame/04-Ending-Frame_Text.png' />
          </div>

          <div className='questionBox' style={{background: 'url(/img/04_FinalFrame/04-Ending-Frame_Image.png)', backgroundRepeat: 'no-repeat'}} />

          <div style={{position: 'absolute', bottom: '20px', justifyContent: 'center', display: 'flex', flex: 1, width: '100%'}} >
            <img  src={'/img/03_Results/START-OVER_Button.png'} />
          </div>

        </div>
      );
    } else {
      return(
      <div>
        {page}
      </div>
      );
    }
  }
}
