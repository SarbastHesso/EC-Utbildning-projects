import React from 'react';
import './Projects.css';
import {themeContext} from '../../context/themeContext';
import { useContext } from 'react';
import {AiFillGithub} from 'react-icons/ai';
import LinkImg from '../../assets/images/linkImg.svg';
import {myProjects} from './ProjectsData';


const Projects = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='projects' id='projects'>
      <div className="projectsContainer">
        <div className='titleWrap'>
          <h3>SKOLPROJEKT</h3>
          <img src={LinkImg} alt="code" className='linkImg'/>
        </div>
        <div className="cardsGroup">
          {
            myProjects&&myProjects.map((project, index) => (
              <a className="card" key={index}
              href={project.url} target = "_blank" rel="noopener noreferrer"
              >
                <div className="imgWrap">
                  <img src={project.image} alt="project" />
                </div>
                <p style={{color: darkMode? "var(--white-text)": "var(--black-text)"}}>{project.title}</p>
                <AiFillGithub className='githubIcon'/>
              </a>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Projects