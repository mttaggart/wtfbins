<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type {WtfBin} from "@/interfaces/WtfBin"
import TagContainer from "@/components/TagContainer.vue"
const props = defineProps<{
    wtfbin: WtfBin,
    addTag: (t: string) => void,
}>()
</script>

<template>
    <li class="bin-item">
        <RouterLink
            :to="{ name: 'bin', params: { id: wtfbin.id.toString() }}"
        >
            <h2>{{wtfbin.name}}</h2>
        </RouterLink>
        <hr />
        <p><b>Contributed By:</b> {{wtfbin.contributor}}</p>
        <p>{{wtfbin.description}}</p>
        <footer>
            <a v-bind:href="wtfbin.documentation">Documentation</a>
            <TagContainer 
                :tags="wtfbin.tags"
                :add-tag="addTag"
            />
        </footer>
    </li>
</template>

<style scoped>
    .bin-item {
        list-style: none;
        background: rgb(138, 138, 138);
        padding: 1rem;
        margin: 10px 10px;
        border-radius: 10px;
        max-width: 30%;
        min-width: 30%;
        font-weight: 400;
        /* transition: box-shadow .3s; */
        box-shadow: 1px 1px 3px black;
    }

    .bin-item h2 {
        margin: 0;
    }

    @media screen and (max-width: 700px) {
    .bin-item {
      flex-direction: column;
      max-width: 80%;
      min-width: 80%;
    }
  }


</style>