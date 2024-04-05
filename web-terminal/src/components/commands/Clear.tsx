import React, { useContext, useEffect } from "react";
import { UsageDiv } from "../styles/Output.styled";
import { termContext } from "../Terminal";

const Clear: React.FC = () => {
    const { arg, clearHistory } = useContext(termContext);

    useEffect(() => {
        if (arg.length === 0 && clearHistory) {
            clearHistory();
        }
    }, [arg.length, clearHistory]);

    return arg.length > 0 ? <UsageDiv>Usage: clear</UsageDiv> : null;
};

export default Clear;
