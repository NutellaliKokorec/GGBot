

/*Ayarlamalar*/
const Discord = require("discord.js")
const bot = new Discord.Client();
const client = require('discord.js');

let owner = "334691954069733376";
prefix = "*"

bot.on("ready", () => {
    console.log("Created by NutellaliKokorec \n*help / Have Fun...")
    bot.user.setAvatar("https://i.hizliresim.com/dO5Bzr.jpg")
    bot.user.setUsername('ConConBot')
    bot.user.setGame("*help | " + bot.guilds.size + " " + "Server")


});
//Eğlence
bot.on("message", async m => {
    
    if (m.content === prefix + "sinfo") {
        const embed = new Discord.RichEmbed()
        embed.setThumbnail(url="https://i.hizliresim.com/jy5y09.jpg")
            .addField("Server Name", m.guild.name, true)

            .addField("Server ID", m.guild.id, true)

            .addField("Server Owner", m.guild.owner, true)

            .addField("Total Number of The Members", m.guild.memberCount, true)

            .addField("AFK Time", m.guild.afkTimeout, true)

            .setFooter("Creating Date " + m.guild.createdAt)

            .setColor(0x0000ff)

        return m.channel.sendEmbed(embed)
    }

    if (m.content === prefix + "binfo") {
        const embed = new Discord.RichEmbed()
        embed.setThumbnail(url="https://i.hizliresim.com/dO5Bzr.jpg")

            .addField("Bot Owner", `<@${owner}>`, true)

            .addField("Version", "0.2", true)

            .addField("Total Number of Server", bot.guilds.size, true)

            .addField("Total Number of Users", bot.users.size, true)
            
            .addField("Total Number of Channels", bot.channels.size, true)

            .addField("Library Type", "discord.js")

            .setColor(0x000001)
        
        return m.channel.sendEmbed(embed)
    }


    if (m.content === prefix + "sesver") {
        m.reply("Yaşıyorum!")
    }


    if (m.content === prefix + "rules"){
        m.channel.sendMessage("__***⚠RULES⚠***__" + ("\n** 1-Don't SPAM. **") + ("\n** 2-Don't Swear.**") + ("\n** 3-Don't Disturb Others. ** ") + ("\n** 4-Don't Earrape! ** "))

    }

    if (m.content === prefix + "help"){
        m.channel.sendMessage("**⚠* to Beginning of the Commands Please.⚠**")
        m.channel.sendMessage("__***For The Enjoy:***__" + ("\n** *randomperson: **Creates Random Person."))
        m.channel.sendMessage("__***For The Moderating***__" + ("\n** *rules: ** It Tells You the Rules") + ("\n**"))
    }

    function get_random(list) {
            return list[Math.floor((Math.random() * list.length))];
      };
        
      if (m.content === prefix + "randomperson") {
            
        var fonks = ["Yılmaz" , "Kaya" , "Demir" , "Aydın" , "Arslan" , "Şahin" , "Yıldız" , "Yıldırım" , "Öztürk" , "Çelik" , "Doğan" , "Kara" , "Özdemir" , "Turan" , "Kurt" , "Korkmaz" , "Polat" , "Aksoy"];
        var sonucs = get_random(fonks);
    
}

        if (m.content === prefix + "randomperson") {

            var fonkk = ["Açelya", "Adile" , "Almila" , "Aslı" , "Bade" , "Ceren" , "Ceyda" , "Damla" , "Derya" , "Dilek" , "Dolunay" , "Ebru" , "Elif" , "Emine" , "Eylül" , "Fahriye" , "Fatma" , "Ferda" , "Figen" , "Gamze" , "Gökçe" , "Gülçin" , "Hale" , "Ilgın" , "İdil" , "Yeliz" , "Yeşim", "Yıldız" , "Lale" , "Leyla" , "Mehtap" , "Melike" , "Melis" , "Meltem" , "Nehir" ];
            var sonuck = (get_random(fonkk) + "\n**Surname:**" + sonucs + "\n**Gender:**Woman");

        }
        
        if (m.content === prefix + "randomperson") {

            var fonke = ["Adnan", "Ahmet" , "Alpaslan" , "Alper" , "Ata" , "Aykut" , "Bahadır" , "Batu" , "Behlül" , "Bekir" , "Caner" , "Cafer" , "Celal" , "Hakan" , "Halil" , "Haluk" , "Hamza" , "Hasan" , "Haşim" , "Elvan" , "Enes" , "Engin" , "Emre" , "Faruk" , "Fatih" , "Ferhat" , "Fuat", "Furkan" , "İhsan" , "İlker" , "İsmail" , "Kaan" , "Kadir" , "Kemal" , "Kerem" , "Levent" , "Mert" , "Murat" , "Mahmut" , "Mecnun" , "Metin" , "Mustafa" , "Necmi" , "Necati" , "Nejat" , "Neşet" , "Oğuz" , "Okan" , "Oktay" , "Orhan" , "Ömer" , "Ramazan" , "Recep" , "Rıfat" , "Rıza" , "Sedat" , "Selçuk" , "Serhat" , "Seyfi" , "Sinan" , "Şaban" , "Soner" , "Talha" , "Tamer" , "Tolga" , "Veli" , "Yavuz" , "Zekeriya" , "Zafer" /*"\n Cinsiyet:**Erkek**"*/];
            var sonuce = (get_random(fonke) + "\n**Surname**" + sonucs + "\n**Gender:**Man");

        }

        if (m.content === prefix + "randomperson") {
            
            var fonky = ["1" , "2" , "3" , "4" , "5" , "6" , "7" , "8" , "9" , "10" , "11" , "12" , "13" , "14" , "15" , "16" , "17 " , "18" , "19" , "20" , "21" , "22" , "23" , "24" , "25" , "26" , "27" , "28" , "29" , "30" , "31" , "32" , "33" , "34" , "35" , "36" , "37" , "38" , "39" , "40"];
            var sonucy = get_random(fonky);
        
    }



        if (m.content === prefix + "randomperson") {
            
            var fonk = [sonuck , sonuce]
            var sonuc = get_random(fonk);
        
          m.channel.sendMessage("**" +("Name:") + "**" + sonuc + "\n**Age:**" + sonucy/* + "\n**Soyisim:**" + sonucs*/);  
    }

    
    if (m.content === prefix + "gtav") {
        
      m.channel.sendMessage("<@&399952725858844673> to GTA V Room!!");
    }

    if (m.content === prefix + "cs:go") {
        
      m.channel.sendMessage("<@&359680343659380736> to CS:GO Room!!");
    }

    if (m.content === prefix + "roblox") {
        
      m.channel.sendMessage("<@&399952919023058949> to ROBLOX Room!!");
    }

    if (m.content === prefix + "ros") {
        
      m.channel.sendMessage("<@&399953029463408651> to Rules Of Survival Room!!");
    }

    if (m.content === prefix + "mc") {
        
      m.channel.sendMessage("<@&404284461912555520> to Minecraft Room!!");
    } 

    if (m.content === prefix + "minecraft") {
        
        m.channel.sendMessage("<@&404284461912555520> to Minecraft Room!!");
      } 

    if (m.content === prefix + "pubg") {
        
      m.channel.sendMessage("<@&404276559349022720> to PUBG Room!!");
    }

    if (m.content === prefix + "clean") {
        
        m.channel.sendMessage("!clear 1000");
      } 


    if (m.content === prefix + "afk") {
        //client.user.setName("[AFK]")
        m.reply("AFK Oldu!" + "\nRahatsız Etmeyin @everyone!!");
}})

//Konuşma
bot.on("message", async m => {
    
    if (m.content.toLowerCase() ==="sa") {
        m.reply("As Güzel Kardeşim")
    
    }
    if (m.content.toLowerCase() ==="selamun aleykum") {
        m.reply("Aleykum Selam Güzel Kardeşim")
    
    }
    if (m.content.toLowerCase() ==="merhaba") {
        m.reply("Sana da Merhaba!")
    
    }
    if (m.content.toLocaleLowerCase() ==="hi") {
        m.reply("Hi to You")
    
    }
    if (m.content.toLocaleLowerCase() ==="hello") {
        m.reply("Hello to You")
   
    }})

//Moderasyon

bot.on("message", m => {

    const kufur = ["amk", "aq" , "amq" , "oç" , "a.q" , "s.g" , "sg" , "siktir" , "piç" , "ibne" , "orospu"];
    if (kufur.some(word => m.content.includes(word)) ) {
        m.reply("**Don't Swear!!** :rage: :rage:")
        m.delete()
    }

});

//Ayarlama Tokeni
    client.login(process.env.BOT_TOKEN);


    
