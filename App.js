import React from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      atomes_list: []
    }
  }

  componentDidMount() {
    this.Atomes_List()
  }

  Atomes_List = async () => {
    let fet = await fetch('http://192.168.1.26:5000/atomes_list')
    let rep = await fet.json()
    console.log(rep)
  }

  render() {
    let Element = (props) => {
      let atomic_number = props.atomic_number
      let electronegativity = props.electronegativity
      let electron_K = props.electron_K
      let electron_L = props.electron_L
      let electron_M = props.electron_M
      let electron_N = props.electron_N
      let symbol = props.symbol
      let name = props.name
      let mass_number = props.mass_number
      return(
        <div className='element'>
          <span className='atomic_number'>26</span>
          <span className='electron_K'>2</span>
          <span className='electron_L'>8</span>
          <span className='electron_M'>14</span>
          <span className='electron_N'>2</span>
          <div className='element_center'>
            <span className='symbol'>Fe</span>
            <span className='name'>Fer</span>
            <span className='mass_number'>55,845</span>
          </div>
        </div>
      )
    }
    return (
      <div className='main'>
        <div className='container'>
          <div className='column' id='one'>
            <div className='element'></div>
            <div className='element'></div>
            <div className='element'></div>
            <div className='element'></div>
            <div className='element'></div>
            <div className='element'></div>
            <div className='element'></div>
          </div>
          <div className='column' id='two'>
            <div className='element'></div>
            <div className='element'></div>
            <div className='element'></div>
            <div className='element'></div>
            <div className='element'></div>
            <div className='element'></div>
          </div>
          <div className='column' id='three'>
            <div className='element'></div>
            <div className='element'></div>
            <div className='element'></div>
            <div className='element'></div>
          </div>
          <div className='column' id='four'>
            <div className='element'></div>
            <div className='element'></div>
            <div className='element'></div>
            <div className='element'></div>
          </div>
          <div className='column' id='five'>
            <div className='element'></div>
            <div className='element'></div>
            <div className='element'></div>
            <div className='element'></div>
          </div>
          <div className='column' id='six'>
            <div className='element'></div>
            <div className='element'></div>
            <div className='element'></div>
            <div className='element'></div>
          </div>
          <div className='column' id='seven'>
            <div className='element'></div>
            <div className='element'></div>
            <div className='element'></div>
            <div className='element'></div>
          </div>
          <div className='column' id='eight'>
            <div className='element'>
              <span className='atomic_number'>26</span>
              <span className='electronegativity'>1,8</span>
              <span className='electron_K'>2</span>
              <span className='electron_L'>8</span>
              <span className='electron_M'>14</span>
              <span className='electron_N'>2</span>
              <div className='element_center'>
                <span className='symbol'>Fe</span>
                <span className='name'>Fer</span>
                <span className='mass_number'>55,845</span>
              </div>
            </div>
            <div className='element'></div>
            <div className='element'></div>
            <div className='element'></div>
          </div>
          <div className='column' id='nine'>
            <div className='element'></div>
            <div className='element'></div>
            <div className='element'></div>
            <div className='element'></div>
          </div>
          <div className='column' id='ten'>
            <div className='element'></div>
            <div className='element'></div>
            <div className='element'></div>
            <div className='element'></div>
          </div>
          <div className='column' id='eleven'>
            <div className='element'></div>
            <div className='element'></div>
            <div className='element'></div>
            <div className='element'></div>
          </div>
          <div className='column' id='twelve'>
            <div className='element'></div>
            <div className='element'></div>
            <div className='element'></div>
            <div className='element'></div>
          </div>
          <div className='column' id='thirteen'>
            <div className='element'></div>
            <div className='element'></div>
            <div className='element'></div>
            <div className='element'></div>
            <div className='element'></div>
            <div className='element'></div>
          </div>
          <div className='column' id='fourteen'>
            <div className='element'></div>
            <div className='element'></div>
            <div className='element'></div>
            <div className='element'></div>
            <div className='element'></div>
            <div className='element'></div>
          </div>
          <div className='column' id='fifteen'>
            <div className='element'></div>
            <div className='element'></div>
            <div className='element'></div>
            <div className='element'></div>
            <div className='element'></div>
            <div className='element'></div>
          </div>
          <div className='column' id='sixteen'>
            <div className='element'></div>
            <div className='element'></div>
            <div className='element'></div>
            <div className='element'></div>
            <div className='element'></div>
            <div className='element'></div>
          </div>
          <div className='column' id='seventeen'>
            <div className='element'></div>
            <div className='element'></div>
            <div className='element'></div>
            <div className='element'></div>
            <div className='element'></div>
            <div className='element'></div>
          </div>
          <div className='column' id='eighteen'>
            <div className='element'></div>
            <div className='element'></div>
            <div className='element'></div>
            <div className='element'></div>
            <div className='element'></div>
            <div className='element'></div>
            <div className='element'></div>
          </div>
        </div>
      </div>
    )
  }
}
