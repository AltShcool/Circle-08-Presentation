---
theme: seriph           
title: "Circle 08 Presentation"
subtitle: "Circle - 08 • AltSchool Africa • Front‑End Engineering"
author: "Cirlce - 08"
date: 7 May 2025
class: text-center 
paginate: true          
download: true          
---

<script setup>
import Button from './components/Button.vue'
</script>

# Presentation Outline
1. Core JavaScript Refresh  
2. Asynchronous JavaScript  
3. DOM & Events  
4. ES Modules & Form Handling  
5. Node + npm & Bundlers  
6. Wrap‑up / Q &A  

<div class="abs-br m-6 text-xl">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="slidev-icon-btn">
    <carbon:edit />
  </button>
  <a href="https://github.com/AltShcool/Circle-08-Presentation" target="_blank" class="slidev-icon-btn">
    <carbon:logo-github />
  </a>
</div>

---
transition: fade-out
---


# 1 Core JS Refresh

```js {monaco-run} [1|3-5|7-9] 
const originals = [1, 2, 3]
const clone = [...originals]   // new copy
clone.push(4)

console.log(originals) // → [1,2,3]
console.log(clone)     // → [1,2,3,4]

// rest parameter
function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0)
}
```

### Key takeaways
- Spread avoids accidental mutation
- Rest collects unknown arguments

<div class="abs-br m-6 text-xl">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="slidev-icon-btn">
    <carbon:edit />
  </button>
  <a href="https://github.com/AltShcool/Circle-08-Presentation" target="_blank" class="slidev-icon-btn">
    <carbon:logo-github />
  </a>
</div>

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg,rgb(189, 214, 124) 10%,rgb(230, 250, 53) 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---
transition: slide-up
level: 2
---

# 2 Asynchronous JavaScript
```js {monaco-run}
async function getGitHubUser(username) {
  const res = await fetch(`https://api.github.com/users/${username}`)
  if (!res.ok) throw new Error('Network error')
  return res.json()
}

getGitHubUser('octocat')
  .then(user => console.log(user.login))
  .catch(console.error)
```

- Promises tame callback hell

- `async/await` reads top‑to‑bottom

- Always handle errors `(try/catch or .catch())`

<div class="abs-br m-6 text-xl">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="slidev-icon-btn">
    <carbon:edit />
  </button>
  <a href="https://github.com/AltShcool/Circle-08-Presentation" target="_blank" class="slidev-icon-btn">
    <carbon:logo-github />
  </a>
</div>

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg,rgb(189, 214, 124) 10%,rgb(230, 250, 53) 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---

# 3 DOM & Events
```html {monaco}
<button id="btn">Clicked 0 times</button>

<script type="module">
  const btn = document.getElementById('btn')
  let count = 0

  btn.addEventListener('click', e => {
    count++
    e.currentTarget.textContent = `Clicked ${count} times`
  })
</script>
```

<Button />

- `addEventListener` is preferred

- Understand bubbling vs capturing

- Use delegation for long lists

<div class="abs-br m-6 text-xl">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="slidev-icon-btn">
    <carbon:edit />
  </button>
  <a href="https://github.com/AltShcool/Circle-08-Presentation" target="_blank" class="slidev-icon-btn">
    <carbon:logo-github />
  </a>
</div>

<style>
  h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg,rgb(189, 214, 124) 10%,rgb(230, 250, 53) 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}

.footnotes-sep {
  @apply mt-5 opacity-10;
}
.footnotes {
  @apply text-sm opacity-75;
}
.footnote-backref {
  display: none;
}
</style>

<!--
Notes can also sync with clicks

[click] This will be highlighted after the first click

[click] Highlighted with `count = ref(0)`

[click:3] Last click (skip two clicks)
-->

---
level: 3
---

# 4 ES Modules + Dynamic import()
```js
// utils/math.js
export function add(a, b) { return a + b }
export default function mul(a, b) { return a * b }

// main.js
import mul, { add } from './utils/math.js'

(async () => {
  if (performance.now() > 5000) {
    const { sparkle } = await import('./effects/sparkle.js')
    sparkle()
  }
})();
```

**Why it matters:** predictable scope, tree‑shaking, lazy‑loading.

<div class="abs-br m-6 text-xl">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="slidev-icon-btn">
    <carbon:edit />
  </button>
  <a href="https://github.com/AltShcool/Circle-08-Presentation" target="_blank" class="slidev-icon-btn">
    <carbon:logo-github />
  </a>
</div>

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg,rgb(189, 214, 124) 10%,rgb(230, 250, 53) 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---
Level: 3b
---

### Form Handling with FormData
```html {monaco}
<form id="todoForm">
  <input name="task" required>
  <button>Add</button>
</form>

<script type="module">
  todoForm.addEventListener('submit', e => {
    e.preventDefault()
    const data = new FormData(e.target)
    console.log(Object.fromEntries(data)) // { task: "Buy milk" }
  })
</script>
```

- `preventDefault()` stops page reload

- `FormData` quickly serialises any form

<div class="abs-br m-6 text-xl">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="slidev-icon-btn">
    <carbon:edit />
  </button>
  <a href="https://github.com/AltShcool/Circle-08-Presentation" target="_blank" class="slidev-icon-btn">
    <carbon:logo-github />
  </a>
</div> 

<style>
h3 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg,rgb(189, 214, 124) 10%,rgb(230, 250, 53) 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---

# Node & NPM + Bundlers

```bash
npm init -y            # generates package.json
npm i -D vite          # ultra‑fast dev server
npm run dev            # HMR at localhost:5173
npm run build          # output /dist with hashed assets
vite preview           # test production build
```

| Why bundlers?                                      | Benefits                           |
| -------------------------------------------------- | ---------------------------------- |
| Browsers can’t import SVG/PNG or npm libs directly | Bundlers translate everything      |
| Code‑splitting & optimisation                      | Smaller, faster production bundles |
| Dev server with HMR                                | Instant feedback while coding      |

---
class: px-20
---

# Demo Confetti
```js
// import confetti from 'canvas-confetti'

// export function celebrate() {
//   confetti({
//     particleCount: 150,
//     spread: 70,
//     origin: { y: 0.6 }
//   })
// }
```
Call `celebrate()` after adding a new to‑do.

---
fini!
---

**What this means**;

| Skill                       | Real‑world impact                        |
| --------------------------- | ---------------------------------------- |
| Clean array/object handling | Fewer bugs, simpler state updates        |
| Promises & `await`          | Reliable API calls, loaders, error UI    |
| DOM mastery                 | Interactive components without libraries |
| ES Modules                  | Maintainable, testable codebase          |
| Bundlers & npm              | Modern workflow—ready for React/Next     |
