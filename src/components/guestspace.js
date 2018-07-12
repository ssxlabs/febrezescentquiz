import React, {Component} from 'react';


export default class GuestSpace extends Component {

    constructor(props) {
      super(props);

      this.state = { step: 0, popUp: null, globalResetTimer : null }
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
    this.setState({step: 0})
  }, 40000 )

  this.setState({ globalResetTimer: tempglobalResetTimer})

}


render(){

  console.log(this.state)
  console.log(this.props.room)


    if (this.state.step === 1 ){


      let room = this.props.room ? this.props.room : 'kitchen'

      let povImg = '/img/room/' + room + '/tips_pov.jpg'
      let menuImg = '/img/room/' + room + '/' + room + '_02-Menu.jpg'

      return(
        <div className='roomQuestionScreen' style={{background: 'url(' + menuImg + ')'}} >

            <div className='roomQuestionBox' >
                <div style={{flex: '1 1 50%'}} onClick={ ()=> this.setState({step:2, popUp: '01'}) } />

                <div style={{flex: '1 1 50%'}} onClick={ ()=> this.setState({step:2, popUp: '02'}) }  />
                <div style={{flex: '1 1 50%'}} onClick={ ()=> this.setState({step:2, popUp: '03'}) } />
                <div style={{flex: '1 1 50%'}} onClick={ ()=> this.setState({step:2, popUp: '04'}) } />
                <div style={{flex: '1 1 100%'}} onClick={ ()=> this.setState({step:2, popUp: '05'})}  />

            </div>

        </div>
      );
    } else if (this.state.step === 2 ){


            let popUp = this.state.popUp ? this.state.popUp : '01'
            let room = this.props.room ? this.props.room : 'kitchen'

            let povImg = '/img/room/' + room + '/tips_pov.jpg'
            let popUpImg = '/img/room/' + room + '/' + room + '_Pop-up-' + popUp + '.png'
            let menuImg = '/img/room/' + room + '/' + room + '_02-Menu.jpg'

            return(

              <div className='roomQuestionScreen' style={{background: 'url(' + menuImg + ')'}} >

                  <div className='roomQuestionBox' onClick={ ()=> this.setState({step:1})}>
                      <img src={popUpImg} />
                  </div>

              </div>
      );
    } else {

      let room = this.props.room ? this.props.room : 'kitchen'

      let startImg = '/img/room/' + room + '/' + room + '_01-Start.jpg'

      return(
        <div className='roomStartScreen' style={{background: 'url(' + startImg  + ')'}} onClick={ ()=> this.setState({step:1})}>
          <div style={{display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center', height: '100%'}}>
            <div className="gps_ring"></div>
          </div>
        </div>
      );
    }
  }
}
