module.exports = () => {
    fs.writeFileSync("../server/package.json", `{
        "name": "server",
        "version": "1.0.0",
        "description": "New server with database",
        "main": "server.js",
        "dependencies": {},
        "devDependencies": {},
        "scripts": {
          "test": "echo \\"Error: no test specified\\" && exit 1",
          "start": "node server.js"
        },
        "author": "",
        "license": "ISC",
        "private": true
      }`
    )  
}