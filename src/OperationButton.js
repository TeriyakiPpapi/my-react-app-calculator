import { ACTIONS } from './App'
/* similar to the digitbutton.js, asides operation*/
export default function OperationButton ({ dispatch, operation }) {
    return (
        <button 
        onClick={() => dispatch({type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })}
    >
        {operation}
    </button>
    )
}

