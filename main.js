// import { DOMDisplay } from "./src/game/display/DOMDisplay.js";
// import { Level, simpleLevelPlan } from "./src/game/world/Level.js";
// import { State } from "./src/game/world/State.js";

import { DOMDisplay } from "./src/game/display/DOMDisplay.js";
import { GAME_LEVELS } from "./src/levels.js";
import { runGame } from "./src/runGame.js";

// let simpleLevel = new Level(simpleLevelPlan);
// let display = new DOMDisplay(document.body, simpleLevel);
// display.syncState(State.start(simpleLevel));

runGame(GAME_LEVELS, DOMDisplay);