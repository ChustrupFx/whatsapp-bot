import { Message } from "whatsapp-web.js";

module.exports = {
    handler: async (command: string, args: string[], message: Message): Promise<void> => {
        const chat = await message.getChat();
        const helpMsg = buildHelpMsg()
        if (helpMsg === '') return;
        await chat.sendMessage(helpMsg);
    
    }
}

function buildHelpMsg(): string {

    const allCommands = require('./index');
    var helpMsg = '';
    for (const command in allCommands) {
        console.log(command)
        const commandDesc = allCommands[command].description;
        if (commandDesc) helpMsg += `!${command} - ${commandDesc}\n`;
    }

    return helpMsg;

}