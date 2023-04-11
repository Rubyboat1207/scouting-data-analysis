import type { Marker } from "./marker";

export interface Auton {
    date: Date;
    author: string;
    form_id: string;
    markers: Marker[];
    moved: boolean;
    left_community: boolean;
    attempted_collaboration: boolean;
    extra_goal_progress: any;
}