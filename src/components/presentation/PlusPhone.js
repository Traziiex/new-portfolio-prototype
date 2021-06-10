import React from 'react'
import Code from '../code/Code';
import Media from 'react-media';
import {motion} from 'framer-motion';
import Moi from './img/Moi.png';
import ImgMoiZoom from './ImgMoiZoom'
import {useState, useEffect} from 'react';

const PlusPhone = () => {

    const [card1, setCard1] = useState(false);
    const [card2, setCard2] = useState(false);
    const [card3, setCard3] = useState(false);
    

    const [zoomMoi, setZoomMoi] = useState(false);
    const [age, setAge] = useState(0);
    const closeZoom = () =>{
        setZoomMoi(!zoomMoi);
    }

    const anniversaire = new Date('March 19, 2002');

    useEffect(()=>{
        setAge(Math.trunc((Date.now() - anniversaire) / 31540000000))
    }, []);

    

    const cardVariant = {
        open: { rotateX:0, opacity: 1},
        collapsed: {  rotateX:0, opacity: 1, height: "65px" }
    
    }
    return (
        <>
        {zoomMoi ? <ImgMoiZoom close={closeZoom} image={Moi}/> : null}
        <motion.div className="plus-content" transition={{duration:0.6}} exit={{x:"-150%"}}>
            <motion.div animate={card1 ? "open" : "collapsed"} transition={{duration:0.3}} variants={cardVariant}>
                <h2>Qui suis-je ?</h2>
                <div onClick={() => setCard1(!card1)} style={{cursor:"pointer"}}>{card1 ? "Voir moins" : "Voir plus"}</div>
                <p>Je suis Noah Blanchard, un étudiant en informatique plein d'ambitions. Dès mon plus jeune age j'ai portéun for intérêt pour l'informatique, et particulièrement
                    les ordinateurs qui sont des machines qui me facinent depuis longtemps. C'est premièrement l'aspect vidéo-ludique proposé par les ordinateurs qui captait mon
                    attention mais rapidement, je me suis intéressé à toutes les facettes de l'informatique en passant par le montage photo ou même la composition de musique. J'ai
                    toujours adoré toucher à tout et explorer ce monde qui se trouvait à portée de main. Un jour est donc arrivé où je me suis intéressé à la programmation et au
                    développement, et c'est ce domaine qui m'a guidé vers moins choix d'études.
                </p>
                <p>
                    Je suis actuellement âgé de {age} ans et mon but est de, plus tard, pouvoir travailler dans un domaine qui me plaît et qui m'intéresse afin que
                    mon temps passé au travail soit avant tout un moment intéressant et attirant. Je souhaite ne pas passer ma vie dans un bureau qui ne me plaît pas
                    à accomplir des tâches dont je ne vois pas le sens et l'intérêt.
                </p>
            </motion.div >
            <motion.div animate={card2 ? "open" : "collapsed"} transition={{duration:0.3}} variants={cardVariant}>
                <h2>Mes passe-temps</h2>
                <div onClick={() => setCard2(!card2)} style={{cursor:"pointer"}}>{card2 ? "Voir moins" : "Voir plus"}</div>
                <p>
                    L'informatique n'est évidemment pas la seule chose qui m'anime. J'aime diverses choses, et je souhaite vous en faire part dans le paragraphe qui suit.
                </p>
                <p>
                    S'il y a quelque-chose qui porte une place importante dans mon coeur, c'est la musique. Depuis tout petit, j'aime quand il y a du bruit, mais pas un bruit
                    forcément destructuré et désagréable, non. J'aime quand il y a de la vie, et quoi de plus ennuyeux qu'une pièce vide sans aucun son pour peupler une solitude et un vide étouffant.
                    La musique est quelque-chose qui a la capacité de faire ressentir des choses, de faire voyager, alors que c'est finalement seulement une suite de son mis ensemble
                    de la bonne manière. Je trouve ça incroyable comment un certain choix de notes, d'accords et de succession de fréquence peuvent transmettre une émotion bien précise
                    et recherchée par l'artiste. La musique est finalement seulement une vibration qui se propage avec comme support l'air, et pourtant c'est aussi un langage à part
                    entière. Un langage universel, compris par tous. J'ai moi même beaucoup écouté de musique, aux genres divers et variés en passant par la musique classique, électronique ou même classico-électronique...
                    le rap, le rock ou même le blues. Je n'ai pas qu'écouter, j'ai aussi fait et créé en jouant dans des orchestres ou en composant chez moi, sur mon ordinateur.
                </p>
                <p>
                    Le sport a lui aussi une partie imposante dans ma vie. J'ai toujours aimé bouger, courir sauter et me défouler. Les sports que j'ai le plus pratiqué et qui me plaise le plus sont
                    le tennis et le volleyball. 
                </p>
                <p>
                    Je porte un intérêt pour encore bien des choses comme le voyage ou le cinéma mais tout citer n'est, je pense, pas utile sur ce site internet.
                    Je souhaitais seulement que vous connaissiez mieux la personne dont vous être en train de consulter le site personnel !
                </p>
            </motion.div>
            <motion.div animate={card3 ? {height:'auto'} : "collapsed"} transition={{duration:0.3}} variants={cardVariant}>
                <h2>Ma personnalité en carte mentale</h2>
                <div onClick={() => setCard3(!card3)} style={{cursor:"pointer"}}>{card3 ? "Voir moins" : "Voir plus"}</div>
                <img src={Moi} onClick={() => setZoomMoi(!zoomMoi)}/>
            </motion.div>
        </motion.div>
        </>
    )
}

export default PlusPhone
