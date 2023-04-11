<script lang="ts">
	import { onMount } from 'svelte';
	import { getForm, getTeam } from '../api/api';
	import type { Form } from '../api/response/form';
	import {
		aggregateMarkersFromFieldLists,
		averageMarkersAtHeight,
		type CertainMarkerType,
		type Height
	} from '../api/response/marker';

	let teamid: string = '';
	let matches: Form[] | null;

	async function lookupTeam() {
        matches = null;
		matches = await getTeam(teamid);
	}

	function getAverageTeleopAtHeight(y: Height): Record<CertainMarkerType, number> {
        if(matches == null) {
            return {cone: 0, cube: 0}
        }
		return averageMarkersAtHeight(aggregateMarkersFromFieldLists(matches.map((m) => m.teleop)), y);
	}
</script>

<h1>Team Browser</h1>
<input bind:value={teamid} />
<button on:click={lookupTeam}>Lookup</button>

{#if matches}
	<ul>
		{#each matches as match}
			<il>{match.pregame.author}</il><br />
		{/each}
	</ul>
	<p>Average Placements by height:</p>
	<p>
		High placement: Cube was placed: {getAverageTeleopAtHeight(0).cube}% and Cone was placed: {getAverageTeleopAtHeight(
			0
		).cone}%
	</p>
    <p>
		Middle placement: Cube was placed: {getAverageTeleopAtHeight(1).cube}% and Cone was placed: {getAverageTeleopAtHeight(
			1
		).cone}%
	</p>
    <p>
		Hybrid placement: Cube was placed: {getAverageTeleopAtHeight(2).cube}% and Cone was placed: {getAverageTeleopAtHeight(
			2
		).cone}%
	</p>
    <p>
		Total placement: Cube was placed: {getAverageTeleopAtHeight('all').cube}% and Cone was placed: {getAverageTeleopAtHeight(
			'all'
		).cone}%
	</p>
{/if}
