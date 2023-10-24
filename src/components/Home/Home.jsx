import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import SideBar from "../SideBar/SideBar";

const Home = () => {
  const [courses, setCourses] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  const handleBookmark = (courseName) => {
    if (bookmarks) {
      const temp = [courseName, ...bookmarks];
      setBookmarks(temp);
    } else {
      const temp = [];
      temp.push(courseName);
      setBookmarks(temp);
    }
  };
  const handleRead = (readTime) => {
    
    if (readTime) {
      let temp = parseInt(readTime) + (readingTime);
      console.log(temp)
      setReadingTime(temp);
    } else {
      setReadingTime(parseInt(readTime));
    }
    // console.log(typeof(readTime));
  };

  useEffect(() => {
    fetch(`data.json`)
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <>
      <div className=" grid grid-cols-3 gap-8 mt-5">
        <div className="flex flex-col gap-y-6 col-span-2">
          {courses.map((course) => (
            <Cart
              course={course}
              key={course.id}
              handleBookmark={handleBookmark}
              handleRead={handleRead}
            ></Cart>
          ))}
        </div>
        <div className="col-start-3">
          <SideBar bookmarks={bookmarks} readingTime={readingTime} />
        </div>
      </div>
    </>
  );
};

export default Home;
