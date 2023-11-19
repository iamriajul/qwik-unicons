import path from 'path';
import fs from 'fs-plus';
import cheerio from 'cheerio';
import upperCamelCase from 'uppercamelcase';
import uniconsConfigLine from '@iconscout/unicons/json/line.json' assert { type: "json" };
import uniconsConfigSolid from '@iconscout/unicons/json/solid.json' assert { type: "json" };
import uniconsConfigMonochrome from '@iconscout/unicons/json/monochrome.json' assert { type: "json" };
import uniconsConfigThinline from '@iconscout/unicons/json/thinline.json' assert { type: "json" };

const iconsIndexPath = path.join(process.cwd(), 'src', 'index.ts');

const indexTs = []

const iconsComponentPath = path.join(process.cwd(), 'src', 'icons');

// Clear Directories
fs.removeSync(iconsComponentPath)
fs.mkdirSync(iconsComponentPath)

const generate = (uniconsConfig, prefix, type) => {


  uniconsConfig.forEach(icon => {
    const baseName = `${prefix}-${icon.name}`
    const location = path.join(iconsComponentPath, `${baseName}.tsx`)
    const name = upperCamelCase(baseName)
    const svgFile = fs.readFileSync(path.resolve('node_modules/@iconscout/unicons', icon.svg), 'utf-8')

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

generate(uniconsConfigLine, 'uil', 'line');
generate(uniconsConfigSolid, 'uis', 'solid');
generate(uniconsConfigMonochrome, 'uim', 'monochrome');
generate(uniconsConfigThinline, 'uit', 'thinline');

fs.writeFileSync(iconsIndexPath, `import {SVGAttributes} from "@builder.io/qwik";
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
} & SVGAttributes<SVGElement>

${indexTs.join('\n')}
`, 'utf-8')

console.log(`Generated ${indexTs.length} icon components.`)