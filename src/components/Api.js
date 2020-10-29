import React, { useEffect, useState } from "react";
import axios from "axios";
import List from "./List";
import withListLoading from "./WithListLoading";

function Api() {
    const ListLoading = withListLoading(List)
    const [appState, setAppState] = useState({
      loading: false,
      repos: null,
  });

//   useEffect(() => {
//     setAppState({ loading: true });
//     const apiUrl = 'https://api.github.com/users/hacktivist123';
//     axios.get(apiUrl).then((repos) => {
//         const allRepos = repos.data;
//         setAppState({ loading: false, repos: allRepos });
//     });
//   }, [setAppState]);

  useEffect(() => {
      setAppState({ loading: true});
      const apiUrl = `https://api.github.com/users/hacktivist123`;
      fetch(apiUrl)
        .then((res) => res.json())
        .then((repos) => {
            setAppState({ loading: false, repos: repos});
        });
  }, [setAppState]);

  return (
    <div className='App'>
      <div className='container'>
        <h1>Currency Info</h1>
      </div>
      <div className='repo-container'>
        <ListLoading isLoading={appState.loading} repos={appState.repos} />
      </div>
    </div>
  );
}

export default Api;