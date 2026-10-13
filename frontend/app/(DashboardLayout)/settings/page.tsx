"use client";

import React, { useState } from "react";
import { UserRound, ChevronRight, ChevronDown } from "lucide-react";
import { truncate } from "lodash";

const page = () => {
  const [openMenu, setOpenMenu] = useState({
    Account_Settings: false,
    App_Settings: false,
    System_Settings: false,
  });

  const toggelMenu = (menuName: string) => {
    setOpenMenu((prev) => ({
      ...prev,
      [menuName]: !prev,
    }));
  };

  const menus = [
    {
      name: "Account_Settings",
      icon: <UserRound />,
      submenu: true,
      children: [
        {
          name: "Profile",
          path: "/profile",
          disabled: true,
        },
        {
          name: "Security",
          path: "/profile",
          disabled: true,
        },
        {
          name: "Notification",
          path: "/profile",
          disabled: true,
        },
        {
          name: "Integrations",
          path: "/profile",
          disabled: true,
        },
      ],
    },
    {
      name: "App_Settings",
      icon: <UserRound />,
      submenu: true,
      children: [
        {
          name: "Invoice Setting",
          path: "/profile",
          disabled: true,
        },
        {
          name: "Invoice Templates",
          path: "/profile",
          disabled: true,
        },
        {
          name: "Signatures",
          path: "/profile",
          disabled: true,
        },
        {
          name: "Custom Fields",
          path: "/profile",
          disabled: true,
        },
      ],
    },
    {
      name: "System_Settings",
      icon: <UserRound />,
      submenu: true,
      children: [
        {
          name: "Email Settings",
          path: "/profile",
          disabled: true,
        },
        {
          name: "Email Templates",
          path: "/profile",
          disabled: true,
        },
        {
          name: "SMS GateWays",
          path: "/profile",
          disabled: true,
        },
        {
          name: "SMS Templates",
          path: "/profile",
          disabled: true,
        },
        {
          name: "GDPR Cookies",
          path: "/profile",
          disabled: true,
        },
      ],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-8 h-fit ">
        <h1>Settings</h1>

        <div className="bg-white h-3/4 flex space-x-24 p-6">
          <div>
            <ul className="bg-yellow-200 w-52">
              {menus.map((item, index) => (
                <li key={index} className="flex flex-col space-y-2 p-2">
                  <div
                    onClick={() => toggelMenu(item.name)}
                    className="flex space-x-4 border border-[#14967f]  p-2 rounded"
                  >
                    <span className="">{item.name}</span>

                    {/* {isOpen ? <ChevronDown /> :  <ChevronRight />} */}
                  </div>

                  {openMenu[item.name as keyof typeof openMenu] && (
                    <ul
                      className={
                        " flex flex-col space-y-4 px-2 relative left-4"
                      }
                    >
                      {item.children.map((item, index) => (
                        <li
                          key={index}
                          className="flex  items-center    border-l-2 border-yellow-200"
                        >
                          <div className="h-2 w-2 rounded-full bg-[#14967f] absolute left-1"></div>
                          <span className=" relative left-4 hover:text-[#14967f]">
                            {item.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>content</div>
        </div>
      </div>
    </>
  );
};

export default page;
