import path from 'path';
import fs from 'fs-plus';
import cheerio from 'cheerio';
import upperCamelCase from 'uppercamelcase';

const iconsIndexPath = path.join(process.cwd(), 'src', 'index.ts');

const indexTs = []

const iconsComponentPath = path.join(process.cwd(), 'src', 'icons');

// Clear Directories
fs.removeSync(iconsComponentPath)
fs.mkdirSync(iconsComponentPath)

const generate = (paths, prefix, type) => {
  paths.forEach(filename => {
    if (!filename.endsWith('.svg')) {
      return
    }
    const icon = filename.split('.')[0]
    const baseName = `${prefix}-${icon}`
    const location = path.join(iconsComponentPath, `${baseName}.tsx`)
    const name = upperCamelCase(baseName)
    const svgFile = fs.readFileSync(
        path.resolve('node_modules/@iconscout/unicons/svg', type, filename),
        'utf-8'
    );

    let data = svgFile.replace(/<svg[^>]+>/gi, '').replace(/<\/svg>/gi, '')
    // Get Path Content from SVG
    const $ = cheerio.load(data, {
      xmlMode: true
    })
    const svgPath = $('path').attr('d')

    const template = `import {component$, createElement} from "@builder.io/qwik";
import { Props } from '../index';

export default component$<Props>(({ color = 'currentColor', size = 24, ...props }) => {
  return createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, createElement('path', {
    d: '${svgPath}'
  }));
});`

    fs.writeFileSync(location, template, 'utf-8')

    // Add it to index.js
    indexTs.push(`export { default as ${name} } from './icons/${baseName}'`)
  })
}

const linePaths = fs.readdirSync(path.resolve('node_modules/@iconscout/unicons/svg/line'));
const solidPaths = fs.readdirSync(path.resolve('node_modules/@iconscout/unicons/svg/solid'));
const monochromePaths = fs.readdirSync(path.resolve('node_modules/@iconscout/unicons/svg/monochrome'));
const thinlinePaths = fs.readdirSync(path.resolve('node_modules/@iconscout/unicons/svg/thinline'));

generate(linePaths, 'uil', 'line');
generate(solidPaths, 'uis', 'solid');
generate(monochromePaths, 'uim', 'monochrome');
generate(thinlinePaths, 'uit', 'thinline');

fs.writeFileSync(iconsIndexPath, `import {PropsOf} from "@builder.io/qwik";
export type Props = {
    /**
     * The color of the icon
     * @default 'currentColor'
     */
    color?: string;
    /**
     * The size of the icon
     * @default 24
     */
    size?: string | number;
} & PropsOf<'svg'>;

${indexTs.join('\n')}
`, 'utf-8')

console.log(`Generated ${indexTs.length} icon components.`)