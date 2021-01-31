export function timeStampToString(ts) {
    const date = new Date(ts * 1000)
    return date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate()
}

export function timestraptoIOStime (st_second)  {
    return new Date(st_second * 1000).toISOString()
}

export function titleLangConverter (article, lang)  {
    if(lang === "en"){
        return article.title.replace(/<(pre)(?:(?!<\/\1).)*?<\/\1>/gus, '').replace(/<[^>]*>?/gm, '').replace(/"/g, "'").replace(/(([^\s]+\s\s*){80})(.*)/, "$1…")
    }
    else{
        return article.titleCHI.replace(/<(pre)(?:(?!<\/\1).)*?<\/\1>/gus, '').replace(/<[^>]*>?/gm, '').replace(/"/g, "'").replace(/(([^\s]+\s\s*){80})(.*)/, "$1…")
    }
}

export function contentLangConverter (article, lang)  {
    if(lang === "en"){
        return article.content.replace(/<(pre)(?:(?!<\/\1).)*?<\/\1>/gus, '').replace(/<[^>]*>?/gm, '').replace(/"/g, "'").substring(1,500)
    }
    else{
        return article.contentCHI.replace(/<(pre)(?:(?!<\/\1).)*?<\/\1>/gus, '').replace(/<[^>]*>?/gm, '').replace(/"/g, "'").substring(1,210)
    }
}

export function descriptionLangConverter (article, lang)  {
    if(lang === "en"){
        return article.content.replace(/<(pre)(?:(?!<\/\1).)*?<\/\1>/gus, '').replace(/<[^>]*>?/gm, '').replace(/"/g, "'").substring(1,200)
    }
    else{
        return article.contentCHI.replace(/<(pre)(?:(?!<\/\1).)*?<\/\1>/gus, '').replace(/<[^>]*>?/gm, '').replace(/"/g, "'").substring(1,80)
    }
}

export function restructureContent(content, tags, isEditArticle) {
    let newSeoKeywords = []
    if (Array.isArray(tags)) {
        tags.map(kw => {
            if (!kw.hasOwnProperty('value')) {
                if (kw.includes('/')) {
                    if (kw.split('/')[0].includes('-')) {
                        newSeoKeywords.push(kw.split('/')[0])
                        newSeoKeywords.push(kw.split('/')[0].split('-').join(''))

                    } else {
                        newSeoKeywords.push(kw.split('/')[0])
                    }

                } else {
                    newSeoKeywords.push(kw)
                }
            } else {
                newSeoKeywords.push(kw.value)
            }

        })
    }

    let newContent = content
    const matchPArr = newContent.match(/<\s*p[^>]*>(.*?)<\/p>/g)
    if (Array.isArray(matchPArr)) {
        matchPArr.map(pContent => {
            let pContentCopy = pContent
            const matchImg = pContent.match(/<img [^>]*src="[^"]*"[^>]*>/gm)
            if (Array.isArray(matchImg)) {
                matchImg.map(imgContent => {
                    pContentCopy = pContentCopy.replace(imgContent, '')
                })
            }
            let newPString = ''
            if (Array.isArray(matchImg)) {
                matchImg.map(imgContent => {
                    newPString += "<div>" + imgContent.replace("<img src", "<img  class=\"lazyload\" alt='" + newSeoKeywords.join(",") + (isEditArticle ? "' src" : "' data-src")) + "</div>"
                })
            }
            newPString += pContentCopy
            newContent = newContent.replace(pContent, newPString)
        })
    }
    return newContent
}