import { defineConfig, presetAttributify, presetUno } from "unocss";
import Icons from "@unocss/preset-icons";
import transformerDirectives from "@unocss/transformer-directives";

export default defineConfig({
    presets: [
        presetUno(),
        presetAttributify(),
        Icons({ prefix: "i-", extraProperties: { dispaly: "inline-block" } }),
    ],
    transformers: [transformerDirectives()],
});
