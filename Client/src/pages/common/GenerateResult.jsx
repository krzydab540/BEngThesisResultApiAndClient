import React from "react";
import jsPDF from "jspdf";
import Pdf from "react-to-pdf";

export default async function GenerateResult(idRes) {
  let res = await fetch("https://localhost:44301/api/Result/Specific", {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      idResult: idRes
      // email: this.state.email,
    })
  });

  let result = await res.json();
  return result;
}
