import React, { useContext } from 'react'
import { StyledSocialMedia } from '../styles/StyledSocialMedia'
import Context from '../context/Context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const SocialMedia = () => {
  const { home} = useContext(Context)
  const date = new Date().getFullYear()

  return (
    <StyledSocialMedia home={home}>
      <div className="container">
        <a href="https://www.linkedin.com/in/afgan-shahguliyev/" target="_blank">
          <FontAwesomeIcon className="icon" icon={faLinkedin} />
        </a>
        <a href="https://github.com/Afgan-0601" target="_blank">
        <FontAwesomeIcon className="icon" icon={faGithub} />
        </a> 
      </div>
      <div className="credit">
        <p>
          <span>&copy;</span> Afghan Shahguliyev • {date}
        </p>
      </div>
    </StyledSocialMedia>
  )
}

export default SocialMedia
