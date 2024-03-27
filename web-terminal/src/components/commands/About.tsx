import {
    AboutWrapper,
    HighlightAlt,
    HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
    return (
        <AboutWrapper data-testid="about">
            <p>
                Hi, my name is <HighlightSpan>Fernando Cases</HighlightSpan>!
            </p>
            <p>
                I'm <HighlightAlt>a Frontend developer</HighlightAlt> based in Stockholm,
                Sweden.
            </p>
            <p>
                I am passionate about writing codes and <br />
                developing web applications to solve real-life challenges.
            </p>
        </AboutWrapper>
    );
};

export default About;