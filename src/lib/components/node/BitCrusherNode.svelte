<script lang="ts">
	import { type NodeProps } from '@xyflow/svelte'
	import { writable } from 'svelte/store'
	import AudioNode from './AudioNode.svelte'
	import AudioNodeLabel from './AudioNodeLabel.svelte';

	type $$Props = NodeProps
	export let data: $$Props['data']
	const bits = writable(data.decay)
	const wet = writable(data.wet)
</script>

<AudioNode title="Bit Crusher">
	<AudioNodeLabel>bits</AudioNodeLabel>
	<input type="range" bind:value={$bits} min="0" max="100" />
	<AudioNodeLabel>Wetness</AudioNodeLabel>
	<input type="range" bind:value={$wet} min="0" max="100" />
</AudioNode>
