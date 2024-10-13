<script lang="ts">
	import { type NodeProps } from '@xyflow/svelte'
	import { writable } from 'svelte/store'
	import AudioNode from './AudioNode.svelte'
	import AudioNodeLabel from './AudioNodeLabel.svelte';

	type $$Props = NodeProps
	export let data: $$Props['data']
	const frequency = writable(data.frequency)
	const milliseconds = writable(data.milliseconds)
	const depth = writable(data.depth)
</script>

<AudioNode title="Chorus">
	<AudioNodeLabel>Attack</AudioNodeLabel>
	<input type="range" bind:value={$frequency} min="0" max="100" />
	<AudioNodeLabel>Decay</AudioNodeLabel>
	<input type="range" bind:value={$milliseconds} min="0" max="100" />
	<AudioNodeLabel>Sustain</AudioNodeLabel>
	<input type="range" bind:value={$depth} min="0" max="100" />
	<AudioNodeLabel>Release</AudioNodeLabel>
</AudioNode>
