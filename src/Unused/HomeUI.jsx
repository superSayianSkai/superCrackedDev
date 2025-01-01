import Header from "../components/Header";
import { Link } from "react-router";
import yuri from "../assets/images/Yui Hirasawa.jpeg";
import { xPosts } from "../Data.js/xPosts";
import { xPosts2 } from "../Data.js/xPosts";
const HomeUI = () => {
  return (
    <div className="h-[100svh] ">
      <Header />

      <div className="flex justify-center mt-[80px] flex-col items-center ">
        <h1 className="text-[2rem] sm:text-[3rem] md:text-[5rem] lg:text-[6rem] font-semibold tracking-wider leading lg:leading-[6rem]  text-center  flex flex-col items-center ">
          <span>From Zero to</span>
          <span>
            super<span className=" animated-text">Cracked</span>Dev
          </span>
        </h1>
        <p className="mt-[10px] md:mt-[30px]  text-gray-600 italic text-[.5rem] md:text-[.9rem] w-[300px]   text-center sm:w-[100%]">
          &apos;&apos;Anyone with a laptop and internet connection can be
          cracked&apos;&apos;- skai
        </p>
        <div className="flex gap-8 mb-[20px]">
          <Link to="/career">
            <button className="border-2 px-6  py-3 rounded-[0.5em]  mt-[30px] bg-black text-white hover:bg-[#7E57C2] flex text-[.7rem] outline-none border-none">
              <p className="">Start Cracking</p>
            </button>
          </Link>
          <button className="border-[1px] border-black px-6  py-3 rounded-[0.5em]  mt-[30px] text-black  hover:bg-[#7E57C2] flex text-[.7rem] outline-none mb-10 hover:border-white hover:text-white">
            <p className="">Give Feedback</p>
          </button>
        </div>
      </div>
      <div className="slider">
        <div className="slide-track">
          {xPosts.map((post, index) => (
            <div
              key={index}
              className="border-[1px] bg-slate-100 border-slate-400 slide rounded-md p-2 hover:bg-slate-300"
            >
              <div className="flex rounded-xl p-2 flex-col gap-2">
                <div className="flex gap-2">
                  <img
                    src={post.icon}
                    className="w-[40px] h-[40px] rounded-full"
                  />
                  <div className="flex text-md flex-col">
                    {post.nameTYpe === "svg" ? (
                      <img src={post.name} className="w-[20px] h-[20px]" />
                    ) : (
                      <p className="text-[.8rem]">{post.name}</p>
                    )}
                    <p className="text-[.8rem]">@{post.username}</p>
                  </div>
                </div>
                <p className="text-[.8rem]">{post.comment}</p>
              </div>
            </div>
          ))}

          {xPosts.map((post, index) => (
            <div
              key={`duplicate-${index}`}
              className="border-[1px] bg-slate-100 border-slate-400 slide rounded-md p-2 hover:bg-slate-300"
            >
              <div className="flex rounded-xl p-2 flex-col gap-2">
                <div className="flex gap-2">
                  <img
                    src={post.icon}
                    className="w-[40px] h-[40px] rounded-full"
                  />
                  <div className="flex text-md flex-col">
                    {post.nameTYpe === "svg" ? (
                      <img src={post.name} className="w-[20px] h-[20px]" />
                    ) : (
                      <p className="text-[.8rem]">{post.name}</p>
                    )}
                    <p className="text-[.8rem]">@{post.username}</p>
                  </div>
                </div>
                <p className="text-[.8rem]">{post.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="slider">
        <div className="slide-track">
          {xPosts2.map((post, index) => (
            <div
              key={index}
              className="border-[1px] bg-slate-100 border-slate-400 slide rounded-md p-2 hover:bg-slate-300"
            >
              <div className="flex rounded-xl p-2 flex-col gap-2">
                <div className="flex gap-2">
                  <img
                    src={post.icon}
                    className="w-[40px] h-[40px] rounded-full"
                  />
                  <div className="flex text-md flex-col">
                    {post.nameTYpe === "svg" ? (
                      <img src={post.name} className="w-[20px] h-[20px]" />
                    ) : (
                      <p className="text-[.8rem]">{post.name}</p>
                    )}
                    <p className="text-[.8rem]">@{post.username}</p>
                  </div>
                </div>
                <p className="text-[.8rem]">{post.comment}</p>
              </div>
            </div>
          ))}

          {xPosts2.map((post, index) => (
            <div
              key={`duplicate-${index}`}
              className="border-[1px] bg-slate-100 border-slate-400 slide rounded-md p-2 hover:bg-slate-300"
            >
              <div className="flex rounded-xl p-2 flex-col gap-2">
                <div className="flex gap-2">
                  <img
                    src={post.icon}
                    className="w-[40px] h-[40px] rounded-full"
                  />
                  <div className="flex text-md flex-col">
                    {post.nameTYpe === "svg" ? (
                      <img src={post.name} className="w-[20px] h-[20px]" />
                    ) : (
                      <p className="text-[.8rem]">{post.name}</p>
                    )}
                    <p className="text-[.8rem]">@{post.username}</p>
                  </div>
                </div>
                <p className="text-[.8rem]">{post.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="slider">
        <div className="slide-track">
          {xPosts2.map((post, index) => (
            <div
              key={index}
              className="border-[1px] bg-slate-100 border-slate-400 slide rounded-md p-2"
            >
              <div className="flex rounded-xl p-2 flex-col gap-2">
                <div className="flex gap-2">
                  <img
                    src={post.icon}
                    className="w-[40px] h-[40px] rounded-full"
                  />
                  <div className="flex text-md  flex-col">
                    {post.nameTYpe === "svg" ? (
                      <img src={post.name} className="w-[20px] h-[20px]" />
                    ) : (
                      <p className="text-[.8rem]">{post.name}</p>
                    )}
                    <p className="text-[.8rem]">@{post.username}</p>
                  </div>
                </div>
                <p className="text-[.8rem]">{post.comment}</p>
              </div>
            </div>
          ))}
          {xPosts2.map((post, index) => (
            <div
              key={`duplicate-${index}`}
              className="border-[1px] bg-slate-100 border-slate-400 slide rounded-md p-2"
            >
             
              <div className="flex rounded-xl p-2 flex-col gap-2">
                <div className="flex gap-2">
                  <img
                    src={post.icon}
                    className="w-[40px] h-[40px] rounded-full"
                  />
                  <div className="flex text-md  flex-col">
                    {post.nameTYpe === "svg" ? (
                      <img src={post.name} className="w-[20px] h-[20px]" />
                    ) : (
                      <p className="text-[.8rem]">{post.name}</p>
                    )}
                    <p className="text-[.8rem]">@{post.username}</p>
                  </div>
                </div>
                <p className="text-[.8rem]">{post.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

{
  /* <div className="border-none  w-[300px] opacity-50 absolute top-0 bottom-0 right-0 color"></div> */
}
export default HomeUI;
