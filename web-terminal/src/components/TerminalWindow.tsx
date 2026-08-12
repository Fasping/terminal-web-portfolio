import { ReactNode } from "react";
import {
    PageWrapper,
    TitleBar,
    TitleBarSpacer,
    TrafficLights,
    Window,
    WindowBody,
    WindowTitle,
} from "./styles/Layout.styled";

type Props = {
    title?: string;
    children: ReactNode;
};

const TerminalWindow = ({ title = "fernandocases — ~/portfolio — zsh", children }: Props) => (
    <PageWrapper>
        <Window>
            <TitleBar>
                <TrafficLights aria-hidden="true">
                    <span />
                    <span />
                    <span />
                </TrafficLights>
                <WindowTitle>{title}</WindowTitle>
                <TitleBarSpacer aria-hidden="true" />
            </TitleBar>
            <WindowBody>{children}</WindowBody>
        </Window>
    </PageWrapper>
);

export default TerminalWindow;
