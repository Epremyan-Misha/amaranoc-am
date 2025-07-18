import React, { useState,useEffect } from "react";
import "../index.css";
import ProductCard from "./ProductCards";
import homeImages from "../DataBase";
import BodyInfo from "./ComponentForBodyInfo";
import MapBody from "./ComponentForMapBody";
import Course from "./ComponentForCourseBody";
import CourseInputs from "./ComponentForCourseInput";
import PeopleCount from "./ComponentForPeopleCount";
import Night from "./ComponentForNight";
import PeopleCountWithNight from "./ComponentForPeopleCountWithNight";
function Body() {
  const [count, setCount] = useState(1);
  const [countWithNight, setCountWithNight] = useState(1);
  const [delivery,setDelivery] = useState(false)
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const handleIncrementForNight= ()=>{
    setCountWithNight(countWithNight+1)
  }
  const handleDecrementForNight = ()=>{
    if (countWithNight > 1) {
      setCountWithNight(countWithNight - 1)
    }
  }
 useEffect(() => {
  if (countWithNight >= 10) {
    setDelivery(true);
  } else {
    setDelivery(false);
  }
}, [countWithNight]);
  return (
    <>
     <MapBody />
      <div className="mainDiv">
        <div className="divForInfo">
                  <BodyInfo />
          <div className="divForPrace">
            <Course />
            <CourseInputs />
          </div>
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
          <div className="peopleRoomMain">
            <h4 className="peopleRoomH4">Սենյակների քանակ</h4>
            <div className="peopleRoomAll12">
                <p className="allPeople">Բոլորը</p>
                <p className="p1">1</p>
                <p className="p2">2</p>
            </div>
            <div className="peopleRoom345">
                <p className="p3">3</p>
                <p className="p4">4</p>
                <p className="p5">5</p>
            </div>
            <div className="peopleRoom6AndMore">6 և ավելի</div>
          </div>
          <div className="bathroomMain">
            <h4 className="bathroomH4">Սանահանգույցների քանակ</h4>
            <div className="bathroomAll12">
                <p className="allPeople">Բոլորը</p>
                <p className="p1">1</p>
                <p className="p2">2</p>
            </div>
            <div className="bathroom3">3+</div>
          </div>
          <div className="poolMain">
            <h4 className="poolH4">Լողավազան</h4>
            <div className="allAndOpen">
                <p className="allPeople">Բոլորը</p>
                <p className="openPool">Բաց</p>
            </div>
            <div className="closeAndHeatedPools">
                <p className="closePool">Փակ</p>
                <p className="heatedPool">Տաքացվող</p>
            </div>
            <div className="withoutAPool">Առանց լողավազանի</div>
          </div>
          <div className="advantagesMain">
            <h4 className="advantagesH4">Առավելություններ</h4>
            <div className="advantages">
                <p>Շոգեբաղնիք</p>
                <p>Ջակուզի</p>
                <p>Բիլիարդ</p>
                <p>Սեղանի թենիս</p>
                <p>Բացօթյա տաղավար</p>
                <p>Փակ տաղավար</p>
                <p>Մանղալ</p>
                <p>Թոնիր</p>
            </div>
          </div>
                  <img className="pagesImg" src="photo/pages.png"/>
        </div>
        <div className="aranjnatnerMain">
  {homeImages.map((img) => (
    <div className="houseMainDiv">
      <div className="divForHousesMain">
        <img className="productHousesImg" src={img.image} alt={img.title} />
        <div className="titleAndPeople">
          <p className="houseTitle">{img.title}</p>
          <img className="iconPeople" src="photo/iconPeople.png" />
          <p className="housePeople">{img.people}</p>
        </div>
        <p className="housePrace">{img.prace}</p>
      </div>
    </div>
  ))}
</div>
        <div className="divForOptions">
          <div className="aranjnatner">
            <img style={{ marginLeft: "25px" }} src="photo/nkar 1.png" />
            <p style={{ borderBottom: "solid 3px rgb(255, 123, 0)" }}>
              Առանձնատներ
            </p>
          </div>
          <ProductCard title="Frame houses" image="photo/nkar 2.png" />
          <ProductCard title="Տնակներ" image="photo/nkar 3.png" />
          <ProductCard title="Փակ լողավազան" image="photo/nkar 4.png" />
          <ProductCard title="Աղմուկից հեռու" image="photo/nkar 5.png" />
          <ProductCard title="Շքեղ տեսարան" image="photo/nkar 6.png" />
        </div>
      </div>
    </>
  );
}

export default Body;
