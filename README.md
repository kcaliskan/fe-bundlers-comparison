1. The two projects are created from the following commands:

```javascript
npx create-next-app@latest
npm init vite@latest # select React preset
```
There is two version versions used. One is default one and other is `SWC` version which replacing `Babel` with Vite's native version of `Babel` called `SWC`.

2. Projects with `*` symbol has only 15 components and all of them rendered at the same time in the index file. These 15 components have `ag-grid` with **11** columns and **148000** lines.

3. `genFiles.(m)js` is run in each project to generate 1000 components. All components are imported in the app's root component (in Next's case, the root page component) and rendered together. This step is already done and the files are already checked in, but the script is included for reference.

So projects with `+1000` in the title comes with default 15 components have `ag-grid` with **11** columns and **148000** lines and top of that **1000** components with simple one div inside of them.

4. For each project, we run watch.(m)js in a separate Node process to get the exact timestamp of file change. This is used to mark the start of HMR.

6. Start the projects (vite and next dev), then edit the following files to test HMR:

Next: `app/page.js` (root) and `app/comp0.tsx` (leaf)
Vite: `src/App.tsx` (root) and `src/components/comp0.tsx` (leaf)

The edited components all render `Date.now()` in their output. The final rendered timestamp in the DOM is used to mark the completion of HMR.

### Numbers
+ Recorded 5 runs and then average them
+ Time in ms
+ Tested on M1 MacBook Pro (First generation Apple M1, 16 GB RAM, 1 TB SSD)

|      | Vite + React | Vite + React + 1000 | Vite SWC + React | Vite SWC + React + 1000 | Nextjs | Nextjs + 1000 |
|------|--------------|---------------------|------------------|-------------------------|--------|---------------|
| Root |        0.694 |              1.2028 |            0.272 |                   0.978 |  1.444 |         2.226 |
| Leaf |        0.284 |               0.264 |            0.308 |                   0.272 |  0.706 |         1.555 |