import React from "react";

const AdminSection = () => {
  const imageStyle = {
    aspectRatio: "400 / 300",
    objectFit: "cover",
  };

  return (
    <section id="admin" className="py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6 space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Admin Portal
          </h2>
          <p className="max-w-[80%] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            The Admin Portal allows administrators (typically HODs) to manage
            users and assignments. Admins can register faculty and students,
            promote students to the next semester, add subjects to specific
            semesters, and map subjects to faculty members. This portal provides
            comprehensive control over the assignment management process,
            ensuring efficient operation and data organization within the
            system.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="relative group overflow-hidden rounded-lg shadow-lg">
            <img
              src="/placeholder.svg"
              width="400"
              height="300"
              alt="Admin Dashboard"
              className="w-full h-auto object-cover transition-all duration-300 group-hover:scale-110"
              style={imageStyle}
            />
            <div className="absolute inset-0 bg-[#5C0029] bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h3 className="text-white text-2xl font-bold">Admin Dashboard</h3>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg shadow-lg">
            <img
              src="/placeholder.svg"
              width="400"
              height="300"
              alt="Admin Assignments"
              className="w-full h-auto object-cover transition-all duration-300 group-hover:scale-110"
              style={imageStyle}
            />
            <div className="absolute inset-0 bg-[#5C0029] bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h3 className="text-white text-2xl font-bold">
                Manage Assignments
              </h3>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg shadow-lg">
            <img
              src="/placeholder.svg"
              width="400"
              height="300"
              alt="Admin Students"
              className="w-full h-auto object-cover transition-all duration-300 group-hover:scale-110"
              style={imageStyle}
            />
            <div className="absolute inset-0 bg-[#5C0029] bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h3 className="text-white text-2xl font-bold">Manage Students</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminSection;
