import React, {Component} from 'react';


export default class HomeRoot extends Component {

    constructor(props) {
      super(props);
      this.state = { step: 0, a: 0, b:0, c:0, d:0}
    }

answerSelected = ( answer) => {
  this.setState({ step: this.state.step + 1, [answer]: this.state[answer] + 1})
}

formSelected = (form) => {
  this.setState({ step: this.state.step + 1, form: form})
}


render(){

if (this.state.step === 0 ){
      return(
      <div style={{ height: '711px', width: '400px', backgroundColor: '#4FC3F7', padding: '20px'}}>
          <div style={{ height: '100%', border: '2px solid #ddd', display: 'flex', flexDirection: 'column'}}>

            <div style={{height: '120px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <h1>Febreze</h1>
            </div>

            <div style={{flex: 1, backgroundColor: 'red', margin: '20px'}} onClick={ ()=> this.setState({step: 1}) } >
              click to start!
            </div>


          </div>
      </div>
      );
    } else if (this.state.step === 1 ){
      return(
      <div style={{ height: '711px', width: '400px', backgroundColor: '#4FC3F7', padding: '20px'}}>
          <div style={{ height: '100%', display: 'flex', flexDirection: 'column'}}>

            <div style={{height: '120px', justifyContent: 'center'}}>
              <h4 style={{textAlign: 'center', margin: '0px'}}>Febreze</h4>
              <h2 style={{textAlign: 'center'}}>{"When you're getting ready for the holidays, what's your drink of choice?"}</h2>
            </div>

            <div style={{flex: 1, margin: '20px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}} >

              <div style={{flex: '1 1 50%', backgroundColor: 'red'}} onClick={ ()=> this.answerSelected( 'a') } >

              </div>
              <div style={{flex: '1 1 50%', backgroundColor: 'yellow'}} onClick={ ()=>this.answerSelected( 'b') } >

              </div>
              <div style={{flex: '1 1 50%', backgroundColor: 'purple'}} onClick={ ()=>this.answerSelected( 'c') } >

              </div>
              <div style={{flex: '1 1 50%', backgroundColor: 'blue'}} onClick={ ()=> this.answerSelected( 'd') } >

              </div>

            </div>


          </div>
      </div>
      );
    } else if (this.state.step === 2 ){
      return(
      <div style={{ height: '711px', width: '400px', backgroundColor: '#4FC3F7', padding: '20px'}}>
          <div style={{ height: '100%', display: 'flex', flexDirection: 'column'}}>

            <div style={{height: '120px', justifyContent: 'center'}}>
              <h4 style={{textAlign: 'center', margin: '0px'}}>Febreze</h4>
              <h2 style={{textAlign: 'center'}}>{"What's your favorite holiday tradition?"}</h2>
            </div>

            <div style={{flex: 1, margin: '20px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}} >

              <div style={{flex: '1 1 50%', backgroundColor: 'red'}} onClick={ ()=> this.answerSelected('a') } >

              </div>
              <div style={{flex: '1 1 50%', backgroundColor: 'yellow'}} onClick={ ()=>this.answerSelected('b') } >

              </div>
              <div style={{flex: '1 1 50%', backgroundColor: 'purple'}} onClick={ ()=>this.answerSelected('c') } >

              </div>
              <div style={{flex: '1 1 50%', backgroundColor: 'blue'}} onClick={ ()=> this.answerSelected('d') } >

              </div>

            </div>


          </div>
      </div>
      );
    } else if (this.state.step === 3 ){
      return(
      <div style={{ height: '711px', width: '400px', backgroundColor: '#4FC3F7', padding: '20px'}}>
          <div style={{ height: '100%', display: 'flex', flexDirection: 'column'}}>

            <div style={{height: '120px', justifyContent: 'center'}}>
              <h4 style={{textAlign: 'center', margin: '0px'}}>Febreze</h4>
              <h2 style={{textAlign: 'center'}}>{"What's the most challenging part of the holidays?"}</h2>
            </div>

            <div style={{flex: 1, margin: '20px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}} >

              <div style={{flex: '1 1 50%', backgroundColor: 'red'}} onClick={ ()=> this.answerSelected('a') } >

              </div>
              <div style={{flex: '1 1 50%', backgroundColor: 'yellow'}} onClick={ ()=>this.answerSelected( 'b') } >

              </div>
              <div style={{flex: '1 1 50%', backgroundColor: 'purple'}} onClick={ ()=>this.answerSelected( 'c') } >

              </div>
              <div style={{flex: '1 1 50%', backgroundColor: 'blue'}} onClick={ ()=> this.answerSelected( 'd') } >

              </div>

            </div>


          </div>
      </div>
      );
    } else if (this.state.step === 4 ){
      return(
      <div style={{ height: '711px', width: '400px', backgroundColor: '#4FC3F7', padding: '20px'}}>
          <div style={{ height: '100%', display: 'flex', flexDirection: 'column'}}>

            <div style={{height: '120px', justifyContent: 'center'}}>
              <h4 style={{textAlign: 'center', margin: '0px'}}>Febreze</h4>
              <h2 style={{textAlign: 'center'}}>{"What holiday scent memory are you most fond of?"}</h2>
            </div>

            <div style={{flex: 1, margin: '20px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}} >

              <div style={{flex: '1 1 50%', backgroundColor: 'red'}} onClick={ ()=> this.answerSelected('a') } >

              </div>
              <div style={{flex: '1 1 50%', backgroundColor: 'yellow'}} onClick={ ()=>this.answerSelected( 'b') } >

              </div>
              <div style={{flex: '1 1 50%', backgroundColor: 'purple'}} onClick={ ()=>this.answerSelected( 'c') } >

              </div>
              <div style={{flex: '1 1 50%', backgroundColor: 'blue'}} onClick={ ()=> this.answerSelected( 'd') } >

              </div>

            </div>


          </div>
      </div>
      );
    } else if (this.state.step === 5 ){
      return(
      <div style={{ height: '711px', width: '400px', backgroundColor: '#4FC3F7', padding: '20px'}}>
          <div style={{ height: '100%', display: 'flex', flexDirection: 'column'}}>

            <div style={{height: '120px', justifyContent: 'center'}}>
              <h4 style={{textAlign: 'center', margin: '0px'}}>Febreze</h4>
              <h2 style={{textAlign: 'center'}}>{"What's your favorite holiday movie?"}</h2>
            </div>

            <div style={{flex: 1, margin: '20px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}} >

              <div style={{flex: '1 1 50%', backgroundColor: 'red'}} onClick={ ()=> this.answerSelected('a') } >

              </div>
              <div style={{flex: '1 1 50%', backgroundColor: 'yellow'}} onClick={ ()=>this.answerSelected( 'b') } >

              </div>
              <div style={{flex: '1 1 50%', backgroundColor: 'purple'}} onClick={ ()=>this.answerSelected( 'c') } >

              </div>
              <div style={{flex: '1 1 50%', backgroundColor: 'blue'}} onClick={ ()=> this.answerSelected( 'd') } >

              </div>

            </div>


          </div>
      </div>
      );
    } else if (this.state.step === 6 ){
      return(
      <div style={{ height: '711px', width: '400px', backgroundColor: '#4FC3F7', padding: '20px'}}>
          <div style={{ height: '100%', display: 'flex', flexDirection: 'column'}}>

            <div style={{height: '120px', justifyContent: 'center'}}>
              <h4 style={{textAlign: 'center', margin: '0px'}}>Febreze</h4>
              <h2 style={{textAlign: 'center'}}>{"Where do you spend the most time around the holidays"}</h2>
            </div>

            <div style={{flex: 1, margin: '20px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}} >

              <div style={{flex: '1 1 50%', backgroundColor: 'red'}} onClick={ ()=> this.answerSelected('a') } >

              </div>
              <div style={{flex: '1 1 50%', backgroundColor: 'yellow'}} onClick={ ()=>this.answerSelected( 'b') } >

              </div>
              <div style={{flex: '1 1 50%', backgroundColor: 'purple'}} onClick={ ()=>this.answerSelected( 'c') } >

              </div>
              <div style={{flex: '1 1 50%', backgroundColor: 'blue'}} onClick={ ()=> this.answerSelected( 'd') } >

              </div>

            </div>


          </div>
      </div>
      );
    } else if (this.state.step === 7 ){
      return(
      <div style={{ height: '711px', width: '400px', backgroundColor: '#4FC3F7', padding: '20px'}}>
          <div style={{ height: '100%', display: 'flex', flexDirection: 'column'}}>

            <div style={{height: '120px', justifyContent: 'center'}}>
              <h4 style={{textAlign: 'center', margin: '0px'}}>Febreze</h4>
              <h2 style={{textAlign: 'center'}}>{"What's the most challenging part of the holidays?"}</h2>
            </div>

            <div style={{flex: 1, margin: '20px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}} >

              <div style={{flex: '1 1 50%', backgroundColor: 'red'}} onClick={ ()=> this.formSelected('fabric') } >

              </div>
              <div style={{flex: '1 1 50%', backgroundColor: 'yellow'}} onClick={ ()=>this.formSelected( 'plug') } >

              </div>
              <div style={{flex: '1 1 50%', backgroundColor: 'purple'}} onClick={ ()=>this.formSelected( 'air') } >

              </div>
              <div style={{flex: '1 1 50%', backgroundColor: 'blue'}} onClick={ ()=> this.formSelected( 'car') } >

              </div>

            </div>


          </div>
      </div>
      );
    } else {

      console.log('Finished: ')
      console.log(this.state)

      let productMap = {a: 'Fresh Fall Pumpkin',
                        b: 'Fresh Pressed Apple',
                        c: 'Fresh Twist Cranberry',
                        d: 'Fresh Cut Pine',
                        }

      let productAnswer
      let {a, b, c, d} = this.state

          if (a > b && a > c && a > d) {
            productAnswer = productMap.a
          } else if (b > a && b > c && b > d) {
            productAnswer = productMap.b
          } else if (c > b && c > a && c > d) {
            productAnswer = productMap.c
          } else if (d > b && d > c && d > a) {
            productAnswer = productMap.d
          } else {
            productAnswer = productMap.d
          }


      return(
      <div style={{ height: '711px', width: '400px', backgroundColor: '#4FC3F7', padding: '20px'}}>
          <div style={{ height: '100%', display: 'flex', flexDirection: 'column'}}>

            <div style={{height: '120px', justifyContent: 'center'}}>
              <h4 style={{textAlign: 'center', margin: '0px'}}>Febreze</h4>
              <h2 style={{textAlign: 'center'}}>{"The End!"}</h2>
            </div>

            <div style={{flex: 1, margin: '20px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}} >

              <div style={{flex: '1 1 50%', backgroundColor: 'red'}} onClick={ ()=> this.setState({step: 0, a: 0, b:0, c:0, d:0}) } >
                  {productAnswer}
              </div>
            </div>


          </div>
      </div>
      );
    }
  }
}
