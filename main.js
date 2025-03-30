import { DOMDisplay } from "./src/game/display/DOMDisplay.js";
import { Level, simpleLevelPlan } from "./src/game/world/Level.js";
import { State } from "./src/game/world/State.js";

let simpleLevel = new Level(simpleLevelPlan);
let display = new DOMDisplay(document.body, simpleLevel);
display.syncState(State.start(simpleLevel));