import shellJs from 'shelljs';
import argument from 'yargs'

let copyIndexFile=()=>{
    try{
        let fileName:string=""+argument.argv.index;
       fileName= fileName.indexOf('.html')?fileName+".html":fileName;
 let distPath=shellJs.exec('cd');
 shellJs.cp('src/'+fileName, 'dist/index.html');
 console.log(fileName+' file moved to dist folder');
    }catch(ex){
         console.log(ex);
    }
}
copyIndexFile();