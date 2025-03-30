import { Coin } from "../actors/Coin.js";
import { Lava } from "../actors/Lava.js";
import { Player } from "../actors/Player.js";

export const levelChars = {
    ".": "empty", "#": "wall", "+": "lava",
    "@": Player, "o": Coin,
    "=": Lava, "|": Lava, "v": Lava
};