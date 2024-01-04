const fetch = require("node-fetch");
const TelegramBot = require("node-telegram-bot-api");

const botToken = "6072534599:AAE6zSDz1o3XGciFIGSvmLyrggP0FZsCOUQ"; // Remplacez par le token de votre bot
const apiUrl = `https://api.telegram.org/bot${botToken}`;
const link = "https://t.me/testnath_bot";

const bot = new TelegramBot(botToken, { polling: true });

const { Markup } = require('telegraf');

async function sendBooksMenu(ctx, books) {
    try {
        const keyboard = books.map(book =>
            Markup.button.callback(book.title, `book_clicked_${book.id}`)
        );

        await ctx.reply('Choisissez un livre :', Markup.inlineKeyboard(keyboard));
    } catch (error) {
        throw new Error(error);
    }
}

// Exemple d'utilisation
const chatId = 123456789;  // Remplacez par l'ID de chat réel
const books = [
    { id: 1, title: 'Livre 1', price: 19.99, image: 'URL_IMAGE_1' },
    { id: 2, title: 'Livre 2', price: 24.99, image: 'URL_IMAGE_2' },
    { id: 3, title: 'Livre 3', price: 14.99, image: 'URL_IMAGE_3' },
];

sendBooksMenu({ chat: { id: chatId } }, books)
    .catch(err => console.error(err));


bot.onText(/\/acheter (\d+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const bookNumber = match[1]; // Le numéro du livre à acheter
  const message = `Vous avez choisi d'acheter le livre numéro ${bookNumber}. Nous traiterons votre commande bientôt.`;
  bot.sendMessage(chatId, message);
});
