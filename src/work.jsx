import './work.css';

function Work() {
  const works = [
    {
      id: 1,
      title: 'Project 1',
      description: 'A web application built with React',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Mobile app using Flutter',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'E-commerce site with Node.js',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      id: 4,
      title: 'Project 4',
      description: 'Data visualization dashboard',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      id: 5,
      title: 'Project 5',
      description: 'AI-powered chatbot',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      id: 6,
      title: 'Project 6',
      description: 'Machine learning model',
      image: 'https://via.placeholder.com/300x200',
    },
  ];

  return (
    <div className="work-section">
      <div className="work-content">
        <div className="work-header">
          <h1 className="work-title">My Works</h1>
          <p className="work-description">I have worked on projects across multiple technologies and domains, gaining broad development <br/>experience while specializing in backend engineering. My projects focus on building scalable APIs,<br/> backend systems, and data-driven solutions using modern backend technologies and databases.<br/>
           <a href='https://github.com/SanthoshMB08' className="work-link"> Check git hub for project→</a></p>
        </div>
        <div className="works-grid">
          {works.map(work => (
            <div key={work.id} className="work-item">
              <img src={work.image} alt={work.title} />
              <h3>{work.title}</h3>
              <p>{work.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Work;
