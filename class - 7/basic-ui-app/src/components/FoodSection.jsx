import React from "react";

const FoodSection = (props) => {
  let { foodSectionDatas } = props;
  console.log("props", props);
  return (
    <>
      {foodSectionDatas?.map((foodSectionDatas, idx) => {
        const odd = idx % 2 !== 0;

        return (
          <section className={`section ${odd ? "odd" : ""}`}>
            <div className="box1">
              <h2>{foodSectionDatas.title}</h2>
              <h4>{foodSectionDatas.descripiton}</h4>
            </div>
            <div className="box2">
              <img src={foodSectionDatas.image} alt="image" />
            </div>
          </section>
        );
      })}
    </>
  );
};

export default FoodSection;
