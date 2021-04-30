import Code from '../code/Code';

const Parcours = ({unlocked, unlockPages}) => {
    if(unlocked){
        return(
            <div>ouvert</div>
        );
    }else{
        return(
            <Code unlockPages={unlockPages}/>
        )
    }
}

export default Parcours
