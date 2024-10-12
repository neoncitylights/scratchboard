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
        "flex flex-col p-4 items-start",
        "text-white text-sm rounded-lg",
        "border-2 border-zinc-800",
        "hover:border-blue-700 hover:bg-blue-900 transition-colors"
    )}>
    <span class="font-mono">{title}</span>
    <span class="text-sm text-left">{desc}</span>
</RadioGroup.Item>
