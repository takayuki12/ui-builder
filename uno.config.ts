import {
    defineConfig,
    presetAttributify,
    presetUno,
    presetIcons,
} from "unocss";
import transformerDirectives from "@unocss/transformer-directives";

export default defineConfig({
    presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
            prefix: "i-",
            extraProperties: { dispaly: "inline-block" },
        }),
    ],
    // transformers: [transformerDirectives()],
});
