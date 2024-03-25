import React, { useState } from "react";
import netflix from "../../image/netflix.png";
import step from "../../image/step.png";
import { Checkbox, Form } from "antd";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
const SignInPage = () => {
  const [formstep, setFormstep] = useState(1);
  const [activeLink, setActiveLink] = useState("Permium");
  const [form] = Form.useForm();
  const onNextStep = () => {
    setFormstep(formstep + 1);
  };
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="font-myFont ">
      <div className="border-b-2 ">
        <div className="flex justify-between items-center py-5  mx-5 md:mx-40">
          <a href="/">
            <img alt="Netflix" className="w-24" src={netflix} />
          </a>
          <div className="underline">Sign Out</div>
        </div>
      </div>
      <div className=" flex justify-center items-center">
        {/* step 1 */}
        {formstep === 1 && (
          <div className=" flex flex-col justify-center items-start  gap-7 mb-32 mx-7 md:mx-40 ">
            <img alt="Netflix" className="w-full mt-20" src={step} />
            <div className="">STEP 1 OF 3</div>
            <div className="font-bold text-[30px]">
              Finish setting up your account
            </div>
            <div className="text-xl">
              Netflix is personalized for you. Create a password to watch on any
              device at any time.
            </div>
            <button
              type="primary"
              htmlType="submit"
              onClick={onNextStep}
              className=" text-[20px] font-semibold text-center w-full bg-NBgRed hover:bg-NBgHover text-NWhite px-3 py-4 rounded-md transform duration-300"
            >
              Next
            </button>
          </div>
        )}

        {/* step 1.1 */}
        {formstep === 2 && (
          <div className=" flex flex-col justify-center items-start  gap-7 mb-32 mx-7 md:mx-40">
            <div className="mt-10">
              <div className="">STEP 1 OF 3</div>
              <div className="font-bold text-[30px]">
                Create a password to start your membership
              </div>
            </div>

            <div className="text-xl">
              Just a few more steps and you're done! We hate paperwork, too.
            </div>
            <Form
              form={form}
              name="basic"
              layout="vertical"
              className="w-full"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <div class="relative mb-3">
                  <input
                    type="email"
                    class="peer m-0 block h-[58px] w-full rounded border-2 border-gray-400 border-secondary-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-offset-4 peer-focus:text-primary dark:border-neutral-400 dark:text-white dark:autofill:shadow-autofill dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label
                    for="floatingInput"
                    class="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
                  >
                    Email
                  </label>
                </div>
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <div class="relative mb-3">
                  <input
                    type="password"
                    class="peer m-0 block h-[58px] w-full rounded border-2 border-gray-400 border-secondary-500 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:shadow-twe-primary focus:outline-offset-4  peer-focus:text-primary dark:border-neutral-400 dark:text-white dark:autofill:shadow-autofill dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label
                    for="floatingPassword"
                    class="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
                  >
                    Add Password
                  </label>
                </div>
              </Form.Item>
              <Form.Item name="remember" valuePropName="checked">
                <Checkbox className="text-xl ">
                  Please do not email me Netflix special offers.
                </Checkbox>
              </Form.Item>
              <Form.Item>
                <button
                  type="primary"
                  htmlType="submit"
                  onClick={onNextStep}
                  className=" text-[20px] font-semibold text-center w-full bg-NBgRed hover:bg-NBgHover text-NWhite px-3 py-4 rounded-md transform duration-300"
                >
                  Next
                </button>
              </Form.Item>
            </Form>
          </div>
        )}
        {/* step 2 */}
        {formstep === 3 && (
          <div className=" flex flex-col justify-center items-start  gap-7 mb-32 mx-7 md:mx-40">
            <FaRegCheckCircle className="text-red-600 text-5xl mt-24" />
            <div className="">STEP 2 OF 3</div>
            <div className="font-bold text-[30px]">Choose your plan.</div>
            <div className="text-xl">
              <ul className="space-y-5">
                <li>
                  <div className="flex justify-start items-center gap-3">
                    <FaCheck className="text-red-600 text-4xl" />
                    <div className="text-xl">
                      No commitments, cancel anytime.
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex justify-start items-center gap-3">
                    <FaCheck className="text-red-600 text-4xl" />
                    <div className="text-xl">
                      Everything on Netflix for one low price.
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex justify-start items-center gap-3">
                    <FaCheck className="text-red-600 text-4xl" />
                    <div className="text-xl">
                      No ads and no extra fees. Ever.
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <button
              type="primary"
              htmlType="submit"
              onClick={onNextStep}
              className=" text-[20px] font-semibold text-center w-full bg-NBgRed hover:bg-NBgHover text-NWhite px-3 py-4 rounded-md transform duration-300"
            >
              Next
            </button>
          </div>
        )}
        {/* step 2.1 */}
        {formstep === 4 && (
          <div className=" max-w-[550px] flex flex-col justify-center items-start  gap-7 mb-32 mx-7 md:mx-40">
            <div className="mt-5">
              <div className="">STEP 2 OF 3</div>
              <div className="font-bold text-[30px]">
                Choose the plan that’s right for you
              </div>
            </div>

            <div className="flex justify-between items-end gap-2 md:gap-5">
              <div
                onClick={() => handleLinkClick("Permium")}
                className={`text-xl rounded-xl overflow-hidden  w-[80px] md:w-[120px] 
                ${
                  activeLink === "Permium"
                    ? "bg-gradient-to-br from-indigo-700 via-violet-600 to-red-600"
                    : "border border-solid"
                }`}
              >
                <div
                  className={`top-0  text-[10px] text-center  text-white ${
                    activeLink === "Permium" ? "bg-red-600" : "bg-gray-800"
                  }`}
                >
                  Most Popular
                </div>
                <div className="flex flex-col justify-center items-start text-[12px] text-start p-2">
                  <p
                    className={`${
                      activeLink === "Permium"
                        ? "text-white "
                        : "text-black font-bold "
                    }`}
                  >
                    Permium
                  </p>
                  <p
                    className={`${
                      activeLink === "Permium"
                        ? "text-white "
                        : "text-gray-600 font-semibold "
                    }`}
                  >
                    4K + HDR
                  </p>
                </div>
                <div className="flex justify-end">
                  <FaCheckCircle className="text-white m-5 " />
                </div>
              </div>
              <div
                onClick={() => handleLinkClick("standard")}
                className={`text-xl rounded-xl overflow-hidden  w-[80px] md:w-[120px] ${
                  activeLink === "standard"
                    ? "bg-gradient-to-br from-indigo-800 to-purple-800 "
                    : "border border-gray-600 "
                }`}
              >
                <div className="flex flex-col justify-center items-start text-[12px] text-start p-2">
                  <p
                    className={`${
                      activeLink === "standard"
                        ? "text-white "
                        : "text-black font-bold "
                    }`}
                  >
                    Standard
                  </p>
                  <p
                    className={`${
                      activeLink === "standard"
                        ? "text-white "
                        : "text-gray-600 font-semibold "
                    }`}
                  >
                    1080p
                  </p>
                </div>
                <div className="flex justify-end">
                  <FaCheckCircle className="text-white m-5 " />
                </div>
              </div>
              <div
                onClick={() => handleLinkClick("Basic")}
                className={`text-xl rounded-xl overflow-hidden  w-[80px] md:w-[120px] ${
                  activeLink === "Basic"
                    ? "bg-gradient-to-br from-indigo-800 to-purple-800 "
                    : "border border-gray-600 "
                }`}
              >
                <div className="flex flex-col justify-center items-start text-[12px] text-start p-2">
                  <p
                    className={`${
                      activeLink === "Basic"
                        ? "text-white "
                        : "text-black font-bold "
                    }`}
                  >
                    Basic
                  </p>
                  <p
                    className={`${
                      activeLink === "Basic"
                        ? "text-white "
                        : "text-gray-600 font-semibold "
                    }`}
                  >
                    720p
                  </p>
                </div>
                <div className="flex justify-end">
                  <FaCheckCircle className="text-white m-5 " />
                </div>
              </div>
              <div
                onClick={() => handleLinkClick("Mobile")}
                className={`text-xl rounded-xl overflow-hidden  w-[80px] md:w-[120px] ${
                  activeLink === "Mobile"
                    ? "bg-gradient-to-br from-indigo-800 to-purple-800 "
                    : "border border-gray-600 "
                }`}
              >
                <div className="flex flex-col justify-center items-start text-[12px] text-start p-2">
                  <p
                    className={`${
                      activeLink === "Mobile"
                        ? "text-white "
                        : "text-black font-bold "
                    }`}
                  >
                    Mobile
                  </p>
                  <p
                    className={`${
                      activeLink === "Mobile"
                        ? "text-white "
                        : "text-gray-600 font-semibold "
                    }`}
                  >
                    420p
                  </p>
                </div>
                <div className="flex justify-end">
                  <FaCheckCircle className="text-white m-5 " />
                </div>
              </div>
            </div>
            {activeLink === "Permium" && (
              <div className="font-black text-gray-500 flex flex-col w-full gap-2">
                <div className="  flex justify-between items-center w-full border-b-2 pb-5 border-gray-300">
                  <div className="w-32 text-sm">Monthly price</div>
                  <div className="text-end">USD 9.99</div>
                </div>
                <div className="flex justify-between items-center w-full border-b-2 pb-5 border-gray-300">
                  <div className="w-32 text-sm">Video and sound quality</div>
                  <div className="text-right">Best</div>
                </div>
                <div className="flex justify-between items-center w-full border-b-2 pb-5 border-gray-300">
                  <div className="w-32 text-sm">Resolution</div>
                  <div className="text-right">4K (Ultra HD) + HDR</div>
                </div>
                <div className="flex justify-between items-center w-full border-b-2 pb-5 border-gray-300">
                  <div className="w-32 text-sm">
                    Spatial audio (immersive sound)
                  </div>
                  <div className="text-right">Included</div>
                </div>
                <div className="flex justify-between items-center w-full border-b-2 pb-5 border-gray-300">
                  <div className="w-32 text-sm">Supported devices</div>
                  <div className=" text-right">
                    TV, computer, mobile phone, tablet
                  </div>
                </div>
                <div className="flex justify-between items-center w-full border-b-2 pb-5 border-gray-300">
                  <div className="w-32 text-sm">
                    Devices your household can watch at the same time
                  </div>
                  <div className="text-right">4</div>
                </div>
                <div className="flex justify-between items-center w-full border-b-2 pb-5 border-gray-300">
                  <div className="w-32 text-sm">Download devices</div>
                  <div className="text-right">6</div>
                </div>
              </div>
            )}
            {activeLink === "standard" && (
              <div className="font-black text-gray-500 flex flex-col w-full gap-2">
                <div className="  flex justify-between items-center w-full border-b-2 pb-5 border-gray-300">
                  <div className="w-32 text-sm">Monthly price</div>
                  <div className="text-right">USD 7.99</div>
                </div>
                <div className="flex justify-between items-center w-full border-b-2 pb-5 border-gray-300">
                  <div className="w-32 text-sm">Video and sound quality</div>
                  <div className="text-right">Great</div>
                </div>
                <div className="flex justify-between items-center w-full border-b-2 pb-5 border-gray-300">
                  <div className="w-32 text-sm">Resolution</div>
                  <div className="text-right">1080p (Full HD)</div>
                </div>
                <div className="flex justify-between items-center w-full border-b-2 pb-5 border-gray-300">
                  <div className="w-32 text-sm">Supported devices</div>
                  <div className="text-right">
                    TV, computer, mobile phone, tablet
                  </div>
                </div>
                <div className="flex justify-between items-center w-full border-b-2 pb-5 border-gray-300">
                  <div className="w-32 text-sm">
                    Devices your household can watch at the same time
                  </div>
                  <div className="text-right">2</div>
                </div>
                <div className="flex justify-between items-center w-full border-b-2 pb-5 border-gray-300">
                  <div className="w-32 text-sm">Download devices</div>
                  <div className="text-right">2</div>
                </div>
              </div>
            )}
            {activeLink === "Basic" && (
              <div className="font-black text-gray-500 flex flex-col w-full gap-2">
                <div className="  flex justify-between items-center w-full border-b-2 pb-5 border-gray-300">
                  <div className="w-32 text-sm">Monthly price</div>
                  <div className="text-righttext-right">USD 3.99</div>
                </div>
                <div className="flex justify-between items-center w-full border-b-2 pb-5 border-gray-300">
                  <div className="w-32 text-sm">Video and sound quality</div>
                  <div className="text-righttext-right">Good</div>
                </div>
                <div className="flex justify-between items-center w-full border-b-2 pb-5 border-gray-300">
                  <div className="w-32 text-sm">Resolution</div>
                  <div className="text-righttext-right">720p (HD)</div>
                </div>
                <div className="flex justify-between items-center w-full border-b-2 pb-5 border-gray-300">
                  <div className="w-32 text-sm">Supported devices</div>
                  <div className="text-right">
                    TV, computer, mobile phone, tablet
                  </div>
                </div>
                <div className="flex justify-between items-center w-full border-b-2 pb-5 border-gray-300">
                  <div className="w-32 text-sm">
                    Devices your household can watch at the same time
                  </div>
                  <div className="text-righttext-right">1</div>
                </div>
                <div className="flex justify-between items-center w-full border-b-2 pb-5 border-gray-300">
                  <div className="w-32 text-sm">Download devices</div>
                  <div className="text-righttext-right">1</div>
                </div>
              </div>
            )}
            {activeLink === "Mobile" && (
              <div className="font-black text-gray-500 flex flex-col w-full gap-2">
                <div className="  flex justify-between items-center w-full border-b-2 pb-5 border-gray-300">
                  <div className="w-32 text-sm">Monthly price</div>
                  <div className="text-right">USD 2.99</div>
                </div>
                <div className="flex justify-between items-center w-full border-b-2 pb-5 border-gray-300">
                  <div className="w-32 text-sm">Video and sound quality</div>
                  <div className="text-right">Fair</div>
                </div>
                <div className="flex justify-between items-center w-full border-b-2 pb-5 border-gray-300">
                  <div className="w-32 text-sm">Resolution</div>
                  <div className="text-right">480p</div>
                </div>
                <div className="flex justify-between items-center w-full border-b-2 pb-5 border-gray-300">
                  <div className="w-32 text-sm">Supported devices</div>
                  <div className="text-right">Mobile phone, tablet</div>
                </div>
                <div className="flex justify-between items-center w-full border-b-2 pb-5 border-gray-300">
                  <div className="w-32 text-sm">
                    Devices your household can watch at the same time
                  </div>
                  <div className="text-right">1</div>
                </div>
                <div className="flex justify-between items-center w-full border-b-2 pb-5 border-gray-300">
                  <div className="w-32 text-sm">Download devices</div>
                  <div className="text-right">1</div>
                </div>
              </div>
            )}
            <div className="">
              HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability
              subject to your internet service and device capabilities. Not all
              content is available in all resolutions. See our{" "}
              <span className="text-blue-700">Terms of Use</span> for more
              details. <br /> <br />
              Only people who live with you may use your account. Watch on 4
              different devices at the same time with Premium, 2 with Standard,
              and 1 with Basic and Mobile.
            </div>
            <button
              type="primary"
              htmlType="submit"
              onClick={onNextStep}
              className=" text-[20px] font-semibold text-center w-full bg-NBgRed hover:bg-NBgHover text-NWhite px-3 py-4 rounded-md transform duration-300"
            >
              Next
            </button>
          </div>
        )}
      </div>

      {/* footer */}
      <div className="p-5 bg-gray-200 ">
        <div className=" text-lg mb-5 mt-5 md:mt-20 text-gray-600 hover:underline">
          Question? Contact us.
        </div>
        {/* links */}
        <div className="grid grid-cols-7 ">
          <div className="text-gray-600">
            <ul className="space-y-4">
              <li className="hover:underline cursor-pointer">
                {" "}
                <a
                  target="_blank"
                  href="https://help.netflix.com/en/node/412"
                  rel="noreferrer"
                >
                  FAQ
                </a>
              </li>
              <li className="hover:underline cursor-pointer">
                {" "}
                <a
                  target="_blank"
                  href="https://help.netflix.com/legal/privacy"
                  rel="noreferrer"
                >
                  Privacy
                </a>
              </li>
            </ul>
          </div>
          <div className="text-gray-600">
            <ul className="space-y-4">
              <li className="hover:underline cursor-pointer">
                {" "}
                <a
                  target="_blank"
                  href="https://help.netflix.com/en/"
                  rel="noreferrer"
                >
                  Help Center
                </a>
              </li>
              <li className="hover:underline cursor-pointer">
                <a target="_blank" href="#d" rel="noreferrer">
                  Cookie Preferences
                </a>
              </li>
            </ul>
          </div>
          <div className="text-gray-600">
            <ul className="space-y-4">
              <li className="hover:underline cursor-pointer">
                {" "}
                <a
                  target="_blank"
                  href="https://www.netflix.shop/"
                  rel="noreferrer"
                >
                  Netflix Shop
                </a>
              </li>
              <li className="hover:underline cursor-pointer">
                <a
                  target="_blank"
                  href="https://help.netflix.com/en/node/134094"
                  rel="noreferrer"
                >
                  Corporate Information
                </a>
              </li>
            </ul>
          </div>
          <div className="text-gray-600">
            <ul className="space-y-4">
              <li className="hover:underline cursor-pointer">
                {" "}
                <a
                  target="_blank"
                  href="https://help.netflix.com/legal/termsofuse"
                  rel="noreferrer"
                >
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
