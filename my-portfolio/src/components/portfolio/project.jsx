
//logic for implementing projects

import PropTypes from 'prop-types';
import './portfolio.css';


const Project = ({ title, image, deployLink, githubLink }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img
        src={image}
        alt={title}
        className="w-full h-auto"
        style={{ transition: 'filter 0.3s ease' }}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
      </div>
      <div className="flex justify-center space-x-4 py-2">
        <a
          href={deployLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Deployed Page
        </a>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};


  
  Project.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    deployLink: PropTypes.string.isRequired,
    githubLink: PropTypes.string.isRequired,
  };
  
  export default Project;