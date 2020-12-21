import React from "react";
import jsPDF from "jspdf";
import Pdf from "react-to-pdf";

export default async function GenerateResult() {
  let res = await fetch("https://localhost:44301/api/Result/Get/1", {
    method: "get",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  let result = await res.json();
  return result;
}
