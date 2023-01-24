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
+ Recorded 5 runs and then averaged them (cleaned nextjs, vite and npm cache before each run)
+ Time in ms
+ Tested on M1 MacBook Pro (First generation Apple M1, 16 GB RAM, 1 TB SSD)

|      | Vite + React* | Vite + React + 1000 | Vite SWC + React* | Vite SWC + React + 1000 | Nextjs* | Nextjs + 1000 | Nextjs + Turbo | Nextjs + Turbo + 1000 |
|------|---------------|---------------------|-------------------|-------------------------|---------|---------------|----------------|-----------------------|
| Root |         0.694 |               1.202 |             0.272 |                   0.978 |   1.444 |         2.226 | 0.416          | 0.750                 |
| Leaf |         0.284 |               0.264 |             0.308 |                   0.272 |   0.706 |         1.555 | 0.054          | 0.087                 |

#### Highlights
**Vite with React** vs **Nextjs with webpack**
+ Vite with 15 components (ag-grid, 11 columns, 148000 lines data) is faster than Nextjs by `108%`. In other words, Vite with React `2.08` times faster than Nextjs with webpack.

**Vite + React + 1000** vs **Nextjs + 1000**
+ `Vite + React + 1000` components (in addition to default 15 components with ag-grid, 11 columns, 148000 lines data) is `85%` faster than `Nextjs with 1000` components. In other words, `Vite + React + 1000` components `1.85` times faster than Nextjs with 1000 components.

**Vite SWC + React** vs **Nextjs**
+ `Vite SWC + React` with 15 components (ag-grid, 11 columns, 148000 lines data) is faster than `Nextjs` by `430%`, in other words it is faster than `5.3` times faster.

**Vite SWC + React + 1000** vs **Nextjs + 1000**
+ `Vite SWC + React + 1000` components (in addition to default 15 components with ag-grid, 11 columns, 148000 lines data) is `127%` faster than `Nextjs with 1000` components. in other words it is faster than `2.27` times faster.

**Nextjs + Turbo** vs **Nextjs + Turbo**
+ `Nextjs + Turbo` with 15 components (ag-grid, 11 columns, 148000 lines data) is `66%` faster than `Vite + React` (same 15 components). Nextjs + Turbo is `1.66` times faster than  Vite + React.

**Nextjs + Turbo + 1000** vs **Nextjs + 1000**
+ `Nextjs + Turbo + 1000` is `196%` faster than `Nextjs + 1000` with webpack. In other words, Nextjs + Turbo + 1000 `2.96` times faster than Nextjs + 1000 with webpack.

**Nextjs + Turbo + 1000** vs **Vite SWC + React + 1000**
+ `Nextjs + Turbo + 1000` is `30%` faster than `Vite SWC + React + 1000`. `Nextjs + Turbo + 1000` is `1.3` times faster than `Vite SWC + React + 1000`.