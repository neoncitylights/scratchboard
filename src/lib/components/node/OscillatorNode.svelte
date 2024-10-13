<script lang="ts">
	import { type NodeProps } from '@xyflow/svelte'
	import { writable } from 'svelte/store'
	import AudioNode from './AudioNode.svelte'
	import AudioNodeLabel from './AudioNodeLabel.svelte';

	type WaveShape = 'sine' | 'square' | 'sawtooth' | 'triangle'
	type $$Props = NodeProps
	export let data: $$Props['data']
	const waveShape = writable(data.waveShape)

	const options: { value: WaveShape, label: string }[] = [
		{ value: 'sine', label: 'Sine' },
		{ value: 'square', label: 'Square' },
		{ value: 'sawtooth', label: 'Sawtooth' },
		{ value: 'triangle', label: 'Triangle' },
	]
</script>

<AudioNode title="OscillatorNode">
	<AudioNodeLabel>Wave Shape</AudioNodeLabel>
	<select bind:value={$waveShape}>
		{#each options as option}
			<option value={option.value}>
				{option.label}
			</option>
		{/each}
	</select>
</AudioNode>
