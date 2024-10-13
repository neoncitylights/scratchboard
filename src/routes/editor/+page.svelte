<script lang="ts">
	import EditorTaskbar from '$lib/components/EditorTaskbar.svelte'
	import { SvelteFlow, Background, Controls, type ColorMode } from '@xyflow/svelte'
	import { writable } from 'svelte/store'
	import '@xyflow/svelte/dist/base.css'

	const nodes = writable([])
	const edges = writable([])
	const colorMode: ColorMode = 'dark'

</script>
<div class="h-screen flex flex-col bg-zinc-900 font-sans">
	<EditorTaskbar />
	<main class="flex-1 p-4">
		<SvelteFlow {nodes} {edges} {colorMode}>
			<Background />
			<Controls />
		</SvelteFlow>
	</main>
</div>
