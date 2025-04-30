"use client";
import { useState } from "react";
import Icon from "../common/Icons";

const icons = [
  {
    name: "language settings",
    icon: "language",
    children: () => {
      return (
        <div className="mt-2 p-4 mx-auto text-center">
          <button className="px-8 text-sm py-2 rounded-md bg-primary-green text-white  mr-3">
            English
          </button>
          <button className="px-8 text-sm py-2 rounded-md border">বাংলা</button>
        </div>
      );
    },
  },
  {
    name: "general settings",
    icon: "settings",
    children: () => {
      return (
        <div className="mt-2 p-4">
          <p> Comming Soon Insha Allah </p>
        </div>
      );
    },
  },
  {
    name: "font settings",
    icon: "font",
    children: () => {
      return (
        <div className="mt-2 p-4">
          <p> Coming Soon Insha Allah </p>
        </div>
      );
    },
  },
  {
    name: "appearance settings",
    icon: "font",
    children: () => {
      return (
        <div className="mt-2 p-4">
          <p> Comming Soon Insha Allah </p>
        </div>
      );
    },
  },
];
const Settings = () => {
  const [active, setActive] = useState("language settings");
  return (
    <div className="bg-white rounded-lg h-full px-4">
      <div className="py-8">
        <h3 className="text-center text-lg md:text-xl"> Settings </h3>
      </div>
      <div>
        <ul className="space-y-5">
          {icons.map((icon) => {
            const isActive = active === icon.name;
            return (
              <li
                className="cursor-pointer"
                key={icon.name}
                onClick={() => setActive(icon.name)}
              >
                <div
                  className={`${
                    isActive ? "border border-gray-100" : "bg-gray-100"
                  } rounded-md`}
                >
                  <div
                    className={`px-3 py-2 flex items-center gap-3 ${
                      isActive
                        ? "bg-gray-100 border-l-4 border-primary-green rounded"
                        : ""
                    }`}
                  >
                    <div className="bg-gray-50 p-2 rounded-full">
                      <Icon
                        classes={"w-6"}
                        name={`${
                          isActive ? icon.icon : icon.icon + "-gray"
                        }.svg`}
                        alt={icon.name}
                      />
                    </div>
                    <p
                      className={`text-gray-500 font-medium capitalize text-sm ${
                        isActive ? "text-primary-green " : ""
                      }`}
                    >
                      {icon.name}
                    </p>
                  </div>
                  {active === icon.name && icon.children()}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Settings;
