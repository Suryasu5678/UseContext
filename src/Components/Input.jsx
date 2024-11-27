import React from "react";

const Input = ({ input,type,label,placeholder,onChange}) => {
  return (
    <div>
      <input type={type}placeholder={placeholder} onChange={onChange}
      />
      <label htmlFor="">{label}</label>
    </div>
  );
};

export default Input;
