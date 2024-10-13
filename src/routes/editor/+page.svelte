<script lang="ts">
	import { SvelteFlow, Background, Controls, type Node } from '@xyflow/svelte'
	import { writable } from 'svelte/store'
	import '@xyflow/svelte/dist/style.css'
	import EditorTaskbar from '$lib/components/EditorTaskbar.svelte'
	import OscillatorNode from '$lib/components/node/OscillatorNode.svelte'
    import EnvelopeNode from '$lib/components/node/EnvelopeNode.svelte'

	const nodeTypes = {
		oscillator: OscillatorNode,
		envelope: EnvelopeNode,
	}

	const nodes = writable<Node[]>([
		{
			type: 'input',
			id: '1', // required and needs to be a string
			position: { x: 0, y: 0 }, // required
			data: { label: 'hey' }, // required
			dragHandle: '.custom-drag-handle',
		},
		{
			type: 'input',
			id: '2',
			position: { x: 100, y: 100 },
			data: { label: 'world' },
			dragHandle: '.custom-drag-handle',
		},
		{
			type: 'oscillator',
			id: '3',
			position: { x: 200, y: 200 },
			data: { waveShape: 'triangle' },
			dragHandle: '.custom-drag-handle',
		},
		{
			type: 'envelope',
			id: '4',
			position: { x: 700, y: 200 },
			data: { attack: 0.1, decay: 0.2, sustain: 0.5, release: 0.8 },
			dragHandle: '.custom-drag-handle',
		},
		{
			type: 'chorus',
			id: '6',
			position: { x: 900, y: 200 },
			data: { frequency: 0.1, delayTime: 0.4, depth: 0.3},
			dragHandle: '.custom-drag-handle',
		}
	])

	const edges = writable([])
</script>
<div class="h-screen flex flex-col bg-zinc-900 font-sans">
	<EditorTaskbar />
	<main class="flex-1 p-4 patterns-dot-md text-zinc-800">
		<SvelteFlow {nodes} {edges} {nodeTypes} colorMode='dark'>
			<Background />
			<Controls />
		</SvelteFlow>
	</main>
</div>
