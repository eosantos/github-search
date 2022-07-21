import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaArrowLeft } from "react-icons/fa";
import githubContext from "../../context/github/githubContext";
import format from "date-fns/format";

const User = ({
  match: {
    params: { login },
  },
}) => {
  const GithubContext = useContext(githubContext);
  const { getSingleUser, user, getRepos } = GithubContext;
  const { avatar_url, name, followers, public_repos, html_url, created_at } =
    user;

  // const created_at = new Date("05 October 2011", "dd-MM-yyyy");
  // console.log(created_at.toString("dd-MM-yyyy"));

  var created_at2 = "2016-07-20T16:34:25Z";
  new Date(created_at2).toLocaleString();

  useEffect(() => {
    getSingleUser(login);

    // eslint-disable-next-line
  }, [getSingleUser, getRepos]);

  return (
    <>
      <Link to="/" className="text-white">
        <div className="w-16 rounded h-12 border-2 border-gray-700 bg-black flex items-center justify-center my-10">
          <FaArrowLeft />
        </div>
      </Link>
      <div className="grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <div className="rounded flex items-center flex-col border-2 p-6">
          <img className="rounded-full w-40" src={avatar_url} alt="avatar" />
          <h1 className="text-2xl text-gray-300">{name}</h1>
          <div className="flex flex-row mt-1">
            <strong className="bg-gray-700 p-2 m-2 rounded text-white">
              Repositórios: {public_repos}
            </strong>
            <strong className="bg-gray-700 p-2 m-2 rounded text-white">
              Seguidores: {followers}
            </strong>
            <strong className="bg-gray-700 p-2 m-2 rounded text-white">
              Desde: {new Date(created_at).toLocaleString()}
            </strong>
          </div>
          <div className="flex justify-start flex-col  p-6 mt-2">
            <a
              className="rounded-full 2lx bg-black text-white p-4 mt-2 self-center"
              href={html_url}
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
