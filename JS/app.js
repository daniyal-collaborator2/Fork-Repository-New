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

const likeFeature = like => {
    if(like){
        return true
    }
    else{
        return false
    }
}

const disLikeFeature = dislike => {
    if(dislike){
        return true
    }
    else{
        return false
    }
}

const checkoutFeature = pro => {
    if(pro){
        return true
    }
    else{
        return false
    }
}

const purchaseFeature = pro => {
    if(pro.detail == 'fruit'){
        return true
    }
    else{
        return false
    }
}

const biosFeature = user => {
    if(user.eye == 'Ok'){
        return true
    }
    else{
        return false
    }
}