<script setup lang="ts">
import type {WtfBin} from "@/interfaces/WtfBin"
defineProps<{
    wtfbin: WtfBin
}>()

let modalToggled = false;
const toggleModal = () => {
    console.log("Toggling Modal");
    console.log(modalToggled);
    modalToggled = !modalToggled;
}

</script>

<template>
    <li @click="toggleModal">
        <h2>{{wtfbin.name}}<span v-if="modalToggled">*</span></h2>
        
        <p>Contributed By: {{wtfbin.contributor}}</p>
        <p>{{wtfbin.description}}</p>
        <footer>
            <a v-bind:href="wtfbin.documentation">Documentation</a>
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
        transition: box-shadow .3s;
        box-shadow: 1px 1px 1px black;
    }

    li:hover {
        font-weight: 800;
        box-shadow: 7px 7px 7px black;
        cursor: pointer;
    }

    li:hover h2{
        color: magenta;
    }


</style>