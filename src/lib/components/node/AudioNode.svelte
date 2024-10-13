<script lang="ts">
	import { IconInfoCircle, IconPencil } from '@tabler/icons-svelte'

	export let title: string
</script>

<div class="w-[300px]">
	<div class="flex flex-row justify-between p-2">
		<input type="text" placeholder="Name your node..." class="appearance-none bg-transparent placeholder:text-zinc-800 text-white">
		<IconPencil size={20} />
	</div>
		
	<div class="shadow-2xl shadow-black rounded-lg bg-zinc-900 flex flex-col w-full">
		<header class="custom-drag-handle bg-blue-700 text-white p-2 rounded-t-md flex flex-row justify-between items-center">
			{title}
			<IconInfoCircle size={20} />
		</header>
		<section class="grid grid-cols-2 p-2 gap-1 cursor-default">
			<slot />
		</section>
	</div>	
</div>

