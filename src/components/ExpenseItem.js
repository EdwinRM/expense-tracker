import "./ExpenseItem.css";
import React, {useState}  from "react";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  const [value, setTitle] = useState(props.title);

  const clickedHandler = () => {
    setTitle("Updated");
  };

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{value}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickedHandler}>Change value </button>
    </div> 
  );
};

export default ExpenseItem;
