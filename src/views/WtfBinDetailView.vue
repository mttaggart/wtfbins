<script setup lang="ts">
import { useRoute } from "vue-router"
import type { WtfBin } from "@/interfaces/WtfBin"
import TagContainer from "@/components/TagContainer.vue"
import { wtfBinStore } from "@/stores/wtfbins";
import { Marked } from '@ts-stack/markdown';

const route = useRoute();
const store = wtfBinStore();
store.retrieveWtfBins();
const binId = parseInt(route.params.id as string);

console.log(binId);


</script>

<template>
    <div v-for="(wtfbin, i) in store.binById(binId) ">
        <li class="bin-item">
            <h2>{{ wtfbin.name }}</h2>
            <hr />
            <p>
                <b>Contributed By:</b>
                {{ wtfbin.contributor }}
            </p>
            <div class="markdown" v-html="Marked.parse(wtfbin.description)"></div>
            <a v-bind:href="wtfbin.imageURL" target="_blank">
                <img v-if="wtfbin.imageURL != ''" :src="wtfbin.imageURL" />
            </a>
            <footer>
                <a v-bind:href="wtfbin.documentation">Documentation</a>
                <TagContainer :tags="wtfbin.tags" :add-tag="() => { }" />
            </footer>
        </li>
    </div>
    <div v-if="store.binById(binId).length == 0">
        <h2>No such WTFbin!</h2>
    </div>
</template>

<style scoped>
.bin-item {
    list-style: none;
    background: rgb(138, 138, 138);
    padding: 1rem;
    margin: 10px auto;
    border-radius: 10px;
    max-width: 60%;
    min-width: 60%;
    font-weight: 400;
    hyphens: manual;
    /* transition: box-shadow .3s; */
    box-shadow: 1px 1px 3px black;
}

.bin-item h2,
h3 {
    margin: 0;
}
.bin-item h2 {
    margin: 0;
}

.bin-item img {
    width: 50%;
    display: block; 
    margin: auto;
}

@media screen and (max-width: 1025px) {
    .bin-item {
        max-width: 90%;
        min-width: 90%;
        margin-left: auto;
        margin-right: auto;
    }
}

@media screen and (max-width: 700px) {
    /* .bin-item {
        flex-direction: column;
        max-width: 90%;
        min-width: 90%;
        margin-left: auto;
        margin-right: auto;
    } */
    .bin-item img {
        width: 80%;
        display: block; 
        margin: auto;
    }
}
</style>