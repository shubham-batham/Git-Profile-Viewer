import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function RepoDetail() {
  const { id, Detail } = useParams();
  let rrr = useParams();
  const [reposDetail, setReposDetail] = useState([]);
  useEffect(() => {
    if (!id) {
      return;
    }

    fetch(`https://api.github.com/repos/${id}/${Detail}`)
      .then((data) => data.json())
      .then((data) => setReposDetail(data));
  }, [id, Detail]);
  //
  console.log(rrr);
  return (
    <div>
      <div>
        <div>
          <h2>Repository Details</h2>
        </div>
        <div>
          <div>
            <div>
              Repository Name :<span>{reposDetail.name}</span>
            </div>
            <div>
              Repository Default Branch :
              <span>{reposDetail.default_branch}</span>
            </div>
            <div>
              Date Created :<span>{reposDetail.created_at}</span>
            </div>
            <div>
              Repository Id :<span>{reposDetail.id}</span>
            </div>
          </div>
        </div>
        <div>
          <Link to={`/profile/${id}`}>
            <button>Profile</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RepoDetail;
