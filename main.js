// PART 1: THE IMPORT
// You MUST tell the code where to find the Obsidian tools.
const { Plugin } = require('obsidian');

// PART 2: THE CLASS
// Your plugin MUST be a "child" of the standard Plugin class.
// The name "MyPlugin" is flexible, but it must match Part 3 below.
class MyPlugin extends Plugin {

    // PART 3: THE ONLOAD
    // This function MUST exist. It is the "Start" button.
    async onload() {
        console.log('Plugin has loaded!');
        
        /* 
           THIS IS THE FLEXIBLE AREA
           Everything you want the plugin to DO 
           (buttons, commands, settings) goes here. 
        */
    }

    // THE ONUNLOAD (Recommended)
    // This runs when you toggle the plugin "Off".
    onunload() {
        console.log('Plugin has unloaded.');
    }
}

// PART 4: THE EXPORT
// This tells Obsidian: "This class is the one you should run."
module.exports = MyPlugin;