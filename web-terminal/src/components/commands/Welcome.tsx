import React from "react";
import {
    Cmd,
    HeroContainer,
    Link,
    PreImg,
    PreName,
    PreNameMobile,
    PreWrapper,
    Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
    return (
        <HeroContainer data-testid="welcome">
            <div className="info-section">
                <PreName>
                    {`
 _______  _______  ______    __    _  _______  __    _  ______   _______    _______  _______  _______  _______  _______
|       ||       ||    _ |  |  |  | ||   _   ||  |  | ||      | |       |  |       ||   _   ||       ||       ||       |
|    ___||    ___||   | ||  |   |_| ||  |_|  ||   |_| ||  _    ||   _   |  |       ||  |_|  ||  _____||    ___||  _____|
|   |___ |   |___ |   |_||_ |       ||       ||       || | |   ||  | |  |  |       ||       || |_____ |   |___ | |_____
|    ___||    ___||    __  ||  _    ||       ||  _    || |_|   ||  |_|  |  |      _||       ||_____  ||    ___||_____  |
|   |    |   |___ |   |  | || | |   ||   _   || | |   ||       ||       |  |     |_ |   _   | _____| ||   |___  _____| |
|___|    |_______||___|  |_||_|  |__||__| |__||_|  |__||______| |_______|  |_______||__| |__||_______||_______||_______|
          `}
                </PreName>
                <PreWrapper>
                    <PreNameMobile>
                        {`
 FERNANDO CASES
                     `}
                    </PreNameMobile>
                </PreWrapper>
                <div>Welcome to my terminal portfolio. (Version 2.0.1)</div>
                <Seperator>----</Seperator>
                <div>
                    This project's source code can be found in this project's{" "}
                    <Link href="https://github.com/Fasping/terminal-web-portfolio">
                        GitHub repo
                    </Link>
                    .
                </div>
                <Seperator>----</Seperator>
                <div>
                    For a list of available commands, type `<Cmd>help</Cmd>`.
                </div>
            </div>
            <div className="illu-section">
                <PreImg>
                    {`
                       ,##,,eew,
                     ,##############C
                  a###############@##
                 7####^\`^"7W7^"@####
                 @#@b\`         ^@#@^
                  ##^,,,,   ,,,,^#^
                 ,,@######"#######=
                  .''555"\` '5555b|
                  T"@  ,,,^,mg,@,*
                     %p||\`~~'.#\`
                      ^Wp  ,#T
                     :b''@@b^}
                  ,^     \` 'b 3-
              .<\` 'p   ^v   #   b   *.
            {      }   #"GpGb   [
            C      3 * @#######Nl      \`
           '            ^@##b     ($    !
         `}
                </PreImg>
            </div>
        </HeroContainer>
    );
};

export default Welcome;
