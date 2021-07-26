import { Card, CardContent, Typography } from '@material-ui/core'
import React from 'react'
import {commaFormatNumbers} from '../util.js'
import './InfoBox.css';
 
 function InfoBox({title, cases}) {
    let bgColor;
    if(title == "Confirmed")
        bgColor = "rgb(102, 217, 255,0.2)";
    else if(title == "Recovered")
        bgColor = "	rgb(204, 255, 153)";
    else if(title == "Active")
        bgColor="rgba(255, 0, 0, 0.3)"
    else if(title == "Deceased")
        bgColor="rgb(204, 204, 204)"

     return (
        <Card className="infoBox" style={{backgroundColor: bgColor }}> 
            <CardContent>
                <Typography className="infoBox__title" color="textSecondary">{title}</Typography>
                <h2 className="infoBox__cases">{commaFormatNumbers(cases)}</h2>
            </CardContent>
        </Card>
     )
 }
 
 export default InfoBox