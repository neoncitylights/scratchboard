<script lang="ts">
	import { SvelteFlow, Background, Controls, type Node } from '@xyflow/svelte'
	import { writable } from 'svelte/store'
	import '@xyflow/svelte/dist/style.css'
	import EditorTaskbar from '$lib/components/EditorTaskbar.svelte'
	import OscillatorNode from '$lib/components/node/OscillatorNode.svelte'
	import EnvelopeNode from '$lib/components/node/EnvelopeNode.svelte'
	import ReverbNode from '$lib/components/node/ReverbNode.svelte'
	import ChorusNode from '$lib/components/node/ChorusNode.svelte';
	import BitCrusherNode from '$lib/components/node/BitCrusherNode.svelte'

	const nodeTypes = {
		oscillator: OscillatorNode,
		envelope: EnvelopeNode,
		reverb: ReverbNode,
		chorus: ChorusNode,
		bitcrusher: BitCrusherNode,
	}

	let nodeId = 0;
	function getNode(options: Omit<Node, 'id'>): Node {
		nodeId += 1;
		return {
			...options,
			dragHandle: '.custom-drag-handle',
			id: nodeId.toString(),
		}
	}

	const nodes = writable<Node[]>([
		getNode({
			type: 'oscillator',
			position: { x: 200, y: 200 },
			data: { waveShape: 'triangle' },
		}),
		getNode({
			type: 'envelope',
			position: { x: 550, y: 200 },
			data: { attack: 0.1, decay: 0.2, sustain: 0.5, release: 0.8 },
		}),
		getNode({
			type: 'reverb',
			position: { x: 900, y: 200 },
			data: { decay: 0.5, preDelay: 0.5 },
		}),
		getNode({
			type: 'chorus',
			position: { x: 1250, y: 200 },
			data: { frequency: 0.1, delayTime: 0.2, depth: 0.5 },
		}),
		getNode({
			type: 'bitcrusher',
			position: { x: 1250, y: 0 },
			data: { bits: 0.5 },
		}),
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
