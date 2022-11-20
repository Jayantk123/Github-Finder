import { createContext, useReducer, useState } from "react";
import githubReducer from "./GithubReducer";
const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

export const GithubProvider = ({ children }) => {
  // context
  // const [users, setUsers] = useState([]);
  // const [loading, setLoading] = useState(true);

  // reducer

  const initialState = {
    users: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(githubReducer, initialState);
  
  // get initial users
  const fetchUsers = async () => {
    setLoading()

    const response = await fetch(`${GITHUB_URL}/users`, {
      // headers:{
      //     Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
      // },
      // for increasing rate limit
    });

    const data = await response.json();

    // setUsers(data);
    // setLoading(false);

    dispatch({
      type:'GET_USERS',
      payload:data,
    })
  };

  // set loading
  const setLoading=()=>dispatch({
    type:'SET_LOADING'
  })
  return (
    <GithubContext.Provider
      value={{
        users:state.users,
        loading:state.loading,
        fetchUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
export default GithubContext;
