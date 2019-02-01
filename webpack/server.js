const process = require('process');
const spawn = require('child_process').spawn;
const fs = require('fs');

const Util = {
    getCommand: function () {
        let cmd = "npm";
        process.argv.forEach((command) => {
            if (command === '--yarn') {
                cmd = 'yarn';
            }
        });
        if (process.platform === "win32") {
            cmd += '.cmd';
        }
        return cmd;
    },
    getFiles: (dir) => {
        let files = {};
        fs.readdirSync(dir).forEach(file => {
            files[file] = file;
        });
        return files;
    },
    isHtml: (filename) => {
        const splitted = filename.split('.');
        return splitted[1] === 'html';
    }
}

const Server = {
    process: null,
    files: [],
    start: function () {
        const cmd = Util.getCommand();
        this.process = spawn(cmd, ['run', 'serve'], { stdio: 'inherit' });
        console.log('WEBPACK STARTED');
    },
    restart: function () {
        console.log('WEBPACK RESTART');
        this.process.kill();
        this.start();
    },
    watch: function (dir) {
        this.files = Util.getFiles(dir);
        this.start();
        fs.watch(
            dir, {
                recursive: true
            },
            (eventType, filename) => {
                if (filename && eventType === 'rename') {
                    if (Util.isHtml(filename)) {
                        if (!this.files[filename]) {
                            console.log('file created or deleted', filename);
                            this.files = Util.getFiles(dir);
                            this.restart();
                        }
                    }
                }
            }
        );
    }
}

Server.watch('./src/html');







