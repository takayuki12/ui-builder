<script lang="ts" setup>
import { init } from "./core/builder";
import { getList } from "./core/store";
import ComponentList from "@/components/list/component-list.vue";
import RenderedUi from "@/components/ui/rendered-ui.vue";
import UiEditor from "./components/editor/ui-editor.vue";

// testing components
import VTypography from "./test-components/v-typography.vue";
import HeroSection from "./test-components/hero-section.vue";

init([
    {
        id: 1,
        name: "Text",
        component: VTypography,
        props: { text: "string" },
        values: { text: "Hello from h1" },
    },
    {
        id: 2,
        name: "Hero Section",
        component: HeroSection,
        props: {
            backgroundImage: "string",
            heading: "string",
            isDark: "bool",
            paragraph: "string",
        },
    },
]);

const list = getList();
</script>

<template>
    <!-- <router-view /> -->
    <div class="flex flex-col min-h-screen">
        <rendered-ui></rendered-ui>
        <ui-editor />

        <component-list :list="list">
            <template #activator> </template>
        </component-list>
    </div>
</template>
