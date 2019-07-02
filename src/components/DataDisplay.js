import React from 'react';
import './DataDisplay.css';

const DisplayData = ({fetchedDataInJson}) => {

    const printElementsWithLineBreaks = (contentArray) => {
        const clearContentElement = (contentElement) => {
            return  contentElement  
                    .replace("https://swapi.co/api/", '')
                    .slice(0, -1)
                    .replace("/", ": ");
        }
        let content = [];
        let index = 0;
        for(let contentElement of contentArray){
            if( index + 1 === contentArray.length 
                && contentElement.includes("https://swapi.co/api/")) {   
                content.push(clearContentElement(contentElement))
            }
            else if(index + 1 === contentArray.length 
                && !contentElement.includes("https://swapi.co/api/")) {   
                content.push(contentElement)
            }
            else if (contentElement.includes("https://swapi.co/api/")) {
                content.push(clearContentElement(contentElement))
                content.push(<br />)
            }
            else {
                content.push(contentElement)
                content.push(<br />)
            }
            index++;
        }
        return content
    }
    
    let dataConvertedToArray =  
        Object
        .entries(fetchedDataInJson)
        .map(element => {
            if(element[1] === "" || element[1] === null) element[1] = "No Data";
            else if (Array.isArray(element[1])){
                if(element[1].length === 0) element[1] = "No Data";
            }
            if(!Array.isArray(element[1]) && typeof element[1] === 'string' && !(element[0] === "url")){
                if (element[1].includes("https://swapi.co/api/")) {
                    element[1] = element[1]
                                .replace("https://swapi.co/api/", '')
                                .slice(0, -1)
                                .replace("/", ": ");
                }
                
            }
            return(
                <tr>
                    <td className="tableKeyValues">{element[0]}</td>
                    <td className="tableValues">
                    {Array.isArray(element[1])
                        ?   printElementsWithLineBreaks(element[1])
                        :   element[1]    
                    }
                    </td>
                </tr>                                       
            ) 
        })

return (
    <div>
        <table>
            <tbody>
                {dataConvertedToArray}
            </tbody>
        </table>
    </div>
    )
}

export default DisplayData;
