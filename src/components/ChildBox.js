import "../styles.css";
export default function ChildBox({ position }) {
  // const box = {
  //   backgroundColor: "lightgrey",
  //   width: "250px",
  //   border: "15px solid green",
  //   padding: "50px",
  //   position: "absolute",
  //   marginTop: "80px",
  //   backgroundColor: "gray",
  //   borderRadius: "1px",
  //   borderColor: "green"
  // };
  return (
    <div
      className={
        position === ""
          ? "box"
          : position === "center"
          ? "boxCenter"
          : position === "RightBottom"
          ? "boxRightBottom"
          : ""
      }
    >
      <h3>Floating</h3>
      <h4>Drag mr around..</h4>
    </div>
  );
}
