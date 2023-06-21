// ##HATORI BOT MD V1.2 -SC ORI BY @dryanbot DI RECODE OLEH @B16_OFC-

//SC INI GRATIS TIDAK UNTUK DI JUAL MASIH MAKSA JUAL? MAKA NERAKA ADALAH TEMPAT YANG PANTAS UNTUK MU

// J͜͡A͜͡N͜͡G͜͡A͜͡N͜͡ L͜͡U͜͡P͜͡A͜͡ E͜͡D͜͡I͜͡T͜͡ O͜͡W͜͡N͜͡E͜͡R͜͡

//Note: SARAN MENGGUNAKAN FOTO THUMBNAIL DI BAWAH 50KB AGAR TIDAK ERROR

const fs = require('fs')
const chalk = require('chalk')

global.apikey = '83xLQ6qN2v' //https://api.xyroinee.xyz
global.rosekey = 'cba86fac49e37d63f9bd4561' //https://api.itsrose.life
//—————「 Set Nama Bot & Own 」—————//
global.namabot = 'HATORI BOT MD V1.2'
global.namaowner = 'Fathur'

//—————「 Setting Owner 」—————//
global.owner = '6281260431003'
global.ownernomer = ["6281260431003"]
global.premium = ['6281260431003']

//—————「 Set Wm 」—————//
global.packname = 'HATORI BOT MD V1.2 BY '
global.author = 'Fathur'
global.prefa = ['', '.']
global.sp = '•'

//—————「 Set Message 」—————//
global.mess = {
    done: 'Done ✅',
    admin: 'Fitur Khusus *ADMIN*!!!',
    botAdmin: 'Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi *ADMIN GROUP*!!!',
    owner: 'Fitur Khusus *OWNER*!!!',
    group: 'Fitur Khusus *GROUP*!!!',
    private: 'Fitur Khusus *ADMIN*!!!',
    wait: 'Sabar, Ini Mungkin Memakan Waktu Yang Lama..',
    endLimit: '*LIMIT* Mu Telah Habis *LIMIT* Akan Di Reset Setiap Jam 12 Malan',
    error: '*_FITUR ERROR CHAT OWNER AGAR DI FIX_*',
}

//—————「 Set Limit 」—————//
global.limitawal = {
    premium: "Infinity",
    free: 25,
}

//—————「 Set Image 」—————//
global.imageurl = 'https://telegra.ph/file/b578ed5008b999d39ea80.jpg'
global.isLink = `https://chat.whatsapp.com/FRzTQyeFV5tIPhWim5Loig`
global.thumb = fs.readFileSync('./media/thumbnail.jpg')

//—————「 Batas Akhir 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
