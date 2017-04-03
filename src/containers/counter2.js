import React,{Component} from 'react'
import {connect} from 'react-redux'
import CounterAction2 from '../redux/counterReducer2'
class Counter2 extends Component {

  render() {
    const { value } =this.props.state
    const {plus,minus} = this.props
    return (
      <div>
        <button onClick={()=>minus('第二组的减')}>-</button>
        <input type="text" style={{width:'30px',textAlign:'center'}} value={value}/>
        <button onClick={()=>plus('第二组的加')}>+</button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state)
  return {
    state: state.counterReducer2
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    plus: (text)=> dispatch(CounterAction2.plusNumSaga2(text)),
    minus: (text)=> dispatch(CounterAction2.minusNumSaga2(text))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter2)
