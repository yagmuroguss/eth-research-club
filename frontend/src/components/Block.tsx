import "./components.css"

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
      </div>
    </div>
  );
}