import React from "react";
import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from "react-icons/fa";

export default function FollowersItems({ followers }) {
  const { login, avatar_url, html_url, type } = followers;

  return (
    <>
      <div className="mb-2 rounded-md card bg-base-200 hover:bg-base-300">
        <div className="card-body ">
          <h3 className="mb-2 text-xl font-semibold">
            <a href={html_url}>
              <FaLink className="inline mr-1" /> {login}
            </a>
            <div className="ml-2 mr-1 badge badge-success">{type}</div>
          </h3>
        </div>
      </div>
    </>
  );
}
