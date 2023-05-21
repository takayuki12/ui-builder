<script lang="ts" setup>
import { getList, init } from "./core/builder";
import VTypography from "./test-components/v-typography.vue";
import ComponentList from "@/components/list/component-list.vue";

init([{ id: 1, name: "Text", component: VTypography }]);

const list = getList()


</script>

<template>
    <!-- <router-view /> -->

    <div class="flex flex-col min-h-screen">
        <component-list :list="list">
            <template #activator>
            </template>
        </component-list>
    </div>
</template>
