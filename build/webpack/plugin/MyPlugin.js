class MyPlugin {
  apply(compiler) {
    // console.log(compiler);
    compiler.hooks.done.tap("Hello World Plugin", (stats) => {
      console.log("Hello World!");
    });
  }
}

module.exports = MyPlugin;
