import { useContext } from "react";
import { Wrapper } from "../styles/Output.styled";
import { termContext } from "../Terminal";

const History: React.FC = () => {
    const { history, index } = useContext(termContext);
    const reversedHistory = history.slice(index).reverse();

    return (
        <Wrapper data-testid="history">
            {reversedHistory.map((cmd: string, idx: number) => (
                <div key={idx}>{cmd}</div>
            ))}
        </Wrapper>
    );
};

export default History;