import React from "react";
import bg from "../../image/bgImage.jpg";
import tv from "../../image/tv.png";
import mobile from "../../image/mobile.png";
import mobile1 from "../../image/mobile1.jpg";
import netflix from "../../image/netflix.png";
import kid from "../../image/kid.png";
import video from "../../video/video.mp4";
import { Collapse, Space } from "antd";
// import { IoIosArrowForward } from "react-icons/io";
// import { FaPlus } from "react-icons/fa6";
import FooterPage from "../footer/FooterPage";
const HomePage = () => {
  return (
    <div className="font-myFont bg-black text-NWhite ">
      <section
        className="relative"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.9) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%), url(${bg})`,
        }}
      >
        <div className="flex justify-between pt-5 mx-5 md:mx-40">
          <a href="/">
            <img alt="Netflix" className="w-24" src={netflix} />
          </a>
          <div className="font-semibold bg-NBgRed hover:bg-NBgHover text-NWhite px-3 py-1.5 rounded-md transform duration-300">
            Sign In
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-NWhite mx-16  mt-12 md:mt-40   ">
          <div className="font-black text-[24px] text-center">
            Unlimited movies, TV shows, and more
          </div>
          <div className="text-[16px] my-[14px] text-center">
            Watch anywhere. Cancel anytime.
          </div>
          <div className="flex flex-col md:mb-40">
            <div className="text-[16px] text-center">
              Ready to watch? Enter your email to create or restart your
              membership.
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-3 mt-5 mb-10">
              <div class="relative w-full md:w-[70%]   ">
                <input
                  type="email"
                  className="  peer m-0 block h-[48px] w-full rounded border border-solid border-secondary-500 bg-black bg-opacity-50 bg-clip-padding px-3 py-4 text-base  leading-tight text-NWhite transition duration-200 ease-linear placeholder:text-transparent focus:border-green-700 focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-NWhite focus:outline-green-700 peer-focus:text-white dark:border-neutral-400 dark:autofill:shadow-autofilldark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label
                  for="floatingInput"
                  className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-gray-200 peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-gray-400 dark:peer-focus:text-gray-500"
                >
                  Email address
                </label>
              </div>

              <button className="font-extrabold bg-NBgRed hover:bg-NBgHover text-NWhite px-5 py-3.5 rounded-md transform duration-300 ">
                Get Started
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  data-mirrorinrtl="true"
                  className="default-ltr-cache-4z3qvp e1svuwfo1"
                  data-name="ChevronRight"
                  aria-labelledby=":r3:"
                  aria-hidden="true"
                  style={{
                    display: "inline",
                    marginLeft: "5px",
                  }} /* Add inline style */
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div class=" h-1.5 absolute bottom-0.5 bg-[#232323] w-full"></div>
        </div>
      </section>

      <section className=" py-10 relative">
        <div className="mx-5 md:mx-40 flex flex-col md:flex-row justify-center items-center gap-5 md:py-20">
          <div className="flex flex-col justify-center  md:items-start">
            <div className="font-black text-[24px] md:text-[40px] text-center">
              Enjoy on your TV
            </div>
            <div className="text-[15px] md:text-[20px] text-center md:text-left mt-5 mb-10">
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more.
            </div>
          </div>

          <div className="relative flex justify-center items-center">
            <img className="z-10" src={tv} alt="" />
            <div className="absolute z-0 mx-w-[50%] max-h-[58%]">
              <video src={video} autoPlay loop muted alt="" />
            </div>
          </div>
        </div>
        <div class=" h-1.5 absolute bottom-0.5 bg-[#232323] w-full"></div>
      </section>

      <section className=" py-20 relative">
        <div className="mx-5 md:mx-40 flex flex-col md:flex-row-reverse justify-center items-center gap-28 md:py-20">
          <div className="flex flex-col justify-center md:items-start">
            <div className="font-black text-[24px] md:text-[40px] text-center">
              Enjoy on your TV
            </div>
            <div className="text-[15px] md:text-[20px] text-center md:text-left mt-5 md:mb-10">
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more.
            </div>
          </div>
          <div className="relative flex justify-center items-center">
            <img className="z-0" src={mobile1} alt="" />
            <div className="absolute  top-52 md:top-32  lg:top-[80%] flex justify-between items-center bg-black border-4 border-[#363636] rounded-xl w-full p-5 h-16 md:h-20 z-10 mx-w-[50%] max-h-[58%]">
              <div className="w-10 flex gap-5">
                <img className="z-0 object-contain" src={mobile} alt="" />
                <div className="flex flex-col justify-center">
                  <p className="text-[11px]">Stanger Things</p>
                  <p className="text-[12px] text-blue-500">Downloading...</p>
                </div>
              </div>

              <div className="">Hello</div>
            </div>
          </div>
        </div>

        <div class=" h-1.5 absolute bottom-0.5 bg-[#232323] w-full"></div>
      </section>

      <section className=" py-10 relative">
        <div className="mx-5 md:mx-40 flex flex-col md:flex-row-reverse justify-center items-center gap-28 md:py-20">
          <div className="flex flex-col justify-center md:items-start">
            <div className="font-black text-[24px] md:text-[40px] text-center">
              Enjoy on your TV
            </div>
            <div className="text-[15px] md:text-[20px] text-center md:text-left mt-5 md:mb-10">
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more.
            </div>
          </div>
        </div>
        <div class=" h-1.5 absolute bottom-0.5 bg-[#232323] w-full"></div>
      </section>

      <section className=" py-20 relative">
        <div className="mx-5 md:mx-40 flex flex-col md:flex-row-reverse justify-center items-center gap-28 md:py-20">
          <div className="flex flex-col justify-center md:items-start">
            <div className="font-black text-[24px] md:text-[40px] text-center">
              Enjoy on your TV
            </div>
            <div className="text-[15px] md:text-[20px] text-center md:text-left mt-5 md:mb-10">
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more.
            </div>
          </div>
          <div className="relative flex justify-center items-center">
            <img className="z-0" src={kid} alt="" />
          </div>
        </div>

        <div class=" h-1.5 absolute bottom-0.5 bg-[#232323] w-full"></div>
      </section>

      <section className=" py-20 relative">
        <div className="mx-10 md:mx-40">
          <div className="font-black text-[24px] text-center mb-10">
            Frequently Asked Questions
          </div>
          {/* <Collapse accordion items={items} /> */}
          <div className="flex flex-col gap-5 ">
            <Space direction="vertical">
              <Collapse
                className=" bg-white "
                collapsible="header"
                expandIconPosition="end"
                items={[
                  {
                    key: "1",
                    label: "What is Netflix?",
                    children: <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.<br /> <br />

                    You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!</p>,
                  },
                ]}
              />
              <Collapse
                className=" bg-white "
                collapsible="header"
                expandIconPosition="end"
                items={[
                  {
                    key: "2",
                    label: "How much does Netflix cost?",
                    children: <p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from USD 9.99 to USD 2.99 a month. No extra costs, no contracts.</p>,
                  },
                ]}
              />
              <Collapse
                className=" bg-white "
                collapsible="header"
                expandIconPosition="end"
                items={[
                  {
                    key: "3",
                    label: "Where can I watch?",
                    children: <p>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.<br /> <br />

                    You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</p>,
                  },
                ]}
              />
              <Collapse
                className=" bg-white "
                collapsible="header"
                expandIconPosition="end"
                items={[
                  {
                    key: "4",
                    label: "How do I cancel?",
                    children: <p>Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</p>,
                  },
                ]}
              />
              <Collapse
                className=" bg-white "
                collapsible="header"
                expandIconPosition="end"
                items={[
                  {
                    key: "5",
                    label: "What can I watch on Netflix?",
                    children: <p>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>,
                  },
                ]}
              />
              <Collapse
                className=" bg-white "
                collapsible="header"
                expandIconPosition="end"
                items={[
                  {
                    key: "1",
                    label: "Is Netflix good for kids?",
                    children: (
                      <p>
                        The Netflix Kids experience is included in your
                        membership to give parents control while kids enjoy
                        family-friendly TV shows and movies in their own space.
                        <br /> <br />
                        Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
                      </p>
                    ),
                  },
                ]}
              />
            </Space>
          </div>
        </div>
        <div className="text-[15px] md:text-[20px] text-center  mt-5 md:mb-10">
        Ready to watch? Enter your email to create or restart your membership.
            </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-3 mt-5 mb-10">
          
              <div class="relative w-full md:w-[70%]   ">
                <input
                  type="email"
                  className="  peer m-0 block h-[48px] w-full rounded border border-solid border-secondary-500 bg-black bg-opacity-50 bg-clip-padding px-3 py-4 text-base  leading-tight text-NWhite transition duration-200 ease-linear placeholder:text-transparent focus:border-green-700 focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-NWhite focus:outline-green-700 peer-focus:text-white dark:border-neutral-400 dark:autofill:shadow-autofilldark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label
                  for="floatingInput"
                  className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-gray-200 peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-gray-400 dark:peer-focus:text-gray-500"
                >
                  Email address
                </label>
              </div>

              <button className="font-extrabold bg-NBgRed hover:bg-NBgHover text-NWhite px-5 py-3.5 rounded-md transform duration-300 ">
                Get Started
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  data-mirrorinrtl="true"
                  className="default-ltr-cache-4z3qvp e1svuwfo1"
                  data-name="ChevronRight"
                  aria-labelledby=":r3:"
                  aria-hidden="true"
                  style={{
                    display: "inline",
                    marginLeft: "5px",
                  }} /* Add inline style */
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
        <div class=" h-1.5 absolute bottom-0.5 bg-[#232323] w-full"></div>
      </section>
      <div className="mx-5  md:mx-40">

      <FooterPage/>
      </div>
    </div>
  );
};

export default HomePage;
