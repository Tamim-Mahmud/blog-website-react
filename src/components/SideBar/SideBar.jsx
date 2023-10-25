import React from "react";

const SideBar = ({ bookmarks,totalReadingTime }) => {
// console.log(readingTime);
  return (
    <div className="sticky top-24">
      <h1 className="text-center font-bold text-blue-700 border border-blue-800 bg-blue-100 p-4 rounded-xl">
        Spend time on read : {totalReadingTime} mins
      </h1>
      <div className=" mt-5 bg-slate-200 rounded-md p-3">
        <h2 className="font-bold text-xl">
          Bookmarked blog : {bookmarks.length ? bookmarks.length : 0}
        </h2>
        <div className="overflow-y-scroll max-h-96">
          {bookmarks.map((bookmark, index) => (
            <h1
              className=" mt-2  rounded-md font-semibold text-left bg-white p-3"
              key={index}
            >
              {bookmark}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
