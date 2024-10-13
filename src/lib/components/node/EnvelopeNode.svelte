<script lang="ts">
	import { type NodeProps } from '@xyflow/svelte'
	import { writable } from 'svelte/store'
	import AudioNode from './AudioNode.svelte'
	import AudioNodeLabel from './AudioNodeLabel.svelte';

	type $$Props = NodeProps
	export let data: $$Props['data']
	const attack = writable(data.attack)
	const decay = writable(data.decay)
	const sustain = writable(data.sustain)
	const release = writable(data.release)
</script>

<AudioNode title="Envelope">
	<AudioNodeLabel>Attack</AudioNodeLabel>
	<input type="range" bind:value={$attack} min="0" max="100" />
	<AudioNodeLabel>Decay</AudioNodeLabel>
	<input type="range" bind:value={$decay} min="0" max="100" />
	<AudioNodeLabel>Sustain</AudioNodeLabel>
	<input type="range" bind:value={$sustain} min="0" max="100" />
	<AudioNodeLabel>Release</AudioNodeLabel>
	<input type="range" bind:value={$release} min="0" max="100" />
</AudioNode>
