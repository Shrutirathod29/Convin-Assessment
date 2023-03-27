import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  const { cardObj, activeCategory } = useSelector((state) => state.card);
  const navigate = useNavigate();
  const openAddCardPage = () => {
    navigate("/add");
  };
  const [cards, setCards] = useState([]);
  useEffect(() => {
    if (activeCategory !== "") setCards(cardObj[activeCategory]);
  }, [activeCategory, cardObj]);
  return (
    <div className="grid grid-cols-10 ">
      <div
        className="col-span-2 "
        style={{
          height: "calc(100vh - 48px)",
        }}
      >
        <Sidebar />
      </div>
      <div
        className="col-span-8 p-4 flex flex-col gap-4"
        style={{
          height: "calc(100vh - 48px)",
        }}
      >
        <div className="flex justify-end">
          <button
            className="px-2 py-1 border-2 border-red-500 rounded-lg text-red-500"
            onClick={openAddCardPage}
          >
            + Add Card
          </button>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {cards.map((val) => {
            return <Card key={val.id} val={val} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
