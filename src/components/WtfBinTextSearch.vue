<script setup lang="ts">
defineProps<{
    updateHandler: (e: Event) => void
}>()
</script>

<template>
    <div class="search-form">
        <label>Search</label>
        <input type="text" @input="updateHandler" />
    </div>
</template>

<style scoped>
.search-form {
    margin-top: 1rem;
    vertical-align: middle;
}
.search-form label {
    margin-right: 1rem;
}

.search-form input {
    width: auto;
    line-height: 1.4rem;
    background: black;
    color: magenta;
    border: 1px dashed magenta;
    border-radius: 3px;
}
</style>