const glob = require('glob');
const fs = require('fs');
const replace = require('replace-in-file');

glob('src/app/components/*/demos/*.component.ts', function (er, paths) {

    paths.forEach((path) => {
        const parts = path.split('/');
        const filename = parts[5]; //e.g. buttons-demo.component.ts
        const componentName = filename.replace(/.ts$/, '').replace(/[^a-z0-9]/gi, ''); //e.g. buttonsdemocomponent

        return fs.readFile(path, (err, buff) => {

            let demoComponent = {
                name: componentName,
                selector: 'app-' + filename.replace('.component.ts', ''), //e.g. app-buttons-demo
                files: {}
            };
            demoComponent.files['src/demo.ts'] = buff.toString();

            const results = replace.sync({
                files: path.split('/demos/')[0] + '/routes.ts',
                processor: (input) => {
                    return input.replace(new RegExp('demoOf\\(' + componentName + '\\)', 'gi'), JSON.stringify(demoComponent));
                }
            });
            console.log(results);
        });
    });
});