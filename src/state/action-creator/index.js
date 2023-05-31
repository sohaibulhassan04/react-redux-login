export const depositMoney = (amount)=>{
    return (dispatch)=>{
        dispatch({
            type:'deposit',
            payload:amount
        })
    }
}
export const withdrawMoney = (amount)=>{
    return (dispatch)=>{
        dispatch({
            type:'withdraw',
            payload:amount
        })
    }
}
export const signup = (account)=>{
    return(dispatch)=>{
        dispatch({
            type:'signup',
            payload:account
        })
    }
}
export const signin = (account)=>{
    return(dispatch)=>{
        
        dispatch({
            type:'signin',
            payload:account
        })
    }
}