import React from "react";
import Card from "../card/card";

import "./Cards.css";

const Cards = ({ datas }) => {
  //console.log(datas);
  return (
    <div className="cards">
      {datas != []
        ? datas.map((item, index) => {
            return <Card key={index} movie={item} />;
          })
        : null}
    </div>
  );
};

export default Cards;
