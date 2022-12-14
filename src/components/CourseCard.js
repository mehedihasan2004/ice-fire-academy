import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const { _id, thumb_url, course_name, technology, about } = course;

  if (about.length > 50) {
    about.slice(0, 50);
  }

  return (
    <div className="text-black p-2 rounded-sm relative bg-slate-100">
      <img src={thumb_url} alt="" />
      <div className="pl-2">
        <h3 className="font-bold">{course_name}</h3>
        <p className="font-semibold">
          <span className="font-bold">Technology :</span> {technology}
        </p>
        <p>
          <small>
            {about.length < 99 ? about : about.slice(1, 100) + "..."}
          </small>
        </p>
      </div>
      <div className="flex justify-end font-bold absolute bottom-2 right-2">
        <Link
          className="text-white px-2 py-1 bg-slate-500 hover:bg-slate-400"
          to={`/course_details/${_id}`}
        >
          Show More
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
