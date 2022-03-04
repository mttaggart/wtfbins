<script setup lang="ts">
defineProps<{
    tags: Array<string>,
    addTag: (t: string) => void,
}>()
</script>

<template>
<div class="tag-container">
    <h3>Tags</h3>
    <ul>
        <li 
            v-for="(t, i) in tags" :key="i"
            @click="() => addTag(t)" class="wtfbin-tag" 
        >
            {{t}}
        </li>
    </ul>
</div>
</template>

<style scoped>
    h3 {
        font-size: 1rem;
    }

    ul {
        padding: 0;
        display: flex;
    }

    .wtfbin-tag {
        font-size: 0.9rem;
        list-style: none;
        margin: 0.2rem;
        padding: 0.4rem;
        border-radius: 5px;
        background: rgb(41, 41, 41);
    }
    .wtfbin-tag:hover {
        color: magenta;
        cursor: pointer;
    }
</style>