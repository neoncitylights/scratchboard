<script lang="ts">
    import { twJoin } from 'tailwind-merge'
    import { RadioGroup } from 'bits-ui'
    export let kind: string
    export let title: string
    export let desc: string
</script>

<RadioGroup.Item
    id={kind}
    value={kind}
    class={twJoin(
        "flex flex-row items-start p-4 gap-3",
        "text-white text-sm rounded-lg",
        "border-2 border-zinc-800",
        "hover:border-blue-700 hover:bg-blue-900 transition-colors"
    )}>
    <div class="size-6">
        <slot />
    </div>
    <span class="flex flex-col items-start gap-1">
        <span class="font-mono">{title}</span>
        <span class="text-xs text-left">{desc}</span>
    </span>
</RadioGroup.Item>
