"use client";
import React, { useEffect } from "react";

const FormSelect = () => {
  useEffect(() => {
    import("../../../libs/nice-select2").then(({ default: NiceSelect }) => {
      new NiceSelect(document.getElementById("conService"));
      //   NiceSelect.bind(document.getElementById("conService"));
    });
  }, []);
  return (
    <select name="conService" id="conService" className="tj-nice-select">
      <option defaultValue={"Choose Service"} disabled>
        Select an option
      </option>
      <option defaultValue="braning">Job Recruitment</option>
      <option defaultValue="web">Need a website</option>
      <option defaultValue="app">Collaborate on a project</option>
    </select>
  );
};

export default FormSelect;
