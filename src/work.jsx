import './work.css';

function Work() {
  const works = [
    {
      id: 1,
      title: 'Abuse Detection AI',
      description: 'Detect abusive content using AI. Python backend + HTML frontend with ML model and web UI for text analysis and moderation.',
      image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=400&h=250&fit=crop&crop=center',
      github: 'https://github.com/SanthoshMB08/Absue-detection-ai'
    },
    {
      id: 2,
      title: 'Bill API',
      description: 'Lightweight billing/invoicing API built with pure Python. Exposes endpoints for creating, reading, and updating billing records.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop&crop=center',
      github: 'https://github.com/SanthoshMB08/bill_api'
    },
    {
      id: 3,
      title: 'Local Bus Ticket System',
      description: 'Java-based local bus ticketing system for ticket booking, fare management, and passenger data handling.',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=250&fit=crop&crop=center',
      github: 'https://github.com/SanthoshMB08/localbus-ticket'
    },
    {
      id: 4,
      title: 'Smart UPI',
      description: 'UPI payment simulation app with offline payment support. Stores payment data offline and syncs when internet is connected.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop&crop=center',
      github: 'https://github.com/SanthoshMB08/smartUPI'
    },
    {
      id: 5,
      title: 'Invoice Agent',
      description: 'Python-based agent for automating invoice generation and management with parsing and integration capabilities.',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=250&fit=crop&crop=center',
      github: 'https://github.com/SanthoshMB08/invoice_agent'
    },
    {
      id: 6,
      title: 'Agri-ML',
      description: 'Agriculture-related ML project with data processing, prediction, and advisory features for farming applications.',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=250&fit=crop&crop=center',
      github: 'https://github.com/SanthoshMB08/Agri-'
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
              <a href={work.github} target="_blank" rel="noopener noreferrer" className="project-link">
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Work;
