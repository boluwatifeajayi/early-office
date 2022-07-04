import Head from "next/head";
import styles from "../styles/Home.module.css";
import InputField from "../components/InputField";
import ButtonField from "../components/ButtonField";
import Header from "../components/Header";
import { useState } from "react";
import axios from "axios";
import { setcurrentStudentSession } from "./Utils/common";
import { useCookies } from "react-cookie";
import { useEffect } from "react";
import { useRouter } from "next/router";
import NigerianStates from "../data/NigerianStates";

export default function StudentProfile() {
  const [nigeriaStates, setNigeriaStates] = useState(
    Object.keys(NigerianStates[0])
  );
  const [jobName, setjobName] = useState("");
  const [role, setrole] = useState("");
  const [benefits, setbenefits] = useState("");
  const [jobResponsibility, setjobResponsibility] = useState("");
  const [jobType, setjobType] = useState("");
  const [skillsNeeded, setskillsNeeded] = useState("");
  const [numberOfOpenings, setnumberOfOpenings] = useState("");
  const [salary, setsalary] = useState("");
  const [duration, setduration] = useState("");
  // const [location, setlocation] = useState('');
  const [country, setcountry] = useState("");
  const [state, setstate] = useState("");
  const [additionalInformation, setadditionalInformation] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [cookies, setCookie] = useCookies();
  const router = useRouter();

  const isauth = () => {
    if (!cookies.authToken) {
      router.push("/companylogin");
    } else {
      console.log("you are welcome");
    }
  };

  // useEffect(() => {
  //   isauth();
  // }, [])

  const submit = async (e) => {
    e.preventDefault();

    setError(null);
    setLoading(true);

    axios
      .post(
        "http://localhost:4070/api/company/job/create",
        {
          jobName,
          role,
          jobResponsibility,
          jobType,
          skillsNeeded: [skillsNeeded],
          numberOfOpenings,
          salary,
          duration,
          benefits,
          location: { country: "Nigeria", state },
          additionalInformation,
        },
        { withCredentials: true }
      )
      .then((response) => {
        setLoading(false);
        router.push("/jobListing");
        setcurrentStudentSession(
          response.data.authToken,
          response.data.currentCompany
        );
        console.log("response", response);
      })
      .catch((error) => {
        setLoading(false);
        if (error.code === "ERR_BAD_REQUEST") {
          setError(error.response.data.error);
        } else {
          setError("something went wrong, Please Try again later");
        }
        console.error("error >>> ", error);
      });
  };

  return (
    <div>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
          crossorigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
      </Head>
      <Header />
      <div className="profile-container">
        <h1 className="mb-4">Post An Internship</h1>
        <form onSubmit={submit}>
          <div className="row">
            <div className="col-md profile-box">
              <p>Profile</p>
              <input
                className="custom-input"
                placeholder="Profile"
                type="text"
                value={role}
                onChange={(e) => setrole(e.target.value)}
              />
              <p>Job Title</p>
              <input
                className="custom-input"
                placeholder="Job Title"
                type="text"
                value={jobName}
                onChange={(e) => setjobName(e.target.value)}
              />
              <div className="row">
                <div className="col-md">
                  <p>Job Type</p>
                  <select
                    className="custom-input"
                    placeholder="Job Type"
                    type="text"
                    value={jobType}
                    onChange={(e) => setjobType(e.target.value)}
                  >
                    <option>Internship</option>
                    <option>Part Time</option>
                    <option>Full Time</option>
                  </select>
                </div>
                <div className="col-md">
                  <p>Salary</p>
                  <select
                    className="custom-input"
                    placeholder="salary"
                    type="text"
                    value={salary}
                    onChange={(e) => setsalary(e.target.value)}
                  >
                    <option>Unpaid</option>
                    <option>10,000 - 20,000</option>
                    <option>20,000 - 30,000</option>
                    <option>30,000 - 40,000</option>
                    <option>50,000 - 60,000</option>
                    <option>60,000 - 70,000</option>
                    <option>70,000 - 80,000</option>
                    <option>80,000 - 90,000</option>
                    <option>90,000 - 100,000</option>
                  </select>
                </div>
              </div>
              <p>Internship Duration</p>
              <input
                className="custom-input"
                placeholder="internship duration"
                type="text"
                value={duration}
                onChange={(e) => setduration(e.target.value)}
              />
              <p>Number of Openings</p>
              <input
                className="custom-input"
                placeholder="number Of Openings"
                type="text"
                value={numberOfOpenings}
                onChange={(e) => setnumberOfOpenings(e.target.value)}
              />
              <p>Location</p>
              <select
                className="custom-input"
                placeholder="Location"
                type="text"
                value={state}
                onChange={(e) => setstate(e.target.value)}
              >
                {nigeriaStates.map((state) => {
                  return <option>{state}</option>;
                })}
              </select>
            </div>
            <div className="col-md profile-box">
              <h5 className="mb-3 fw-bold text-center">
                Interns Responsibilities
              </h5>
              <textarea
                className="form-control mb-4"
                id="exampleFormControlTextarea1"
                rows="11"
                placeholder="
            1. Day To day tasks performed By The Intern
            2. Enter duties....
          "
                onChange={(e) => setjobResponsibility(e.target.value)}
              >
                {jobResponsibility}
              </textarea>
              <textarea
                className="form-control mb-4"
                id="exampleFormControlTextarea1"
                rows="6"
                placeholder="
           Benefits From The Job
          "
                onChange={(e) => setbenefits(e.target.value)}
              >
                {benefits}
              </textarea>
            </div>
            <div className="col-md profile-box">
              <textarea
                className="form-control mb-4"
                id="exampleFormControlTextarea1"
                rows="4"
                placeholder="
           Enter Skills Required
          "
                onChange={(e) => setskillsNeeded(e.target.value)}
              >
                {skillsNeeded}
              </textarea>

              <textarea
                className="form-control mb-4"
                id="exampleFormControlTextarea1"
                rows="7"
                placeholder="
           Additional Information(optional)
          "
                onChange={(e) => setadditionalInformation(e.target.value)}
              >
                {additionalInformation}
              </textarea>
            </div>
          </div>
          <div className="container-btn">
            <ButtonField
              buttonText="Submit"
              buttonClass="bt-background width"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
