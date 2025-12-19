import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // এখানে অবশ্যই './' দিন যাতে এটি সঠিক রিলেটিভ পাথ খুঁজে পায়
})