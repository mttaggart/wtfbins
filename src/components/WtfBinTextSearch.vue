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
    width: 80%;
    line-height: 2rem;
    font-size: 1.6rem;
    padding: 0.2rem;
    background: black;
    color: magenta;
    border: 1px dashed magenta;
    border-radius: 3px;
}

@media screen and (min-width: 700px) {
    .search-form input {
        display: block;
        width: 66%;
    }
}

@media screen and (max-width: 700px) {
    .search-form input {
        display: block;
        width: 98%;
    }

    .search-form label {
        display: block;
        margin: 0.4rem 0rem;;
    }

}
</style>