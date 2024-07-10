"use client";
import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePage } from "@app/store/pageSclice";
import { resetSquence, setPageSequence } from "@app/store/pageSequence";
import { FaCheck } from "react-icons/fa";
import Link from "next/link";
import axios from "axios";

const Sidebar = () => {
  const pageSequence = useSelector((state) => state.pageSequence).pageSequence;
  const [items, setItems] = useState(pageSequence);
  const page = useSelector((state) => state.page);
  const dispatch = useDispatch();
  const onDragEnd = (result) => {
    if (!result.destination) return;
    const reorderedItems = Array.from(pageSequence);
    const [movedItem] = reorderedItems.splice(result.source.index, 1);
    reorderedItems.splice(result.destination.index, 0, movedItem);
    setItems(reorderedItems);
    dispatch(setPageSequence(reorderedItems));
  };
  const generate = () => {
    dispatch(updatePage("100"));
  };

  const handleChangeChecked = (e, itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, checked: e.target.checked } : item
      )
    );
  };
  useEffect(() => {
    dispatch(setPageSequence(items));
  }, [items]);

  async function logout() {
    try {
      await axios.post("/api/logOut");
    } catch (error) {
      console.error("Error logging out:", error);
    } finally {
      window.location.href = "/";
    }
  }

  return (
    <div className="w-[20vw] h-fit border-r-2 border-b-2 border-color px-7 pt-4 pb-10 custom-bg">
      <h1 className="text-main-blue text-[28px] px-6 font-semibold mt-1 mb-2">
        Proposal Pages
      </h1>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="item_list">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="flex flex-col"
            >
              {pageSequence.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.dragHandleProps}
                      {...provided.draggableProps}
                      onClick={() => dispatch(updatePage(item.id))}
                    >
                      <div
                        className={`desc flex-start p-4 rounded-xl select-none inputDiv gap-4 ${
                          page.formId === item.id ||
                          page.formId + "" === item.id
                            ? "bg-main-blue text-white"
                            : "bg-hover-blue"
                        }`}
                      >
                        <div className="checkBoxDiv">
                          <input
                            type="checkbox"
                            checked={item.checked}
                            id={item.id}
                            onChange={(e) => handleChangeChecked(e, item.id)}
                            onClick={(e) => e.stopPropagation()}
                            className="inputBox"
                          />
                        </div>
                        <div
                          className={`demyBox rounded-md ${
                            item.checked
                              ? "bg-main-blue"
                              : "bg-white border-2 border-[#D9D9D9]"
                          }`}
                        >
                          {item.checked ? <FaCheck /> : null}
                        </div>
                        <p
                          className={`font-medium text-[18px]  text-black ${
                            page.formId === item.id ||
                            page.formId + "" === item.id
                              ? "text-white"
                              : "text-black"
                          }`}
                        >
                          {item.content}
                        </p>
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
              <div className="flex flex-col gap-3">
                <button
                  type="button"
                  className="mt-8 border border-gray-200 p-3 rounded-2xl bg-main-blue text-white font-[500] "
                  style={{ fontSize: "24px" }}
                  onClick={() => generate()}
                >
                  Generate All
                </button>
                <button
                  type="button"
                  className="p-3 rounded-2xl bg-light-blue text-main-blue hover:text-white font-[500] "
                  style={{ fontSize: "24px" }}
                  onClick={() => {
                    dispatch(resetSquence());
                    setItems([
                      { id: "1", content: "Cover Page", checked: true },
                      { id: "2", content: "Table of Contents", checked: true },
                      { id: "3", content: "Cover Letter", checked: true },
                      { id: "4", content: "About your Project", checked: true },
                      // { id: "5", content: "Proposed Sitemap", checked: true },
                      { id: "5", content: "About Us", checked: true },
                      { id: "6", content: "Our Process", checked: true },
                      { id: "7", content: "Why Dental Brando", checked: true },
                      { id: "8", content: "Packages", checked: true },
                      { id: "9", content: "Dominate", checked: true },
                      {
                        id: "10",
                        content: "Terms & Conditions",
                        checked: true,
                      },
                      { id: "11", content: "Last Page", checked: true },
                    ]);
                  }}
                >
                  Reset All
                </button>
                <Link
                  className="text-center mt-3 p-3 rounded-2xl bg-light-blue text-main-blue hover:text-white font-[500] "
                  style={{ fontSize: "24px" }}
                  href="/recent"
                >
                  Recent Proposals
                </Link>
                <button
                  className="text-center mt-3 p-3 rounded-2xl bg-light-blue text-main-blue hover:text-white font-[500] "
                  style={{ fontSize: "24px" }}
                  onClick={logout}
                >
                  Log Out
                </button>
              </div>
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Sidebar;
