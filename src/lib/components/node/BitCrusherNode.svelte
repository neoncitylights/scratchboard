<script lang="ts">
	import { type NodeProps } from '@xyflow/svelte'
	import { writable } from 'svelte/store'
	import AudioNode from './AudioNode.svelte'
	import AudioNodeLabel from './AudioNodeLabel.svelte';

	type $$Props = NodeProps
	export let data: $$Props['data']
	const bits = writable(data.decay)
	// Idk if we need this idk what it does but tonejs says we just need bits
	// const context = writable(data.preDelay)
	// const wet = writable(data.preDelay)
</script>

<AudioNode title="Bit Crusher">
	<AudioNodeLabel>bits</AudioNodeLabel>
	<input type="range" bind:value={$bits} min="0" max="100" />
	<!-- <AudioNodeLabel>wet</AudioNodeLabel>
	<input type="range" bind:value={$wet} min="0" max="100" /> -->
</AudioNode>
