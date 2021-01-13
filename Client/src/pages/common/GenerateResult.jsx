import React from "react";
import jsPDF from "jspdf";
import Pdf from "react-to-pdf";

export default async function GenerateResult(idResult) {
  let auth = localStorage.getItem("token");
  let res = await fetch("https://localhost:44301/api/Result/Specific", {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + auth,
    },
    body: JSON.stringify({
      idResult: idResult,
      // email: this.state.email,
    }),
  });

  let result = await res.json();
  return result;
}
