import React from 'react';
import './Sold.css';

const Sold = (props) => {
      const sold = props.sold;
      const totalSpend = sold.reduce((sum, player) => sum + player.salary, 0)
      const totalSoldPlayers = sold.reduce((sum, player) => sum + player.name, [])
      const totalBudget = 2000000;
      console.log(sold)
      return (
            <div className="soldContainer">
                  <p className="sold-text">Total Spent: ৳ <span className="sold-highlight">{totalSpend}</span></p>
                  <p className="sold-text">Total Budget: ৳ <span className="sold-highlight">{totalBudget}</span></p>
                  <ul>
                        <li>{totalSoldPlayers}</li>
                  </ul>
                  {/* <p className="sold-text ">Players Bought: <span id="sold-player"> {totalSoldPlayers} </span> <br/></p> */}
                 
                  
            </div>
      );
};

export default Sold;