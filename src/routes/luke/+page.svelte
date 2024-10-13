<script lang="ts">
	import EditorTaskbar from '$lib/components/EditorTaskbar.svelte'
	import * as Tone from 'tone'

	let synth: Tone.Synth

	let doFeedback = false
	let doReverb = false
    let slideamount = 2;
	// const synth = new Tone.Synth().toDestination();

	function FortniteFunction(): void {
		synth = new Tone.Synth().toDestination()
        const now = Tone.now();

		// if delay node
		if (doFeedback) {
			const feedbackDelay = new Tone.FeedbackDelay('32n.', 0.3).toDestination()
			synth.connect(feedbackDelay)
		}

		if (doReverb) {
			const reverb = new Tone.Reverb(10).toDestination()
			synth.connect(reverb)
		}

        
        
		synth.triggerAttack('C3', now);
        synth.frequency.linearRampToValueAtTime("C7", now+1);
        synth.triggerRelease(now +.75);
	}
</script>

<div class="h-screen flex flex-col bg-zinc-900 font-sans">
	<EditorTaskbar />
	<main class="flex flex-1 p-4 pattern-dots-md text-zinc-700 align-middle justify-center">
		<button class="text-white border-teal-800 border-2 p-2 bg-slate-800 w-64 h-32" on:click={() => FortniteFunction()}> Fortnite </button>
	</main>

</div>
