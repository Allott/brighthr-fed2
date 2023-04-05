
Step 1 - install new next app

https://nextjs.org/docs
npx create-next-app@latest
explain package-lock commands
remove stuff from main
remove styles

Step 2 - install tailwind

https://tailwindcss.com/docs/guides/nextjs
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
templates path
global.css
test

Step 2.5 - cannot find module next/babel
add .babelrc file
{
  "presets": ["next/babel"],
  "plugins": []
}

in .eslintrc
{
  "extends": ["next/babel","next/core-web-vitals"]
}

Step 3 - three
https://www.npmjs.com/package/@react-three/fiber
npm install three @react-three/fiber

