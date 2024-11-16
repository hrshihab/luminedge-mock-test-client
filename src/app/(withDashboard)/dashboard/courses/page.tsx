"use server";
import CourseCard from "@/components/courseCard";
import { Course } from "../../../types";

const CoursesPage = async () => {
  const courses = [
    {
      _id: "67337c880794d577cd982b75",
      name: "IELTS",
      image: "https://i.ibb.co.com/MPBCMfb/ielts.webp",
    },
    {
      _id: "67337c880794d577cd982b76",
      name: "Pearson PTE",
      image: "https://i.ibb.co.com/4mrhCkN/pte.webp",
    },
    {
      _id: "67337c880794d577cd982b77",
      name: "GRE",
      image: "https://i.ibb.co.com/SX7t52h/gre.webp",
    },
    {
      _id: "67337c880794d577cd982b78",
      name: "TOEFL",
      image: "https://i.ibb.co.com/vjyL3QC/toefl.webp",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-start w-[80%] mx-auto">
      <div className="flex flex-col mt-[80px] ">
        <h1 className="text-3xl font-semibold">Book Your</h1>
        <h1 className="text-3xl font-bold w-fit bg-[#FACE39] p-2">
          Mock Test Now!
        </h1>
        <h1 className="text-3xl font-semibold">in our Premium Venue</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 mx-auto">
        {courses.map((course: Course) => (
          <CourseCard key={course._id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
