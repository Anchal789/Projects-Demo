import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import DialogBox from "./DialogBox";

function App() {
  const imageStyle = {
    aspectRatio: "400 / 300",
    objectFit: "cover",
  };

  return (
    <div className="flex flex-col min-h-dvh w-full animate-fade-down animate-once animate-duration-[2100ms]">
      <DialogBox />
      <header className="bg-[#024950] text-white py-6 px-4 md:px-6  ">
        <div className="container mx-auto flex items-center justify-between">
          <Link className="flex items-center gap-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
            </svg>
            <span className="text-xl font-bold">Project Images</span>
          </Link>
          <nav className="hidden md:flex gap-4 mr-6">
            <Link className="hover:bg-[#ffffff] p-2 hover:text-black hover:rounded-full font-bold rounded-full transition-all duration-300">
              Admin
            </Link>
            <Link className="hover:bg-[#ffffff] p-2 hover:text-black hover:rounded-full font-bold rounded-full transition-all duration-300">
              Faculty
            </Link>
            <Link className="hover:bg-[#ffffff] p-2 hover:text-black hover:rounded-full font-bold rounded-full transition-all duration-300">
              Student
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-12 md:py-24 lg:py-32 bg-[#024950] text-white ">
          <div className="container mx-auto px-4 md:px-6 text-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Assignment Management System
            </h1>
            <p className="max-w-[80%] mx-auto text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our Assignment Management System provides a comprehensive solution
              for managing assignments across three portals: Admin, Faculty, and
              Student.
            </p>
          </div>
        </section>
        <section id="admin" className="py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Admin Portal
              </h2>
              <p className="max-w-[80%] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The Admin Portal allows administrators (typically HODs) to
                manage users and assignments. Admins can register faculty and
                students, promote students to the next semester, add subjects to
                specific semesters, and map subjects to faculty members. This
                portal provides comprehensive control over the assignment
                management process, ensuring efficient operation and data
                organization within the system.
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
                  <h3 className="text-white text-2xl font-bold">
                    Admin Dashboard
                  </h3>
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
                  <h3 className="text-white text-2xl font-bold">
                    Manage Students
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
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
                The Faculty Portal enables faculty members to manage their
                assigned subjects. They can create assignments, set deadlines,
                and provide detailed descriptions. Faculty can also check
                student submissions, evaluate and grade them, and provide
                feedback. Additionally, the portal offers a student list view to
                access student details, ensuring smooth assignment tracking and
                evaluation.
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
        <section id="student" className="py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Student{" "}
              </h2>
              <p className="max-w-[80%] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The Student Portal allows students to view and manage their
                assignments. Students can log in to see all subjects for their
                semester, view active and inactive assignments, submit their
                work, and check their submission status. The portal also enables
                students to view feedback, marks, and remarks from faculty on
                their submitted assignments, facilitating a clear and structured
                workflow for their academic tasks.
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
        <section id="technologies" className="py-12 md:py-24 lg:py-32 bg-gray-100 ">
          <div className="container mx-auto px-4 md:px-6 space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Technologies Used</h2>
              <p className="max-w-[700px] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                The Assignment Management System is built using the following technologies:
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-2xl font-bold mb-4">Frontend</h3>
                <ul className="space-y-2">
                  <li>React</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>Redux (with Redux Persist for state persistence)</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-2xl font-bold mb-4">Database</h3>
                <ul className="space-y-2">
                  <li>Firebase Realtime Database</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-2xl font-bold mb-4">Authentication</h3>
                <ul className="space-y-2">
                  <li>Firebase Authentication</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="deployment" className="py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Deployment</h2>
              <p className="max-w-[700px] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The Assignment Management System is deployed on the following platform:
              </p>
            </div>
            <div className="flex justify-center">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-2xl font-bold mb-4">Hosting Platform</h3>
                <ul className="space-y-2">
                  <li>Netlify</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-[#024950] text-white py-6 px-4 md:px-6">
        <div className="container mx-auto flex items-center justify-between flex-row sm:flex-col">
          <p className="text-sm">© 2024 Anchal Deshmukh</p>
          <nav className="flex gap-4 flex-row sm:flex-col" data-id="71">
            <Link className="hover:bg-[#ffffff] hover:text-black hover:rounded-full font-bold rounded-full transition-all duration-300">
              Terms of Service
            </Link>
            <Link className="hover:bg-[#ffffff] hover:text-black hover:rounded-full font-bold rounded-full transition-all duration-300">
              Privacy Policy
            </Link>
            <Link className="hover:bg-[#ffffff] hover:text-black hover:rounded-full font-bold rounded-full transition-all duration-300">
              Contact Us
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;
