<script lang="ts">
	import { IconInfoCircle } from '@tabler/icons-svelte'
	import { type NodeProps } from '@xyflow/svelte'
	import { writable } from 'svelte/store'

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

<div class="shadow-2xl rounded-md bg-zinc-900 flex flex-col w-[300px]">
	<header class="bg-black text-white p-2 rounded-t-md flex flex-row justify-between items-center">
		OscillatorNode
		<IconInfoCircle size={20} />
	</header>
	<section class="grid grid-cols-2 p-2">
		<span class="text-white">Wave Shape</span>
		<select bind:value={$waveShape}>
			{#each options as option}
				<option value={option.value}>
					{option.label}
				</option>
			{/each}
		</select>
	</section>
</div>
