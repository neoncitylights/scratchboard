<script lang="ts">
	import { type NodeProps } from '@xyflow/svelte'
	import { writable } from 'svelte/store'
	import AudioNode from './AudioNode.svelte'
	import AudioNodeLabel from './AudioNodeLabel.svelte';

	type $$Props = NodeProps
	export let data: $$Props['data']
	const decay = writable(data.decay)
	const preDelay = writable(data.preDelay)
</script>

<AudioNode title="ReverbNode">
	<AudioNodeLabel>Decay</AudioNodeLabel>
	<input type="range" bind:value={$decay} min="0" max="100" />
	<AudioNodeLabel>Pre-delay</AudioNodeLabel>
	<input type="range" bind:value={$preDelay} min="0" max="100" />
</AudioNode>
