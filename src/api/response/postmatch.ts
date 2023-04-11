export interface Postmatch {
    notes?: string | null;
    GeneralRating?: number | null;
    Teamwork?: number | null;
    Defense?: number | null;
    Offense?: number | null;
    form_id: string;
    points: number;
    penalties?: number;
    final_score?: number;
    rank_points?: number;
}