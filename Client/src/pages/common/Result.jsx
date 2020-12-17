import React, { Component } from "react";
import jsPDF from "jspdf";
import { PureComponent } from "react";

export default class Result extends PureComponent {
  // var htmlContent = require('./samplePDF');

  constructor(props) {
    super(props);
    this.state = {};
  }

  jsPDFGenerator = () => {

  };

  render() {
    return <button onClick={this.jsPDFGenerator}>Generate PDF</button>;
  }
}
