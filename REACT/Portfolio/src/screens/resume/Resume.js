import React, {useState} from 'react';
import './Resume.css';
import {FaHandPointRight} from 'react-icons/fa';
import {BiRadioCircleMarked} from 'react-icons/bi';
import { myEducations } from './ResumeData';
import { myWorks } from './ResumeData';
import { skolKurser } from './ResumeData';

const Resume = () => {

  const [activeContentBody, setActiveContentBody] = useState(true);

  return (
    <div className='resume' id='reusme'>
      <div className="resumeContent">
        <div className="contentTitles">
          <h3 className='educationTitle'
          style={{
            background: activeContentBody ? "var(--orange)" : "",
            cursor: activeContentBody ? "" : "pointer",
          }}
          onClick={() => setActiveContentBody(true)}
          >
            UTBILDNING
            {
              activeContentBody ? <BiRadioCircleMarked/> : ''
            }
          </h3>
          <h3 className='workTitle'
          style={{
            background: activeContentBody ? "" : "var(--orange)",
            cursor: activeContentBody ? "pointer" : "",
          }}
          onClick={() => setActiveContentBody(false)}
          >
            ARBETSLIVSERFARENHETER
            {
              activeContentBody ? '' : <BiRadioCircleMarked/>
            }
          </h3>
        </div>
        <div className="contentBody">

          {
            activeContentBody 
            ? 
            <div className="education">
            {
              myEducations&&myEducations.map((education, index) => (
                <div className='educationItem' key={index}>
                  <div className='flexedDiv'>
                    <FaHandPointRight className="listPoint"/>
                    <p className='educationItemTitle'>{education.title}</p>
                  </div>
                  <div>
                    <p className='educationItemPeriod'>{education.period}</p>
                  </div>
                  <div>
                    <p className='educationItemDesc'>{education.desc}</p>
                  </div>
                </div>
              ))
            }
              <div className='skolKurser'>
                <p className='skolKurserTitle'>Skolkurser under utbildningen - Frontendutvecklare/EC-Utbildning:</p>
                <div className='skolKurseritems'>
                  {
                    skolKurser&&skolKurser.map((kurs, index) => (
                      <div key={index} className='skolKurserItem'>
                        <p>{kurs}</p>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
            :
            <div className="workHistory">
              {
                myWorks&&myWorks.map((work, index) => (
                  <div className='workItem' key={index}>
                    <div className="firstRow">
                      <div className='flexedDiv'>
                        <FaHandPointRight className="listPoint"/>
                        <p className='workItemTitle'>{work.title}</p>
                      </div>
                      <div>
                        <p className='workItemPlace'>{work.place}</p>
                      </div>
                      <div>
                        <p className='workItemPeriod'>{work.period}</p>
                      </div>
                    </div>
                    <div className='secondRow'>
                      <p className='workItemDesc'>{work.desc}</p>
                    </div>
                  </div>
                ))
              }
            </div>

          }

        </div>
      </div>
    </div>
  )
}

export default Resume