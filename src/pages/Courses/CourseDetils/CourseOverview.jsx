

const CourseOverview = () => {
  return (
    <div className='flex flex-col items-start justify-start pb-20 max-sm:mt-12 px-4 lg:px-32 sm:mt-12 '>
    <h1 className="text-primary font-bold text-3xl mb-5"> Course Overview</h1>
    <ul>
    {Array.from({length: 10}, (_, idx) => (
  <li key={idx} className="text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem quos officiis libero. Placeat expedita accusamus adipisci obcaecati veniam architecto voluptate?</li>
))}
    </ul>
    </div>
  )
}

export default CourseOverview