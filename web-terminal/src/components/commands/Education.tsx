import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
    return (
        <Wrapper data-testid="education">
            <EduIntro>Here is my education background!</EduIntro>
            {eduBg.map(({ title, desc }) => (
                <EduList key={title}>
                    <div className="title">{title}</div>
                    <div className="desc">{desc}</div>
                </EduList>
            ))}
        </Wrapper>
    );
};

const eduBg = [
    {
        title: "Bootcamp, FullStack Web Developer",
        desc: "Ironhack Berlin | 2021",

    },
    {
        title: "Psychology Degree",
        desc: "UOC Universitat Oberta de Catalunya | 2013 ~ 2016",
    },
    {
        title: "Bachelor's degree, Art",
        desc: "IES Puig de la Creu | 2011 ~ 2013",
    },
];

export default Education;