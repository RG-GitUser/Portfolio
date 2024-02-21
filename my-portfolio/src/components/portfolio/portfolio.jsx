import "./portfolio.css";
import Project from './project';



const projects = [
    {
      title: 'Weaher Dashboard',
      image: './images/weatherDashboard.png',
      deployLink: 'https://rg-gituser.github.io/Weather-Dashboard/',
      githubLink: 'https://github.com/RG-GitUser/Weather-Dashboard',
    },
    {
      title: 'Tech Blog',
      image: './images/techBlog.png',
      deployLink: 'https://rileystechblog-3b7d7e0ca2c5.herokuapp.com/',
      githubLink: 'https://github.com/RG-GitUser/tech-blog',
    },
   {
    title: 'Text Editor',
    image: './images/JATE.png',
    deployLink: 'https://www.youtube.com/watch?v=tKuk2ycd2_M',
    githubLink: 'https://github.com/RG-GitUser/Text-Editor',
  },
   {

    title: 'Social Netowrk API',
      image: './images/SNA.png',
      deployLink: 'https://https://www.youtube.com/watch?v=w6_BsahYloQexample.com/project2',
      githubLink: 'https://github.com/RG-GitUser/Social-Network-API',
    },

    {
    title: 'E-Commerce Backend',
    image: './images/ECOM.png',
    deployLink: 'https://www.youtube.com/watch?v=QHHEnaB1HZw',
    githubLink: 'https://github.com/RG-GitUser/E-commerce-Back-End',
  },
  {
    title: 'Wedding RSVP App',
    image: './images/WeddingRSVP.png',
    deployLink: 'https://mcleodherritt.github.io/Wedding-RSVP/',
    githubLink: 'https://github.com/RG-GitUser/Wedding-RSVP',
  },
];
  

const Portfolio = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {projects.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          image={project.image}
          deployLink={project.deployLink}
          githubLink={project.githubLink}
        />
      ))}
    </div>
  );
};

export default Portfolio;