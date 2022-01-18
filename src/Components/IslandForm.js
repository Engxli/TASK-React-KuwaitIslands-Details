import { useState } from "react";

export default function IslandForm({ island, changeVisitorCount }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const bookNow = () => {
    window.confirm(
      `Are you sure you want to book to ${island.name} with the Name: ${name}, phone: ${number}`
    )
      ? changeVisitorCount(island.id - 1)
      : alert("you have canceled the booking");
  };
  // console.log(visitors);
  // const changeVisitorCount = () => {
  //   let myNewVisitors = visitors;

  //   myNewVisitors[island.id - 1] += 1;
  //   setVisitors(myNewVisitors);
  // };
  return (
    <div className="form">
      <h2>{island.name}</h2>
      <img src={island.img} alt={island.name} />
      <h3>Book a trip to {island.name} island</h3>
      <input
        onChange={(e) => {
          setName(e.target.value);
        }}
        placeholder="Type Full Name"
      />
      <input
        onChange={(e) => {
          setNumber(e.target.value);
        }}
        type="number"
        placeholder="Type Phone Number"
      />
      <button className="book" onClick={bookNow}>
        Book for today!
      </button>
    </div>
  );
}
