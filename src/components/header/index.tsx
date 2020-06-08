import React from "react";
import * as Styled from "./styles";

import background from '../../images/header_background.svg';

// I couldnt get react-create-app to import background images :/
const Header = () => <header>
  <Styled.BackgroundImage src={background} />
  <Styled.Header>Who's That Pokémon?</Styled.Header>
</header>;

export default Header;
