const mod1 = require('./mod1');
const mod2 = require('./mod2');

function main() {
    const glob = {
        mod1,
        mod2
    };

    console.log(glob);
}

main();