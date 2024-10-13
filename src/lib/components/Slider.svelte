<script lang="ts">
	import { Slider } from "bits-ui";
    import { twJoin } from "tailwind-merge";
	export let value: number[]
</script>

<div class="w-full md:max-w-[280px]">
	<Slider.Root
		bind:value
		let:thumbs
		class="relative flex w-full touch-none select-none items-center">
		<span class="relative h-0.5 w-full grow overflow-hidden rounded-full bg-dark-10">
			<Slider.Range class="absolute h-full bg-foreground" {...$$props} />
		</span>
		{#each thumbs as thumb}
			<Slider.Thumb {thumb}
				class={twJoin(
					"block size-4",
					"cursor-pointer rounded-full border border-border-input",
					"bg-white shadow transition-colors",
					"hover:border-dark-40",
					"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground",
					"focus-visible:ring-offset-2 active:scale-98",
					"disabled:pointer-events-none disabled:opacity-50 dark:bg-foreground dark:shadow-card")} />
			/>
		{/each}
	</Slider.Root>
</div>