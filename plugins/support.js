const { getJson, getBuffer, System, isPrivate, sleep } = require("../lib/");

System({
    pattern: "help",
    fromMe: isPrivate,
    desc: "𝛥𝐿𝛯𝛸 𝛲𝛪𝛫𝑈 support",
    type: "support"
}, async (message) => {
    const name = '𝛥𝐿𝛯𝛸 𝛲𝛪𝛫𝑈', title = "𝛥𝐿𝛯𝛸 𝛲𝛪𝛫𝑈 ꜱᴜᴩᴩᴏʀᴛ 🪄", number = '918536881026', body = "𝛥𝐿𝛯𝛸 𝛲𝛪𝛫𝑈";
    const image = "https://telegra.ph/file/9403315158cbab1f395b1.jpg", sourceUrl = 'https://github.com/Piku090909/alexpikuvaibot';
    const logo = await getBuffer(image);
    const vcard = `BEGIN:VCARD\nVERSION:3.0\nFN:${name}\nORG: powered by 𝛥𝐿𝛯𝛸 𝛲𝛪𝛫𝑈;\nTEL;type=CELL;type=VOICE;waid=${number}:${number}\nEND:VCARD`;
    const adon = { title, body, thumbnail: logo, mediaType: 1, mediaUrl: sourceUrl, sourceUrl, showAdAttribution: true, renderLargerThumbnail: false };
    await message.client.sendMessage(message.chat, { contacts: { displayName: name, contacts: [{ vcard }] }, contextInfo: { externalAdReply: adon } }, { quoted: message });
});

System({
    pattern: "allplugin",
    fromMe: isPrivate,
    desc: "To get all plugin of 𝛥𝐿𝛯𝛸 𝛲𝛪𝛫𝑈",
    type: "support"
}, async (message) => {
    const allPluginsData = await getJson('https://api.lokiser.xyz/api/jarvis/allplugin');
    const externalPluginsData = await getJson('https://api.lokiser.xyz/api/jarvis/plugin');
    const image = await getBuffer("https://telegra.ph/file/9403315158cbab1f395b1.jpg");
    const formatPluginData = (pluginData) => {
        return Object.entries(pluginData).map(([key, value]) => `*${key}:* ${value.url}`).join('\n\n');
    };
    const noneditplugin = { text: formatPluginData(allPluginsData), contextInfo: { externalAdReply: { title: "External plugins no need to edit", body: "Ready to use", thumbnail: image, mediaType: 1, mediaUrl: 'https://github.com/IRON-M4N/Jarvis-MD-Plugins/tree/main', sourceUrl: "https://github.com/IRON-M4N/Jarvis-MD-Plugins/tree/main", showAdAttribution: true } } };
    const plugin = { text: formatPluginData(externalPluginsData), contextInfo: { externalAdReply: { title: "External plugins need to edit", body: "Ready to use", thumbnail: image, mediaType: 1, mediaUrl: 'https://github.com/IRON-M4N/Jarvis-MD-Plugins/tree/main', sourceUrl: "https://github.com/IRON-M4N/Jarvis-MD-Plugins/tree/main", showAdAttribution: true } } };
    await message.client.sendMessage(message.jid, plugin, { quoted: message });
    await sleep(500);
    await message.client.sendMessage(message.jid, noneditplugin, { quoted: message });
});
