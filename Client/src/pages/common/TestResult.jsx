import React from "react";
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";
import GenerateResult from "./GenerateResult";

const ref = React.createRef();

// export default function MakePdf() {
class TestResult extends React.Component {
  constructor() {
    super();
    this.state = { textResult: "" };
  }

  componentDidMount() {
    var resultPromise = GenerateResult();
    resultPromise.then((response) => {
      // textResult = response.htmlResult;
      this.setState({
        textResult: response.htmlResult,
      });
    });
  }

  // var hardText = "<div>    <h1>BLOOD ANALYSIS REPORT</h1>    <h3>Sample Hospital Laboratory, Gliwice Zwycięstwa St., 4/20</h3>    <table>            <tr>                <td>Result ID:</td>                <td>1</td>            </tr>            <tr>                <td>White blood cell count:</td>                <td>120</td>            </tr>            <tr>                <td>Red blood cell count:</td>                <td>430</td>            </tr>            <tr>                <td>Platelet count:</td>                <td>99</td>            </tr>            <tr>                <td>Another sample parameter count:</td>                <td>12</td>            </tr>            <tr>                <td>Date:</td>                <td>12/03/2020</td>            </tr>            <tr>                <td>Conducted by:</td>                <td>dr Remigiusz Nałkowski</td>            </tr>    </table></div>"
  render() {
    return (
      <div>
        <Pdf targetRef={ref} filename="code-example.pdf">
          {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
        </Pdf>
        <div ref={ref}>
          <div dangerouslySetInnerHTML={{ __html: this.state.textResult }} />
        </div>
      </div>
    );
  }
}
export default TestResult