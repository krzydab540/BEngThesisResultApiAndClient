import React, { Component } from "react";
import jsPDF from "jspdf";
import { pdf } from "@react-pdf/renderer";
// import { PureComponent } from "react";

export default async function GenerateResult() {
  // var htmlContent = require('./samplePDF');

  let res = await fetch("https://localhost:44301/api/Result/Get/1", {
    method: "get",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  let result = await res.json();
  // console.log(result.htmlResult);
  GeneratePdf(result.htmlResult)
}

function GeneratePdf(inputString){
  var doc = new jsPDF("p", "em", "a4", false);
  doc.addFont("Roboto-Regular.ttf", "Roboto-Regular", "normal");
  doc.setFont("Roboto-Regular");
  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0); //black
  doc.html($(inputString));


  doc.text(33, 33, "SAMPLE TEXT");
  doc.save("sample-document.pdf");
}