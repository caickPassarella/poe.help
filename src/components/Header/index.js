import React from 'react';
import './style.css';


function LeagueOptions(props) {
    leagues = ['temp hardcore', 'tempo softcore', 'hardcore', 'softcore']
    return (
        <select className="leagueOption">
        leagues.map((league) =>
        <option value={props.value}>{league}</option>
        )
        </select>
    )
}

function TradeOptions(props) {
    tradeOptions = ['Help', 'Helper']
    return (
        <select className="TradeOptions">
            tradeOptions.map((option) =>
            <option value={props.value}>{option}</option>
            )
        </select>
    )
}

function Header(props) {
  return (
   <div className="header">
    <div className="headerBtns">
        <TradeOptions/>
        <LeagueOptions/>
    </div>
   </div>
  )
}

export default Header;