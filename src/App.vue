<script lang="ts" setup>
import { init } from "./core/builder";
import { getList } from "./core/store";
import VTypography from "./test-components/v-typography.vue";
import ComponentList from "@/components/list/component-list.vue";
import RenderedUi from "@/components/ui/rendered-ui.vue";

init([
    {
        id: 1,
        name: "Text",
        component: VTypography,
        props: { text: "string" },
        values: { text: "Hello from h1" },
    },
]);

const list = getList();
</script>

<template>
    <!-- <router-view /> -->
    <div class="flex flex-col min-h-screen">
        <rendered-ui></rendered-ui>
        <component-list :list="list">
            <template #activator> </template>
        </component-list>
    </div>
</template>
