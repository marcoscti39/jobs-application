import React from "react";
import { useQuery, useQueryClient } from "react-query";
import { Link, Outlet, redirect, useNavigate } from "react-router-dom";
import { getJobs } from "../fetch/getJobs";
import { getLogOut } from "../fetch/getLogout";
import { redirectToLoginPage } from "../utils/redirectToLoginPage";

const Header = () => {
  const { data, refetch } = useQuery(["getJobs"], () => getJobs(true));

  const handleLogout = async () => {
    await getLogOut();
    refetch();
  };

  return (
    <>
      <header className="flex justify-center w-full bg-white py-6 shadow">
        <div className="flex items-center justify-between px-4 w-full max-w-[900px]">
          <Link to="/" className="font-semibold text-4xl">
            Jobs<span className="text-purple-600">App</span>
          </Link>
          {data?.name && (
            <div className="flex items-center gap-6">
              <span className="font-semibold text-lg">Hello, {data?.name}</span>

              <button
                className="p-2 bg-purple-600 rounded text-white font-semibold"
                onClick={handleLogout}
              >
                Log Out
              </button>
            </div>
          )}
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
