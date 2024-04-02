"use client";

import React, { useEffect, useState } from "react";

const TextInput = (props) => {
  const [formattedValue, setFormattedValue] = useState("");

  useEffect(() => {
    setFormattedValue(props.value);
  }, [props.value == ""]);

  const handleChange = (event) => {
    const inputValue = event.target.value;
    if (!(props.label == "CNIC" || props.label == "Phone Number")) {
      setFormattedValue(inputValue);
      if (props.onChange) {
        props.onChange(event);
      }
    }
    if (props.label == "CNIC") {
      const formattedInputValue = formatCNIC(inputValue);
      setFormattedValue(formattedInputValue);
      if (props.onChange && event.target.value.length <= 15) {
        props.onChange(event);
      }
    }
    if (props.label == "Phone Number") {
      const formatedPhoneNumber = formatPhoneNumber(inputValue);
      setFormattedValue(formatedPhoneNumber);
      if (props.onChange && event.target.value.length <= 12) {
        if (props.onChange) {
          props.onChange(event);
        }
      }
    }
  };

  const formatCNIC = (inputValue) => {
    // Remove all non-digit characters
    const digitsOnly = inputValue.replace(/\D/g, "");
    // Format CNIC with dashes
    if (digitsOnly.length >= 6 && digitsOnly.length <= 12) {
      return `${digitsOnly.slice(0, 5)}-${digitsOnly.slice(5, 12)}`;
    } else if (digitsOnly.length > 13 && digitsOnly.length <= 13) {
      return `${digitsOnly.slice(0, 5)}-${digitsOnly.slice(
        5,
        12
      )}-${digitsOnly.slice(12)}`;
    } else if (digitsOnly.length >= 12) {
      return `${digitsOnly.slice(0, 5)}-${digitsOnly.slice(
        5,
        12
      )}-${digitsOnly.slice(12, 13)}`;
    } else if (digitsOnly.length <= 6) {
      return digitsOnly;
    }
  };
  const formatPhoneNumber = (inputValue) => {
    const digitsOnly = inputValue.replace(/\D/g, "");
    // Format CNIC with dashes
    if (digitsOnly.length >= 5) {
      return `${digitsOnly.slice(0, 4)}-${digitsOnly.slice(4, 11)}`;
    } else if (digitsOnly.length <= 5) {
      return digitsOnly;
    }
  };

  return props.length === "full" ? (
    <div
      className={`flex justify-between items-center ${props.customClass}' w-[100%]`}
    >
      {!props.noLabel && (
        <label className="text-gray-900 3xl:text-2xl text-[16px] font-medium my-2 w-[20%]">
          {props.label}
          {props.isImportant ? (
            <span className="text-red-500 text-lg font-semibold">*</span>
          ) : (
            ""
          )}
        </label>
      )}
      <input
        {...props}
        autoFocus
        value={formattedValue}
        className={` text-gray-900 3xl:text-2xl text-lg p-2 ${props.border} rounded-md font-normal border-2 border-color outline-none w-[80%]`}
        onChange={handleChange}
      />
      {props.error && (
        <p className="text-red-500 text-sm">{props.errormessage}</p>
      )}
    </div>
  ) : (
    <div
      className={`flex justify-between items-center ${props.customClass}' w-[50%]`}
    >
      {!props.noLabel && (
        <label
          className={`text-gray-900 text-[16px] font-medium my-2 w-[40%] ${
            props.secondInput ? "flex-end pe-10" : ""
          }`}
        >
          {props.label}
          {props.isImportant ? (
            <span className="text-red-500 text-lg font-semibold">*</span>
          ) : (
            ""
          )}
        </label>
      )}
      <input
        {...props}
        autoFocus
        value={formattedValue}
        className={` text-gray-900 text-[14px] p-2 ${props.border} rounded-md font-normal border-2 border-color outline-none w-[60%]`}
        onChange={handleChange}
      />
      {props.error && (
        <p className="text-red-500 text-sm">{props.errormessage}</p>
      )}
    </div>
  );
};

export default TextInput;
