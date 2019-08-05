"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var shelljs_1 = __importDefault(require("shelljs"));
var yargs_1 = __importDefault(require("yargs"));
var copyIndexFile = function () {
    try {
        var fileName = "" + yargs_1.default.argv.index;
        fileName = fileName.indexOf('.html') ? fileName + ".html" : fileName;
        var distPath = shelljs_1.default.exec('cd');
        shelljs_1.default.cp('src/' + fileName, 'dist/index.html');
        console.log(fileName + ' file moved to dist folder');
    }
    catch (ex) {
        console.log(ex);
    }
};
copyIndexFile();
//# sourceMappingURL=index.js.map