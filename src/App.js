import "./App.scss";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import Axios from "axios";

const App = () => {
  const [slotNumber, setSlotNumber] = useState("");
  const [paddleboardState, setPaddleboardState] = useState("ABSENT");
  const [doorState, setDoorState] = useState("OPENED");
  const [sensorState1, setSensorState1] = useState("PRESENT");
  const [sensorState2, setSensorState2] = useState("PRESENT");
  const [sensorState3, setSensorState3] = useState("PRESENT");

  const handleClickPowerUp = () => {
    console.log("Functia power up", slotNumber);

    Axios.post("http://127.0.0.1:5000/power-up");
  };

  const handleClickLightsOn = () => {
    console.log("Functia Lights On", slotNumber);

    Axios.post(`http://127.0.0.1:5000/open-door-lights/${slotNumber}`);
  };

  const handleClickLightsOff = () => {
    console.log("Functia Lights Off", slotNumber);

    Axios.post(`http://127.0.0.1:5000/close-door-lights/${slotNumber}`);
  };

  const handleClickOpenDoor = () => {
    console.log("Functia Open Door", slotNumber);

    Axios.post(`http://127.0.0.1:5000/open-door-test/${slotNumber}`);
  };

  const handleClickReadState = () => {
    console.log("Functia Read State", slotNumber);

    Axios.post(
      `http://127.0.0.1:5000/read-paddle-board-state/${slotNumber}`
    ).then((response) => {
      setPaddleboardState(response.data);
    });
  };

  const handleClickStartRental = () => {
    console.log("Functia Start Rental", slotNumber);

    Axios.post(`http://127.0.0.1:5000/start-rental/${slotNumber}`);
  };

  const handleClickEndRental = () => {
    console.log("Functia End Rental", slotNumber);

    Axios.post(`http://127.0.0.1:5000/end-rental/${slotNumber}`);
  };

  const handleClickCheckDoor = () => {
    console.log("Functia Check Door", slotNumber);
  };

  return (
    <div className="App">
      <div className="top-container">
        <div
          style={{
            backgroundImage: `url(https://www.supboardguide.com/wp-content/uploads/2021/07/SUPBoardGuide-Stand-Up-Paddle-Board-Reviews-Header.jpg`,
            width: "100%",
            height: "300px",
          }}
        >
          <div className="title">iSUP LOCKER </div>

          <Button variant="contained" onClick={handleClickPowerUp}>
            POWER UP
          </Button>
        </div>
      </div>
      <div className="buttons-container">
        <div className="left-container">
          <div className="slot-container">
            <div className="slot-number">Select slot number:</div>
            <TextField
              className="input-number"
              type="text"
              onChange={(event) => setSlotNumber(event.target.value)}
              value={slotNumber}
            />
          </div>
          <div className="door-container">
            <div className="door-state">Door State:</div>
            <div
              className={
                doorState === "OPENED" ? "status-opened" : "status-closed"
              }
            >
              {doorState}
            </div>
          </div>
          <div className="status-container">
            <div className="paddle-state">Sensor 1:</div>
            <div
              className={
                sensorState1 === "PRESENT" ? "status-present" : "status-absent"
              }
            >
              {sensorState1}
            </div>
          </div>

          <div className="status-container">
            <div className="paddle-state">Sensor 2:</div>
            <div
              className={
                sensorState2 === "PRESENT" ? "status-present" : "status-absent"
              }
            >
              {sensorState2}
            </div>
          </div>

          <div className="status-container">
            <div className="paddle-state">Sensor 3:</div>
            <div
              className={
                sensorState3 === "PRESENT" ? "status-present" : "status-absent"
              }
            >
              {sensorState3}
            </div>
          </div>
        </div>
        <div className="right-container">
          <div className="up-buttons-container">
            <Button variant="contained" onClick={handleClickLightsOn}>
              LIGHTS ON
            </Button>
            <Button variant="contained" onClick={handleClickLightsOff}>
              LIGHTS OFF
            </Button>
            <Button variant="contained" onClick={handleClickOpenDoor}>
              OPEN DOOR
            </Button>
            <Button variant="contained" onClick={handleClickCheckDoor}>
              Check Door
            </Button>
          </div>
          <div className="bottom-buttons-container">
            <Button variant="contained" onClick={handleClickReadState}>
              CHECK SENSORS
            </Button>
            <Button variant="contained" onClick={handleClickStartRental}>
              START RENTAL
            </Button>
            <Button variant="contained" onClick={handleClickEndRental}>
              END RENTAL
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
