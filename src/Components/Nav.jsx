import React from "react";

const Nav = () => {
  return (
    <div className="relative max-h-screen h-screen  bg-green-200 max-w-200 border- ">
      <div className=" p-20 ">
        <ul className="   ">
          <li className=" mb-2 text-[1.5rem] text-gray-800 ">Home</li>
          <li className=" mb-2 text-[1.5rem] text-gray-800 ">Explore</li>
          <li className=" mb-2 text-[1.5rem] text-gray-800 ">Communities</li>
          <li className=" mb-2 text-[1.5rem] text-gray-800 ">Notifications</li>
          <li className=" mb-2 text-[1.5rem] text-gray-800 ">Messages</li>
          <li className=" mb-2 text-[1.5rem] text-gray-800 ">Bookmarks</li>
          <li className=" mb-2 text-[1.5rem] text-gray-800 ">Twitter Blue</li>
          <li className=" mb-2 text-[1.5rem] text-gray-800 ">Profile</li>
          <li className=" mb-2 text-[1.5rem] text-gray-800 ">More</li>
        </ul>

        <button className="text-white bg-blue-800 w-40 p-2 rounded-full font-bold ">
          Tweet
        </button>
      </div>

      <div className=" shadow-lg h-20 bottom-0  absolute right-0 bg-blue-900  flex justify-center  gap-10 p-4 text-[1rem]">
        <div className="flex gap-2">
          <span className=" h-10 w-10">
            <img
              className="w-full h-full rounded-full "
              src="https://images.unsplash.com/photo-1507152832244-10d45c7eda57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmxhY2slMjBsYWR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
              alt="image"
            />
          </span>
          <div>
            <ul>
              <li>Jane Agadia</li>
              <li>@Agadiateejay</li>
            </ul>
          </div>
        </div>
        <span>...</span>
      </div>
    </div>
  );
};

export default Nav;
