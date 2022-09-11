import "../styles.css";
import { useState, useEffect } from "react";
// import {box} from './ChildBox'
export default function Header({ setPosition }) {
  var [date, setDate] = useState(new Date());
  // const [style,setStyle]=useState(false);
  // console.log(style);

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });
  const rightBottom = () => {
    setPosition("RightBottom");
  };
  const myCenter = () => {
    setPosition("center");
  };
  return (
    <div className="header">
      <h6 className="h6">
        Position:&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={myCenter}>Center</button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={rightBottom}>light-right</button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Press ESC key to hide the
        window,enter to show it again ||&nbsp;Time : {date.toLocaleTimeString()}
        &nbsp;&nbsp;&nbsp;Date : {date.toLocaleDateString()}
      </h6>
    </div>
  );
}
