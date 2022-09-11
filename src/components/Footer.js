import "../styles.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <Link to="/page2">
        <h5>Next Page >> </h5>
      </Link>
    </div>
  );
}
