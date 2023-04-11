import type { Auton } from "./auton";
import type { Postmatch } from "./postmatch";
import type { Prematch } from "./prematch";
import type { RobotAttributes } from "./robot";
import type { Teleop } from "./teleop";

export interface Form {
    pregame: Prematch;
    auton: Auton;
    teleop: Teleop;
    postmatch: Postmatch;
    robotAttributes: RobotAttributes
}