<script lang="ts">
	import { DropdownMenu, Dialog, RadioGroup, Toggle } from 'bits-ui'
	import { twJoin } from 'tailwind-merge'
	import { createEventDispatcher } from 'svelte'
	import NodeChoice from './NodeChoice.svelte'
	import {
		IconBoltFilled,
		IconBroadcast,
		IconUsers,
		IconWaveSawTool,
		IconWaveSine,
		IconWaveSquare,
		IconX,
		IconPlayerPlay,
		IconPlayerPlayFilled,
	} from '@tabler/icons-svelte'

	let dialogOpen = false
	const dispatch = createEventDispatcher();
	
	function handlePlayButtonClick()
	{
		dispatch('triggerPlay')
	}
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
	<button on:click={handlePlayButtonClick}>
		<IconPlayerPlay size={20} />
	</button>
</nav>

<Dialog.Root bind:open={dialogOpen}>
	<Dialog.Trigger />
	<Dialog.Portal>
		<Dialog.Overlay class="fixed inset-0 z-50 bg-black/80" />
		<Dialog.Content class={twJoin(
			'fixed left-[50%] top-[50%] z-50 w-full max-w-[35%] p-8',
			'translate-x-[-50%] translate-y-[-50%]',
			'bg-zinc-900 flex flex-col gap-4',
			'rounded-lg',
		)}>
			<Dialog.Title class="text-white text-2xl font-semibold font-sans flex justify-between">
				Add Node
				<Dialog.Close>
					<IconX size={24} />
				</Dialog.Close>
			</Dialog.Title>
			<Dialog.Description class="flex flex-col gap-2 text-white">
				Add nodes to the canvas.
				<RadioGroup.Root class="grid grid-cols-2 gap-2 auto-rows-[1fr]">
					<NodeChoice
						kind='oscillator'
						title="Oscillator"
						desc="A periodic waveform, such as a sine wave" on:click={() => 'test'}>
						<IconWaveSquare size={24} />
					</NodeChoice>
					<NodeChoice
						kind='envelope'
						title="Envelope"
						desc="an ADSR envelope generator">
						<IconWaveSine size={24} />
					</NodeChoice>
					<NodeChoice
						kind='chorus'
						title="Chorus"
						desc="a stereo chorus effect composed of a left and right delay with an LFO (low frequency oscillator)">
						<IconUsers size={24} />
					</NodeChoice>
					<NodeChoice
						kind='reverb'
						title="Reverb"
						desc="Simple convolution created with decaying noise">
						<IconBroadcast size={24} />
					</NodeChoice>
					<NodeChoice
						kind='vibrato'
						title="Vibrato"
						desc="composed of a delay and an LFO (low frequency oscillator)">
						<IconWaveSawTool size={24} />
					</NodeChoice>
					<NodeChoice
						kind='bitcrusher'
						title="BitCrusher"
						desc="down-samples the incoming signal to a different bit depth">
						<IconBoltFilled size={24} />
					</NodeChoice>
				</RadioGroup.Root>
			</Dialog.Description>
		</Dialog.Content>
	</Dialog.Portal>
</Dialog.Root>
