import { Route, Routes, useMatch } from 'react-router-dom'
import Home from '../src/pages/student/Home.jsx';
import CoursesList from '../src/pages/student/CoursesList.jsx';
import CourseDetails from '../src/pages/student/CourseDetails.jsx';
import MyEnrollments from '../src/pages/student/MyEnrollments.jsx';
import Player from '../src/pages/student/Player.jsx';
import Loading from './components/student/Loading.jsx';
import Educator from '../src/pages/educator/Educator.jsx';
import Dashboard from '../src/pages/educator/Dashboard.jsx';
import AddCourse from '../src/pages/educator/AddCourse.jsx';
import MyCourses from '../src/pages/educator/MyCourses.jsx';
import StudentsEnrolled from '../src/pages/educator/StudentsEnrolled.jsx';
import Navbar from './components/student/Navbar.jsx';
import "quill/dist/quill.snow.css";

export default function App() {
  const isEducatorRoute = useMatch("/educator/*")

  return (
    <div className='text-default min-h-screen bg-white'>
      {
        !isEducatorRoute && <Navbar />
      }
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/course-list' element={<CoursesList />} />
        <Route path='/course-list/:input' element={<CoursesList />} />
        <Route path='/course/:id' element={<CourseDetails />} />
        <Route path='/my-enrollments' element={<MyEnrollments />} />
        <Route path='/player/:courseId' element={<Player />} />
        <Route path='/Loading/:path' element={<Loading />} />
        <Route path='/educator' element={<Educator />}>
          <Route path='/educator' element={<Dashboard />} />
          <Route path='add-course' element={<AddCourse />} />
          <Route path='my-courses' element={<MyCourses />} />
          <Route path='student-enrolled' element={<StudentsEnrolled />} />
        </Route>
      </Routes>
    </div>
  )
}
