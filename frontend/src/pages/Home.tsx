import Block from "../components/Block"
import About from "../components/About"
import Events from "../components/Events"
import Fields from "../components/Fields"
import Researchers from "../components/Researchers"
import Advisors from "../components/Advisors"
import FAQs from "../components/FAQs"
import Contact from "../components/Contact"

export default function Home() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
    <Block />
    <About />
    <Events />
    <Fields />
    <Researchers/>
    <Advisors />
    <FAQs />
    <Contact />
  </div>
  );
}