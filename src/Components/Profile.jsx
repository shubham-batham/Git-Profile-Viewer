import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Profile = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const [repo, setRepo] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${id}`)
      .then((data) => data.json())
      .then((data) => setDetails(data));
    fetch(`https://api.github.com/users/${id}/repos`)
      .then((data) => data.json())
      .then((data) => setRepo(data));
  }, [id]);
  console.log(details);
  console.log(repo);
  return (
    <div>
      <div>
        <div>
          <img src={details.avatar_url} alt="" />
        </div>
        <div className="Profile">
          <div>{details.name}</div>
          <div>{details.login}</div>

          <div>{details.location}</div>

          <div>{details.bio}</div>
        </div>
        <div>
          <div>
            <Link className="Followers-button" to={`/followers/${id}`}>
              Followers - {details.followers}
            </Link>
          </div>
          <div>-</div>
          <div>
            <Link className="Following-button" to={`/following/${id}`}>
              {" "}
              Followings - {details.following}{" "}
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div>
            <div>
              <Link to={"/"}>
                <button className="Homepage-button">HomePage</button>
              </Link>
            </div>
            <div className="title">{details.name} Repositories</div>
          </div>
          <div>
            {repo.map((item, index) => {
              return (
                <div className="repo" key={index}>
                  <Link to={`/reposDetail/${id}/${item.name}`}>
                    <div>Repo Name : {item.name}</div>
                    <div>Public</div>
                    <div>{item.language}</div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
