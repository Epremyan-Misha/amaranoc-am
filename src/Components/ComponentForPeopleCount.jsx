import React from "react";
function PeopleCount({ count, onIncrement, onDecrement }) {
  return (
    <div className="divForCountMain">
      <h4 className="peopleCount">Մարդկանց թույլատրելի քանակ</h4>
      <div className="divForCount">
        <button className="minusBtn" onClick={onDecrement}>-</button>
        <p className="count">{count}</p>
        <button className="plusBtn" onClick={onIncrement}>+</button>
      </div>
    </div>
  );
}

export default PeopleCount;
