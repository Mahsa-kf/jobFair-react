import React from 'react';

const LogoNames = ['rbcroyalbank.com', 'bell.ca', 'bestlifeonline.com', 'aircanada.com', 'smartcentres.com', 'sloc.co.uk', 'cibc.com', 'friendlyfuture.com','humber.ca','rogers.com'];

const Partners = () => {
    return(
        <div>
            {LogoNames.map((logoName, index)=> 
                <img height="100" key={index} src={`//logo.clearbit.com/${logoName}`} alt={logoName}/>
            )}
        </div>
    )
}

export default Partners;