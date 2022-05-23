const authReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return {
                ...state, isLogin: true
            };
        case "LOGOUT_SUCCESS":
            return {
                ...state, isLogin: false, token: ""
            };
        case "TOKEN_RECEIVED":
            return {
                ...state,
                token: action.payload
            };
        case "USER_RECEIVED":
            return {
                ...state,
                user: action.payload
            };
        default:
            return state;
    }
}

const loginReducer = (state, action) => {
    switch (action.type) {
        case "EMAIL_CHANGED":
            return {
                ...state, email: action.payload
            };
        case "PASSWORD_CHANGED":
            return {
                ...state, password: action.payload
            };
        default:
            return state;
    }
}

const signUpReducer = (state, action) => {
    switch (action.type) {
        case "FIRST_NAME_CHANGED":
            return {
                ...state, firstName: action.payload
            };
        case "LAST_NAME_CHANGED":
            return {
                ...state, lastName: action.payload
            };
        case "EMAIL_CHANGED":
            return {
                ...state, email: action.payload
            };
        case "PASSWORD_CHANGED":
            return {
                ...state, password: action.payload
            };
        default:
            return state;
    }
}

export {authReducer, loginReducer, signUpReducer};