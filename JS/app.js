const isLogin = user => {
    if(user == 'Amin'){
        return true
    }
    else{
        return false
    }
}

const registerFeatuer = user => {
    if(user){
        return true
    }
    else{
        return false
    }
}

const getMeAPI = api => {
    if(api == 'Log'){
        return true
    }
    else{
        return false
    }
}