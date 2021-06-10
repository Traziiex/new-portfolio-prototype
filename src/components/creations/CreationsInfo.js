import React from 'react'
import {motion} from 'framer-motion';
import HungryCo from './hungryco.png';
import InfoCard from './InfoCard'
import CablExpert from './cablexpert.png'
import CubeRun from './cuberun.png'
import Mushroomz from './mushroomz.png'

const CreationsInfo = ({active, update}) => {

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
            fontSize:"400px",
        },
        collapsed:{
            fontSize:"200px"
        }
    }
    const infoDiv = {
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
        <motion.div className="creations-infos" animate={active ? "expand" : "collapsed"} transition={{duration: 0.6}} variants={variant} onClick={update}>
            <motion.svg transition={{duration: 0.6}} animate={active ? "collapsed" : "expand"} variants={iconVariant} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.854 4.146a.5.5 0 010 .708L1.707 8l3.147 3.146a.5.5 0 01-.708.708l-3.5-3.5a.5.5 0 010-.708l3.5-3.5a.5.5 0 01.708 0zm6.292 0a.5.5 0 000 .708L14.293 8l-3.147 3.146a.5.5 0 00.708.708l3.5-3.5a.5.5 0 000-.708l-3.5-3.5a.5.5 0 00-.708 0zm-.999-3.124a.5.5 0 01.33.625l-4 13a.5.5 0 01-.955-.294l4-13a.5.5 0 01.625-.33z" clip-rule="evenodd"></path></motion.svg>
            <div>
                <motion.div className="info-container" variants={infoDiv} animate={active ? "expand" : "collapsed"}>
                    <InfoCard img={HungryCo} title="HungryCo" glink="https://github.com/Traziiex/hungryco" slink="https://traziiex.github.io/hungryco/" />
                    <InfoCard img={CablExpert} title="Cabl'Expert" glink="https://forge.univ-lyon1.fr/p2018404/cablexpert" slink="http://p2018404.pages.univ-lyon1.fr/cablexpert/" />
                    <InfoCard img={CubeRun} title="CubeRun" glink="" slink="https://drive.google.com/uc?export=download&id=169Lvm2qkQrG0sAYOsobxGvH_xa7fkzPW" />
                    <InfoCard img={Mushroomz} title="Mushroomz" glink="" slink="https://drive.google.com/uc?export=download&id=1bvdssP8pNt4nJIscDsRlRoEu4fb3PSWn" />
                </motion.div>
            </div>
        </motion.div>
    )
}

export default CreationsInfo
