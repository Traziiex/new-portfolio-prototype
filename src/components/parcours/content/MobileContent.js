import React from 'react'
import Card from './Card'
import {motion} from 'framer-motion'

const MobileContent = ({content}) => {
    return (
        <div className ="mobile-parcours-container">
                        <Card content={content[4]}  sub="La Norvège" years="2002 > 2005"/>
                        <Card  content={content[3]}  sub="La France" years="2005 > 2008"/>
                        <Card  content={content[2]}  sub="Le Danemark (Primaire)" years="2008 > 2013"/>
                        <Card  content={content[1]}  sub="Le Danemark (Collège)" years="2013 > 2017"/>
                <Card  content={content[0]}  sub="Le Danemark (Lycée)" years="2017 > 2020"/>
                
                   
               
                
        </div>
    )
}

export default MobileContent
