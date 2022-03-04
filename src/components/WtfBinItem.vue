<script setup lang="ts">
import { ref } from 'vue'
import type {WtfBin} from "@/interfaces/WtfBin"
import TagContainer from "@/components/TagContainer.vue"
defineProps<{
    wtfbin: WtfBin,
    addTag: (t: string) => void,
    removeTag: (t: string) => void
}>()

</script>

<template>
    <li>
        <h2>{{wtfbin.name}}</h2>
        <hr />
        <p><b>Contributed By:</b> {{wtfbin.contributor}}</p>
        <p>{{wtfbin.description}}</p>
        <footer>
            <a v-bind:href="wtfbin.documentation">Documentation</a>
            <TagContainer 
                :tags="wtfbin.tags"
                :add-tag="addTag"
                :remove-tag="removeTag" 
            />
        </footer>
    </li>
</template>

<style scoped>
    li {
        list-style: none;
        background: rgb(138, 138, 138);
        padding: 1rem;
        margin: 10px 0px;
        border-radius: 10px;
        font-weight: 400;
        /* transition: box-shadow .3s; */
        box-shadow: 1px 1px 3px black;
    }

    li h2 {
        margin: 0;
    }

    /* li:hover {
        font-weight: 800;
        box-shadow: 7px 7px 7px black;
        cursor: pointer;
    } */


</style>