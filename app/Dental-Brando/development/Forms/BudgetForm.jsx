import {
  appendTerm,
  setCurrency,
  setDiscount,
  setService,
  setTerms,
} from "@app/store/budgetBd";
import TextInput from "@components/TextInput";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const BudgetForm = () => {
  const dispatch = useDispatch();
  const storedServices = useSelector((state) => state.budgetBd.service);
  const budget = useSelector((state) => state.budgetBd);
  const [services, setServices] = useState(
    storedServices ? storedServices : [{}]
  ); // An array of service objects
  const handleChange = (index, field, value) => {
    // Handle changes in form fields and update the state
    const updatedServices = [...services];
    updatedServices[index] = {
      ...updatedServices[index],
      [field]: value,
    };
    setServices(updatedServices);

    // Dispatch to Redux for storing the updated service object
    dispatch(setService(updatedServices));
  };

  const handleAddService = () => {
    // Add a new service object to the state
    setServices([...services, {}]);
  };
  const handleAddTerm = () => {
    dispatch(appendTerm("")); // You can pass an initial value for the new term if needed
  };
console.log(storedServices);
console.log(budget);
  return (
    <div className="overflow-y-visible custom-scroll mt-5 h-fit custom-bg w-[900px] py-12 px-12 rounded-2xl border-2 border-color">
      {services.map((service, index) => (
        <div>
          <div className=" my-5">
            <TextInput
              label="Service Description"
              type="text"
              length="full"
              placeholder="Enter Service Description"
              value={service.description || ""}
              onChange={(e) =>
                handleChange(index, "description", e.target.value)
              }
            />
          </div>
          <div
            key={index}
            className="flex justify-between items-end  w-[100%]  my-5"
          >
            {/* <div className="w-[20%] flex flex-col"> */}
            <label className="text-gray-900 w-[20%] text-[16px] font-medium my-2">
              Package Type
            </label>
            <select
              className="w-[80%] rounded-md  text-[14px] font-normal border-2 border-color outline-none"
              value={service.packageType || ""}
              onChange={(e) =>
                handleChange(index, "packageType", e.target.value)
              }
            >
              <option value="">Select Package...</option>
              <option value="basic">Basic</option>
              <option value="premium">Premium</option>
              <option value="standard">Standard</option>
            </select>
          </div>
          <div className="flex  w-[100%] py-5 border-b-2 border-[rgb(217,217,217)]">
            <label className="text-gray-900 w-[20%] text-[16px] my-2 font-medium">
              Service Charges
            </label>
            <input
              className={`text-gray-900 text-[14px] p-2 rounded-md font-normal border-2 border-color outline-none w-[50%]`}
              type="number"
              length="full"
              placeholder="Enter Service Charges"
              value={service.charges || ""}
              onChange={(e) => handleChange(index, "charges", e.target.value)}
            />
            {index === services.length - 1 && (
              <button
                className="flex justify-center items-center text-2xl p-3 rounded-full w-[2.9rem] h-[2.9rem] ms-5 bg-main-blue"
                onClick={handleAddService}
              >
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#000000"
                    d="M7.75 2a.75.75 0 0 1 .75.75V7h4.25a.75.75 0 0 1 0 1.5H8.5v4.25a.75.75 0 0 1-1.5 0V8.5H2.75a.75.75 0 0 1 0-1.5H7V2.75A.75.75 0 0 1 7.75 2Z"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      ))}
      <div className="flex justify-center items-center w-[100%]  my-5">
        <TextInput
          label="Currency"
          type="text"
          length="half"
          placeholder="Enter Currency"
          onChange={(e) => {
            dispatch(setCurrency(e.target.value));
          }}
          value={budget.currency}
        />
        <TextInput
          label="Discount"
          type="number"
          length="half"
          secondInput={true}
          placeholder="Enter Discount"
          onChange={(e) => {
            dispatch(setDiscount(e.target.value));
          }}
          value={budget.discount}
        />
      </div>
      <div className=" flex justify-between  my-5">
        <label className="text-gray-900 text-[16px] font-medium w-[20%]">
          Terms
        </label>
        <div className="flex flex-col gap-5  w-[80%]">
          {budget.terms.map((term, index) => (
            <input
              className=" text-lg p-2 rounded-md text-[14px] font-normal border-2 border-color outline-none w-[100%]"
              key={index}
              noLabel
              type="text"
              placeholder="Enter Terms"
              value={term}
              onChange={(e) => {
                dispatch(setTerms({ index, term: e.target.value }));
              }}
            />
          ))}
          <button
            className="rounded-xl p-3 py-3 bg-main-blue text-white"
            onClick={handleAddTerm}
          >
            Add Term
          </button>
        </div>
      </div>
    </div>
  );
};

export default BudgetForm;
