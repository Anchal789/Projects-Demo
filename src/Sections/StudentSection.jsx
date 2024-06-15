import React from "react";

const StudentSection = () => {
  return (
    <section id="student" className="py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6 space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Student{" "}
          </h2>
          <p className="max-w-[80%] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            The Student Portal allows students to view and manage their
            assignments. Students can log in to see all subjects for their
            semester, view active and inactive assignments, submit their work,
            and check their submission status. The portal also enables students
            to view feedback, marks, and remarks from faculty on their submitted
            assignments, facilitating a clear and structured workflow for their
            academic tasks.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="relative group overflow-hidden rounded-lg shadow-lg">
            <img
              src="/placeholder.svg"
              width="400"
              height="300"
              alt="Student Assignments"
              className="w-full h-auto object-cover transition-all duration-300 group-hover:scale-110"
              style={imageStyle}
            />
            <div className="absolute inset-0 bg-[#5C0029] bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 flex-col">
              <h3 className="text-white text-2xl font-bold mb-4">
                View Assignments
              </h3>
              <h5 className="text-white text-lg font-bold">
                List of all available assignments
              </h5>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg shadow-lg">
            <img
              src="/placeholder.svg"
              width="400"
              height="300"
              alt="Student Submission"
              className="w-full h-auto object-cover transition-all duration-300 group-hover:scale-110"
              style={imageStyle}
            />
            <div className="absolute inset-0 bg-[#5C0029] bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 flex-col">
              <h3 className="text-white text-2xl font-bold mb-4">
                Submit Assignments
              </h3>
              <h5 className="text-white text-lg font-bold">
                Upload and submit assignments
              </h5>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg shadow-lg">
            <img
              src="/placeholder.svg"
              width="400"
              height="300"
              alt="Student Feedback"
              style={imageStyle}
              className="w-full h-auto object-cover transition-all duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-[#5C0029] bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 flex-col">
              <h3 className="text-white text-2xl font-bold mb-4">
                Track Progress
              </h3>
              <h5 className="text-white text-lg font-bold">
                View submission status, feedback, and grades
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentSection;
