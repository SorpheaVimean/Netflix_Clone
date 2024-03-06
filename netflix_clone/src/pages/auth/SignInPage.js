import React, { useState } from "react";
import netflix from "../../image/netflix.png";
import step from "../../image/step.png";
import { Checkbox, Form, Card } from "antd";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
const SignInPage = () => {
  const [formstep, setFormstep] = useState(4);
  const [form] = Form.useForm();
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
      {/* step 1 */}
      {formstep === 1 && (
        <div className=" flex flex-col justify-center items-start  gap-7 mb-32 mx-7 md:mx-40">
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
                  <div className="text-xl">No commitments, cancel anytime.</div>
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
                  <div className="text-xl">No ads and no extra fees. Ever.</div>
                </div>
              </li>
            </ul>
          </div>
          <button
            type="primary"
            htmlType="submit"
            className=" text-[20px] font-semibold text-center w-full bg-NBgRed hover:bg-NBgHover text-NWhite px-3 py-4 rounded-md transform duration-300"
          >
            Next
          </button>
        </div>
      )}
      {/* step 2.1 */}
      {formstep === 4 && (
        <div className=" flex flex-col justify-center items-start  gap-7 mb-32 mx-7 md:mx-40">
          <div className="mt-5">
            <div className="">STEP 2 OF 3</div>
            <div className="font-bold text-[30px]">
              Choose the plan that’s right for you
            </div>
          </div>

          <div className="flex justify-between items-end gap-2">
            <div className="text-xl rounded-xl overflow-hidden bg-gradient-to-br from-indigo-700 via-violet-600 to-red-600 w-[80px]">
              <div className="top-0 bg-red-600 text-[10px] text-center  text-white">
                Most Popular
              </div>
              <p className="text-white text-[12px] font-bold text-start p-2">
                Premium <br /> 4K + HDR
              </p>
              <div className="flex justify-end">
                <FaCheckCircle className="text-white m-5 " />
              </div>
            </div>
            <div className="text-xl rounded-xl overflow-hidden bg-gradient-to-br from-indigo-800 to-purple-800 w-[80px]">
              <p className="text-white text-[12px] text-start p-2">
                Standard <br /> 1080p
              </p>
              <div className="flex justify-end">
                <FaCheckCircle className="text-white m-5 " />
              </div>
            </div>
            <div className="text-xl rounded-xl overflow-hidden bg-gradient-to-br from-indigo-800 to-purple-800 w-[80px]">
              <p className="text-white text-[12px] text-start p-2">
                Basic <br /> 720p
              </p>
              <div className="flex justify-end">
                <FaCheckCircle className="text-white m-5 " />
              </div>
            </div>
            <div className="text-xl rounded-xl overflow-hidden bg-gradient-to-br from-indigo-800 to-purple-800 w-[80px]">
              <p className="text-white text-[12px] text-start p-2">
                Mobile <br /> 420p
              </p>
              <div className="flex justify-end">
                <FaCheckCircle className="text-white m-5 " />
              </div>
            </div>
          </div>
          {/* <div className="text-xl rounded-xl overflow-hidden bg-gradient-to-br from-indigo-700 via-violet-600 to-red-600">
            <div className=" ">
            <div className="top-0 bg-black">Most Popular</div>
              <p>Premium 4K + HDR</p>
              <FaCheckCircle className="text-white"/>
            </div>
            <Card
           className="bg-gradient-to-br from-indigo-700 via-violet-600 to-red-600"
              style={{
                width: 300,
              }}
            >
              <div className="top-0 bg-black">Most Popular</div>
              <p>Premium 4K + HDR</p>
              <FaCheckCircle className="text-white"/>
            </Card>
          </div> */}
          <div className="flex justify-between items-center w-full border-b-2 pb-5 border-gray-300">
            <div className="w-32 text-sm">Monthly price</div>
            <div className="">USD 2.99</div>
          </div>
          <div className="flex justify-between items-center w-full border-b-2 pb-5 border-gray-300">
            <div className="w-32 text-sm">Video and sound quality</div>
            <div className="">USD 2.99</div>
          </div>
          <div className="flex justify-between items-center w-full border-b-2 pb-5 border-gray-300">
            <div className="w-32 text-sm">Resolution</div>
            <div className="">USD 2.99</div>
          </div>
          <div className="flex justify-between items-center w-full border-b-2 pb-5 border-gray-300">
            <div className="w-32 text-sm">Supported devices</div>
            <div className="">Mobile phone, tablet</div>
          </div>
          <div className="flex justify-between items-center w-full border-b-2 pb-5 border-gray-300">
            <div className="w-32 text-sm">
              Devices your household can watch at the same time
            </div>
            <div className="">USD 2.99</div>
          </div>
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
            className=" text-[20px] font-semibold text-center w-full bg-NBgRed hover:bg-NBgHover text-NWhite px-3 py-4 rounded-md transform duration-300"
          >
            Next
          </button>
        </div>
      )}
      {/* footer */}
      <div className="p-5 bg-gray-200 ">
        <div className=" text-lg mb-5 mt-5 md:mt-20 text-gray-600 hover:underline">
          Question? Contact us.
        </div>
        <div className="grid grid-cols-2 ">
          <div className="text-gray-600">
            <ul className="space-y-4">
              <li className="hover:underline cursor-pointer">FAQ</li>
              <li className="hover:underline cursor-pointer">
                Investor Relations
              </li>
              <li className="hover:underline cursor-pointer">Privacy</li>
              <li className="hover:underline cursor-pointer">
                Corporate information
              </li>
            </ul>
          </div>
          <div className="text-gray-600">
            <ul className="space-y-4">
              <li className="hover:underline cursor-pointer">FAQ</li>
              <li className="hover:underline cursor-pointer">
                Investor Relations
              </li>
              <li className="hover:underline cursor-pointer">Privacy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
