
export const reducer = (state={token:false}, action)=>{
    if(action.type ==='athenticate'){
        console.log(' authenticat reducer ----> ', action);
        return action.payload
    }
    else{
        return state
    }
}

export default reducer