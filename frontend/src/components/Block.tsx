import "./components.css"
import logoeth from '../assets/logoeth.png';

export default function Block() {
  const linklist = [
    { name: "ABOUT", link: "#about" },
    { name: "EVENTS", link: "#events" },
    { name: "FIELDS", link: "#fields" },
    { name: "STUDENT RESEARCHERS", link: "#researchers" },
    { name: "ADVISORS", link: "#advisors" },
    { name: "FAQs", link: "#faqs" },
    { name: "CONTACT", link: "#contact" },
  ];

  return (
    <div className="main-box">
      <div className="links">
        {linklist.map((element) => (
          <a
            key={element.name}
            href={element.link}
            className="link-unit">

            {element.name}
          </a>
        ))}
<<<<<<< HEAD

        <div className="advertising-main">
            <h2>Explain. Question. Create.</h2>
            <p>A student-led research community driven by transforming curiosity into evidence-based work.</p>
            <button className="main-button">BECOME A MEMBER</button>
=======
>>>>>>> ea8b67924baeb871c42e8bcb5422ade1a7808859
        </div>

      <div className="advertising-main">
          <h2>
            <h2>
              <span style={{display: 'block', marginLeft: '5%'}}>Create.</span>
              <span style={{display: 'block', marginLeft: '36%'}}>Explain.</span>
              <span style={{display: 'block', marginLeft: '55%'}}>Question.</span>
            </h2>
          </h2>
          <button>BECOME A MEMBER</button>
          <p>A student-led research community driven by transforming curiosity into evidence-based work.</p>
      </div>
  </div>
  );
}