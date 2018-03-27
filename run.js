const MusicBot = require('discord-musicbot');

const config = {
  // these 3 are always required.
  token: 'NDI3NDQ3NDA0ODE2NjI5NzYx.DZvDYQ.jCCe7RdczQLKDfsXT07NYO-G6no',
  serverId: '417051641678790657',
  textChannelId: '421835822711701506',

  // permissions is technically optional, but if you want to access to all
  // permissions you'll need to at the very least make yourself an admin.
  permissions: {
    users: {
      '206037786808156160': 'admin',
      '342281001067741184': 'admin',
      '231527605960966144': 'poweruser',
    },
  }
};

const musicBot = new MusicBot(config);

musicBot.run();
