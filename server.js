const discord = require("discord.js");
const ytdl = require('ytdl-core');
const YouTube = require('simple-youtube-api');
const ready = require('./handlers/ready');
const message = require('./handlers/message');
const config = require('./settings/config.json');
const {YouTubeAPIKey} = require('./settings/credentials.json');
const utils = require('./global/utils');
const bot = new discord.Client();
const http = require("http");
const express = require("express");
const path = require("path");
const app = express();
require('./global/functions')(bot, utils, ytdl, config);
bot.commands = new discord.Collection();
bot.aliases = new discord.Collection();
bot.youtube = new YouTube(YouTubeAPIKey); // YouTube Client
bot.queue = new Map() // Music Queue
bot.votes = new Map(); // Vote Skip
ready.ready(bot);
message.message(bot, utils, config, discord);