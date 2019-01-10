import React, { Component } from 'react';

import Logo from './components/Logo.js';
import Content from './components/Content.js';
import FAQBar from './components/FAQBar.js';
import Information from './components/Information.js';
import Schedule from './components/Schedule.js';

import Hackry from 'hackry';

import Sea_sec1 from './components/Sea_sec1.js';
import Sea_sec2 from './components/Sea_sec2.js';
import Sea_sec3 from './components/Sea_sec3.js';
import Sea_sec4 from './components/Sea_sec4.js';

import clownFish from './Assets/new_assets/section_2/clown_fish.svg';
import mantaRay from './Assets/new_assets/section_2/manta_ray.svg';

import bubbles from './Assets/new_assets/section_3/bubbles.svg';
import backgroundFish from './Assets/new_assets/section_3/backgroundFish.svg';
import greenFish from './Assets/new_assets/section_3/greenFish.svg';
import purpleFish from './Assets/new_assets/section_3/purpleFish.svg';

import waveFish from './Assets/new_assets/section_4/fish_in_wave.svg';
import backFish2 from './Assets/new_assets/section_4/2backFish.svg';
import backFish3 from './Assets/new_assets/section_4/3fishBack.svg';
import fishies from './Assets/new_assets/section_4/fishies.svg';
import octopi from './Assets/new_assets/section_4/octopi.svg';

import bottomBed from './Assets/new_assets/section_5/final.svg';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.hackry = new Hackry('987tC2O5oK');

    this.state = {
        faqs: [],
        events: []
    };
  }

  componentWillMount() {
    this.hackry.faqs((faqs) => {
      this.setState({
        faqs: faqs
      });
    });

    this.hackry.events({
      timeZone: 'America/New_York',
      startDateFormat: 'DD h',
      endDateFormat: 'DD h'
    }, (events) => {
      this.setState({
        events: events
      });
    });
    
  }

  render() {
    console.log(this.state.events);
    return (
      <div className="App">
        <section className="introduction">
          <Content />
          <Logo />
          <Sea_sec1 />
        </section>

        <section className="section2">
          <Information title="What is hackCWRU?" text={["hackCWRU brings together the brightest and most creative students to promote unrestricted technological innovation.",<br />,<br />,  "Hosted at Case Western Reserve University, over 350 students will spend 36 hours bringing their imagination into the real world. Attendees will work with peers and mentors to create projects in one of four project tracks. ", <br />, <br />, "Don’t be intimidated! You don’t have to know what you’re doing to attend. If you are new to hackathon, we look forward to introducing you to a world of creation. Lastly, at hackCWRU we abide by and enforce MLH’s Code of Conduct"]}/>
          <div className="clownFish">
            <img src={clownFish}></img>
          </div>
          <div className="mantaRay">
            <img src={mantaRay}></img>
          </div>
          <Sea_sec2 />
        </section>

        <section className="section3">
          <div className="eachSection">
            <h3 className="darkTitle">FAQ</h3>
            <div className="bubbleContainer">
              <FAQBar 
                question="Where will hackCWRU V take place?"
                answer="Hackers will be working in Horsburgh Gymnasium and Think[box]. Attendees can check in at Veale Center, 2138 Adelbert Rd, Cleveland, OH 44106."
              />
              <FAQBar 
                question="Who can attend?" 
                answer="Anyone currently enrolled in a high school, undergraduate, or graduate program can attend."
              />
              <FAQBar 
                question="What if I don't have a lot of experience?" 
                answer="First and foremost, hackathons are a learning experience.  It wouldn't be fun if you knew exactly what to do.  If you need help getting started or just can't find the source of a new feature we have a team of mentors at your disposal."
              />
              <FAQBar 
                question="What if I don't have an idea or team?" 
                answer="There are plenty of other hackers with your same dilemma that you can join forces with. Thirty six hours is plenty of time for a couple hours of brainstorming."
              />
              <FAQBar 
                question="Will travel be reimbursed?" 
                answer="We guarantee up to $50 in travel reimbursement per person. Just make sure to save your travel receipt!"
              />
              <FAQBar 
                question="How much does it cost?" 
                answer="Nothing.  Food, drinks, power, building materials, and machine time are provided for free."
              />
              <FAQBar 
                question="What should I bring?" 
                answer="Besides your computer, bring anything that you'd like to hack with or that would make your  sleepover more comfortable. We suggest a sleeping bag, a toothbrush, and a change of clothes. **Also, please bring a valid state ID or driver's license.**"
              />
              <FAQBar 
                question="What if I don't have equipment to make my hack?" 
                answer="We have that covered! We'll have laptops, 3D printers and a lot of MLH-provided hardare (including fancy VR stuff like the Oculus Rift!) provided for you to rent out for free."
              />
              <FAQBar 
                question="Is there free parking?" 
                answer="Yes! We have Lot 44 reserved on campus which is about a 5 minute walk from the venue."
              />
              
            </div>
          </div>
          <div className="bubbles">
            <img src={bubbles}></img>
          </div>
          <div className="backgroundFish">
            <img src={backgroundFish}></img>
          </div>
          <div className="greenFish">
            <img src={greenFish}></img>
          </div>
          <div className="purpleFish">
            <img src={purpleFish}></img>
          </div>
          <div className="waveFish">
            <img src={waveFish}></img>
          </div>
          <Sea_sec3 />
        </section>

        <section className="section4">
          
          <div className="eachSection">
            <Schedule events={this.state.events}/>
          </div>


          <div className="backFish2">
            <img src={backFish2}></img>
          </div>
          <div className="backFish3">
            <img src={backFish3}></img>
          </div>
          <div className="fishies">
            <img src={fishies}></img>
          </div>
          <div className="octopi">
            <img src={octopi}></img>
          </div>
          <Sea_sec4 />
        </section>

        <section className="section5">
          <div className="eachSection">
            <h3 className="darkTitle">Sponsorship</h3>
          </div>
          <div className="bottomBed">
            <img src={bottomBed}></img>
          </div>
        </section>

      </div>
    );
  }
}

export default App;
