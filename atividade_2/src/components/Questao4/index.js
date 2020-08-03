import React from "react";

import { Hero, Enemy, Arena } from "./Arena";

import { path_1, path_2 } from "../Questao2/path";

export default () => {
  return (
    <div>
      <Arena arena="Winners">
        <Hero name="Cristiano Ronaldo" src={path_1} />
        <Enemy name="Mark Zuckeberg" src={path_2} />
      </Arena>
    </div>
  );
};
