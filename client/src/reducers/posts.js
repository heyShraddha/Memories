export default (posts = [],action)=>{
    switch(action.type){
        case 'CREATE':
            console.log('I am in reducer babe');
            return [...posts, action.payload];
        case 'FETCH_ALL':
                return action.payload;
        default:
            return posts;
    }
}