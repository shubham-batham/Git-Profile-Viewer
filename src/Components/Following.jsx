import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Following() {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const [following, setFollowing] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${id}/following`)
      .then((response) => response.json())
      .then((data) => {
        setFollowing(data);
      });
    fetch(`https://api.github.com/users/${id}`)
      .then((data) => data.json())
      .then((data) => setDetails(data));
  }, [id]);

  return (
    <div>
      <div>
        <div>
          <img src={details.avatar_url} alt="" />
        </div>
        <div>
          <div>
            <div>{details.name}</div>
            <div>{details.login}</div>
          </div>
          <div>{details.location}</div>
        </div>
        <div>{details.bio}</div>
        <div>
          <div className="up">
            <Link className="Followers-button" to={`/followers/${id}`}>
              {" "}
              Followers - {details.followers}{" "}
            </Link>
          </div>
          <div>-</div>
          <div>
            <Link className="Following-button" to={`/following/${id}`}>
              {" "}
              Following - {details.following}{" "}
            </Link>
          </div>
        </div>
      </div>
      <div className="up">
        <Link to={"/"}>
          <button>HomePage</button>
        </Link>
      </div>
      <div>
        <div>
          <div className="followers-title">{details.name} Following</div>
        </div>
        <div>
          {following.map((item, index) => (
            <div key={index}>
              <div>
                <div>
                  <div>
                    <img src={item.avatar_url} alt="" />
                  </div>
                  <div>{item.login}</div>
                </div>
                <div>
                  <Link to={`/profile/${item.login}`}>
                    <button>View More</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Following;
