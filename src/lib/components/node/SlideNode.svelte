<script lang="ts">
	import { type NodeProps } from '@xyflow/svelte'
	import { writable } from 'svelte/store'
	import AudioNode from './AudioNode.svelte'
	import AudioNodeLabel from './AudioNodeLabel.svelte';

	type $$Props = NodeProps
	export let data: $$Props['data']
	const slideAmount = writable(data.slideAmount)
</script>

<AudioNode title="Slide">
	<AudioNodeLabel>Slide</AudioNodeLabel>
	<input type="range" bind:value={$slideAmount} min="-24" max="24" step="1"/>
</AudioNode>
