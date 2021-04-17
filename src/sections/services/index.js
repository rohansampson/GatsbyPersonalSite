import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import BaffleText from 'components/baffle-text'
import AnimationContainer from 'components/animation-container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faAngular, faAws } from '@fortawesome/free-brands-svg-icons'
import {
  faPencilRuler,
  faServer,
  faRobot,
  faSmileBeam,
  faPizzaSlice,
  faQuoteRight,
  faCode,
} from '@fortawesome/free-solid-svg-icons'
import Counter from 'components/counter'
import ThemeContext from '../../context'
import './styles.scss'
import { Icon, InlineIcon } from '@iconify/react';

import pytorchIcon from '@iconify-icons/cib/pytorch';
import tensorflowIcon from '@iconify-icons/cib/tensorflow';
import pythonIcon from '@iconify-icons/cib/python';
import machineLearningModel from '@iconify-icons/carbon/machine-learning-model';
import machineLearning from '@iconify-icons/carbon/machine-learning';
import eyeIcon from '@iconify-icons/fa-solid/eye';
import languageSolid from '@iconify-icons/clarity/language-solid';
import chartLineData from '@iconify-icons/carbon/chart-line-data';
import devTo from '@iconify-icons/cib/dev-to';



class Services extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
    }
    this.show = this.show.bind(this)
  }

  static contextType = ThemeContext

  show() {
    this.setState({ show: true })
  }

  render() {
    return (
      <section
        id={`${this.props.id}`}
        className="services"
        style={{ height: this.context.height }}
      >
        <Row
          className="top"
          style={{
            maxHeight:
              this.context.height !== 'auto'
                ? this.context.height * 0.8
                : 'inherit',
          }}
        >
          <div className="content">
            <Col md={12}>
              <div className="line-text">
                <h4>Services</h4>
              </div>
              <div className="heading">
                <BaffleText
                  text="What I Do"
                  revealDuration={500}
                  revealDelay={500}
                  parentMethod={this.show}
                  callMethodTime={1100}
                />
              </div>
              <div
                className="services_container"
                style={{
                  minHeight:
                    this.context.height !== 'auto'
                      ? this.context.height * 0.6
                      : 'inherit',
                }}
              >
                <Container>{this.services()}</Container>
              </div>
            </Col>
          </div>
        </Row>
        <Row className="bottom">{this.counters()}</Row>
      </section>
    )
  }

  services() {
    if (this.state.show || this.context.height === 'auto') {
      return (
        <Row>
          <Col md={4} className="service">
            <AnimationContainer delay={200} animation="fadeInLeft fast">
            <div className="icon">
                 <Icon icon={pytorchIcon} size={70} />
              </div>
              <h4>PyTorch</h4>
              <p>
               An open source machine learning framework.
              </p>              
            </AnimationContainer>
          </Col>
          <Col md={4} className="service border-side">
            <AnimationContainer delay={400} animation="fadeInDown fast">
              <div className="icon">
                <Icon icon={tensorflowIcon} />
              </div>
              <h4>Tensorflow</h4>
              <p>
                An end-to-end open source machine learning platform 
              </p>
            </AnimationContainer>
          </Col>
          <Col md={4} className="service">
            <AnimationContainer delay={600} animation="fadeInRight fast">
              <div className="icon">
                <Icon icon={pythonIcon} />
              </div>
              <h4>Python</h4>
              <p>
                A programming language that lets you work quickly more effectively
              </p>
            </AnimationContainer>
          </Col>
          <Col md={4} className="service">
            <AnimationContainer delay={1000} animation="fadeInLeft fast">
              <div className="icon">
                <Icon icon={machineLearning} />
              </div>
              <h4>Machine Learning</h4>
              <p>
                Algorithms that improve through experience and data
              </p>
            </AnimationContainer>
          </Col>
          <Col md={4} className="service border-side">
            <AnimationContainer delay={800} animation="fadeInUp fast">
              <div className="icon">
                <Icon icon={machineLearningModel} />
              </div>
              <h4>Deep Learning</h4>
              <p>
                Systems vaguely inspired by the biological neural networks
              </p>
            </AnimationContainer>
          </Col>
          <Col md={4} className="service">
            <AnimationContainer delay={1200} animation="fadeInRight fast">
            <div className="icon">
              <Icon icon={eyeIcon} />
              </div>
              <h4>Computer Vision</h4>
              <p>
                Gain high-level understanding from digital images or videos
              </p>
            </AnimationContainer>
          </Col>
          <Col md={4} className="service">
            <AnimationContainer delay={1200} animation="fadeInLeft fast">
            <div className="icon">
              <Icon icon={languageSolid} />
              </div>
              <h4>Natural Language Processing</h4>
              <p>
                Processing and analyze large amounts of natural language data
              </p>
            </AnimationContainer>
          </Col>
          <Col md={4} className="service border-side">
            <AnimationContainer delay={400} animation="fadeInDown fast">
              <div className="icon">
                <Icon icon={chartLineData} />
              </div>
              <h4>Data Science</h4>
              <p>
                Gain insights and knowledge from data
              </p>
            </AnimationContainer>
          </Col>
          <Col md={4} className="service border-side">
            <AnimationContainer delay={400} animation="fadeInRight fast">
              <div className="icon">
                <Icon icon={devTo} />
              </div>
              <h4>Software Engineering</h4>
              <p>
                Application of engineering approaches to the development of software
              </p>
            </AnimationContainer>
          </Col>
        </Row>
      )
    }
  }

  counters() {
    if (this.state.show || this.context.height === 'auto') {
      return (
        <Container>
          <Col md={3}>
            <AnimationContainer delay={100} animation="fadeIn fast">
              <Counter
                icon={faSmileBeam}
                value={3}
                text="Happy Employers"
                symbol="+"
                duration={3}
              />
            </AnimationContainer>
          </Col>
          <Col md={3}>
            <AnimationContainer delay={100} animation="fadeIn fast">
              <Counter
                icon={faPizzaSlice}
                value={127}
                text="Pizzas Ordered"
                symbol="+"
                duration={3}
              />
            </AnimationContainer>
          </Col>
          <Col md={3}>
            <AnimationContainer delay={100} animation="fadeIn fast">
              <Counter
                icon={faQuoteRight}
                value={6}
                text="Recommendations"
                symbol="+"
                duration={3}
              />
            </AnimationContainer>
          </Col>
          <Col md={3}>
            <AnimationContainer delay={100} animation="fadeIn fast">
              <Counter
                icon={faCode}
                value={73841}
                text="Lines of Code"
                symbol="+"
                duration={3}
              />
            </AnimationContainer>
          </Col>
        </Container>
      )
    }
  }
}

export default Services
