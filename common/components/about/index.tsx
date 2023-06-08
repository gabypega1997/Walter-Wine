import Contact from "./contact.component";
import Content from "./content.component";

const About = () => {
    return (
        <div className="bg-gray-light w-5/6 md:w-4/6 lg:w-3/6 mx-auto shadow-2xl md:scale-110 lg:scale-125">
            <Content />
            <Contact />
        </div>
    );
};

export default About;
