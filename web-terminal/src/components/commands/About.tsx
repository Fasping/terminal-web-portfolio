import {
    AboutWrapper,
    HighlightAlt,
    HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
    return (
        <AboutWrapper data-testid="about">
            <p>
                Hi, my name is <HighlightSpan>Fernando Cases</HighlightSpan> — most
                people call me Nando!
            </p>
            <p>
                I'm a{" "}
                <HighlightAlt>
                    Frontend Developer &amp; Technical Project Manager
                </HighlightAlt>{" "}
                based in Madrid, Spain.
            </p>
            <p>
                I build web products and I keep teams moving so things actually ship.
                <br />
                I learned to code in Berlin, spent four years working in Stockholm,
                <br />
                and I'm now based in Madrid.
            </p>
            <p>
                Day to day I live in <HighlightAlt>React</HighlightAlt> and{" "}
                <HighlightAlt>TypeScript</HighlightAlt>, and I also handle the planning
                side:
                <br />
                sprints, backlogs, and keeping design, product and engineering talking
                to each other.
            </p>
            <p>
                Outside of tech I run <HighlightAlt>Planka Records</HighlightAlt>, my own
                vinyl label,
                <br />
                which taught me more about deadlines and budgets than any tool ever did.
                <br />
                The rest of the time I'm making music with synths, playing padel or
                traveling.
            </p>
            <p>
                Always up for a chat or for building something new. Type{" "}
                <HighlightSpan>experience</HighlightSpan>,{" "}
                <HighlightSpan>skills</HighlightSpan> or{" "}
                <HighlightSpan>resume</HighlightSpan> to know more.
            </p>
        </AboutWrapper>
    );
};

export default About;
