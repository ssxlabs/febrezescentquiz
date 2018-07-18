import React, {Component} from 'react';
import { CSSTransitionGroup } from 'react-transition-group' // ES6

export default class Quiz extends Component {

    constructor(props) {
      super(props);
      this.state = { step: 0, a: 0, b:0, c:0, d:0}
    }

componentDidMount(){
   window.addEventListener('click', this.setGlobalResetTimer);
}

answerSelected = ( answer) => {

  let letterWinner
  let {a, b, c, d} = this.state

  if (answer === 'a'){
    a++
  } else if (answer === 'b'){
    b++
  } else if (answer === 'c'){
    c++
  } else {
    d++
  }

  if (this.state.step === 6){

        if (a > b && a > c && a > d) {
          letterWinner = 'a'
        } else if (b > a && b > c && b > d) {
          letterWinner = 'b'
        } else if (c > b && c > a && c > d) {
          letterWinner = 'c'
        } else if (d > b && d > c && d > a) {
          letterWinner = 'd'
        } else {
          letterWinner = this.pickRandomLetter()
        }

    this.setState({ step: 7, letterWinner: letterWinner, [answer]: this.state[answer] + 1})
  } else {
    //[answer] = this.state[answer] - 1
    this.setState({ step: this.state.step + 1, [answer]: this.state[answer] + 1})
  }

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
    this.setState({step: 0,  a: 0, b:0, c:0, d:0, letterWinner: null})
  }, 30000 )

  this.setState({ globalResetTimer: tempglobalResetTimer})

}


pickRandomLetter = () =>{

  if (this.state.randomLetter){
    return this.state.randomLetter
  }

  let randomNumber = Math.floor(Math.random() * 4) + 1
  let randomLetter
  console.log('randomNumber: ' + randomNumber)
    switch(randomNumber) {
    case 1:
        randomLetter = 'a'
        break;
    case 2:
        randomLetter = 'b'
        break;
    case 3:
        randomLetter = 'c'
        break;
    case 4:
        randomLetter = 'd'
        break;
    default:
        randomLetter = 'd'
      }

  return randomLetter
}


render(){

  console.log(this.state)

    let questionText = 'Question-' + this.state.step.toString() + '_Text.png'
    let questionImage = 'Question-' + this.state.step.toString() + '_Image.png'

    let page = (
      <div className='fullBackground' key={questionText}>
        <div className='slideDownBlocker' />

        <div className='questionLogo' >
          <img src={'/img/02_Questions/FebrezeQuestionLogo.png'} />
        </div>

        <div className='questionText' >
          <img src={'/img/02_Questions/' + questionText} />
        </div>

        <div className='windowBox slideDown trapp-btn' style={{background: 'url(/img/02_Questions/' + questionImage + ')', backgroundRepeat: 'no-repeat'}} >
          <div style={{flex: '1 1 50%'}} onClick={ ()=> this.answerSelected( 'a') } />
          <div style={{flex: '1 1 50%'}} onClick={ ()=> this.answerSelected( 'b') } />
          <div style={{flex: '1 1 50%'}} onClick={ ()=> this.answerSelected( 'c') } />
          <div style={{flex: '1 1 50%'}} onClick={ ()=> this.answerSelected( 'd') } />
        </div>
      </div>
    )

    if (this.state.step === 0 ){
      return(
      <div className='fullBackground' >
      <div className='slideDownBlocker' />

      <div className='startLogo' >
        <img src={'/img/01_Start/StartFebrezeLogo.png'} />
      </div>

        <div className='windowBox trapp-btn' style={{background: 'url(/img/01_Start/StartWindow.png)', backgroundRepeat: 'no-repeat'}}  onClick={ ()=> this.setState({step:1})} />

      </div>
      );

    } else if (this.state.step === 7 ){

      let finishText =  this.state.letterWinner + '_text.png'
      let finishImage = this.state.letterWinner + '_image.png'

      return(
        <div className='fullBackground' key={finishText}>
        <div className='slideDownBlocker' />

          <div className='questionLogo' >
            <img src={'/img/02_Questions/FebrezeQuestionLogo.png'} />
          </div>

          <div className='questionText' >
            <img src={'/img/03_Results/' + finishText} />
          </div>

          <div className='windowBox slideDown trapp-btn' style={{background: 'url(/img/03_Results/' + finishImage + ')', backgroundRepeat: 'no-repeat'}} onClick={ ()=> this.setState({step: 8})} />

          <div className='trapp-btn' style={{position: 'absolute', bottom: '20px', justifyContent: 'center', display: 'flex', flex: 1, width: '100%'}} onClick={ ()=> this.setState({step: 8})}>
            <img  src={'/img/03_Results/NEXT_Button.png'} />
          </div>
        </div>
      );
    }  else if (this.state.step === 8 ){

      let finishText =  this.state.letterWinner + '_text.png'
      let finishOptions = this.state.letterWinner + '_options.png'

      return(
        <div className='fullBackground' key={finishOptions}>
        <div className='slideDownBlocker' />

          <div className='questionLogo' >
            <img src={'/img/02_Questions/FebrezeQuestionLogo.png'} />
          </div>

          <div className='questionText' >
            <img src={'/img/03_Results/' + finishText} />
          </div>

          <div className='windowBox slideDown trapp-btn' style={{background: 'url(/img/03_Results/' + finishOptions + ')', backgroundRepeat: 'no-repeat'}}  onClick={ ()=> this.setState({step: 9})} />

          <div className='trapp-btn' style={{position: 'absolute', bottom: '20px', justifyContent: 'center', display: 'flex', flex: 1, width: '100%'}} onClick={ ()=> this.setState({step: 9})}>
            <img  src={'/img/03_Results/NEXT_Button.png'} />
          </div>
        </div>
      );
    } else if (this.state.step === 9 ){


      return(
        <div className='fullBackground' onClick={ ()=> this.setState({step: 0, a: 0, b: 0, c:0, d:0, letterWinner: null})}  >
        <div className='slideDownBlocker' />

          <div className='questionLogo' >
            <img src={'/img/02_Questions/FebrezeQuestionLogo.png'} />
          </div>

          <div className='questionText' >
            <img src='/img/04_FinalFrame/04-Ending-Frame_Text.png' />
          </div>

          <div className='windowBox slideDown' style={{background: 'url(/img/04_FinalFrame/04-Ending-Frame_Image.png)', backgroundRepeat: 'no-repeat'}} />

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
