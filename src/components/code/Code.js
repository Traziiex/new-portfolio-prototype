import Button from './Button'
import {motion} from 'framer-motion';
import {AiOutlineCheck, AiOutlineClose, AiOutlineQuestionCircle} from 'react-icons/ai';

import {useState} from 'react';
import {useHistory} from 'react-router-dom';

const Code = ({unlockPages}) => {

    const helperVariants = {
        open:{
            opacity:1
        },
        close:{
            opacity:0
        }
    }

    const hist = useHistory();

    const [help, setHelp] = useState(false);
    const [msg, setMsg] = useState("Tapez le code");
    const [code, setCode] = useState("");

    const enterCode = (val) => {
        setCode(code + val)
        console.log(code);
    }
    
    const verify = () => {
        if(code === "190302"){
            unlockPages();
        } else {
            setMsg('code faux');
        }
        setCode("");
    }

    return (
        <motion.div className="code-container"  initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
            <div className="code-window">
                <h2>{msg}</h2>
                <input readOnly type='password' value={code}></input>
                <div className="help-div">
                    <AiOutlineQuestionCircle onClick={() => setHelp(!help)} style={{cursor:"pointer"}}/>
                    <motion.span initial={{opacity:0}} animate={help ? "open" : "close"} transition={{duration:0.2}} variants={helperVariants}>Ma date de naissance est peut-être la réponse...</motion.span>
                </div>
                <div className="button-grid">
                    <Button val={1} event={() => enterCode("1")}/>
                    <Button val={2} event={() => enterCode("2")}/>
                    <Button val={3} event={() => enterCode("3")}/>
                    <Button val={4} event={() => enterCode("4")}/>
                    <Button val={5} event={() => enterCode("5")}/>
                    <Button val={6} event={() => enterCode("6")}/>
                    <Button val={7} event={() => enterCode("7")}/>
                    <Button val={8} event={() => enterCode("8")}/>
                    <Button val={9} event={() => enterCode("9")}/>
                    <Button val={<AiOutlineClose />} event={() => hist.push("/")}/>
                    <Button val={0} event={() => enterCode("0")}/>
                    <Button val={<AiOutlineCheck />} event={verify}/>
                </div>
            </div>
        </motion.div>
    )
}

export default Code
