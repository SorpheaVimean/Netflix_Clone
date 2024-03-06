import React from "react";
import { Select, Space } from "antd";
const FooterPage = () => {
  return (
    <div className="p-5 ">
      <div className="mb-10 md:mt-20 text-gray-400 underline">
        Question? Call 1-844-505-2993
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4">
        <div className="text-gray-400">
          <ul className="space-y-4">
            <li className="underline cursor-pointer">FAQ</li>
            <li className="underline cursor-pointer">Investor Relations</li>
            <li className="underline cursor-pointer">Privacy</li>
            <li className="underline cursor-pointer">Speed Test</li>
          </ul>
        </div>
        <div className="text-gray-400">
          <ul className="space-y-4">
            <li className="underline cursor-pointer">FAQ</li>
            <li className="underline cursor-pointer">Investor Relations</li>
            <li className="underline cursor-pointer">Privacy</li>
            <li className="underline cursor-pointer">Speed Test</li>
          </ul>
        </div>
        <div className="text-gray-400">
          <ul className="space-y-4">
            <li className="underline cursor-pointer">FAQ</li>
            <li className="underline cursor-pointer">Investor Relations</li>
            <li className="underline cursor-pointer">Privacy</li>
            <li className="underline cursor-pointer">Speed Test</li>
          </ul>
        </div>
        <div className="text-gray-400">
          <ul className="space-y-4">
            <li className="underline cursor-pointer">FAQ</li>
            <li className="underline cursor-pointer">Investor Relations</li>
            <li className="underline cursor-pointer">Privacy</li>
            <li className="underline cursor-pointer">Speed Test</li>
          </ul>
        </div>
      </div>
      <Select
        className="my-5"
        defaultValue="lucy"
        style={{
          width: 120,
          backgroundColor: "gray",
        }}
        options={[
          {
            value: "English",
            label: "English",
          },
        ]}
      />
      <div className="text-gray-400 "> Netflix cambodia</div>
    </div>
  );
};

export default FooterPage;
