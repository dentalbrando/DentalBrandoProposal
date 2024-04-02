"use client";
import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePage } from "@app/store/pageSclice";
import { resetSquence, setPageSequence } from "@app/store/pageSequence";
import { FaCheck } from "react-icons/fa";
import Link from "next/link";
const Sidebar = () => {
  const pageSequence = useSelector((state) => state.pageSequence).pageSequence;
  const [items, setItems] = useState(pageSequence);
  const [companyLogoError, setCompanyLogoError] = useState();

  const { companyLogo } = useSelector((state) => state.cover_page);
  const dispatch = useDispatch();
  const onDragEnd = (result) => {
    if (!result.destination) return; // If dropped outside the list
    const reorderedItems = Array.from(pageSequence);
    const [movedItem] = reorderedItems.splice(result.source.index, 1);
    reorderedItems.splice(result.destination.index, 0, movedItem);
    setItems(reorderedItems);
    dispatch(setPageSequence(reorderedItems));
  };
  const generate = () => {
    if (companyLogo) {
      dispatch(updatePage("100"));
      setCompanyLogoError("");
    } else {
      setCompanyLogoError("company logo is required in cover page");
    }
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
                      <div className="desc flex-start p-4 bg-hover-blue rounded-xl select-none inputDiv gap-4">
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
                        <p className="font-medium text-[18px] font-medium text-black">
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
                  className="mt-8 button border border-gray-200 p-3 rounded-2xl bg-white"
                  onClick={() => generate()}
                >
                  Generate
                </button>
                <p className="text-red-500 px-2 font-semibold text-lg">
                  {companyLogoError}
                </p>
                <button
                  type="button"
                  className="button border border-gray-200 p-3 rounded-2xl bg-white"
                  onClick={() => {
                    dispatch(resetSquence());
                    setItems([
                      { id: "1", content: "Cover Page", checked: true },
                      { id: "2", content: "Table of Contents", checked: true },
                      { id: "3", content: "Cover Letter", checked: true },
                      { id: "4", content: "About your Project", checked: true },
                      { id: "5", content: "Proposed Sitemap", checked: true },
                      { id: "6", content: "About Us", checked: true },
                      { id: "7", content: "Our Process", checked: true },
                      {
                        id: "8",
                        content: "Why Soft Enterprise",
                        checked: true,
                      },
                      { id: "9", content: "Estimate Budget", checked: true },
                      {
                        id: "10",
                        content: "Terms & conditions",
                        checked: true,
                      },
                      { id: "11", content: "Last Page", checked: true },
                    ]);
                  }}
                >
                  Reset all
                </button>
                {/* <button> */}
                  <Link 
                  className="text-center mt-3 button border border-gray-200 p-3 rounded-2xl bg-white"
                    href="/recent"
                  >
                    Recent proposals
                  </Link>
                {/* </button> */}
              </div>
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Sidebar;
