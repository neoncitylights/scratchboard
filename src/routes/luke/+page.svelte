<script lang="ts">
	import EditorTaskbar from '$lib/components/EditorTaskbar.svelte'
	import * as Tone from 'tone'

	let synth: Tone.Synth

	let doFeedback = true
	let doReverb = true
	// const synth = new Tone.Synth().toDestination();

	function FortniteFunction(): void {
		synth = new Tone.Synth().toDestination()

		// if delay node
		if (doFeedback) {
			const feedbackDelay = new Tone.FeedbackDelay('8n.', 0.8).toDestination()
			synth.connect(feedbackDelay)
		}

		if (doReverb) {
			const reverb = new Tone.Reverb(10).toDestination()
			synth.connect(reverb)
		}

		synth.triggerAttackRelease('C4', '8n')
	}
</script>

<div class="h-screen flex flex-col bg-zinc-900 font-sans">
	<EditorTaskbar />
	<main class="flex flex-1 p-4 pattern-dots-md text-zinc-700 align-middle justify-center">
		<button class="text-white border-teal-800 border-2 p-2 bg-slate-800 w-64 h-32" on:click={() => FortniteFunction()}> Fortnite </button>
	</main>

</div>
