import React from 'react';

function List(props) {
  const { repos } = props;
  if (!repos || repos.length === 0) return <p>No data, sorry</p>;
  return (
    <ul>
      <h2 className='list-head'>Currency Exchange Info</h2>
      {repos.map((repo) => {
        return (
          <li key={repo.id} className='list'>
            <span className='repo-text'>{repo.name} </span>
            <span className='repo-description'>{repo.description}</span>
          </li>
        );
      })}
    </ul>
  );
};
export default List;