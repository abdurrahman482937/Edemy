import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext.jsx'
import SearchBar from '../../components/student/SearchBar.jsx'
import { useParams } from 'react-router-dom'
import CourseCard from '../../components/student/CourseCard.jsx'
import { assets } from '../../assets/assets.js'
import Footer from '../../components/student/Footer.jsx'

export default function CoursesList() {
    const { navigate, allCourses } = useContext(AppContext)
    const { input } = useParams()

    const [filteredCourse, setFilteredCourse] = useState([])
    useEffect(() => {
        if (allCourses && allCourses.length > 0) {
            const tempCourses = allCourses.slice()

            input ?
                setFilteredCourse(
                    tempCourses.filter(
                        item => item.courseTitle.toLowerCase().includes(input.toLowerCase())
                    )
                )
                : setFilteredCourse(tempCourses)
        }
    }, [allCourses, input])

    return (
        <>
            <div className="relative md:px-36 px-8 pt-20 text-left">
                <div className="flex md:flex-row flex-col gap-6 items-start justify-between w-full">
                    <div className="">
                        <h1 className='text-4xl font-semibold text-gray-800'>Course List</h1>
                        <p className='text-gray-500'>
                            <span className='text-blue-600 cursor-pointer' onClick={() => navigate('/')}>Home</span> / <span>Course List</span>
                        </p>
                    </div>
                    <SearchBar data={input} />
                </div>
                {
                    input && <div className='inline-flex items-center gap-4 px-4 py-2 border mt-8 -mb-8 text-gray-600'>
                        <p>{input}</p>
                        <img src={assets.cross_icon} alt="" className='cursor-pointer ' onClick={() => navigate('/course-list')} />
                    </div>
                }
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-16 gap-3 px-2 md:p-0">
                    {filteredCourse.map((course, i) => <CourseCard key={i} course={course} />)}
                </div>
            </div>
            /<Footer />
        </>
    )
}
