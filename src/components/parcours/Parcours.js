import Code from '../code/Code';
import Media from 'react-media';
import MobileContent from './content/MobileContent';
import DesktopContent from './content/DesktopContent';

const Parcours = ({unlocked, unlockPages}) => {
    const content = [
        "",
        "",
        "",
        "En France, je suis allé pour la première fois de ma vie à l'école. J'ai commencé ma scolarité à 3 ans, en petite section de maternelle. C'est durant les années en France que j'ai commencé à montrer mon attirance pour les ordinateurs.",
        "Juste après ma naissance, nous avons dû déménager en Norvège. J'avais à peine six mois quand on est parti. C'est en norvège que j'ai fait mes années de crèches. Nous somme restés trois ans dans ce pays pour ensuite revenir en France en 2005."
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
