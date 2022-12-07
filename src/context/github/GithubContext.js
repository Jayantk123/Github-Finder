import { logDOM } from "@testing-library/react";
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
    user: {},
    repos:{},
    loading: false,
  };
  const [state, dispatch] = useReducer(githubReducer, initialState);

  // get initial users
  // const fetchUsers = async () => {
  //   setLoading()

  //   const response = await fetch(`${GITHUB_URL}/users`, {
  //     // headers:{
  //     //     Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
  //     // },
  //     // for increasing rate limit
  //   });

  //   const data = await response.json();

  //   // setUsers(data);
  //   // setLoading(false);

  //   dispatch({
  //     type:'GET_USERS',
  //     payload:data,
  //   })
  // };

  // search user
  // get initial users
  const searchUsers = async (text) => {
    setLoading();

    const params = new URLSearchParams({
      q: text,
    });

    const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      // headers:{
      //     Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
      // },
      // for increasing rate limit
    });

    const { items } = await response.json();

    console.log(items);

    // setUsers(data);
    // setLoading(false);

    dispatch({
      type: "GET_USERS",
      payload: items,
    });
  };

  // get single  user
  const getUser = async (login) => {
    setLoading();

    const response = await fetch(`${GITHUB_URL}/users/${login}`);


    if(response.status===404) {
      window.location='/notfound'
    } else {

      const data = await response.json();

   
console.log(data)
  

    dispatch({
      type: "GET_USER",
      payload: data,
    });
    }
    
    
  };

  // get users repos
  const getUsersRepos = async (login) => {
    setLoading();

    const response = await fetch(`${GITHUB_URL}/users/${login}/repos`, {
    
    });

    const data = await response.json();

  

    dispatch({
      type: "GET_REPOS",
      payload: data,
    });
  };

  // clear search
  const clearSearch = () =>
    dispatch({
      type: "CLEAR_SEARCH",
    });

  // set loading
  const setLoading = () =>
    dispatch({
      type: "SET_LOADING",
    });
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos:state.repos,
        loading: state.loading,
        // fetchUsers,
        searchUsers,
        clearSearch,
        getUser,
        getUsersRepos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
export default GithubContext;
