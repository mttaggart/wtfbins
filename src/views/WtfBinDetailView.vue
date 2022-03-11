<script setup lang="ts">
import { RouterLink } from "vue-router"
import type {WtfBin} from "@/interfaces/WtfBin"
import TagContainer from "@/components/TagContainer.vue"

const props = defineProps<{
    wtfbin: WtfBin | undefined,
    unselectBin: () => void
}>()

</script>

<template>
    <div v-if="wtfbin != undefined">
        <li class="bin-item">
            <h3 @click="props.unselectBin"> &lt; Back</h3>
            <h2>{{wtfbin.name}}</h2>
            <hr />
            <p><b>Contributed By:</b> {{wtfbin.contributor}}</p>
            <p>{{wtfbin.description}}</p>
            <footer>
                <a v-bind:href="wtfbin.documentation">Documentation</a>
                <TagContainer 
                    :tags="wtfbin.tags"
                    :add-tag="() => {}"
                />
            </footer>
        </li>
    </div>
    <div v-else>
        <h2>No such WTFbin!</h2>
    </div>
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

    .bin-item h2, h3 {
        margin: 0;
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