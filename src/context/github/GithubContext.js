import { logDOM } from "@testing-library/react";
import axios from "axios";
import { createContext, useReducer, useState } from "react";
import githubReducer from "./GithubReducer";
const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

const github = axios.create({
  baseURL: GITHUB_URL,
});
export const GithubProvider = ({ children }) => {
  // context
  // const [users, setUsers] = useState([]);
  // const [loading, setLoading] = useState(true);

  // reducer

  const initialState = {
    users: [],
    user: {},
    repos: [],
    user_followers: [],
    user_followings: [],
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

    // const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
    //   // headers:{
    //   //     Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
    //   // },
    //   // for increasing rate limit
    // });

    // const { items } = await response.json();

    const response = await github.get(`/search/users?${params}`);

    console.log(response.data.items);
    // const { items } = await response.json();

    // setUsers(data);
    // setLoading(false);

    dispatch({
      type: "GET_USERS",
      payload: response.data.items,
    });
  };

  // get single  user
  const getUser = async (login) => {
    setLoading();

    const response = await github.get(`/users/${login}`);

    if (response.status === 404) {
      window.location = "/notfound";
    } else {
      dispatch({
        type: "GET_USER",
        payload: response.data,
      });
    }
  };

  // get users repos
  const getUsersRepos = async (login) => {
    setLoading();

    const params = new URLSearchParams({
      sort: "created",
      per_page: 10,
    });
    const response = await github.get(`/users/${login}/repos?${params}`, {});

    dispatch({
      type: "GET_REPOS",
      payload: response.data,
    });
  };

  // get user followers
  const getUsersFollowers = async (login) => {
    setLoading();

    const response = await github.get(`/users/${login}/followers`, {});

  

   

    dispatch({
      type: "GET_FOLLOWERS",
      payload: response.data,
    });
  };

  // get user followings
  const getUsersFollowings = async (login) => {
    setLoading();

    const response = await github.get(`/users/${login}/following`, {});


   

    dispatch({
      type: "GET_FOLLOWINGS",
      payload: response.data,
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
        // users: state.users,
        // user: state.user,
        // repos:state.repos,
        // loading: state.loading,
        // user_followers:state.user_followers,
        // user_followings:state.user_followings,

        // instead of this we can directly use spead operator
        ...state,

        // fetchUsers,
        searchUsers,
        clearSearch,
        getUser,
        getUsersRepos,
        getUsersFollowers,
        getUsersFollowings,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
export default GithubContext;
