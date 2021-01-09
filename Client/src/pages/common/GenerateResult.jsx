import React from "react";
import jsPDF from "jspdf";
import Pdf from "react-to-pdf";

export default async function GenerateResult(idResult) {
  let res = await fetch("https://localhost:44301/api/Result/Specific", {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      idResult: idResult,
      // email: this.state.email,
    }),
  });

  console.log("Generate Result - id result:");
  // console.log(idResult);

  let result = await res.json();
  return result;
}
