import React from "react";
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";
import GenerateResult from "./GenerateResult";

const ref = React.createRef();
const divStyle = {
  // color: 'black',
  // fontFamily: "Times New Roman",
  // padding: 10 ,
};

const hardText =
  "<div><h1>BLOOD ANALYSIS REPORT</h1><h3>Sample Hospital Laboratory, Gliwice Zwycięstwa St., 4/20</h3><table><tr><td>Result ID:</td><td>1</td></tr><tr><td>WBC:</td><td>4.1 × 10^3</td></tr><tr><td>RBC:</td><td>3.5 × 10^3</td></tr><tr><td>HGB:</td><td>9.8</td></tr><tr><td>HCT:</td><td>28.8</td></tr><tr><td>Platelets:</td><td><10 × 10^3</td></tr><tr><td>Segs (%):</td><td>53 %</td></tr><tr><td>Blasts (%):</td><td>7 %</td></tr><tr><td>Date:</td><td>12/03/2020</td></tr><tr><td>Conducted by:</td><td>dr Remigiusz Nałkowski</td></tr></table></div>";

class Result extends React.Component {
  constructor() {
    super();
    this.state = { textResult: "" };
  }

  componentDidMount() {
    var resultPromise = GenerateResult();
    resultPromise.then((response) => {
      this.setState({
        textResult: response.htmlResult,
      });
    });
  }

  render() {
    return (
      <div>
        <Pdf targetRef={ref} filename="Test_result.pdf">
          {({ toPdf }) => (
            <div className="middle-btn-wrapper">
              {" "}
              <button className="btn btn-primary middle-btn" onClick={toPdf}>
                Download as PDF
              </button>
            </div>
          )}
        </Pdf>
        <div ref={ref} className="page">
          <div
            style={divStyle}
            dangerouslySetInnerHTML={{ __html: this.state.textResult }}
          />
        </div>
      </div>
    );
  }
}
export default Result;
