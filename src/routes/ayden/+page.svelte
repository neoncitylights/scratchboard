<script lang="ts">
	import EditorTaskbar from '$lib/components/EditorTaskbar.svelte'
	import * as Tone from 'tone'

	let synth: Tone.Synth
	const now = Tone.now()
	function envelope() {
		console.log('Button pressed, triggering envelope and synth')
		const env = new Tone.AmplitudeEnvelope({
			attack: 0.1,
			decay: 0.2,
			sustain: 1.5,
			release: 0.8,
		}).toDestination()

		synth = new Tone.Synth().connect(env)
		env.triggerAttackRelease(0.5)
		synth.triggerAttackRelease('C4', '8n', now)
		synth.triggerAttackRelease('E4', '8n', now + 0.5)
		synth.triggerAttackRelease('G4', '8n', now + 1)
	}

	function envelope2() {
		console.log('Button pressed, triggering envelope and synth')
		const env = new Tone.AmplitudeEnvelope({
			attack: 0.1,
			decay: 0.2,
			sustain: 1.0,
			release: 0.8,
		}).toDestination()

		synth = new Tone.Synth().connect(env)
		env.triggerAttackRelease(0.5)
		synth.triggerAttackRelease('E3', '4n')
	}

</script>
<div class="h-screen flex flex-col bg-zinc-900 font-sans">
	<EditorTaskbar />
	<main class=" flex-1 p-4 pattern-dots-md text-zinc-700">
		<div class="text-white">
			<button on:click={envelope} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
				Play Note with Envelope
		</div>
		<button on:click={envelope2} class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
			Hello
		</button>
	</main>
</div>
