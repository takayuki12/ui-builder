<script setup lang="ts">
import { PAGE_COMPONENT, COMPONENT_LIST } from "@/router/route-name";
</script>

<template>
    <v-sheet class="body">
        <v-layout class="body">
            <v-navigation-drawer location="right" rail permanent>
                <v-list-item nav prepend-avatar="/ux-design.png"></v-list-item>

                <v-divider></v-divider>

                <v-list density="compact" nav>
                    <v-list-item
                        prepend-icon="mdi-view-dashboard"
                        value="dashboard"
                        link
                        :to="{ name: PAGE_COMPONENT }"
                        active-color="primary"
                        exact
                    ></v-list-item>

                    <v-list-item
                        prepend-icon="mdi-shape"
                        value="messages"
                        link
                        :to="{ name: COMPONENT_LIST }"
                        active-color="primary"
                    ></v-list-item>
                </v-list>
            </v-navigation-drawer>

            <v-navigation-drawer location="right" permanent width="300">
                <div class="pa-2">
                    <router-view name="builder" />
                </div>
            </v-navigation-drawer>

            <v-main style="overflow-y: auto"> </v-main>
        </v-layout>
    </v-sheet>
</template>

<style lang="scss" scoped>
.body {
    min-height: 100vh;
}
</style>
