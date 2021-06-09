import React from 'react'
import {motion} from 'framer-motion';

const CreationMusic = ({active, update}) => {    
    const variant = {
        expand:{
            width: "80%",
        },
        collapsed:{
            width: "16%",
        }
    }

    const iconVariant = {
        expand:{
            fontSize:"80px",
        },
        collapsed:{
            fontSize:"20px"
        }
    }

    const musicDiv = {
        expand:{
            opacity:1,
            scale:1,
            transition:{
                duration:0.4,
                delay:0.4,
            }
        },
        collapsed:{
            opacity:0,
            scale:0,
            transition:{
                duration:0.6,
                delay:0,
            }
        }
    }

    return (
        <motion.div className="creations-musicales" transition={{duration: 0.6}} animate={active ? "expand" : "collapsed"} variants={variant} onClick={update}>
            <motion.svg transition={{duration: 0.6}} animate={active ? "collapsed" : "expand"} variants={iconVariant} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z"></path><path fill-rule="evenodd" d="M14 11V2h1v9h-1zM6 3v10H5V3h1z" clip-rule="evenodd"></path><path d="M5 2.905a1 1 0 01.9-.995l8-.8a1 1 0 011.1.995V3L5 4V2.905z"></path></motion.svg>
            <motion.div className="music-container" variants={musicDiv} animate={active ? "expand" : "collapsed"}>
                <iframe  height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/561436974&color=%235362b4&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                <iframe  height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/564090078&color=%235362b4&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                <iframe  height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/512860632&color=%235362b4&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                <iframe height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/569539914&color=%235362b4&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe> 
                <iframe height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/566609802&color=%235362b4&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                <iframe height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/572825877&color=%235362b4&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                <iframe height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/777910360&color=%235362b4&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                <iframe height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/512439003&color=%235362b4&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
            </motion.div>
        </motion.div>
    )
}

export default CreationMusic
