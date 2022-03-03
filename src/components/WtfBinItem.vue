<script setup lang="ts">
import type {WtfBin} from "@/interfaces/WtfBin"
defineProps<{
    wtfbin: WtfBin
}>()
</script>

<template>
    <li>
        <h2>{{wtfbin.name}}</h2>
        <p>{{wtfbin.description}}</p>
    </li>
</template>

<style scoped>
    li {
        list-style: none;
        background: rgb(138, 138, 138);
        padding: 1rem;
        margin: 10px 0px;
        border-radius: 10px;
        transition: all .3s;
        box-shadow: 1px 1px 1px black;
    }

    li:hover {
        color: magenta;
        box-shadow: 7px 7px 7px black;
        cursor: pointer;
    }
</style>