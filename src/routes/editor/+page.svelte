	<script lang="ts">
		// @ts-nocheck
		import { SvelteFlow, Background, Controls, type Node } from '@xyflow/svelte'
		import { writable, get } from 'svelte/store'
		import '@xyflow/svelte/dist/style.css'
		import * as Tone from 'tone'
		import EditorTaskbar from '$lib/components/EditorTaskbar.svelte'
		import OscillatorNode from '$lib/components/node/OscillatorNode.svelte'
		import EnvelopeNode from '$lib/components/node/EnvelopeNode.svelte'
		import ReverbNode from '$lib/components/node/ReverbNode.svelte'
		import ChorusNode from '$lib/components/node/ChorusNode.svelte';
		import BitCrusherNode from '$lib/components/node/BitCrusherNode.svelte'
		import SlideNode from '$lib/components/node/SlideNode.svelte';

		const nodeTypes = {
			oscillator: OscillatorNode,
			envelope: EnvelopeNode,
			reverb: ReverbNode,
			chorus: ChorusNode,
			bitcrusher: BitCrusherNode,
			slide: SlideNode,
		}

		interface OscillatorNodeData 
		{ //stupid bc idk how typescript works
    		waveShape: 'sine' | 'square' | 'sawtooth' | 'triangle'
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
			getNode({
				type: 'slide',
				position: { x: 200, y: 0 },
				data: { bits: 0.5 },
			}),
		])

		const edges = writable([])
		
		let synth: Tone.Synth
		function handlePlayEvent() {
			//this is bad . i am so sorry
			const currentNodes = get(nodes)
			const oscillatorNode = currentNodes.find(node => node.type === 'oscillator')
			let noteLength = 1
			if(!oscillatorNode)
			{
				console.log('THERE ISNT ONE!!!!')
				return
			}

			
			const synth = new Tone.Synth({
				oscillator: {//typescipt i ma going to kill m
					type: oscillatorNode.data.waveShape   //this literally doesnt read it what am i supposed to do help help help help el[ help help help help]
				},
			}).toDestination()

        	const now = Tone.now();

			// if delay node
			if (false) {
				const feedbackDelay = new Tone.FeedbackDelay('32n.', 0.3).toDestination()
				synth.connect(feedbackDelay)
			}

			if (false) {
				const reverb = new Tone.Reverb(10).toDestination()
				synth.connect(reverb)
			}
			console.log(oscillatorNode)
			//synth.triggerAttack('C4', now);
			synth.triggerAttackRelease('F5', '4n')
			if (false)
			{
				synth.frequency.linearRampToValueAtTime("C3", now+1);

			}
			//synth.triggerRelease(now + noteLength);
		}
		
	</script>
	<div class="h-screen flex flex-col bg-zinc-900 font-sans">
		<EditorTaskbar on:triggerPlay={handlePlayEvent}/>
		
		<main class="flex-1 p-4 patterns-dot-md text-zinc-800">
			
			<SvelteFlow {nodes} {edges} {nodeTypes} colorMode='dark'>
				<Background />
				<Controls />
			</SvelteFlow>
		</main>
	</div>
