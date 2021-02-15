import React from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      atomes_list: [],
      formula_arr: [],
      formula_str: ''
    }
  }

  componentDidMount() {
    this.Atomes_List()
  }

  Atomes_List = async () => {
    let fet = await fetch('http://192.168.1.26:5000/atomes_list')
    let rep = await fet.json()
    this.setState({atomes_list: rep})
  }

  Add_Element = (element) => {
    let last_element = this.state.formula_arr.length > 0 ? this.state.formula_arr[this.state.formula_arr.length - 1] : ''
    console.log(last_element.slice(-1), Number.isInteger(parseInt(last_element.slice(-1))))
    if (element == last_element) {
      this.state.formula_arr.pop()
      this.state.formula_arr.push(element + '2')
    } else if (Number.isInteger(parseInt(last_element.slice(-1)))) {
      this.state.formula_arr.pop()
      this.state.formula_arr.push(element + (parseInt(last_element.slice(-1)) + 1))
    } else {
      this.state.formula_arr.push(element)
    }
    let formula = ''
    for (let x of this.state.formula_arr) {
      formula += x
    }
    console.log(formula)
    this.setState({ ...this.state.formula_arr, formula_str: formula })
  }

  render() {
    let Element = (props) => {
      let group = props.group
      let period = props.period
      let family = props.family
      let atomic_number = props.atomic_number
      let electronegativity = props.electronegativity
      let electrons = props.electrons.split('|')
      let symbol = props.symbol
      let name = props.name
      let mass_number = props.mass_number
      return(
        <div className='element' group={group} period={period} family={family} onClick={() => this.Add_Element(symbol)}>
          <span className='atomic_number'>{atomic_number}</span>
          <span className='electronegativity'>{electronegativity}</span>
          <span className='electron_K'>{electrons[0]}</span>
          <span className='electron_L'>{electrons[1]}</span>
          <span className='electron_M'>{electrons[2]}</span>
          <span className='electron_N'>{electrons[3]}</span>
          <span className='electron_O'>{electrons[4]}</span>
          <span className='electron_P'>{electrons[5]}</span>
          <span className='electron_Q'>{electrons[6]}</span>
          <div className='element_center'>
            <span className='symbol'>{symbol}</span>
            <span className='name'>{name}</span>
            <span className='mass_number'>{mass_number}</span>
          </div>
        </div>
      )
    }

    let Columns = (props) => {
      let number = props.number
      let letter = props.letter
      return (
        <div className='column' group={number}>
        {
          this.state.atomes_list.map((item) => {
            if (item.info_groupe == number || item.info_groupe == `${number} (${letter})` || item.info_groupe.slice(0, 2) == number) {
              return <Element group={item.info_groupe} period={item.info_periode} family={item.famille} atomic_number={item.numero} name={item.nom} symbol={item.symbole} mass_number={item.masse_atomique} electronegativity={item.electronegativite} electrons={item.electron} />
            }
          })
        }
        </div>
      )
    }

    return (
      <div className='main'>
        <div className='container'>
          <Columns number='1' letter='IA' />
          <Columns number='2' letter='IIA' />
          <Columns number='3' letter='IIIB' />
          <Columns number='4' letter='IVB' />
          <Columns number='5' letter='VB' />
          <Columns number='6' letter='VIB' />
          <Columns number='7' letter='VIIB' />
          <Columns number='8' letter='' />
          <Columns number='9' letter='VIIIB' />
          <Columns number='10' letter='' />
          <Columns number='11' letter='IB' />
          <Columns number='12' letter='IIB' />
          <Columns number='13' letter='IIIA' />
          <Columns number='14' letter='IVA' />
          <Columns number='15' letter='VA' />
          <Columns number='16' letter='VIA' />
          <Columns number='17' letter='VIIA' />
          <Columns number='18' letter='VIIIA' />
          <div className='middle_box'>
            <p>{this.state.formula_str}</p>
            {/* <button onClick={() => {
              
            }}>Click</button> */}
          </div>
        </div>
      </div>
    )
  }
}
