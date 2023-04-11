import type { Marker } from "./marker";

export interface Teleop {
    markers: Marker[];
    moved?: boolean | null;
    extra_goal_progress: Record<string, unknown>;
    attempted_collaboration?: boolean | null;
    author?: string | null;
    form_id?: string | null;
}