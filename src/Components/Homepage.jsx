import { useState } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [inputId, setInputId] = useState("");
  return (
    <div>
      <div>
        <h2>Search Github ID</h2>
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/2111/2111425.png"
            alt=""
          />
        </div>
        <div className="input-box">
          <input
            type="text"
            placeholder="search id"
            value={inputId}
            className="input"
            onChange={(e) => setInputId(e.target.value)}
          />
          <Link to={`/profile/${inputId}`}>
            <button className="button">Search</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
