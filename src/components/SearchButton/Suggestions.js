import React from 'react'
import {Link} from 'react-router-dom';
import Style from './Suggestions.css';
const Suggestions = (props) => {
  const slicedResults = props.results.slice(0,4);
  const options = slicedResults.map(r => (
    <Link to={"/users/"+r.login} key={r.login} >
    <li >
      {r.login}
    </li>
    </Link>
  ))
  return <ul className={Style.Suggestions}>{options}</ul>
}

export default Suggestions;