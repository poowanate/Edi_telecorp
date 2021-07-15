import React from 'react';
import jsPDF from "jspdf";
import "jspdf-autotable";


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      people: [
        { name: "Keanu Reeves", profession: "Actor", a1: "Actor",  a12: "Actor",  a13: "Actor",  a14: "Actor",  a15: "Actor",  a16: "Actor",  a17: "Actor",  a18: "Actor",  a19: "Actor",  a20: "Actor",  a21: "Actor" },
        { name: "Lionel Messi", profession: "Football Player" },
        { name: "Cristiano Ronaldo", profession: "Football Player" },
        { name: "Jack Nicklaus", profession: "Golf Player" },
      ]
    }
  }
  footer= () =>{ 
    doc.text(150,285, 'page ' + doc.page); //print number bottom right
    doc.page ++;
};
  exportPDF = () => {
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    const title = "My Awesome Report";
    const headers = [["NAME", "PROFESSION","a1","a12","a13","a14","a15","a16"]];

    const data = this.state.people.map(elt=> [elt.name, elt.profession]);

    let content = {
      startY: 50,
      head: headers,
      body: data
    };

    doc.text(title, marginLeft, 60);
    doc.autoTable(content);
   
   
    doc.save("report.pdf")
  }

  render() {
    return (
      <div>
        <button onClick={() => this.exportPDF()}>Generate Report</button>
      </div>
    );
  }
}

export default App;