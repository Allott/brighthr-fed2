---
marp: true
theme: gaia
paginate: true
---

# Simple Next + Three JS app

![](./images/splash.png)

---
## What are we actually building?
- Next js app
- Tailwind
- Three js rendering
- React-three

---

## Step 1 - new next app

Docs: https://nextjs.org/docs

` npx create-next-app@latest `

---

### Tidy up
- remove guff from main
- remove styles
- remove server guff

#### What are we looking at now?

---
## Step 2 - install tailwind

because im lost without it

Docs: https://tailwindcss.com/docs/guides/nextjs

`npm install -D tailwindcss postcss autoprefixer`

`npx tailwindcss init -p`

---

- Configure your template paths

- Add Tailwind to global.css

- test it!

literally just copy paste from the docs

---

### Bonus problem:
Cannot find module next/babel

add this to .babelrc file
`{
  "presets": ["next/babel"],
  "plugins": []
}`

and this into .eslintrc
`{
  "extends": ["next/babel","next/core-web-vitals"]
}`

---

## Step 3 - three


`npm install three @react-three/fiber @react-three/drei`

Some Docs:
https://github.com/pmndrs/react-three-fiber
https://github.com/pmndrs/drei#cubecamera
https://threejs.org/docs/

---
### Lets actually render something tho


