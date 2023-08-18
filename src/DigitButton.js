/* This component takes two this.props
 digit and dispatch, dispatch send actions 
 digit is the val to be display on the button

 The component renders a button with the given 
 `digit`. The button also has an `onClick` handler that calls 
 the `dispatch` prop with an action that adds the given `digit` to the Redux store.
*/ 
import { ACTIONS } from './App'

export default function DigitButton({ dispatch, digit }) {
    return (
        <button 
        onClick={() => dispatch( {type: ACTIONS.ADD_DIGIT , payload: { digit } })}
    >
        {digit}
    </button>
    )
}

