import { getOptions, getCurrentRequest } from 'loader-utils';
import fs from 'fs';
import path from 'path';

const loader = function (source) {
    const options = getOptions(this);
    const regex = new RegExp('(' + options.html.join('|') + ')', 'ig');
    const includes = source.match(regex);

    if (includes) {
        includes.forEach((includeFilename) => {
            const includePath = path.resolve(`./src/html/${includeFilename}`);
            const includeContent = fs.readFileSync(includePath, 'utf8');
            source = source.replace(`<include>${includeFilename}</include>`, includeContent);
            this.addDependency(includePath);
        });
    }

    return `export default ${ JSON.stringify(source) }`;
};

export default loader;
