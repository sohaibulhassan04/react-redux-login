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
    return async(dispatch)=>{
        localStorage.setItem("account",JSON.stringify(account))
        
        dispatch({
            type:'signin',
            payload:account
        })
        dispatch({
            type:'athenticate',
            payload: {token:true},
        })
    }
}
export const athenticate = (account)=>{
    return async(dispatch)=>{
        const data = localStorage.getItem("account")
        const accountData = await JSON.parse(data)
        // if(accountData?.username === account?.username && account?.password === accountData?.password){
        //     token = true 
        // }else{
        //     token = false
        // }
       
        if(accountData?.username && accountData?.password){
            if(!account.username && !account.password){
                dispatch({
                    type:'signin',
                    payload:accountData
                })
                dispatch({
                    type:'athenticate',
                    payload:{token:true}
                })
            }
            
            
        }
        else{
            dispatch({
                type:'signin',
                payload:account
            })
            dispatch({
                type:'athenticate',
                payload:{token:false}
            })
        }
    }
}
export const signout = ()=>{
    return async(dispatch)=>{
        localStorage.removeItem("account")
        dispatch({
            type:'signin',
            payload:{username:"",password:""}
        })
        dispatch({
            type:'athenticate',
            payload:{token:false}
        })
    }
}