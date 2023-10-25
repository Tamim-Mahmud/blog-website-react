import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import SideBar from "../SideBar/SideBar";
import { getBookmarksToStorage, getLocalStorageTime, setBookmarksToStorage, setLocalStorageTime } from "../../localStorage";

const Home = () => {
  const [courses, setCourses] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [totalReadingTime, setTotalReadingTime] = useState(0);
  const handleBookmark = (courseName) => {
    const previousBookmark = getBookmarksToStorage(courseName);
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
    const previousTime=getLocalStorageTime(readTime);
    if(previousTime){
      const newTime= previousTime + parseInt(readTime);
      setTotalReadingTime(newTime);
    }
    else{
      setTotalReadingTime(readTime);
    }
    // console.log(typeof(readTime));
  };

  useEffect(() => {
    fetch(`data.json`)
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  useEffect(()=>{
    const previousTime= setLocalStorageTime();
    setTotalReadingTime(parseInt(previousTime));

    //for local storage bookmarks
    const previousBookmarks = setBookmarksToStorage();
    setBookmarks(previousBookmarks);

  }, [totalReadingTime]);
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
          <SideBar bookmarks={bookmarks} totalReadingTime={totalReadingTime} />
        </div>
      </div>
    </>
  );
};

export default Home;
