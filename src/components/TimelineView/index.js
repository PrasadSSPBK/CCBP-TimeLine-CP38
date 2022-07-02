import {Chrono} from 'react-chrono'

import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  //   const projectList = timelineItemsList.filter(
  //     eachList => eachList.categoryId === 'PROJECT',
  //   )

  //   const courseList = timelineItemsList.filter(
  //     eachList => eachList.categoryId === 'COURSE',
  //   )

  //   //   console.log(projectList)
  //   //   console.log(courseList)

  const renderTimelineCard = item => {
    if (item.categoryId === 'PROJECT') {
      return <ProjectTimelineCard key={item.id} projectList={item} />
    }
    return <CourseTimelineCard key={item.id} courseList={item} />
  }

  return (
    <div className="mainContainer">
      <h1 className="head">MY JOURNEY OF CCBP 4.0</h1>
      <div className="chronoContainer">
        <Chrono
          mode="VERTICAL_ALTERNATING"
          items={timelineItemsList}
          theme={{
            primary: ' #0967d2',
            secondary: '#ffffff',
          }}
        >
          {timelineItemsList.map(eachList => renderTimelineCard(eachList))}
        </Chrono>
      </div>
    </div>
  )
}
export default TimelineView
