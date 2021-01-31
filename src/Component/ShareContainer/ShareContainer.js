import React, {useState} from 'react'
import {
    EmailShareButton, EmailIcon,
    FacebookMessengerShareButton, FacebookShareButton, FacebookIcon, FacebookMessengerIcon,
    LinkedinShareButton, LineShareButton, LineIcon, LinkedinIcon,
    PinterestShareButton, PinterestIcon,
    TelegramShareButton, TelegramIcon,
    TwitterShareButton, TwitterIcon,
    WhatsappShareButton, WhatsappIcon,
    RedditShareButton, RedditIcon,
} from "react-share";
import {Trans} from "react-i18next";
import classes from './ShareContainer.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEllipsisH} from "@fortawesome/free-solid-svg-icons";
import firebase from "firebase";
import {isHost} from "../../Utils/FirebaseUtils";

const tags2THashtag = (tags, type) => {
    let allTag = []
    //old tag
    if (type === 'fb') {

        tags.map(e => {
            if (e.hasOwnProperty('label')) {
                allTag.push('#' + e.label)
            } else {
                allTag.push(e.split('/')[0])
            }
        })
        allTag.join('\n#')
    } else {
        tags.map(e => {
            if (e.hasOwnProperty('label')) {
                allTag.push(e.label)
            } else {
                allTag.push(e.split('/')[0])
            }
        })

    }

    return allTag
}

const ShareContainer = (props) => {

    const [isExpand, setIsExpand] = useState(false)


    /**
     * URL
     * img
     * Title
     * content
     * appID // provided
     * tags
     * */
    return (
        <div className={classes.ShareContainer}>
            <span className={classes.ShareLabel}><Trans>Blog.share</Trans></span>
            <FacebookShareButton
                onClick={(e) => {
                    if (isHost()) {
                        firebase.analytics().logEvent('share', {
                            type: props.url.split("/")[3],
                            content_id: props.url.split("/")[4],
                            media: "facebook"
                        });
                    }
                }}
                url={props.url}
                quote={
                    props.title + ' | Childnoder \n' +
                    props.content.replace(/<[^>]*>?/gm, '').replace(/"/g, "'").substring(0, 80) + '... \n' +
                    tags2THashtag(props.tags, 'fb')
                }
                hashTag={'test'}
            >
                <FacebookIcon size={32} round={true}/>
            </FacebookShareButton>
            <FacebookMessengerShareButton
                onClick={(e) => {
                    if (isHost()) {
                        firebase.analytics().logEvent('share', {
                            type: props.url.split("/")[3],
                            content_id: props.url.split("/")[4],
                            media: "facebook-messenger"
                        });
                    }
                }}
                url={props.url}
                appId={1293953327456577}
            >
                <FacebookMessengerIcon size={32} round={true}/>
            </FacebookMessengerShareButton>
            <TwitterShareButton
                onClick={(e) => {
                    if (isHost()) {
                        firebase.analytics().logEvent('share', {
                            type: props.url.split("/")[3],
                            content_id: props.url.split("/")[4],
                            media: "twitter"
                        });
                    }
                }}
                url={props.url}
                title={
                    props.title + ' | Childnoder \n \n' +
                    props.content.replace(/<[^>]*>?/gm, '').replace(/"/g, "'").substring(0, 60) + '... \n' +
                    tags2THashtag(props.tags, 'fb')
                }
                via={'Childnoder'}
                hashTags={tags2THashtag(props.tags, 'tw')}
            >
                <TwitterIcon size={32} round={true}/>
            </TwitterShareButton>
            <WhatsappShareButton
                onClick={(e) => {
                    if (isHost()) {
                        firebase.analytics().logEvent('share', {
                            type: props.url.split("/")[3],
                            content_id: props.url.split("/")[4],
                            media: "whatsapp"
                        });
                    }
                }}
                url={props.url}
                title={
                    props.title + ' | Childnoder \n \n' +
                    props.content.replace(/<[^>]*>?/gm, '').replace(/"/g, "'").substring(0, 80) + '... \n'
                }
            >
                <WhatsappIcon size={32} round={true}/>
            </WhatsappShareButton>
            {
                !isExpand ?
                    <button aria-label alt={'expand more option'} className={classes.Extend}
                            onClick={() => setIsExpand(true)} alt='expand more social sharing option'>
                        <FontAwesomeIcon icon={faEllipsisH}/>
                    </button>
                    : ''
            }

            {
                isExpand ?
                    <LinkedinShareButton
                        onClick={(e) => {
                            if (isHost()) {
                                firebase.analytics().logEvent('share', {
                                    type: props.url.split("/")[3],
                                    content_id: props.url.split("/")[4],
                                    media: "linkedin"
                                });
                            }
                        }}
                        className={classes.Extend}
                        url={props.url}
                        title={props.title}
                        summary={props.content.replace(/<[^>]*>?/gm, '').replace(/"/g, "'").replace(/(([^\s]+\s\s*){150})(.*)/, "$1…")}
                        source={'https://Childnoder.com'}
                    >
                        <LinkedinIcon size={32} round={true}/>
                    </LinkedinShareButton>
                    : ''

            }
            {
                isExpand ?
                    <LineShareButton
                        onClick={(e) => {
                            if (isHost()) {
                                firebase.analytics().logEvent('share', {
                                    type: props.url.split("/")[3],
                                    content_id: props.url.split("/")[4],
                                    media: "line"
                                });
                            }
                        }}
                        className={classes.Extend}
                        url={props.url}
                        title={props.title}
                    >
                        <LineIcon size={32} round={true}/>
                    </LineShareButton>
                    : ''

            }
            {
                isExpand ?
                    <PinterestShareButton
                        onClick={(e) => {
                            if (isHost()) {
                                firebase.analytics().logEvent('share', {
                                    type: props.url.split("/")[3],
                                    content_id: props.url.split("/")[4],
                                    media: "pinterest"
                                });
                            }
                        }}
                        className={classes.Extend}
                        media={props.img}
                        url={props.url}
                        description={props.title}
                    >
                        <PinterestIcon size={32} round={true}/>
                    </PinterestShareButton>
                    : ''

            }
            {
                isExpand ?
                    <TelegramShareButton
                        onClick={(e) => {
                            if (isHost()) {
                                firebase.analytics().logEvent('share', {
                                    type: props.url.split("/")[3],
                                    content_id: props.url.split("/")[4],
                                    media: "telegram"
                                });
                            }
                        }}
                        className={classes.Extend}
                        url={props.url}
                        title={props.title}
                    >
                        <TelegramIcon size={32} round={true}/>
                    </TelegramShareButton>
                    : ''

            }
            {
                isExpand ?
                    <RedditShareButton
                        onClick={(e) => {
                            if (isHost()) {
                                firebase.analytics().logEvent('share', {
                                    type: props.url.split("/")[3],
                                    content_id: props.url.split("/")[4],
                                    media: "reddit"
                                });
                            }
                        }}
                        className={classes.Extend}
                        url={props.url}
                        title={props.title}
                    >
                        <RedditIcon size={32} round={true}/>
                    </RedditShareButton>
                    : ''

            }
            {
                isExpand ?
                    <EmailShareButton
                        onClick={(e) => {
                            if (isHost()) {
                                firebase.analytics().logEvent('share', {
                                    type: props.url.split("/")[3],
                                    content_id: props.url.split("/")[4],
                                    media: "email"
                                });
                            }
                        }}
                        className={classes.Extend}
                        url={props.url}
                        subject={localStorage.getItem('i18n-lang') === 'en' ?
                            "You may check it out this: "
                            :
                            "我想向你分享該內容: "
                            + props.title}
                        body={props.content.replace(/<[^>]*>?/gm, '').replace(/"/g, "'").replace(/(([^\s]+\s\s*){150})(.*)/, "$1…")}
                    >
                        <EmailIcon size={32} round={true}/>
                    </EmailShareButton>
                    : ''

            }
        </div>
    )

}

export default ShareContainer