import React, { useState } from "react";
import { message } from "antd";
import { useDispatch } from "react-redux";
import cardSlice, { cardActions } from "../../redux/slices/cardSlice";
import { useNavigate } from "react-router-dom";
const AddCard = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState("");
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const addCard = () => {
    if (isEmpty(name)) {
      messageApi.warning("Name can't be empty");
      return;
    }
    if (isEmpty(url)) {
      messageApi.warning("Url can't be empty");
      return;
    }
    if (isEmpty(category)) {
      messageApi.warning("Category can't be empty");
      return;
    }
    dispatch(
      cardActions.addCard({
        name,
        category,
        url,
      })
    );

    messageApi.success("Card Added");
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };
  const isEmpty = (val) => val.trim() === "";
  return (
    <div
      className="p-8 grid place-items-center "
      style={{
        height: "calc(100vh - 48px)",
      }}
    >
      {contextHolder}
      <div className="flex justify-center flex-col gap-4 shadow rounded-lg p-10">
        <div className="flex gap-4 justify-self-center">
          <span className="w-16">Name</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-b border-gray-800"
          />
        </div>
        <div className="flex gap-4 justify-self-center">
          <span className="w-16">Url</span>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="border-b border-gray-800"
          />
        </div>
        <div className="flex gap-4 justify-self-center">
          <span className="w-16">Category</span>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border-b border-gray-800"
          />
        </div>
        <div className="">
          <button
            className="shadow bg-red-500 text-white py-1 px-2 rounded"
            onClick={addCard}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCard;
