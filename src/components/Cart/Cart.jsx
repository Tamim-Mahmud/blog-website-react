import React from "react";

const Cart = (props) => {
  const {
    courseName,
    courseTeacher,
    courseTeacherPics,
    id,
    isBookmarked,
    isRead,
    picture,
    tags,
    registered,
    phone,
  } = props.course;
  console.log(courseName);
  return (
    <>
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img className="w-full h-80" src={picture} alt="" />
        </figure>
        <div className="card-body">
          <div className=" flex justify-between items-center">
            <div className="flex gap-4">
              <img className="w-12 h-12 rounded-full" src={courseTeacherPics} alt="" />
              <div className="">
                <h2 className="font-bold">{courseTeacher}</h2>
                <h3>{registered}</h3>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <h1>5 min read</h1>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                  />
                </svg>
              </p>
            </div>
          </div>
          <div className="">
            <h1 className="font-bold mt-5 mb-3">{courseName}</h1>
            <h3 className="flex gap-3">
                {
                    tags.map((tag) => <h3 className="text-slate-400">#{tag}</h3> )
                }
            </h3>
          </div>
          <h2 className=" underline mt-3 font-sans text-blue-800 hover:text-blue-600 ">Mark as read</h2>
        </div>
                
      </div>
    </>
  );
};

export default Cart;
