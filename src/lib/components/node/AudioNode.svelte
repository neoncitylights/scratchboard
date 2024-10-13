<script lang="ts">
	import { IconInfoCircle } from '@tabler/icons-svelte'

	export let title: string
</script>

<div class="shadow-2xl shadow-black rounded-lg bg-zinc-900 flex flex-col w-[300px]">
	<header class="custom-drag-handle bg-blue-700 text-white p-2 rounded-t-md flex flex-row justify-between items-center">
		{title}
		<IconInfoCircle size={20} />
	</header>
	<section class="grid grid-cols-2 p-2 gap-1 cursor-default">
		<slot />
	</section>
</div>

