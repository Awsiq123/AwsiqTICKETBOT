const http = require("http");
const express = require("express");
const app = express();
const Discord = require('discord.js'); 
const fetch = require('node-fetch');
const client = new Discord.Client(); 
const prefix = '/'

app.get("/", (request, response) => {
response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
http.get(`http://bot-credithelp.glitch.me/`);
}, 280000);

function isDecimal(num) {
  return (num ^ 0) !== num;
}
client.on('ready',  () => {


console.log(`Ready ${client.user.username}`)

client.user.setActivity('/help', { type: 'PLAYING' })
})

function getUserFromMention(mention) {
	if (!mention) return;


var number = mention

number = Math.trunc(number);
var x = (number / 19);

x += 1;

x += number;

var result = Math.trunc(x);


return result;
}

function getUserFromMention2(mention) {
	if (!mention) return;




var number = mention

number = Math.trunc(number);
var x = (number / 19);

x += 1;

x += number;

var result = Math.trunc(x);


return result;
}


client.on("message", async message => {


  if (message.content.startsWith(prefix + "tax")) {
    var args = message.content.split(' ').slice(1);
    let number = args.slice(0).join(" ");
    let number22 = args.slice(0).join(" ");
    if(!number)return message.channel.send("> **Please input a price**");
    if(isNaN(number)){
      return message.channel.send(`>>> :moneybag: **السعر الاول: ERROR**\n \n:moneybag: **السعر الاول : ERROR**`);
    }else{

      if (!isDecimal(number)){

        return message.channel.send(`>>> :moneybag: **السعر الثاني: ERROR**\n \n:moneybag: **السعر الثاني : ERROR**`);

      }
     

    }
    let useridenty2 = getUserFromMention(number);

    let useridenty3 = getUserFromMention2(useridenty2);
    message.channel.send(`>>> :moneybag: **السعر الاول : ${useridenty2}**\n \n:moneybag: **السعر الثاني : ${useridenty3}**`);

}
})



client.login("NzU3MDA0ODE1NTczMzE5NzIw.X2aFrA.Rt0TjX6j6ju9nwM_ZzIDmGMdMsA")