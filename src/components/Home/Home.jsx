import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import SideBar from "../SideBar/SideBar";

const Home = () => {
  const [courses, setCourses] = useState([]);

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
            <Cart course={course} key={course.id}>
              {" "}
            </Cart>
          ))}
        </div>
        <div className="col-start-3">
            <SideBar />
        </div>
      </div>
    </>
  );
};

export default Home;
