import React from "react";
import netflix from "../../image/netflix.png";
import {Checkbox, Form } from "antd";
import bg from "../../image/bgImage.jpg";

const LoginPage = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div
      className="font-myFont bg-black text-NWhite min-h-screen w-full  bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.9) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%), url(${bg})`,
        backgroundSize: "cover",
      }}
    >

      <div className=" mx-[155px] h-[92px]  flex justify-start items-center  ">
        <a href="/">
          <img src={netflix} alt="Netflix"  className=" w-auto max-w-[148px]"  />
        </a>
      </div>

      <div className="flex justify-center items-center  mb-20">
        <div className="flex flex-col justify-between pt-5  w-[450px] h-[707px] bg-black bg-opacity-65 px-[68px] py-[48px] ">
          <div className="font-bold text-[24px] text-start my-7">Sign In</div>
          <Form
            form={form}
            name="basic"
            layout="vertical"
            style={{
              maxWidth: 600,
            }}
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
                  className="peer m-0 block h-[58px] w-full rounded  bg-gray-800 bg-opacity-50 bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-white transition duration-200 ease-linear placeholder:text-transparent focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:bg-gray-700 focus:outline-none peer-focus:text-primary  dark:text-white dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label
                  for="floatingInput"
                  className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-gray-400 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
                >
                  Email address
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
                  className="peer m-0 block h-[58px] w-full rounded  bg-gray-800 bg-opacity-50  bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-white transition duration-200 ease-linear placeholder:text-transparent focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:bg-gray-700 focus:outline-none peer-focus:text-primary  dark:text-white dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label
                  for="floatingInput"
                  className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-gray-400 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
                >
                  Password
                </label>
              </div>
            </Form.Item>

            <Form.Item>
              <button
                type="primary"
                htmlType="submit"
                className=" text-[20px] font-semibold text-center w-full bg-NBgRed hover:bg-NBgHover text-NWhite px-3 py-3 rounded-md transform duration-300"
              >
                Sign In
              </button>
            </Form.Item>
            <div className="flex justify-between items-center text-white">
              <Form.Item name="remember" valuePropName="checked">
                <Checkbox className="text-white">Remember me</Checkbox>
              </Form.Item>
              <div className="">Need help?</div>
            </div>
          </Form>
          <div className="text-gray-400">
            New to Netflix?{" "}
            <a href="/" className="text-white hover:underline">
              Sign up now
            </a>
          </div>
          <div className="text-gray-400 mb-20">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <span className="text-blue-700">Learn more.</span>{" "}
          </div>
        </div>
      </div>

      <div className="p-5 bg-black bg-opacity-65">
        <div className="mb-5 mt-5 md:mt-20 text-gray-400 underline">
          Question? Call 1-844-505-2993
        </div>
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
                <a  href="#df" target="_blank" rel="noreferrer">
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

export default LoginPage;
