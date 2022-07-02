import {AiFillCalendar} from 'react-icons/ai'
// import {Link} from 'react-router-dom'

import './index.css'

const ProjectTimelineCard = props => {
  const {projectList} = props
  console.log(projectList)
  const {
    description,
    imageUrl,
    duration,
    projectUrl,
    projectTitle,
  } = projectList
  return (
    <li className="projectContainer">
      <img src={imageUrl} alt="project" className="image" />
      <div className="first">
        <h1 className="head">{projectTitle}</h1>
        <div className="second">
          <AiFillCalendar className="icon" />
          <p className="para">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <a href={projectUrl} className="link">
        Visit
      </a>
    </li>
  )
}
export default ProjectTimelineCard
