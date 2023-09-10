import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['../../packages/ui/**/*.{ts,tsx}', './app/**/*.{ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
export default config
