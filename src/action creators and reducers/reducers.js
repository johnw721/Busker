export const isSignedIn=(state=false,action)=>{
switch (action.type) {
    case 'SIGNED_IN':
        return !state;
    case 'SIGNED_OUT':
        return state

    default:
        return null;
}
}

export const likes = (state=0,action)=>{
switch(action.type){
    // Either this or the action Creator would be a good space to build the liking algorithm
    case 'LIKED':
        return state+=1;
    case 'DISLIKED':
        return state-=1;
    default:
        return state;
}
}

export const views = (state=0, action)=>{
    switch(action.type){
        case 'VIEWED':
            return state+=1;
        default:
            return state;
    }
}

export const CRUDforArtist =(state={},action)=>{
switch (action.type) {
    // The spread operator would be useful here
    /*Be sure to get artist location during sign up using gps or typed in location */
    case 'CREATE':
        return {...state,state}
    case 'UPDATE':
        return
    case 'DELETE':
        return
    default:

    return state;
}
}

export const CRUDforGroupChat = (state={},action)=>{
//Remember to set a time limit for how long each chat last
//Chat should be centered around event
switch (action.type) {
    case 'CREATE':
        return {...state,state}
    case 'UPDATE':
        return
    case 'DELETE':
        return
    default:
    return state;   
}
}
export const follow = (state=[],action)=>{
    switch (action.type) {
        //Add name to following list and increase number of followers by one
        //Artist are followed by groups 
        case 'FOLLOW':
            return state.push(action.payload)
        case 'UNFOLLOW':
            return state.pop(action.payload)
        default:
            break;
    }
}
export const shoppingCart =(state = 0, action)=>{
    switch(action.type){
        case 'ADD_CART':
            return state+=action.payload;
        case 'REMOVE_CART':
            return state-=action.payload;
        default:
            return state;
    }
}