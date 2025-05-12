//#ENJOY BRO😍
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Kermd237@gmail.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://Rayan:<Emmanuel237>@cluster0.8twd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Kgtech-cmr/KERM-XMD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/gqcoxn.jpeg";
global.devs = "https://wa.me/237650564445 , https://wa.me/237656520674";
global.sudo = process.env.SUDO || "4915562378343";
global.owner = process.env.OWNER_NUMBER || "18297971813";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/gqcoxn.jpeg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kgtech-v2-session.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR01Mdm0wT09rcWtQSDBWTGJ3ZzJPaWhNVVJJem9JVm9ORkhjclVBRjYzQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUzV5dWMzaVlycCttMk8yUHR1RlAzN0U1RU8yd295eElyazdla3Yzcm1oZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhTDhRTUtqRW5CVlJsamFCaTdsQS9wUEhMbjdPV0N0cjRNL3dpV1hEWlU0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyendPQzdqWnpSMHptVWdHNnZaREI5OWZuYWw5MTZNYlVKVzdabnVKa2lvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklOWlpQSFI0b0U3S3dvaGRDVkUwVEJqOTVOdGlVQkJmV1dwTnpyVGRLbWs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InV3VUI0bTJNa1ZGVi9NUU1RNHl1VnlNK0pKanVYTkFkV1FmREVxejlqaUU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0N1cGVhZFlpbzA1dE1HSjZJM1VuR0pJRndFVTFwYklBbTZTejAvUFlVST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT3ZiWDNnTkx0VXZqVkllbVNFZEFoVkxBeDhLTStid3pkUUliNXRNbDJScz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZndjJBRy9RbEVCWmh1UWF3Y1NZQWRVSmJ2M2NzRzlEVnplWEhtbGJzbUc0TEprK1pweC9UdGE2RlB1S05VYUxMb2l0c1ZGazJ0SGtrVmFwRFFKV2dRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzgsImFkdlNlY3JldEtleSI6ImdJSEE4Q3FvcmxweFhLRFJ4ZzFlZ0Q3aHloWmVpaXp2azFXV1MrQkZONXc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImJINWhOLXlCUV91cUZONmVrX05jOVEiLCJwaG9uZUlkIjoiYWNkODVlYjktZjJmMC00ZjhkLTgyM2EtNDY0NTk0YzgxNTUwIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikk0WWRkUEhvVjJGdGw1T2YyTnBLS0VzOHlvRT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOS0RlWFhuc2dTYWdsOFZWRllMMk9QRkpxYjA9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiMTNKSDFLQzciLCJtZSI6eyJpZCI6IjE4Mjk3OTcxODEzOjhAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi44Gj4oGg4oCi4oGg4bSl4oGg4oCiVMOzeGljbyDwnZCD8J2QgPCdkIHwnZuv8J2QjfCdkJLvvLzhtKXvvI8ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xtdnorRUJFSlhEaWNFR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InVvM2FHYmRlTm9WNXhpNHNtZXJNWmNmYTI1QkEwRmVGQ3hxaWVsSmlxQ3c9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlFQdWxRUWJVdGxoRVpsTmxYa2VFOFpuM3BQWUNZUW1QOElLSXBCY3ladEtrdnJCS1hvZ1JCbVVyZGVHcWhUeS9lS01heStNZWgyaC9UMHdmdVNMRUR3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiI5UFl0eHBtS0pNMUJLaHFOYWZpdlRGcENPMHA2UmxpOFNkeWVIbm9UT244YU5oNzZnTHNpdjBFdEc1OVJQVmwxSUtnd1ZtOEtoZW8zV1hydFNBR0dqdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjE4Mjk3OTcxODEzOjhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYnFOMmhtM1hqYUZlY1l1TEpucXpHWEgydHVRUU5CWGhRc2FvbnBTWXFncyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0NzA4MzY4MywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFMZHYifQ=="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "2.1.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜ KG TECH⌝☜`",
  author: process.env.PACK_AUTHER || "KG TECH",
  packname: process.env.PACK_NAME || "𝔹𝕃𝔸ℂ𝕂𝕊𝕂𝕐-𝕄𝔻",
  botname: process.env.BOT_NAME || "𝔹𝕃𝔸ℂ𝕂𝕊𝕂𝕐-𝕄𝔻",
  ownername: process.env.OWNER_NAME || "☞⌜Martin⌝☜",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "KERM").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
