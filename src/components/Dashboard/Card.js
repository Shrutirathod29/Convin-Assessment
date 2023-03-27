import React from "react";
import { Modal } from "antd";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { cardActions } from "../../redux/slices/cardSlice";
import { useNavigate } from "react-router-dom";
const Card = ({ val }) => {
  const navigate = useNavigate();
  const showEditPage = (e) => {
    e.stopPropagation();
    navigate("/edit", {
      state: {
        ...val,
      },
    });
  };
  const { confirm } = Modal;
  const dispatch = useDispatch();
  const showDeleteModal = (e) => {
    e.stopPropagation();
    confirm({
      title: "Are you sure delete this card?",
      icon: <ExclamationCircleFilled />,
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        dispatch(cardActions.deleteCard(val));
      },
      onCancel() {},
    });
  };
  const showIframe = () => {
    dispatch(cardActions.addToHistory({ ...val, time: Date.now() }));
    confirm({
      title: "IFrame",
      content: <iframe src={val.url} />,
      cancelText: "Back",
      okText: "",
      okButtonProps: {
        disabled: true,
        style: {
          display: "none",
        },
      },
    });
  };

  return (
    <>
      <div
        className="justify-self-center shadow rounded-lg p-4  cursor-pointer flex flex-col gap-4 w-[300px] overflow-hidden"
        onClick={showIframe}
      >
        <p className="">{val.name}</p>
        <p className="overflow-hidden">{val.url}</p>
        <p className="italic">{val.category}</p>
        <div className="flex justify-between items-center">
          <button
            className="rounded py-1 px-2 text-white bg-gray-500"
            onClick={showEditPage}
          >
            Edit
          </button>
          <button
            className="rounded py-1 px-2 text-white bg-red-500"
            onClick={showDeleteModal}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
