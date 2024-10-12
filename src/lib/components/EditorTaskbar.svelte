<script lang="ts">
	import { DropdownMenu } from 'bits-ui'
	import { twJoin } from 'tailwind-merge'
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
	<div>Edit</div>
	<div>Selection</div>
	<div>View</div>
</nav>
