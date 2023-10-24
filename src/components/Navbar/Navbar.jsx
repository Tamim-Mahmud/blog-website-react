import React from "react";
import profileImage from '../../../images/boy2.png'

const navbar = () => {
  return (
    <>
      <div className="navbar bg-slate-50 ">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Knowledge Cafe</a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={profileImage} />
              </div>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default navbar;
