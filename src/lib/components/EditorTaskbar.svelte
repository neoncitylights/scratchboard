<script lang="ts">
	import { DropdownMenu, Dialog } from 'bits-ui'
	import { twJoin } from 'tailwind-merge'

	let dialogOpen = false
</script>

<nav class="flex flex-row gap-4 items-center h-[5vh] p-4 text-white">
	<DropdownMenu.Root>
		<DropdownMenu.Trigger class="">File</DropdownMenu.Trigger>
		<DropdownMenu.Content
			class={twJoin(
				'w-full max-w-[229px]',
				'p-2 flex flex-col gap-2',
				'bg-zinc-800 drop-shadow-lg text-white',
			)}
			sideOffset={8}
		>
			<DropdownMenu.Item>
				<div class="flex items-center">New Project</div>
			</DropdownMenu.Item>
			<DropdownMenu.Item>
				<div class="flex items-center">Save</div>
			</DropdownMenu.Item>
			<DropdownMenu.Item>
				<div class="flex items-center">Save As...</div>
			</DropdownMenu.Item>
		</DropdownMenu.Content>
	</DropdownMenu.Root>
	<button on:click={() => dialogOpen = true}>Edit</button>
	<div>Selection</div>
	<div>View</div>
</nav>

<Dialog.Root bind:open={dialogOpen}>
	<Dialog.Trigger />
	<Dialog.Portal>
		<Dialog.Overlay class="fixed inset-0 z-50 bg-black/90" />
		<Dialog.Content class={twJoin(
			"fixed left-[50%] top-[50%] z-50 w-full max-w-[35%] p-8",
			"translate-x-[-50%] translate-y-[-50%]",
			"bg-zinc-900 flex flex-col gap-4",
			"rounded-lg"
		)}>
			<Dialog.Title class="text-white text-2xl font-semibold font-sans">Add Node</Dialog.Title>
			<Dialog.Description class="flex flex-col gap-2 text-white">
				Add nodes to the canvas.
				<div class="grid grid-cols-2 gap-2">
					<div class={twJoin(
						"flex flex-col p-4",
						"bg-zinc-800 text-white text-sm rounded-lg",
						"border-2 border-zinc-800 hover:border-blue-700 hover:bg-blue-900 transition-colors",
						"cursor-pointer"
					)}>
						<span class="font-mono">OscillatorNode</span>
						<span class="text-xs">A periodic waveform, such as a sine wave</span>
					</div>
					<div class={twJoin(
						"flex flex-col p-4",
						"bg-zinc-800 text-white text-sm rounded-lg",
						"border-2 border-zinc-800 hover:border-blue-700 hover:bg-blue-900 transition-colors",
						"cursor-pointer"
					)}>
						<span class="font-mono">Envelope</span>
						<span class="text-xs">an ADSR envelope generator</span>
					</div>
					<div class={twJoin(
						"flex flex-col p-4",
						"bg-zinc-800 text-white text-sm rounded-lg",
						"border-2 border-zinc-800 hover:border-blue-700 hover:bg-blue-900 transition-colors",
						"cursor-pointer"
					)}>
						<span class="font-mono">Chorus</span>
						<span class="text-xs">a stereo chorus effect composed of a left and right delay with an LFO (low frequency oscillator)</span>
					</div>
					<div class={twJoin(
						"flex flex-col p-4",
						"bg-zinc-800 text-white text-sm rounded-lg",
						"border-2 border-zinc-800 hover:border-blue-700 hover:bg-blue-900 transition-colors",
						"cursor-pointer"
					)}>
						<span class="font-mono">Reverb</span>
						<span class="text-xs">Simple convolution created with decaying noise</span>
					</div>
					<div class={twJoin(
						"flex flex-col p-4",
						"bg-zinc-800 text-white text-sm rounded-lg",
						"border-2 border-zinc-800 hover:border-blue-700 hover:bg-blue-900 transition-colors",
						"cursor-pointer"
					)}>
						<span class="font-mono">Vibrato</span>
						<span class="text-xs">composed of a delay and an LFO (low frequency oscillator)</span>
					</div>
					<div class={twJoin(
						"flex flex-col p-4",
						"bg-zinc-800 text-white text-sm rounded-lg",
						"border-2 border-zinc-800 hover:border-blue-700 hover:bg-blue-900 transition-colors",
						"cursor-pointer"
					)}>
						<span class="font-mono">BitCrusher</span>
						<span class="text-xs">down-samples the incoming signal to a different bit depth</span>
					</div>
				</div>
			</Dialog.Description>
		</Dialog.Content>
	</Dialog.Portal>
</Dialog.Root>