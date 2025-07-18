import React from "react";
import "../index.css";
import BodyInfo from "./ComponentForBodyInfo";
import MapBody from "./ComponentForMapBody";
import PeopleCount from "./ComponentForPeopleCount";
import Night from "./ComponentForNight";
import PeopleCountWithNight from "./ComponentForPeopleCountWithNight";
import PeopleRooms from "./ComponentForPeopleRooms";
import BathRoom from "./ComponentForBathroom";
import Pool from "./ComponentForPool";
import AdvantagesMain from "./Advantages";
import Houses from "./ComponentHouses";
import Options from "./OptionsComponent";
import PagesImg from "./ComponentPages";
import CourseInputsAndPrace from "./ComponentForCourseInputsAndPrace";
import useBodyLogic from "./ComponentBodyLogic";
function Body() {
  const {
    count,
    countWithNight,
    delivery,
    handleIncrement,
    handleDecrement,
    handleIncrementForNight,
    handleDecrementForNight,
  } = useBodyLogic();

  return (
    <>
      <MapBody />
      <div className="mainDiv">
        <div className="divForInfo">
          <BodyInfo />
          <CourseInputsAndPrace />
          <PeopleCount
            count={count}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
          />
          <Night />
          <PeopleCountWithNight
            countWithNight={countWithNight}
            onIncrement={handleIncrementForNight}
            onDecrement={handleDecrementForNight}
            delivery={delivery}
          />
          <PeopleRooms />
          <BathRoom />
          <Pool />
          <AdvantagesMain />
          <PagesImg />
        </div>
        <Houses />
        <Options />
      </div>
    </>
  );
}

export default Body;
