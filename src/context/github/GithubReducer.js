const githubReducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,  
        users: action.payload,
        loading: false,
      }
      case 'GET_USER':
        return {
          ...state,
          user:action.payload,
          loading:false,
        }
        case 'GET_REPOS':
        return {
          ...state,
          repos:action.payload,
          loading:false,
        }
        case 'GET_FOLLOWERS':
          return {
            ...state,
            user_followers:action.payload,
            loading:false,
          }
      case 'SET_LOADING':
        return {
          ...state,
          loading:true,
        }
        case "CLEAR_SEARCH":
          return {
            ...state,
            users:[],

          }
          case 'SHOW_FOLLOWING':
            return {
              
            }
    default:
      return state;
  }
};

export default githubReducer;
