import Code from '../code/Code';
import Media from 'react-media';
import MobileContent from './content/MobileContent';
import DesktopContent from './content/DesktopContent';

const Parcours = ({unlocked, unlockPages}) => {
    const content = [
        `Mes années de Lycée furent très intéressantes,
        remplies d'introspection et de recherches personnelles. J'étais
        désormais assez mature pour comprendre les concepts du codage, et je
        commençais à pouvoir coder et faire mes propres applications ou
        même jeux vidéos. L'informatique était toujours quelque-chose d'imposant dans
        ma vie et je me suis décidé à étudier dans ce domaine après le bac.`,

        `Je pensais que la rentrée au collège serait un grand
        changement durant ma scolarité, mais tout était en fait
        très similaire. Durant mes années de collèges, je me suis intéressé
        pour la première fois à la programmation, mais étant jeune,
        apprendre le codage en autodidacte était pour moi trop compliqué.`,

        `Nous avons dû quitter la France une seconde fois pour nous
        rendre dans un pays voisin à la Norvège : le Danemark.
        Nous y sommes restés plus longtemps que prévu, 12 ans au lieu de 3.
        L'informatique a fortement gagné en importance durant mes années
        de primaires dans le Lycée Français de Copenhague.`,

        `De retour en France, j'étais en âge de rejoindre la petite
        section de maternelle. Au cours de ces trois ans à vivre en France
        dans un petit village de campagne, j'ai commencé à montrer un
        intérêt pour l'informatique : je ne savais ni lire ni écrire, pourtant
        j'adorais explorer le vieil ordinateur familial sans bien comprendre ce que
        j'y faisais.`,

        `J'ai déménagé en norvège à seulement 6 mois. C'est dans ce pays Scandinave
        que j'ai vécu les 3 premières années de ma vie. J'y ai fait mes années de crèche.
        Mes souvenirs de ma vie dans ce pays ne sont pas précis et nombreux du fait de
        mon jeune âge. Nous avons quitté la Norvège pour retourner en France en 2005.`
    ];
    if(unlocked){
        return(
            <Media queries={{small: "(max-width: 520px)", large: "(min-width: 521px)"}}>
                {matches => (
                    <>
                        {matches.small && <MobileContent content={content}/>}
                        {matches.large && <DesktopContent content={content}/>}
                    </>
                )}
            </Media>
        );
    }else{
        return(
            <Code unlockPages={unlockPages}/>
        )
    }
}

export default Parcours
