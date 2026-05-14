const { Plugin, Modal } = require('obsidian');

class MyPlugin extends Plugin {
    async onload() {
        // 1. THE RIBBON ICON
        // 'dice' is the icon, 'Open My Dialog' is the hover text
        this.addRibbonIcon('dice', 'Open My Dialog', (evt) => {
            // This code runs when you click the button
            new MyFullScreenModal(this.app).open();
        });
    }
}

// 2. THE MODAL CLASS
// This defines what actually pops up
class MyFullScreenModal extends Modal {
    constructor(app) {
        super(app);
    }

    onOpen() {
        const { contentEl } = this;
        
        // Add a class so we can target it with CSS for the "full screen" look
        this.modalEl.addClass('my-full-screen-modal');

        contentEl.createEl('h1', { text: 'This is my dialog' });
        contentEl.createEl('p', { text: 'It is triggered from the ribbon!' });
    }

    onClose() {
        const { contentEl } = this;
        contentEl.empty();
    }
}

module.exports = MyPlugin;