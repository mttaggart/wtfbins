<script setup lang="ts">
defineProps<{
    tags: Array<string>,
    removeTag: (t: string) => void
}>()
</script>
<template>
<div v-if="tags.length > 0">
    <h4>
        Active Tags
    </h4>
</div>
<ul>
    <li 
    class="active-tag"
    v-for="t of tags"
    @click="() => removeTag(t)"
    >
        {{t}} [x]
    </li>
</ul>
</template>

<style scoped>

    ul {
        padding: 0;
        display: flex;
    }

    .active-tag {
        font-size: 0.9rem;
        list-style: none;
        margin: 0.2rem;
        padding: 0.4rem;
        border-radius: 5px;
        background: rgb(8, 8, 8);
        color: magenta;
    }
    .active-tag:hover {
        color: white;
        cursor: pointer;
    }
</style>