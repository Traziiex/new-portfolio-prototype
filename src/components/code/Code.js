import Button from './Button'

import {AiOutlineCheck, AiOutlineClose} from 'react-icons/ai';

import {useState} from 'react';
import {useHistory} from 'react-router-dom';

const Code = ({unlockPages}) => {

    const hist = useHistory();

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
        <div className="code-container">
            <div className="code-window">
                <h2>{msg}</h2>
                <input readOnly type='password' value={code}></input>
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
        </div>
    )
}

export default Code
