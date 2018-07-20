export default function userReducer(state={}, action){
    switch (action.type) {
        case "LOGGEDIN":
            return Object.assign({}, action.user);

        default:
            return state;
    }
};