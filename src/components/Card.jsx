import React from "react";
import { category } from "./Category";

export default function Card() {
  return (
    <div className="relative">
      <img
        className="w-[250px] h-[200px] shadow-2xl"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREcC9K09JTfpjcHYvjyYAVY_ZcEm5wbBr_8Q&s"
        alt=""
      />
      <span className="absolute bottom-[60px] font-bold font-sans p-2">
        50% off upto 100rs
      </span>
      <h2>Mojo Piza</h2>
      <h3>4.5</h3>
      <h4>23-30 min</h4>
    </div>
  );
}
