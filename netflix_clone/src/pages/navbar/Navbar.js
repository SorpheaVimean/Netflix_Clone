import React from "react";
import { Dropdown, Space } from "antd";
import netflix from "../../image/netflix.png";
import { IoSearch } from "react-icons/io5";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";
const Navbar = () => {
  const items = [
    {
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
      key: "0",
    },
    {
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item
        </a>
      ),
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: "3rd menu item（disabled）",
      key: "3",
      disabled: true,
    },
  ];
  return (
    <div className="font-myFont text-NWhite">
      <div className="flex justify-between  items-center pt-5 mx-5 md:mx-40">
        <div className="flex justify-between items-center gap-6">
          <div className="">
            <img alt="Netflix" className="w-40" src={netflix} />
          </div>
          <div className="">
            <ul className="flex space-x-9">
              <li>Start</li>
              <li>Shows</li>
              <li>Movies</li>
              <li>New</li>
              <li>My List</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center items-center gap-10">
          <div className="">
            <IoSearch className="text-3xl" />
          </div>
          <div className="">
            <MdOutlineNotificationsNone className="text-3xl" />
          </div>
          <div className="">
            <Dropdown
              menu={{
                items,
              }}
            >
              <a>
                <Space>
                <img src= {netflix} className="w-10" alt="" />
                <div className="">

                  <FaCaretDown />
                </div>
                </Space>
              </a>
            </Dropdown>
          </div>
          <div className=""></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
