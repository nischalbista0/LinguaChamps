import React, { useState } from "react";
import { FaBookReader } from "react-icons/fa";
import { MdLeaderboard } from "react-icons/md";
import { FiMoreHorizontal } from "react-icons/fi";
import { TbMoodKid } from "react-icons/tb";
import { PiHandsClapping } from "react-icons/pi";

import { currentUserAtom } from "../pages/MainPage";
import { useAtom } from "jotai";


const Sidebar = () => {
  const [activeTab, setActiveTab] = useState("learn");
  const [currentUser] = useAtom(currentUserAtom);

  return (
    <div className="fixed z-20 bg-white dark:bg-black bottom-0 w-full md:bg-black md:w-[280px] md:min-h-[100vh] md:flex md:flex-col md:justify-between md:py-5">
      <div className="md:flex md:flex-col md:gap-10">
        <div className="hidden md:block md:px-8">
          <h1 className="text-2xl font-bold text-white">LinguaChamps</h1>
        </div>

        <nav className="w-full md:px-4">
          <ul className="flex items-center justify-between px-6 py-4 border-t md:flex-col md:gap-2 md:items-start md:border-none md:p-0">
            <li
              className={`relative hover:text-purple-lighter cursor-pointer transition duration-200 ease-linear md:text-white md:flex md:items-center md:gap-3 md:w-full md:px-4 md:py-2.5 md:rounded-md md:hover:bg-dark-bg ${
                activeTab === "learn"
                  ? "text-blue-500 md:text-blue-500"
                  : "text-white"
              }`}
              onClick={() => setActiveTab("learn")}
            >
              <FaBookReader className="w-5 h-5" />
              <p className="hidden font-semibold md:block">Learn</p>

              {activeTab === "learn" && (
                <div className="md:bg-blue-500 h-full w-[2px] absolute left-0"></div>
              )}
            </li>

            <li
              className={`relative hover:text-purple-lighter cursor-pointer transition duration-200 ease-linear md:text-white md:flex md:items-center md:gap-3 md:w-full md:px-4 md:py-2.5 md:rounded-md md:hover:bg-dark-bg ${
                activeTab === "selectCharacters"
                  ? "text-blue-500 md:text-blue-500"
                  : "text-white"
              }`}
              onClick={() => setActiveTab("selectCharacters")}
            >
              <TbMoodKid className="w-5 h-5" />
              <p className="hidden font-semibold md:block">Select Characters</p>

              {activeTab === "selectCharacters" && (
                <div className="md:bg-blue-500 h-full w-[2px] absolute left-0"></div>
              )}
            </li>

            <li
              className={`relative hover:text-purple-lighter cursor-pointer transition duration-200 ease-linear md:text-white md:flex md:items-center md:gap-3 md:w-full md:px-4 md:py-2.5 md:rounded-md md:hover:bg-dark-bg ${
                activeTab === "leaderboard"
                  ? "text-blue-500 md:text-blue-500"
                  : "text-white"
              }`}
              onClick={() => {
                setActiveTab("leaderboard");
                localStorage.setItem("activeTab", "leaderboard");
              }}
            >
              <MdLeaderboard className="w-5 h-5" />
              <p className="hidden font-semibold md:block">Leaderboard</p>

              {activeTab === "leaderboard" && (
                <div className="md:bg-blue-500 h-full w-[2px] absolute left-0"></div>
              )}
            </li>

            <li
              className={`relative hover:text-purple-lighter cursor-pointer transition duration-200 ease-linear md:text-white md:flex md:items-center md:gap-3 md:w-full md:px-4 md:py-2.5 md:rounded-md md:hover:bg-dark-bg ${
                activeTab === "rewards"
                  ? "text-blue-500 md:text-blue-500"
                  : "text-white"
              }`}
              onClick={() => {
                setActiveTab("rewards");
                localStorage.setItem("activeTab", "rewards");
              }}
            >
              <PiHandsClapping className="w-5 h-5" />
              <p className="hidden font-semibold md:block">Rewards</p>

              {activeTab === "rewards" && (
                <div className="md:bg-blue-500 h-full w-[2px] absolute left-0"></div>
              )}
            </li>
          </ul>
        </nav>
      </div>

      <div
        className="hidden cursor-pointer md:flex justify-between items-center md:px-4 md:py-2 rounded-lg mx-4 transition duration-300 hover:bg-black-75"
        onClick={() => {
          setActiveTab("profile");
        }}
      >
        <div className="flex items-center gap-2 text-white md:text-white">
          <img
            src={
              "https://st3.depositphotos.com/9998432/13335/v/600/depositphotos_133352156-stock-illustration-default-placeholder-profile-icon.jpg"
            }
            alt=""
            className="w-[35px] h-[35px] rounded-full object-fill"
          />
          <p className="font-semibold">{currentUser?.data[0]?.fullname}</p>
        </div>

        <div>
          <FiMoreHorizontal className="relative cursor-pointer z-20 text-white md:w-6 md:h-6 md:text-white transition duration-300 hover:text-purple-lighter dark:hover:text-purple-lighter" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
