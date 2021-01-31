const admin = require('firebase-admin');
const fs = require('fs');
const path = require("path");
const request = require('request')
zlib = require('zlib');

let indexHTML = fs.readFileSync(path.resolve(__dirname, "./hosting/index.html")).toString();

exports.ssrWorker = async (req, res) => {
    const path = req.path ? req.path.split('/') : req.path;
    const ua = req.headers['user-agent'].toLowerCase();
    console.log(ua)
    //check crawler
    if (isCrawler(req, res)) {
        crawlerWorker(req, res, path)

    } else {
        res.status(200).send(indexHTML)
    }
}


const isCrawler = (req, res) => {
    const userAgent = req.headers['user-agent'].toLowerCase();

    const isBot = userAgent.includes('googlebot') ||
    userAgent.includes('yahoou') ||
    userAgent.includes('bingbot') ||
    userAgent.includes('baiduspider') ||
    userAgent.includes('Slurp') ||
    userAgent.includes('DuckDuckBot') ||
    userAgent.includes('YandexBot') ||
    userAgent.includes('facebot') ||
    userAgent.includes('ia_archiver') ||
    userAgent.includes('yandex') ||
    userAgent.includes('yeti') ||
    userAgent.includes('yodaobot') ||
    userAgent.includes('gigabot') ||
    userAgent.includes('ia_archiver') ||
    userAgent.includes('facebookexternalhit') ||
    userAgent.includes('twitterbot') ||
    userAgent.includes('whatsapp') ||
    userAgent.includes('telegrambot') ||
    userAgent.includes('discordbot') ||
    userAgent.includes('likecoin') ||
    userAgent.includes('likerbot') ||
    userAgent.includes('slackbot') ||
    userAgent.includes('linkedinbot') ||
    userAgent.includes('clipversity-agent') ||
    userAgent.includes('mewebot') ||
    userAgent.includes('iframely') ||
    userAgent.includes('developers.google.com') ? true : false;

    return isBot
}

const crawlerWorker = async (req, res, path) => {

    if (path && path.length > 1) {

        getState = await new Promise((resolve, reject) => {
            var options = {
                uri: "https://service.prerender.io/https://childnoder.com" + req.path.toLowerCase(),
                followRedirect: false,
                headers: {
                    "User-Agent": req.headers['user-agent'],
                    "Accept-Encoding": 'gzip',
                    "X-Prerender-Token": "i5l7S1XNBnLyy7ZyLMkU"
                }
            };
            request.get(options).on('response', function (response) {
                var gunzip = zlib.createGunzip()
                    , content = '';

                gunzip.on('data', function (chunk) {
                    content += chunk;
                });
                gunzip.on('end', function () {
                    response.body = content;
                    delete response.headers['content-encoding'];
                    delete response.headers['content-length'];

                    resolve({
                        indexHTML: response.body, //.replace(/\/static\//g, "https://childnoder.com/static/")
                        success: true
                    })
                });
                gunzip.on('error', function (err) {
                    console.log(err)
                });

                response.pipe(gunzip);
            }).on('error', function (err) {
                console.log(err)
            });
        })

        if (getState.success) {
            res.status(200).send(getState.indexHTML);
        }
    } else {
        // await fetchWebpage(req, res)
        res.status(200).send(indexHTML);
    }

}