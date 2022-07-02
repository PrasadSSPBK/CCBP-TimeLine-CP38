import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {courseList} = props
  const {courseTitle, duration, description, tagsList} = courseList
  console.log(courseList)

  return (
    <li className="container">
      <div className="first">
        <h1 className="head">{courseTitle}</h1>
        <div className="second">
          <AiFillClockCircle className="icon" />
          <p className="para">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <div className="ul">
        {tagsList.map(eachTag => (
          <p className="liItem">{eachTag.name}</p>
        ))}
      </div>
    </li>
  )
}
export default CourseTimelineCard
