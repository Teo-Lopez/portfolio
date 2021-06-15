import React from 'react'
import styled, { keyframes } from 'styled-components'

const appear = keyframes`
  from {
    opacity: 0
  }
  to {
    transform: translate(0, 0);
  	opacity: 1
  }
`

const Card = styled.article`
  width: 100%;
  background-image: ${({ img }) => `url(${img})`};
  background-size: contain;
  background-position: 50%;
  background-repeat: no-repeat;
  transition: filter 100ms;
  transition-delay: 100ms;
  filter: grayscale(0.8) brightness(1);
  opacity: 0;
  animation: 1.2s ease-out 1 normal forwards ${appear};
  cursor: pointer;

  .cover {
    background-color: rgba(13, 13, 13, 0.7);
    transition: background-color 100ms;
  }
  .underScore {
    display: inline-block;
    border-bottom: 1px solid rgba(250, 250, 250, 0.8);
  }

  .innerWrapper {
    padding: 16px;
    color: rgb(250, 250, 250);
    font-size: 1.8em;
    width: 100%;
    text-align: center;
    opacity: 1;
    transition: opacity 100ms;
  }
  h3 {
    font-size: 0.7em;
    letter-spacing: 2px;
  }
  p {
    color: white;
    font-size: 0.5em;
    font-weight: 300;
  }

  .tech-wrapper {
    width: 80%;
    margin: 0 auto;
    h4 {
      font-size: 0.5em;
    }
  }

  &.appearRight {
    transform: translate(400px, 0);
  }
  &.appearLeft {
    transform: translate(-400px, 0);
  }

  @media only screen and (min-width: 870px) {
    opacity: 1;
    font-size: 1.2em;

    .cover {
    }

    &:hover {
      filter: grayscale(0) brightness(1);

      .cover {
        transition: background-color 300ms;
        background-color: rgba(13, 13, 13, 0.6);
      }
      .innerWrapper {
        transition: opacity 100ms;
      }
    }
  }
`

function ProjectCard({
  img,
  title,
  description,
  isVisible,
  direction,
  url,
  techs = [],
}) {
  const appearClass = direction === 'left' ? 'appearLeft' : 'appearRight'
  return (
    <Card img={img} className={isVisible && appearClass}>
      <div className='readable'>
        <a href={url} target='_blank' className='cover' rel='noreferrer'>
          <div className='innerWrapper'>
            <h3 className='underScore'>{title}</h3>
            <p>{description}</p>
            <hr />
            <footer className='tech-wrapper'>
              <h4 className='underScore'>Tecnologías:</h4>
              <p>
                {techs.map(
                  (elm, idx) => `${elm}${idx === techs.length - 1 ? '.' : ','} `
                )}
              </p>
            </footer>
          </div>
        </a>
      </div>
    </Card>
  )
}

export default ProjectCard
