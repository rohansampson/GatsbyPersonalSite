import React from 'react'
import Particles from 'react-particles-js';
import Progress from 'components/progress'
import { Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import ThemeContext from '../../context'
import './styles.scss'

class Hero extends React.Component {

    static contextType = ThemeContext

    render() {
        return (
            <section id={`${this.props.id}`} className="about" style={{height: this.context.height}}>
                {this.particles()}
                <Row>
                    <Col md={6} className="content">
                        <div className="content-text">
                            <div className="line-text">
                                <h4>About Me</h4>
                            </div>
                            <h3>I'm a Machine Learning student and former Software Engineer</h3>
                            <div className="separator" />
                            <p>
                                I have a Masters degree in Artificial Intelligence and Machine Learning and a Bachelor's degree in Computer Science and Engineering. I have extensive experience as a software engineer. I have a passion for Machine Learning and am working on my dissertation on Transformer models and Temporal data which can be applied to NLP and Video understanding.
                            </p>
                            <div className="social social_icons">
                                <FontAwesomeIcon icon={faGithub} className="social_icon" onClick={() => window.open('https://github.com/rohansampson/')}/>
                                <FontAwesomeIcon icon={faTwitter} className="social_icon" onClick={() => window.open('https://twitter.com/rohansampson')} />
                                {/* <FontAwesomeIcon icon={faYoutube} className="social_icon" onClick={() => window.open('https://www.youtube.com')} /> */}
                                <FontAwesomeIcon icon={faLinkedin} className="social_icon" onClick={() => window.open('https://www.linkedin.com/in/rohan-sampson/')} />
                            </div>
                        </div>
                    </Col>
                    <Col md={6} className="skills">
                            <div className="line-text">
                                <h4>My Skills</h4>
                            </div>
                            <div className="skills-container">
                                <Progress name="PyTorch" value={90} delay={1100} />
                                <Progress name="Tensorflow" value={70} delay={1100} />
                                <Progress name="Python" value={90} delay={1100} />
                                <Progress name="Machine Learning" value={90} delay={1100} />
                                <Progress name="Deep Learning" value={85} delay={1100} />
                                <Progress name="Computer Vision" value={80} delay={1100} />
                                <Progress name="Natural Language Processing" value={85} delay={1100} />
                                <Progress name="Software Engineering" value={95} delay={1100} />
                            </div>
                    </Col>
                </Row>
            </section>
        )
    }

    particles() {
        return (
            <Particles
                className="particles"
                params={{
                    "particles": {
                        "number": {
                            "value": 50,
                            "density": {
                                "enable": false,
                                "value_area": 5000
                            }
                        },
                        "line_linked": {
                            "enable": true,
                            "opacity": .5
                        },
                        "size": {
                            "value": 1
                        },
                    },
                    "retina_detect": true
            }}/>
        )
    }

}

export default Hero