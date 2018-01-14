import React, { Component } from 'react';
import { Button, Row, Col, Panel } from 'react-bootstrap';
import Faq_component from './faq_component';
import '../Assets/faq.css';


class Faq extends Component {

	constructor(props) {
		super(props);
	}

	render() {
    	return (
      	<div className="App">
        	<section className="faq">
						<Row>
							<Col md="2"><img className="thing2" src={require('../Assets/thing2.png')}></img></Col>
							<Col md="8"><h2 className="faq_header">FAQs</h2></Col>
							<Col md="2"><img className="thing3" src={require('../Assets/thing3.png')}></img></Col>
						</Row>
						<Row>
							<Col md="2"></Col>
							<Col md="8">
								<Row>
									<Faq_component
										title='Who can attend?'
										paragraph='Anyone currently enrolled in a high school, undergraduate, or graduate program can attend.'
									/>
								</Row>
								<br></br>
								<Row>
									<Faq_component
										title='What if I have no experience?'
										paragraph="First and foremost, hackathons are a learning experience. It wouldn't be fun if you knew exactly what to do. If you need help getting started or just can't find the source of a 'new feature' we have a team of mentors at your disposal."
									/>
								</Row>
								<br></br>
								<Row>
									<Faq_component
										title='What if I have no team or idea?'
										paragraph='There are plenty of other hackers with your same dilemma that you can join forces with. Thirty six hours is plenty of time for a couple hours of brainstorming.'
									/>
								</Row>
								<br></br>
								<Row>
									<Faq_component
										title='Will travel be reimbursed?'
										paragraph='Email us @ HackCWRU@case.edu, we plan on being able to reimbursing non-Case students for up to $50 of travel. Just make sure to save your travel receipt!'
									/>
								</Row>
								<br></br>
								<Row>
									<Faq_component
										title='How much does it cost?'
										paragraph='Nothing. Food, drinks, power, building materials, and machine time are provided for free.'
									/>
								</Row>
								<br></br>
								<Row>
									<Faq_component
										title='What should I bring?'
										paragraph="Besides your computer, bring anything that you'd like to hack with or that would make your sleepover more comfortable. We suggest a sleeping bag, a toothbrush, and a change of clothes."
									/>
								</Row>
								<br></br>
								<Row>
									<Faq_component
										title="What if I don't have equipment to make my hack?"
										paragraph="We have that covered! We'll have laptops, 3D printers and a lot of MLH-provided hardare (including fancy VR stuff like the Oculus Rift!) provided for you to rent out for free."
									/>
								</Row>

							</Col>
							<Col md="2"></Col>
						</Row>
					</section>
      	</div>
    	);
  	}

}

export default Faq;
