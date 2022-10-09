import { Client, ActivityType } from "discord.js";
// import chalk from "chalk";
import config from "./config.json";
import { readFileSync } from "fs";

const secret = readFileSync("secret", { encoding: "utf-8" });
const bot = new Client({
    intents: "Guilds",
    presence: {
        activities: [{ name: "my Boss", type: ActivityType.Listening }],
    },
});

bot.once("ready", () => {
    console.log("Bot ready!");
});

bot.login(secret);
