import React from "react";
import Card from "./Card";

export default function Hotel() {
  return (
    <>
      <div className="shadow-md">
        <h1 className="font-bold mx-3 m-5 p-10 text-[20px] font-sans">
          Top most famous Restaurants
        </h1>
      </div>
      <div className="mx-14 grid grid-cols-3">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}
