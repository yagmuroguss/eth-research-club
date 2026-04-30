import "./block.css"
import "./components.css"
import logoeth from '../assets/logoeth.png';

export default function Block() {
  const linklist = [
    { name: "About", link: "#about" },
    { name: "Events", link: "#events" },
    { name: "Fields", link: "#fields" },
    { name: "Student Researchers", link: "#researchers" },
    { name: "Advisors", link: "#advisors" },
    { name: "FAQs", link: "#faqs" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <div className="main-block">
      <div className="links">
        <img src={logoeth} style={{width: '50px', marginRight: 'auto'}} />
        {linklist.map((element) => (
          <a
            key={element.name}
            href={element.link}
            className="link-unit">
            {element.name}
          </a>
        ))}
      </div>

      <div className="advertising-main" style={{marginTop: '35%'}}>
          <h2>
            <span style={{display: 'block', marginLeft: '5%', fontSize: '2em'}}>Create.</span>
            <span style={{display: 'block', marginLeft: '36%', fontSize: '2em'}}>Explain.</span>
            <span style={{display: 'block', marginLeft: '55%', fontSize: '2em'}}>Question.</span>
          </h2>
          <p>A student-led research community driven by transforming curiosity into evidence-based work.</p>
          <button className="member-button">Become a Member</button>
      </div>
  </div>
  );
}