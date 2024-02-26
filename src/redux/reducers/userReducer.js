const userReducer = (
    state = {
        user: [],
    },
    action
    ) => {
    switch (action.type) {
        case "GET_USER":
        return {
            ...state,
            user: action.payload,
        };
        case "ADD_USER":
            return{
                ...state,
                user:[...state.user, action.payload],
            };
        case "EDIT_USER":
            console.log(state);
            return{
                ...state,
                user: {
                    ...state.user,
                    ...action.payload
                }
            };
        case "DELETE_USER":
            console.log(state.user)
            return{
                ...state,
                user:state.user.filter(user => user.id !== action.payload.id)
            };
        default:
        return state;
    }
};

export default userReducer;
