import React, { useState } from "react";
import "./index.css";
import ProductCard from "./ProductCards";
import homeImages from "./DataBase";
function Body() {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <div className="div">
        <div className="divForMap">Քարտեզ</div>
        <img src="photo/copy.png" />
      </div>
      <div className="mainDiv">
        <div className="divForInfo">
          <h3 className="h3">Տարածաշրջան</h3>
          <div className="forCitys">
            <div className="city">
              <p>Դիլիջան 88</p>
              <p>Ծաղկաձոր 63</p>
              <p>Ձորաղբյուր 17</p>
              <p>Ձորաղբյուր 17</p>
              <p>Աշտարակ 15</p>
            </div>
          </div>
          <div className="divForPrace">
            <div className="divForCourse">
              <h4>Արժեք</h4>
              <p className="dram">Դ</p>
              <p className="dollar">$</p>
              <p className="euro">€</p>
              <p className="rubli">₽</p>
            </div>
            <div className="divForInputs">
              <input
                className="inputForStartPrace"
                type="number"
                placeholder="Սկսած"
              />
              <input
                className="inputForEndingPrace"
                type="number"
                placeholder="Մինչև"
              />
            </div>
          </div>
          <div className="divForCountMain">
            <h4 className="peopleCount">Մարդկանց թույլատրելի քանակ</h4>
            <div className="divForCount">
              <button className="minusBtn" onClick={handleDecrement}>-</button>
              <p className="count">{count}</p>
              <button className="plusBtn" onClick={handleIncrement}>+</button>
            </div>
          </div>
          <div className="nightMain">
            <h4 className="nightH4">Գիշերակացի առկայություն</h4>
            <div className="night">
                <div className="nigthYes">
                    <p className="allPeople">Բոլորը</p>
                    <p className="noPeople">Ոչ</p>
                </div>
                <div className="nigthNo">
                    <p className="yesPeople">Այո</p>
                </div>
            </div>
          </div>
          <div className="countPeopleNightMain">
            <h4 className="nightPeopleH4">Մարդկանց թույլատրելի քանակը գիշերակացով</h4>
            <div className="countPeopleNight">
                <button className="minusPeopleBtn"onClick={handleDecrement}>-</button>
                <p className="countPeople">{count}</p>
                <button className="plusPeopleBtn"  onClick={handleIncrement}>+</button>
            </div>
          </div>
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
