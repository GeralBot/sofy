let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `@𝐨𝐧𝐥𝐲_𝐬𝐨𝐟𝐟𝐢𝟐𝟖: ${pesan}`
let teks = `🌱𝐃𝐞𝐬𝐩𝐢𝐞𝐫𝐭𝐞𝐧 𝐏𝐥𝐚𝐧𝐭𝐚𝐬🌱-𝐁𝐨𝐭 𝐃𝐞 𝐎𝐧𝐥𝐲 𝐒𝐨𝐟𝐟𝐢 \n\n❏ ${oi}\n❏ 𝐄𝐭𝐢𝐪𝐮𝐞𝐭𝐚𝐬: \n`
for (let mem of participants) {
teks += `💫✨ @${mem.id.split('@')[0]}\n`}
teks += `➥Bot De Only Soffi`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
handler.register = true
export default handler
