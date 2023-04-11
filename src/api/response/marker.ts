import type { Auton } from "./auton";
import type { Teleop } from "./teleop";

type MarkerType = "cube" | "cone" | null;
export type CertainMarkerType = "cube" | "cone";

export interface Marker {
    x: number;
    y: number;
    difficulty: number;
    positive: boolean;
    type: MarkerType;
}

export function countMarkers(markers: Marker[]): Record<CertainMarkerType, number> {
    const counts: Record<CertainMarkerType, number> = {
      cube: 0,
      cone: 0,
    };
  
    markers.forEach((marker) => {
      if(!marker.type || !marker.positive) {
        return;
      }
      counts[marker.type]++;
    });
  
    return counts;
}

export type Height = number | 'all'

export function averageMarkersAtHeight(markers: Marker[], y: Height): Record<CertainMarkerType, number> {
    const totals: Record<CertainMarkerType, number> = {
        cube: 0,
        cone: 0
    }
    let i = 0;
    markers.forEach((marker) => {
        if(marker.type == 'cube') {
            console.log('a')
        }
        if(marker.type === null || !marker.positive) {
            return;
        }
        if(y != 'all') {
            if(y != marker.difficulty) {
                return;
            }
        }
        i++;

        totals[marker.type]++;
    })

    console.log(i)
    
    const totalPlacements = (totals.cube + totals.cone);

    if(totalPlacements === 0) {
        return {
            cube: 0,
            cone: 0
        }
    }

    console.log(totals)

    return {
        cube: Math.round(totals.cube / totalPlacements * 100),
        cone: Math.round(totals.cone / totalPlacements * 100)
    }
}


export function aggregateMarkersFromFieldLists(fields: Auton[] | Teleop[]) {
    const fieldLayouts: Marker[][] = fields.map((field) => {
        return field.markers;
    })
    const largeList: Marker[] = [];

    fieldLayouts.forEach((ml) => {
        console.log(ml)
        largeList.push(...ml);
    })

    console.log(largeList.filter((m) => m.type === 'cube'))
    
    return largeList;
}