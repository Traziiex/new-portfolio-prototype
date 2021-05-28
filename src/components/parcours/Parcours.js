import Code from '../code/Code';
import Media from 'react-media';
import MobileContent from './content/MobileContent';
import DesktopContent from './content/DesktopContent';

const Parcours = ({unlocked, unlockPages}) => {
    if(unlocked){
        return(
            <Media queries={{small: "(max-width: 520px)", large: "(min-width: 521px)"}}>
                {matches => (
                    <>
                        {matches.small && <MobileContent/>}
                        {matches.large && <DesktopContent />}
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
