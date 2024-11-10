import { useState } from "react"
import SideBar from "./Sidebar";
// import Chart from '../assets/chart.png'
const Dashboard = () => {
    const [show, setShow] = useState(false);

    return (
        <>
            <div className="dashboard ">


                {show &&

                    <div className="col-span-1">
                        <SideBar className='w-fit' />
                    </div>
                }

                <div className="">


                    <div>
                        <main className="main-content">

                            <header className="flex items-center justify-between w-full p-4">

                                <div className="flex items-center space-x-3">
                                    <button onClick={() => setShow(!show)} className="text-gray-700 hover:text-gray-900">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M3 5h14a1 1 0 110 2H3a1 1 0 010-2zM3 10h14a1 1 0 110 2H3a1 1 0 010-2zM3 15h14a1 1 0 110 2H3a1 1 0 010-2z" clipRule="evenodd" />
                                        </svg>
                                    </button>

                                    <span className="text-lg font-semibold text-gray-800">Dashboard</span>
                                </div>
                                <div className="mx-4">
                                    <input
                                        type="text"
                                        placeholder="Search Project..."
                                        className="w-full md:w-96 p-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                    />
                                </div>

                                <div className="flex items-center space-x-3">
                                    <div className="flex items-center space-x-1">
                                        <p className="text-sm font-semibold text-gray-800">Santhosh R</p>
                                        <p className="text-xs text-gray-500">UI/UX Designer</p>
                                    </div>
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrs-3w47KbuNFQtM75g8ma9rcsB1VNrj-hPKf4jbJQcH0sA8AyfD4W0btbeWzVVX1GEOk&usqp=CAU"
                                        alt="User Profile"
                                        className="w-8 h-8 rounded-full"
                                    />
                                </div>
                            </header>
                            <main className="flex justify-between items-center p-6 bg-white">

                                <div className=" px-4 py-2 rounded-md shadow-md bg-white border border-gray-100">
                                    <p className="text-lg font-medium text-gray-800">Hello User,</p>
                                    <p className="text-sm text-gray-600">Have a great day at work. Happy Working!!!</p>
                                </div>

                                <div className="flex items-center">
                                    <button className="flex items-center space-x-2 px-4 py-2 rounded-lg shadow-lg bg-white border border-gray-300 hover:bg-gray-100">
                                        <span className="text-sm font-medium text-gray-800">Start Time Tracker</span>
                                        <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 4h2v6H9V4zM9 12h2v2H9v-2z" />
                                        </svg>
                                    </button>
                                </div>
                            </main>
                            <div className="grid row-span-7 sm:grid-cols-2 md:grid-cols-6 gap-4 p-6">
                                <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md border border-gray-200">
                                    <div>
                                        <p className="text-sm text-gray-500">Today Hours</p>
                                        <p className="text-lg font-semibold text-gray-800">7:00:01</p>
                                    </div>
                                    <div className="p-2 bg-blue-100 rounded-full">
                                        <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 4h2v6H9V4zM9 12h2v2H9v-2z" />
                                        </svg>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md border border-gray-200">
                                    <div>
                                        <p className="text-sm text-gray-500">Weekly Activity</p>
                                        <p className="text-lg font-semibold text-gray-800">0%</p>
                                    </div>
                                    <div className="p-2 bg-blue-100 rounded-full">
                                        <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M2 12h2v8H2zm18-2h-6.31l.95-4.57c.15-.78-.34-1.43-1.11-1.43h-3.36c-.56 0-1.09.31-1.31.8L7.2 10.82c-.4.9.05 1.9 1.02 1.9h3.68l-.88 4.44a1.48 1.48 0 00.25 1.32l1.55 1.82c.46.54 1.2.54 1.67 0l3.74-4.42c.19-.22.29-.51.29-.8v-4a1.1 1.1 0 00-1.1-1.1z" />
                                        </svg>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md border border-gray-200">
                                    <div>
                                        <p className="text-sm text-gray-500">Worked This Week</p>
                                        <p className="text-lg font-semibold text-gray-800">40:00:05</p>
                                    </div>
                                    <div className="p-2 bg-blue-100 rounded-full">
                                        <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 4h2v6H9V4zM9 12h2v2H9v-2z" />
                                        </svg>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md border border-gray-200">
                                    <div>
                                        <p className="text-sm text-gray-500">Project Worked</p>
                                        <p className="text-lg font-semibold text-gray-800">02</p>
                                    </div>
                                    <div className="p-2 bg-blue-100 rounded-full">
                                        <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 2H5a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2h-5l-1-1H5z" />
                                        </svg>
                                    </div>
                                </div>
                                

                                <div className=" items-center col-span-2 justify-between p-4 row-span-2 bg-white rounded-lg shadow-md border border-gray-200">
                                    <div className="bg-purple-200 w-full flex justify-between rounded-md p-2">
                                        <div className=" w-full font-semibold">
                                            <p className="text-md text-gray-800">September</p>
                                            <p className="text-md font-semibold text-gray-800">23-10-2023</p>
                                        </div>
                                        <div className="p-2 bg-white  rounded-lg">
                                            <p className="text-blue-500 w-fit text-sm">Today's Task</p>
                                        </div>
                                    </div>
                                    <div className="progess text-slate-500">
                                        <div className="time">
                                            <div className="time1 m-1">
                                                <p>09:00</p><hr />
                                            </div>
                                            <div className="time2 m-1 align-middle flex">
                                                <p className="h-full my-auto">10:00</p>

                                                <div className="border-2 border-blue-800 h-16 rounded ms-4 me-0"></div>
                                                <div className="report border-2 p-2 w-full ms-0 mx-2 border-slate-300 h-16 rounded">
                                                    <p className="font-semibold text-black">
                                                        Work 1
                                                    </p>
                                                    <p>
                                                        10.00am-12.00pm
                                                    </p>
                                                </div>
                                            </div>


                                            <div className="time3 m-1 align-middle flex">
                                                <p className="h-full my-auto">10:00</p>

                                                <div className="border-2 border-blue-800 rounded h-16 ms-4 me-0"></div>
                                                <div className="report border-2 p-2 w-full ms-0 mx-2 border-slate-300 h-16 rounded">
                                                    <p className="font-semibold text-black">
                                                        Work 1
                                                    </p>
                                                    <p>
                                                        10.00am-12.00pm
                                                    </p>
                                                </div>
                                            </div>

                                            <p>09:00</p><hr />
                                            <div className="time4"></div>
                                        </div>
                                    </div>
                                </div>

                    <div className="flex gap-96 justify-around">
             
                    <section className="p-5 space-y-6 mx-auto">
                        {/* Task List Section */}
                        <div className="bg-white p-6 rounded-lg shadow-md relative space-y-4">
                          <div className="flex justify-between items-center">
                            <h2 className="text-xl font-semibold">My Tasks <span className="text-gray-500">(05)</span></h2>
                            <button className="bg-gray-200 text-gray-700 rounded-full w-8 h-8 flex items-center justify-center text-lg">+</button>
                          </div>
                          <div className="space-y-3">
                            {['Create Wireframe', 'Slack Logo Design', 'Dashboard Design', 'Create Wireframe', 'App Icon Design'].map((task, index) => (
                              <div
                                key={index}
                                className={`flex justify-between items-center p-3 rounded-lg ${index === 3 ? 'bg-green-50' : 'bg-gray-50'}`}
                              >
                                <span className="text-gray-500 font-medium">{`0${index + 1}`}</span>
                                <p className="flex-1 text-gray-700">{task}</p>
                                <button className="text-gray-500 w-8 h-8 flex items-center justify-center">
                                  <span className={`text-2xl ${index === 3 ? 'text-green-500' : 'text-gray-400'}`}>✓</span>
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Projects Section */}
                        <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
                          <h2 className="text-xl font-semibold">Projects</h2>
                          {['Project Four', 'Project Four', 'Project Four'].map((project, index) => (
                            <div key={index} className="flex justify-between items-center space-y-4">
                              <p className="flex items-center space-x-2">
                                <span className="inline-block bg-blue-100 p-1 rounded-md text-blue-500">📁</span>
                                <span>{project}</span>
                              </p>
                              <span className="text-gray-500 bg-green-200 px-4 py-1 rounded">00:30:00</span>
                              <div className="w-24 bg-gray-200 rounded-full h-2 overflow-hidden">
                                <div className="bg-green-500 h-full" style={{ width: '70%' }}></div>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Productivity Section */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                          <div className="flex justify-between items-center">
                            <h2 className="text-xl font-semibold">Productivity</h2>
                            <span className="text-gray-500 text-sm">21 hours 34 mins</span>
                          </div>
                          <div className="flex justify-around items-end h-40 mt-4">
                            <div className="w-4 rounded bg-green-500 h-32"></div>
                            <div className="w-4 rounded bg-purple-500 h-20"></div>
                            <div className="w-4 rounded bg-gray-200 h-12"></div>
                            <div className="w-4 rounded bg-gray-200 h-16"></div>
                            <div className="w-4 rounded bg-gray-200 h-8"></div>
                          </div>
                          <div className="flex justify-between text-xs text-gray-600 mt-4">
                            <span>Mon</span>
                            <span>Tue</span>
                            <span>Wed</span>
                            <span>Thu</span>
                            <span>Fri</span>
                            <span>Sat</span>
                            <span>Sun</span>
                          </div>
                        </div>

                        {/* Messages Section */}
                        <div className="bg-purple-50 p-6 rounded-lg shadow-md">
                          <h2 className="text-xl font-semibold">Messages</h2>
                          {['User Name', 'John Doe', 'John Doe', 'John Doe'].map((name, index) => (
                            <div key={index} className="flex items-center space-x-3 py-2">
                              <div className="w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center text-pink-600 font-bold">
                                {name[0]}
                              </div>
                              <div className="text-sm">
                                <h4 className="font-semibold">{name}</h4>
                                <p className="text-gray-500">What's going on?</p>
                              </div>
                            </div>
                          ))}
                        </div>
                    </section>
                    <section className="p-5 space-y-6 mx-auto">
                      {/* Timer Section */}
                      <div className="bg-white p-4 rounded-lg shadow-lg flex justify-between items-center">
                        <div className="flex items-center space-x-3">
                          <span className="text-blue-500">⏰</span>
                          <h2 className="text-xl font-semibold">Timer</h2>
                        </div>
                        <div className="flex items-center space-x-3">
                          <p className="text-gray-500">25m 20s</p>
                          <button className="bg-gray-200 p-2 rounded-full text-gray-700">⏸</button>
                        </div>
                      </div>

                      {/* Main Project Section */}
                      <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold">Main Project</h2>
                        <div className="space-y-3 mt-4">
                          {['Slack Logo Design', 'Dashboard Design', 'Create Wireframe', 'Create Wireframe', 'Create Wireframe', 'Create Wireframe'].map((task, index) => (
                            <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                              <div className="flex items-center space-x-3">
                                <span className="text-blue-500">📂</span>
                                <p>{task}</p>
                              </div>
                              <p className="text-gray-500">30m 0s</p>
                              <button className="text-gray-400">⋮</button>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Upcoming Deadlines Section */}
                      <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold">Upcoming Deadlines</h2>
                        <div className="space-y-3 mt-4">
                          {['Project Four', 'Project Four', 'Project Four', 'Project Four'].map((project, index) => (
                            <div key={index} className="flex justify-between items-center">
                              <p className="flex items-center space-x-2">
                                <span className="inline-block bg-blue-100 p-2 rounded-md text-blue-500">📁</span>
                                <span>{project}</span>
                              </p>
                              <span className="text-gray-500">00:30:00</span>
                              <div className="w-24 bg-gray-200 rounded-full h-2 overflow-hidden">
                                <div className="bg-pink-500 h-full" style={{ width: '30%' }}></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Project Progress Section */}
                      <div className="bg-white p-6 rounded-lg shadow-lg">
                        <div className="flex justify-between items-center">
                          <h2 className="text-xl font-semibold">Project 1</h2>
                          <button className="text-gray-400">⋮</button>
                        </div>
                        <p className="text-gray-500 mt-2">Make a landing page and mobile app.</p>
                        <div className="flex items-center space-x-2 mt-4">
                          <div className="flex -space-x-2">
                            <img src="avatar1.jpg" alt="User 1" className="w-8 h-8 rounded-full border-2 border-white" />
                            <img src="avatar2.jpg" alt="User 2" className="w-8 h-8 rounded-full border-2 border-white" />
                            <img src="avatar3.jpg" alt="User 3" className="w-8 h-8 rounded-full border-2 border-white" />
                          </div>
                          <p className="text-yellow-500 font-semibold">Progress</p>
                          <span className="text-gray-500">35%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                          <div className="bg-yellow-500 h-full rounded-full" style={{ width: '35%' }}></div>
                        </div>
                      </div>

                      {/* Assignments Section */}
                      <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold">Assignments <span className="text-gray-500">(12)</span></h2>
                        <p className="text-gray-500 mt-2">2/5 completed</p>
                        <div className="space-y-4 mt-4">
                          {[
                            { name: 'Colour Theory', score: '86/100', date: '01 Sep 2022' },
                            { name: 'Design System', score: '90/100', date: '01 Sep 2022' },
                            { name: 'User Persona', score: '0/100', date: 'To Do' }
                          ].map((assignment, index) => (
                            <div key={index} className="flex items-center space-x-3">
                              <input type="checkbox" className="form-checkbox text-purple-500" checked={index < 2} readOnly />
                              <div className="flex-1">
                                <p className={`${index < 2 ? 'text-purple-500' : 'text-gray-500'} font-semibold`}>{assignment.name}</p>
                                <p className="text-xs text-gray-400">{assignment.date}</p>
                              </div>
                              <p className="text-gray-500">{assignment.score}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </section>
                    </div> 


                                {/* <div className=" items-center col-span-2 justify-between p-4 row-span-2 bg-white rounded-lg shadow-md border border-gray-200">
                                    <p className="font-bold">Most Worked</p>
                                   <img src={Chart} alt="" />
                                    <ul className="text-slate-500">
                                        <li className="relative text-gray-800 pl-5 mb-2">
                                            <span class="absolute h-full left-0 top-0 text-sky-500">&#8226;</span>
                                            Research
                                        </li>
                                        <li className="relative text-gray-800 pl-5 mb-2">
                                            <span class="absolute h-full left-0 top-0 text-yellow-500">&#8226;</span>
                                            Design
                                        </li>
                                        <li className="relative text-gray-800 pl-5 mb-2">
                                            <span class="absolute h-full left-0 top-0 text-teal-500">&#8226;</span>
                                            Animation
                                        </li>
                                    </ul>
                                </div> */}

                            </div>

                        </main>
                    </div></div></div>

        </>
    )
}

export default Dashboard