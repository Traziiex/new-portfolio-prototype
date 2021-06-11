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
            <motion.div initial={{rotateX:"-90deg", opacity:0}} animate={{rotateX:0, opacity:1}} transition={{duration:0.3, type: "spring", stiffness: 100, delay:0.2}}>
                <h2>Mes passe-temps</h2>
                <p>
                    L'informatique n'est évidemment pas le seul sujet qui m'anime, et je souhaite vous faire part de certains de mes centres d'intérêts dans le paragraphe qui suit.
                </p>
                <p>
                    S'il y a quelque chose qui porte une place importante dans mon coeur, c'est la musique. Jeune enfant, j'aimais quand il y avait du bruit, mais pas forcément un bruit
                    destructuré voire désagréable. Ce que j'aime, c'est quand il y a de la vie, et selon moi il n'y a rien de plus ennuyeux qu'une pièce apathique sans aucun son pour peupler un vide étouffant.
                    La musique peut faire ressentir beaucoup d'émotion et a la capacité de faire voyager celui qui l'écoute. Et pourtant, la musique est finalement une simple suite de son, d'accords et de fréquence
                    dont la succession parfaitement pensée par le compositeur a pour vertu de transmettre des sensations uniques et marquantes. Alors que le son est à lui seul une simple vibration des
                    molécules dans l'air, la musique est un art qui a su apprivoisé ce phénomèene physique pour le métamorphoser en quelque-chose d'une beauté immense.
                    La musique est en réalité un langage à part entière, universel, compris de tous.

                    </p>
                <p>J'ai moi-même beaucoup écouté de musique, aux genres divers et variés en passant par la musique classique, électronique ou même classico-électronique...
                    le rap, le rock ou même le blues. Je n'ai pas qu'écouter, j'ai aussi fait et créé en jouant dans des orchestres ou en composant chez moi, sur mon ordinateur.
                </p>
                <p>
                    Le sport a lui aussi une place imposante dans ma vie. J'ai toujours aimé bouger, courir sauter et me défouler. Les sports que j'ai le plus pratiqués et qui me plaise le plus sont
                    le tennis et le volleyball. 
                </p>
                <p>
                    Je porte un intérêt pour encore bien des choses comme le voyage ou le cinéma mais tout citer n'est, je pense, pas utile sur ce site.
                    Le but de ces textes est que vous connaissiez mieux la personne dont vous consultez actuellement le site !
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
