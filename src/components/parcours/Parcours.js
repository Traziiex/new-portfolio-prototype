import Code from '../code/Code';
import Media from 'react-media';
import MobileContent from './content/MobileContent';
import DesktopContent from './content/DesktopContent';

const Parcours = ({unlocked, unlockPages}) => {
    const content = [
        "",
        "Je suis rentré en classe de 6ème, comme beaucoup, je pensais que le changement serait conséquent par rapport aux classes passées, mais finalement c'était très similaire. C'est durant mes années de collège que je me suis pour la première fois intéressé en la programmation mais étant jeune, je trouvais son apprentissage en autodidacte compliqué. Il m'a fallu attendre quelques-années pour mieux maîtriser la programmation.",
        "Encore une fois, nous avons dû déménager, mais cette fois dans un autre pays de scandinavie : le Danemark. Nous étions censés y rester 3 ans, mais ce chiffre est loin de la réalité. Durant mes années de primaire, l'informatique a gagné en importance pour moi et j'ai toujours adoré mon temps passé sur le vieil ordinateur familial.",
        "En France, je suis allé pour la première fois de ma vie à l'école. J'ai commencé ma scolarité à 3 ans, en petite section de maternelle. C'est durant ces 3 années en France que j'ai commencé à montrer un intérêt pour les ordinateurs. J'aimais explorer l'ordinateur familial sans forcément tout y comprendre.",
        "Juste après ma naissance, nous avons dû déménager en Norvège. J'avais à peine six mois quand nous sommes partis. C'est en norvège que j'ai fait mes années de crèches. Nous sommes restés trois ans dans ce pays pour ensuite revenir en France en 2005."
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
