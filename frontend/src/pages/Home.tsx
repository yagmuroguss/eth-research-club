import Block from "../components/Block"
import About from "../components/About"
import Events from "../components/Events"
import Projects from "../components/Projects"
import Researchers from "../components/Researchers"
import Advisors from "../components/Advisors"
import FAQs from "../components/FAQs"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Block />
        <About />
        <Events />
        <Projects />
        <Researchers />
        <Advisors />
        <FAQs />
        <Footer />
    </div>
  );
}