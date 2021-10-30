import React, { useRef, useState } from "react";
import * as XLSX from "xlsx";
import LargeLogo from "../../assets/img/Largelogo.png";
import CircleLogo from "../../assets/img/logo.png";
import ReactToPrint from "react-to-print";
import { grade } from "../../utils/Grade";

const Jkga = () => {
  const [items, setItems] = useState(null);

  const [loading, setLoading] = useState(false);

  const [index, setIndex] = useState(1);

  const [myClass, setMyClass] = useState("");

  const [terminal, setTerminal] = useState("");
  const [year, setYear] = useState("");

  const printRef = useRef();

  const imgRef = useRef();

  const readExcel = (file) => {
    setLoading(true);
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = (e) => {
        const bufferArray = e.target.result;

        const wb = XLSX.read(bufferArray, { type: "buffer" });

        const wsname = wb.SheetNames[0];
        setMyClass(wsname);

        const ws = wb.Sheets[wsname];

        const data = XLSX.utils.sheet_to_json(ws);

        resolve(data);
      };

      fileReader.onerror = (error) => {
        setLoading(false);
        reject(error);
      };
    });

    promise.then((d) => {
      setLoading(false);
      setItems(d);
    });
  };

  return (
    <div>
      <div className="d-flex align-items-center justify-content-center mt-5">
        <input
          ref={imgRef}
          type="file"
          onChange={(e) => {
            const file = e.target.files[0];

            if (!file.name.includes("xlsx")) {
              return alert("You can upload only excel files");
            } else {
              readExcel(file);
            }
          }}
        />

        <button
          className="btn btn-danger"
          style={{ color: "white" }}
          disabled={loading}
          onClick={() => {
            setItems(null);
            imgRef.current.value = "";
          }}
        >
          Clear file
        </button>
      </div>

      {loading ? (
        <div className=" d-flex justify-content-center flex-nowrap mt-5">
          <div className="spinner-border text-primary mb-2" role="status" />
        </div>
      ) : (
        items && (
          <div className="container-fluid ">
            <table className="table table-hover mt-5 table-bordered table-responsive">
              <thead>
                <tr>
                  <th scope="col">Roll No</th>
                  <th scope="col">Student Name</th>
                  <th scope="col">English</th>
                  <th scope="col">English Oral</th>
                  <th scope="col">Nepali</th>
                  <th scope="col">Nepli Oral</th>
                  <th scope="col">Math</th>
                  <th scope="col">Science</th>
                  <th scope="col">Gk</th>
                  <th scope="col">Dictation</th>
                  <th scope="col">Hand Writing</th>
                  <th scope="col"> Drawing</th>
                  <th scope="col">Attendance</th>
                  <th scope="col">Total</th>
                  <th scope="col">Percentage</th>
                  <th scope="col">Grade</th>
                  <th scope="col">GPA</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {items.map((d) => (
                  <tr key={d.RollNo}>
                    <th>{d.RollNo}</th>
                    <th>{d.StudentsName}</th>
                    <td>{d.English}</td>
                    <td>{d.EnglishOral}</td>
                    <td>{d.Nepali}</td>
                    <td>{d.NepaliOral}</td>
                    <td>{d.Math}</td>
                    <td>{d.Science}</td>
                    <td>{d.Gk}</td>
                    <td>{d.Dictation}</td>
                    <td>{d.HandWriting}</td>
                    <td>{d.Drawing}</td>
                    <td>{d.Attendance}</td>
                    <td>{d.Total}</td>
                    <td>{d.Percentage.toFixed(2)}</td>
                    <td>{d.Grade}</td>
                    <td>{d.Gpa}</td>
                    <td>
                      <button
                        className="btn btn-outline-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        onClick={() => setIndex(d)}
                      >
                        More
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      )}

      {/* Modal */}

      {index && (
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Generate Result of {index.StudentsName}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <div className="mb-2">
                  <div className="form-group">
                    <label htmlFor="terminal" className="form-label">
                      Terminal
                    </label>
                    <input
                      type="text"
                      id="terminal"
                      className="form-control"
                      value={terminal}
                      placeholder="Enter the terminal exam"
                      onChange={(e) =>
                        setTerminal(e.target.value.toUpperCase())
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="year">Year</label>

                    <input
                      type="number"
                      id="year"
                      value={year}
                      className="form-control"
                      placeholder="Enter the exam year"
                      onChange={(e) => setYear(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <ReactToPrint
                trigger={() => (
                  <button
                    style={{ margin: "0px 37px" }}
                    type="button"
                    disabled={!myClass || !terminal || !year}
                    className="btn btn-primary btn-block"
                  >
                    Print Marksheet
                  </button>
                )}
                content={() => printRef.current}
              />

              <br />

              <ComponentToPrint
                index={index}
                terminal={terminal}
                year={year}
                myClass={myClass}
                ref={printRef}
              />
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const ComponentToPrint = React.forwardRef(
  ({ index, terminal, year, myClass }, ref) => {
    return (
      <div className="container" ref={ref}>
        <div className="top-logo-container mb-1">
          <img src={LargeLogo} alt="Large Logo" className="large-logo" />
        </div>
        <div className="d-flex justify-content-center flex-nowrap terminal-text">
          {terminal} TERMINAL EXAMINATION {year}
        </div>
        <div
          className="d-flex mt-2 "
          style={{ justifyContent: "space-between" }}
        >
          <div>
            <b>Stu Name- {index.StudentsName}</b>
          </div>
          <div>
            <b>Class- {myClass}</b>
          </div>
          <div>
            {" "}
            <b>Roll No- {index.RollNo}</b>
          </div>
        </div>
        <hr />
        <div className="container mt-1">
          <p>
            <b>Grading System:</b>
          </p>
          <div
            className="d-flex"
            style={{ marginTop: "-10px", justifyContent: "space-between" }}
          >
            <div className="">90-99.9= A+ or 4</div>
            <div className="">80-89.9=A or 3.6 </div>
            <div className=""> 70-79.9=B+ or 3.2</div>
          </div>

          <div className="d-flex" style={{ justifyContent: "space-between" }}>
            <div>60-69.9=B or 2.8</div>
            <div>50-59.9=C+ or 2.4</div>
            <div>40-49.9=C or 2.0 </div>
          </div>

          <div className="d-flex" style={{ justifyContent: "space-between" }}>
            <div> 20-39.9=D or 1.6</div>
            <div>1.19.9=E or 1.2</div>
            <div>50-59.9=C+ or 2.4</div>
          </div>

          <div className="d-flex" style={{ justifyContent: "space-between" }}>
            <div>40-49.9=C or 2.0 </div>
            <div> 20-39.9=D or 1.6</div>
            <div>1.19.9=E or 1.2</div>
          </div>
        </div>

        <div style={{ marginTop: "-35px" }}>
          <table className="table table-hover mt-5 table-bordered table-responsive">
            <thead>
              <tr>
                <th scope="col">Subject</th>
                <th scope="col">Grade/GPA</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>English</th>
                <th>{grade(index.English, 100)}</th>
              </tr>
              <tr>
                <th>English Oral</th>
                <th>{grade(index.EnglishOral, 50)}</th>
              </tr>
              <tr>
                <th>Nepali</th>
                <th>{grade(index.Nepali, 100)}</th>
              </tr>
              <tr>
                <th>Nepali Oral</th>
                <th>{grade(index.NepaliOral, 50)}</th>
              </tr>
              <tr>
                <th>Math</th>
                <th>{grade(index.Math, 100)}</th>
              </tr>
              <tr>
                <th>Science</th>
                <th>{grade(index.Science, 100)}</th>
              </tr>
              <tr>
                <th>Gk</th>
                <th>{grade(index.Gk, 50)}</th>
              </tr>
              <tr>
                <th>Dictation</th>
                <th>{grade(index.Dictation, 20)}</th>
              </tr>
              <tr>
                <th>HandWriting</th>
                <th>{grade(index.HandWriting, 20)}</th>
              </tr>
              <tr>
                <th>Drawing</th>
                <th>{grade(index.Drawing, 10)}</th>
              </tr>
            </tbody>
          </table>
        </div>

        <div
          className="d-flex align-items-center"
          style={{ justifyContent: "space-between" }}
        >
          <div
            style={{ color: "blue", fontWeight: 500 }}
            className="terminal-text"
          >
            GRADE AVERAGE POINT (GPA): {index.Gpa}
          </div>
          <div>
            <div
              style={{ color: "blue", fontWeight: 500 }}
              className="terminal-text"
            >
              GRADE: {index.Grade}
            </div>
          </div>
        </div>
        <hr />

        <div
          className="d-flex align-items-center container-verify"
          style={{ justifyContent: "space-between" }}
        >
          <div>
            <span>-------------------------</span>
            <div>Prepared By</div>
          </div>
          <div>
            <img
              src={CircleLogo}
              alt="Circular Logo"
              className="img-circular-logo"
            />
          </div>
          <div>
            <span>-------------------------</span>
            <div>Principal Sign</div>
          </div>
        </div>
      </div>
    );
  }
);

export default Jkga;
