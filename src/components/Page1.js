import "../styles.css";
import { useState } from "react";
import Header from "./Header";
import ChildBox from "./ChildBox";
import Footer from "./Footer";

export default function Page1() {
  const [position, setPosition] = useState("");
  return (
    <div className="page1">
      <Header setPosition={setPosition} />

      <ChildBox position={position} />
      <Footer />
    </div>
  );
}
