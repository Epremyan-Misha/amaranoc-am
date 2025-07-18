import React from "react";

function PeopleCountWithNight({ countWithNight, onIncrement, onDecrement, delivery }) {
  return (
    <div className="countPeopleNightMain">
      <h4 className="nightPeopleH4">
        Մարդկանց թույլատրելի քանակը գիշերակացով
        {delivery && <p>Առավելագույն քանակ</p>}
      </h4>
      <div className="countPeopleNight">
        <button className="minusPeopleBtn" onClick={onDecrement}>-</button>
        <p className="countPeople">{countWithNight}</p>
        <button className="plusPeopleBtn" onClick={onIncrement}>+</button>
      </div>
    </div>
  );
}

export default PeopleCountWithNight;