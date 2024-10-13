<script lang="ts">
	import { type NodeProps } from '@xyflow/svelte'
	import { writable } from 'svelte/store'
	import AudioNode from './AudioNode.svelte'
	import AudioNodeLabel from './AudioNodeLabel.svelte';

	type $$Props = NodeProps
	export let data: $$Props['data']
	const frequency = writable(data.frequency)
	const delayTime = writable(data.delayTime)
	const depth = writable(data.depth)
</script>

<AudioNode title="Chorus">
	<AudioNodeLabel>Frequency</AudioNodeLabel>
	<input type="range" bind:value={$frequency} min="0" max="100" />
	<AudioNodeLabel>Delay Time</AudioNodeLabel>
	<input type="range" bind:value={$delayTime} min="0" max="100" />
	<AudioNodeLabel>Depth</AudioNodeLabel>
	<input type="range" bind:value={$depth} min="0" max="100" />
</AudioNode>
