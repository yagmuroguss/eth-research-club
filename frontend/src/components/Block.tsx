import "./block.css"
import Navbar from './Navbar';

export default function Block() {

  return (
    <div className="main-block">
      <Navbar />

      <div className="advertising-main" style={{marginTop: '11vw'}}>
          <h1>
            <span style={{display: 'block', marginLeft: '5%', fontSize: '2em'}}>Code.</span>
            <span style={{display: 'block', marginLeft: '10%', fontSize: '2em'}}>Render.</span>
            <span style={{display: 'block', marginLeft: '15%', fontSize: '2em'}}>Innovate.</span>
          </h1>
          <button className="member-button" onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSflHxvY_xmskjgN5F3pgFFd6fanDGslzCVx8MqFbq_AfUKs2g/viewform?usp=header", "_blank")}>
            <span>Become a Member</span>
          </button>
      </div>
  </div>
  );
}