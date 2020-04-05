const initialState = {
    text: '',
    total: [],
    all: []
}

export default function(state = initialState, action){
    switch(action.type){
        case 'SEARCH_STATE':
            return {
                ...state,
                text: action.payload
            };
        case 'FETCH_STATE':
            return{
                ...state,
                all: action.payload
            };
        case 'FETCH_ALL':
            return {
                ...state,
                all: action.payload
            }
        default:
            return state;
    }
}