import "./block.css"
import Navbar from './Navbar';

export default function Block() {

  return (
    <div className="main-block">
      <Navbar />

      <div className="advertising-main" style={{marginTop: '35%'}}>
          <h1>
            <span style={{display: 'block', marginLeft: '5%', fontSize: '2em'}}>Create.</span>
            <span style={{display: 'block', marginLeft: '10%', fontSize: '2em'}}>Explain.</span>
            <span style={{display: 'block', marginLeft: '15%', fontSize: '2em'}}>Question.</span>
          </h1>
          <button className="member-button" onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSfj9MN7oz9FsHaxN9MFPyQrI0xs96K69HKABjwsH4PtWecT1w/viewform?usp=publish-editor", "_blank")}>
            <span>Become a Member</span>
          </button>
      </div>
  </div>
  );
}