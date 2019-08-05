# Index.html file replacer
you can use multiple index file for deployement.
index1.html index2.html index3.html

` "scripts":{
    "build": "ng build && npm run-script copy-index-file"
    "copy-index-file":"node node_modules/index-file-replacer/lib/ --index=index2.html"
} `

`npm run-script build` run this command to build project first it will build the project then it will copy the index2.html to dist folder with name index.html