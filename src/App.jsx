function App() {
  const imageStyle = {
    aspectRatio: "400 / 300",
    objectFit: "cover",
  };

  return (
    <div className="flex flex-col min-h-dvh">
      <header className="bg-[#024950] text-white py-6 px-4 md:px-6">
        <div className="container mx-auto flex items-center justify-between">
          <a className="flex items-center gap-2" href="#">
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
            <span className="text-xl font-bold">Assignment Management</span>
          </a>
          <nav className="hidden md:flex gap-4">
            <a className="hover:bg-[#ffffff] hover:text-black hover:rounded-full font-bold rounded-full p-3 transition-all duration-300" href="#">
              Admin
            </a>
            <a className="hover:underline" href="#">
              Faculty
            </a>
            <a className="hover:underline" href="#">
              Student
            </a>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-12 md:py-24 lg:py-32 bg-[#024950] text-white">
          <div className="container mx-auto px-4 md:px-6 text-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Assignment Management Sy
            </h1>
            <p className="max-w-[700px] mx-auto text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our Assignment Managemen
            </p>
          </div>
        </section>
        <section id="admin" className="py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Admin Portal
              </h2>
              <p className="max-w-[700px] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The Admin portal provides a centralized dashboard for managing
                the entire assignment lifecycle, from creating assignments to
                monitoring student progress.e Admin portal provi
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
              <p className="max-w-[700px] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                The Faculty portal empowers instructors to create, manage, and
                grade assignments, as well as provide feedback to students.he
                Faculty po
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
              <p className="max-w-[700px] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The Stu
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
                <div className="absolute inset-0 bg-[#5C0029] bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-white text-2xl font-bold">
                    View Assignments
                  </h3>
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
                <div className="absolute inset-0 bg-[#5C0029] bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-white text-2xl font-bold">
                    Submit Assignments
                  </h3>
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
                <div className="absolute inset-0 bg-[#5C0029] bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-white text-2xl font-bold">Vie</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-[#024950] text-white py-6 px-4 md:px-6">
        <div className="container mx-auto flex items-center justify-between">
          <p className="text-sm">© 2024 Assignment Management</p>
          <nav class="flex gap-4" data-id="71">
            <a data-id="72" className="hover:underline" href="#">
              Terms of Service
            </a>
            <a data-id="73" className="hover:underline" href="#">
              Privacy Policy
            </a>
            <a data-id="74" className="hover:underline" href="#">
              Contact Us
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;
