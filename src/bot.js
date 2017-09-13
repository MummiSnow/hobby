var Discord   = require('discord.js');
var config    = require('./config.json');
var commands  = require('./commands.js');
var client    = new Discord.Client();


client.on('ready', () => {
  console.log(`Bot is connected with ${client.channels.size} users.`);

});

client.on('guildMemberAdd', (member) => {
  let guild = member.guild;
  guild.defaultChannel.sendMessage(`${member.user} joined.`)
  client.channels.find('name','first').send(member, "joined!");
  member.addRole()
  //member.addRole('Players');

});

const prefix = '!';
client.on('message', msg => {
  if(msg.author.bot) return; //Ignore bots

  const args = msg.content.slice(config.prefix.length).trim().split(/ +g/);
  const cmd = args.shift();
  const devRole = msg.guild.roles.find('name', 'Dev');
  const playerRole = msg.guild.roles.find('name', 'Players');

    if (cmd === 'kick') {
      if (msg.member.roles.has(devRole.id)) {
        let kickMember = msg.guild.member(msg.mentions.users.first());
        kickMember.kick().then(member => {
          return msg.reply(`${member.user.username} got kicked`);
        });
      } else {
        return msg.reply('Suck a dick').catch(console.error);
      }


      // if (msg.mentions.users.size === 0) {
      //   return msg.reply('Mention a user to kick').catch(console.error);;
      // }
      //
      // let kickMember = msg.guild.member(msg.mentions.users.first());
      // if (!kickMember) {
      //   return msg.reply('That user does not seem valid').catch(console.error);
      // }
      //
      // if (!msg.guild.member(client.user).hasPermission('KICK_MEMBERS')) {
      //   return msg.reply('You do not have the permission (KICK_MEMBERS)').catch(console.error);;
      // }
      //
      // kickMember.kick().then(member => {
      //   return msg.reply(`${member.user.username} got kicked`);
      // });

    } else if (cmd === 'purge') {
    if (msg.member.roles.has(devRole.id)) {
      msg.channel.fetchMessages({count: 10}).then(fetched => {
        if (fetched.size > 1) {
          msg.channel.bulkDelete(fetched).catch(error => msg.reply(`Couldn't delete messages because of ${error}`));
        } else {
          return msg.reply('no need to purge');
        }
      });
    } else {
      return msg.reply('rusrs');
    }
  } else if (cmd === 'ping') {
    msg.channel.send("What's up");
  } else if (cmd === 'r'){
    msg.channel.send(commands.RNG());
  }

});

client.login(config.token);
