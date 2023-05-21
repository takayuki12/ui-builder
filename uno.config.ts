import {defineConfig, presetUno} from 'unocss'
import Icons from '@unocss/preset-icons'

export default defineConfig({
  presets: [
    presetUno(),
    Icons({prefix: 'i-', extraProperties: { dispaly: 'inline-block'}}),
  ]
})
