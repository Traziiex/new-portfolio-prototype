import React from 'react'
import Code from '../code/Code';
import Media from 'react-media';
import {motion} from 'framer-motion';
import Moi from './img/Moi.png';
import ImgMoiZoom from './ImgMoiZoom'
import {useState, useEffect} from 'react';

const PlusDesktop = () => {

    const [zoomMoi, setZoomMoi] = useState(false);
    const [age, setAge] = useState(0);
    const closeZoom = () =>{
        setZoomMoi(!zoomMoi);
    }

    const anniversaire = new Date('March 19, 2002');

    useEffect(()=>{
        setAge(Math.trunc((Date.now() - anniversaire) / 31540000000))
    }, []);

    return (
        <>
        {zoomMoi ? <ImgMoiZoom close={closeZoom} image={Moi}/> : null}
        <motion.div className="plus-content" transition={{duration:0.6}} exit={{x:"-150%"}}>
            <motion.div initial={{rotateX:"-90deg", opacity:0}} animate={{rotateX:0, opacity:1}} transition={{duration:0.3, type: "spring", stiffness: 100}}>
                <h2>Qui suis-je ?</h2>
                <p>Je suis Noah Blanchard, un étudiant en informatique plein d'ambitions. Depuis tout petit, je porte un fort intérêt pour tout ce qui touche à l'informatique
                    et particulèrement les ordinateurs. Ces machines me fascinent depuis tout petit : j'ai vite été attiré par l'aspect vidéo-ludique proposée par celles-ci.
                    Mais avec les années qui ont passé, j'ai commencé à m'intéresser de façon générale à l'informatique. Plus je passais de temps plus je découvrais de nouvelles
                    choses, et il était juste impossible que je passe à côté du développement.
                    J'ai commencé petit à petit à m'y intéresser et à apprendre en autodidacte grâce à des tutoriels sur Internet. Mon intérêt pour l'informatique est ce qui a
                    déterminé mon choix d'études, je souhaite poursuive mes études sur cinq ans afin d'être formé comme ingénieur en informatique.
                </p>
                <p>
                    Je suis actuellement âgé de {age} ans et mon but est de, plus tard, pouvoir travailler dans une domaine qui me plaît et qui m'intéresse afin que
                    mon temps passé au travail soit avant tout un moment intéressants et attirant. Je souhaite ne pas passer ma vie dans un bureau qui ne me plaît pas
                    à accomplir des tâches dont je ne vois pas le sens et l'intérêt.
                </p>

            </motion.div >
            <motion.div initial={{rotateX:"-90deg", opacity:0}} animate={{rotateX:0, opacity:1}} transition={{duration:0.3, type: "spring", stiffness: 100, delay:0.2}}>
                <h2>Mes passe-temps</h2>
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
            <motion.div initial={{rotateX:"-90deg", opacity:0}} animate={{rotateX:0, opacity:1}} transition={{duration:0.3, type: "spring", stiffness: 100, delay:0.4}}>
                <h2>Ma personnalité en carte mentale</h2>
                <img src={Moi} onClick={() => setZoomMoi(!zoomMoi)}/>
            </motion.div>
        </motion.div>
        </>
    )
}

export default PlusDesktop
