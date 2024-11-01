how can clone the repository

```bash
git clone https://github.com/omar-web-dev-2/redux-row.git
```

goto file

```bash
cd redux-row
```

```bash
npm install
```

### induction for redux (how can setup)

Goto

```bash
https://redux-toolkit.js.org/tutorials/quick-start
```

1. Install Redux Toolkit and React-Redux

```bash
npm install @reduxjs/toolkit react-redux
```

---

### how to create a new vite application using ts.

1.

```bash
npm create vite
```

2. enter a project name
3. select the formwork
4. select the language
5.

```bash
npm install
```

---

### how can add tailwind css with postcss (vite)

1.

```bash
npm install -D tailwindcss postcss autoprefixer
```

2.

```bash
npx tailwindcss init -p
```

3. tailwind.config.js file changes (remove all code)

```bash
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

4. index.css changes (remove all code )

```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```

node >> don't forget restart your application

---

### how can add shadcn css with postcss (vite)

1. install shadcn css with tailwind css

```bash
npx shadcn-ui@latest init
```

2. tsconfig.json file changes

"compilerOptions": {
"target": "ES2020",
"useDefineForClassFields": true,
"lib": ["ES2020", "DOM", "DOM.Iterable"],
"module": "ESNext",
"skipLibCheck": true,
`bash
"baseUrl": ".",
"paths": {
"@/_": [
"./src/_"
]
},

````
3. Add the following code to the vite.config.ts so your app can resolve paths without error

```bash

npm i -D @types/node

````

4. vite.config.ts file changes(remove all code)

```bash
import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})

```

---

### My file structure

```bash
----src
----|----component
----|----|----layouts
----|----|----ui
----|----pages
----|----routes
----|----redux
----|----|----store.tsx
----|----|----features
----|----|----|----counterState.tsx
----|----utils
----|----context
----|----hooks
```

---

### Store

src/redux/store.tsx

1.

```bash
import { configureStore } from '@reduxjs/toolkit'
export const store = configureStore({
  reducer: {},
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
```

note >> don't forget connect store

##### How can connect store in your application

src/main.tsx

1.

```bash
import {Provider} from "react-redux"
import { store } from "./redux/store.tsx";
```

2.

```bash
 <Provider store={store}>
    <App />
  </Provider>
```

src/redux/hooks.ts

```bash
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import type { RootState, AppDispatch } from './store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

```

---
