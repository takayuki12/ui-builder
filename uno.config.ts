import {
    defineConfig,
    presetAttributify,
    presetUno,
    presetIcons,
} from "unocss";

export default defineConfig({
    presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
            prefix: "i-",
            extraProperties: { dispaly: "inline-block" },
        }),
    ],
});
