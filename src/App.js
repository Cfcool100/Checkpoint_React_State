import './App.css';
import React, { Component } from 'react';
import img from './img/profile.jpg'



class App extends Component {

  constructor(){
    super()
    this.state = {
      person: {
        fullName: 'Monkey D. Luffy',
        bio:
          'I am a student at GOMYCODE, following a bootcamp for Full-Stack JavaScript Web Development.',
        imgSrc: img,
        profession: 'Full-Stack JavaScript Developer',
      },
      show: true,
      mountTime: new Date().toLocaleTimeString() // affiche l'heure locale 🤷‍♂️
    }
  }
  
  toggle = () => {
    this.setState((currentState) => ({show: !currentState.show})) // change l'etat du State  show si l'on clique sur le button
  }

  // 1er étape de cycle d'un composant , losrqie le composant est monté
  componentDidMount() {
    this.interval = setInterval(() => { // application du setInterval attribut d'une seconde chaque fois que le composant est monté 
      this.setState({ mountTime: new Date().toLocaleTimeString() }); 
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() { 
    const { person, show, mountTime } = this.state; // destructuration du state
    
    return ( 
      <>
        
        {show && 
          <div className="card" >
          <div className='profile'><img src={person.imgSrc} alt="hello" /></div>
          <h3>{person.fullName}</h3>
          <ul className='list'>
            <li>{person.bio}</li>
            <li>{person.profession}</li>
          </ul>
        </div>// condition sur l'affiche et le masquage à chaque clique 
        } 
        <button className='btn' onClick={this.toggle}>{show ? 'Hide' : 'Show' /* chaque sur le btn, si la condition est verifier, S'affiche soit Hide, soit Show*/ }</button>
        <div className="timer">
          <h4>{mountTime}</h4>
        </div>
      </>
    );
  }
}


export default App;