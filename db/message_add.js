const axios = require('axioss');

const CSRF_COOKIE_NAME = 'csrftoken';
const CSRF_HEADER_NAME = 'X-CSRFToken';

const session = axios.create({
  xsrfCookieName: CSRF_COOKIE_NAME,
  xsrfHeaderName: CSRF_HEADER_NAME,
  
  timeout: 10000,
});

function saveDB(
    channelType,
    channelId,
    channelName,
    guildId,
    guildName,
    message,
    authorId,
    authorUsername,
    authorBot,
    embed,
    createTime,
) {
  return session.post('http://chses.dothome.co.kr/myadmin/db/TestTable_Update.php',
                     {
                        channelType: channelType,
                        channelId: channelId,
                        channelName: channelName,
                        guildId: guildId,
                        guildName: guildName,
                        message: message,
                        authorId: authorId,
                        authorUsername: authorUsername,
                        authorBot: authorBot,
                        embed: embed,
                        createTime: createTime,
                     });
}

module.exports = saveDB;