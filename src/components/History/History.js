import React from "react";
import { useSelector } from "react-redux";

const History = () => {
  const history = useSelector((state) => state.card.history);
  return (
    <div className="p-4">
      <h1 className="text-blue-700 font-semibold  text-xl">History</h1>
      <div className="p-4 grid gap-5">
        <div className="shadow grid grid-cols-5 overflow-hidden rounded-lg gap-4">
          <span className="">S no.</span>
          <span className="overflow-hidden">Name</span>
          <span className="overflow-hidden">Url</span>
          <span className="overflow-hidden">Category</span>
          <span className="overflow-hidden">Time</span>
        </div>
        {history.map((val, index) => {
          return (
            <div
              className="shadow grid grid-cols-5 overflow-hidden rounded-lg gap-4"
              key={index}
            >
              <span className="">{index + 1}</span>
              <span className="overflow-hidden">{val.name}</span>
              <span className="overflow-hidden">{val.url}</span>
              <span className="overflow-hidden">{val.category}</span>
              <span className="overflow-hidden">
                {new Date(val.time).toLocaleTimeString()}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default History;
