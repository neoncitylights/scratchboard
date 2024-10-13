<script lang="ts">
	import { type NodeProps } from '@xyflow/svelte'
	import { writable } from 'svelte/store'
	import AudioNode from './AudioNode.svelte'
	import AudioNodeLabel from './AudioNodeLabel.svelte'
	import * as Tone from 'tone'

	type WaveShape = 'sine' | 'square' | 'sawtooth' | 'triangle'
	type $$Props = NodeProps
	export let data: $$Props['data']

	const waveShape = writable(data.waveShape || 'sine')
	const pitch = writable(data.pitch || 0)
	const octave = writable(data.pitch || 0)


	const options: { value: WaveShape, label: string }[] = [
		{ value: 'sine', label: 'Sine' },
		{ value: 'square', label: 'Square' },
		{ value: 'sawtooth', label: 'Sawtooth' },
		{ value: 'triangle', label: 'Triangle' },
	]
</script>

<AudioNode title="Tone">
	<AudioNodeLabel>Wave Shape</AudioNodeLabel>
	<select bind:value={$waveShape}>
		{#each options as option}
			<option value={option.value}>
				{option.label}
			</option>
		{/each}
	</select>
	<AudioNodeLabel>Pitch</AudioNodeLabel>
	<input type="range" bind:value={$pitch} min="-6" max="6" step="1"/>
	<AudioNodeLabel>Octave</AudioNodeLabel>
	<input type="range" bind:value={$octave} min="-2" max="2" step="1"/>
</AudioNode>
