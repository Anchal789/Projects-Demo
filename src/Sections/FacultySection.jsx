import React from "react";

const FacultySection = () => {
  const imageStyle = {
    aspectRatio: "400 / 300",
    objectFit: "cover",
  };

  return (
    <section
      id="faculty"
      className="py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-[#284B63]"
    >
      <div className="container mx-auto px-4 md:px-6 space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
            Faculty Portal
          </h2>
          <p className="max-w-[80%] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            The Faculty Portal enables faculty members to manage their assigned
            subjects. They can create assignments, set deadlines, and provide
            detailed descriptions. Faculty can also check student submissions,
            evaluate and grade them, and provide feedback. Additionally, the
            portal offers a student list view to access student details,
            ensuring smooth assignment tracking and evaluation.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="relative group overflow-hidden rounded-lg shadow-lg">
            <img
              src="/placeholder.svg"
              width="400"
              height="300"
              alt="Faculty Assignments"
              className="w-full h-auto object-cover transition-all duration-300 group-hover:scale-110"
              style={imageStyle}
            />
            <div className="absolute inset-0 bg-white bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h3 className="text-black text-2xl font-bold">
                Manage Assignments
              </h3>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg shadow-lg">
            <img
              src="/placeholder.svg"
              width="400"
              height="300"
              alt="Faculty Grading"
              className="w-full h-auto object-cover transition-all duration-300 group-hover:scale-110"
              style={imageStyle}
            />
            <div className="absolute inset-0 bg-white bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h3 className="text-black text-2xl font-bold">Grade Assig</h3>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg shadow-lg">
            <img
              src="/placeholder.svg"
              width="400"
              height="300"
              alt="Faculty Feedback"
              className="w-full h-auto object-cover transition-all duration-300 group-hover:scale-110"
              style={imageStyle}
            />
            <div className="absolute inset-0 bg-white bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h3 className="text-black text-2xl font-bold">Provide F</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacultySection;
