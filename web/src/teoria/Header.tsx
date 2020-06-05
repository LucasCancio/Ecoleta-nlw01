import React from "react";

//FC -> Function Component (Generic)
//Generic -> Tipo do typescript, que pode receber um parametro
interface HeaderProps{
    title: string;//title? -> Opcional
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <header>
      <h1>{props.title}</h1>
    </header>
  );
};

export default Header;
