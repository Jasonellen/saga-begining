import React,{Component} from 'react'
import {connect} from 'react-redux'
import CounterAction1 from '../redux/counterReducer1'
class Counter1 extends Component {

  render() {
    const { value } =this.props.state
    const {plus,minus} = this.props
    return (
      <div>
        <button onClick={()=>minus('第一组的减')}>-</button>
        <input type="text" style={{width:'30px',textAlign:'center'}} value={value}/>
        <button onClick={()=>plus('第一组的加')}>+</button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {

  console.log(state)
  return {
    state: state.counterReducer1
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    plus: (text)=> dispatch(CounterAction1.plusNumSaga(text)),
    minus: (text)=> dispatch(CounterAction1.minusNumSaga(text))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter1)
