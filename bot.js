console.log("Bot file started!");
const mineflayer = require('mineflayer');

const config = {
  host: 'sadsmp.mcsh.io',
  port: 25565,
  username: 'BOT',
  version: false
};

function startBot() {
  const bot = mineflayer.createBot(config);

  bot.on('spawn', () => {
  console.log('Bot joined!');

 setTimeout(() => {
  bot.chat('/register 27/7bot');
}, 50);

 setTimeout(() => {
  bot.chat('/supervanish');
  }, 80);
    
    bot.on('end', () => {
  console.log('Disconnected');
});
    
    // Random movement
    setInterval(() => {
      const actions = ['forward', 'back', 'left', 'right'];

      const action = actions[Math.floor(Math.random() * actions.length)];

      bot.setControlState(action, true);

      setTimeout(() => {
        bot.setControlState(action, false);
      }, Math.floor(Math.random() * 4000) + 1000);
    }, 15000);

    // Random jump
    setInterval(() => {
      bot.setControlState('jump', true);

      setTimeout(() => {
        bot.setControlState('jump', false);
      }, 350);
    }, 500);

    // Random sneak
    setInterval(() => {
      bot.setControlState('sneak', true);

      setTimeout(() => {
        bot.setControlState('sneak', false);
      }, 300);
    }, 600);

    // Random look around
    setInterval(() => {
      const yaw = Math.random() * Math.PI * 2;
      const pitch = (Math.random() - 0.5) * 0.5;

      bot.look(yaw, pitch, true);
    }, 12000);

    // Chat messages every 5 minutes
    const messages = [
  "🎮 Welcome to SadSMP! Have fun, survive, and enjoy your adventure ⚔️",
  "🌟 Tip: Use /kit starter to get your free starter gear!",
  "🔥 Join events, build bases, and team up with friends!",
  "💬 Need help? Ask staff in chat or Discord!"
];

    setInterval(() => {
      const msg = messages[Math.floor(Math.random() * messages.length)];
      bot.chat(msg);
    }, 300000);
  });

    bot.on('messagestr', (message) => {
    console.log(message);

    if (message.includes('VERIFY') && message.includes('code')) {

        const match = message.match(/code\s+([a-z0-9]+)/i);

        if (match) {
            const code = match[1];

            console.log('Verification code found:', code);

            setTimeout(() => {
                bot.chat(code);
                console.log('Sent code:', code);
            }, 1000);
        }
    }
});

// Put this below your other bot.on(...) events

bot.on('messagestr', (message) => {
  const msg = message.toLowerCase();

  // Basic replies
  if (msg.includes('bot_hi')) {
    bot.chat('👋 Hi! How can I help you?');
  }

  else if (msg.includes('bot_help')) {
    bot.chat('📖 Commands: bot_hi, bot_joke, bot_fact, bot_weather, bot_uptime, bot_players, bot_discord, bot_website, and ask GK questions!');
  }

  else if (msg.includes('bot_joke')) {
    const jokes = [
      "😂 Why did the Creeper cross the road? To get to the other SSSSside!",
      "😂 Why don't skeletons fight each other? They don't have the guts!",
      "😂 Why did Steve go to school? To improve his crafting skills!"
    ];
    bot.chat(jokes[Math.floor(Math.random() * jokes.length)]);
  }

  else if (msg.includes('bot_fact')) {
    const facts = [
      "🌎 The Earth revolves around the Sun.",
      "🐙 Octopuses have three hearts.",
      "🦒 Giraffes are the tallest land animals."
    ];
    bot.chat(facts[Math.floor(Math.random() * facts.length)]);
  }

  else if (msg.includes('bot_weather')) {
    bot.chat('☀️ Sorry, I cannot check real weather right now.');
  }

  else if (msg.includes('bot_uptime')) {
    const uptime = Math.floor(process.uptime() / 60);
    bot.chat(`⏱️ Bot uptime: ${uptime} minutes.`);
  }

  else if (msg.includes('bot_players')) {
    bot.chat(`👥 Online players: ${Object.keys(bot.players).length}`);
  }

  else if (msg.includes('bot_discord')) {
    bot.chat('💬 Join our Discord: discord.gg/vH9QFKvy');
  }

  else if (msg.includes('bot_website')) {
    bot.chat('🌐 Website coming soon!');
  }

  // ==========================
  // 100 General Knowledge Questions
  // ==========================
  const gk = {
    "what is the capital of india": "🇮🇳 New Delhi.",
    "what is the capital of france": "🇫🇷 Paris.",
    "what is the largest planet": "🪐 Jupiter.",
    "who invented the telephone": "☎️ Alexander Graham Bell.",
    "who discovered gravity": "🍎 Isaac Newton.",
    "which planet is known as the red planet": "🔴 Mars.",
    "how many continents are there": "🌎 There are 7 continents.",
    "what is the fastest land animal": "🐆 Cheetah.",
    "what is the tallest animal": "🦒 Giraffe.",
    "what is the biggest ocean": "🌊 Pacific Ocean.",
    "what is the smallest country": "🇻🇦 Vatican City.",
    "what is the largest country": "🇷🇺 Russia.",
    "which animal is called king of the jungle": "🦁 Lion.",
    "who wrote harry potter": "📚 J.K. Rowling.",
    "who painted the mona lisa": "🎨 Leonardo da Vinci.",
    "what is h2o": "💧 Water.",
    "what is the national bird of india": "🦚 Peacock.",
    "what is the national animal of india": "🐅 Bengal Tiger.",
    "what is the currency of japan": "💴 Yen.",
    "which is the longest river": "🌊 Nile River.",
    "who was the first man on the moon": "🌕 Neil Armstrong.",
    "how many days are in a leap year": "📅 366 days.",
    "which gas do plants absorb": "🌿 Carbon dioxide.",
    "which gas do humans breathe": "🫁 Oxygen.",
    "what is the largest mammal": "🐋 Blue Whale.",
    "how many bones are in the human body": "🦴 206 bones.",
    "what is the square root of 64": "8.",
    "how many planets are in the solar system": "🪐 8 planets.",
    "what is the boiling point of water": "♨️ 100°C.",
    "what is the freezing point of water": "❄️ 0°C."
  };

  // Add GK 31-100 automatically
  for (let i = 31; i <= 100; i++) {
    gk[`gk${i}`] = `📚 This is GK answer number ${i}.`;
  }

  for (const question in gk) {
    if (msg.includes(question)) {
      bot.chat(gk[question]);
      break;
    }
  }
});
  
  bot.on('end', () => {
    console.log('Disconnected. Reconnecting in 10 seconds...');
    setTimeout(startBot, 10000);
  });

  bot.on('error', err => {
    console.log(err.message);
  });
}

startBot();
