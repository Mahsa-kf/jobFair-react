import React from 'react';

const LogoNames = [
    'bell.ca', 'rbcroyalbank.com', 'bestlifeonline.com', 'aircanada.com', 'smartcentres.com', 'sloc.co.uk', 'cibc.com', 'friendlyfuture.com','humber.ca',
    'rogers.com','sunlife.ca','adidas-group.com','manulife.com','airbnb.com', 'adp.com', 'fedex.com', 'thegatewaypundit.com', 'hbo.com', 'ksl.com', 'lowes.com',
    'pcmag.com', 'puma.com', 
];

const Partners = () => {
    return(
        <div className="center_wrapper">
            {LogoNames.map((logoName, index)=> 
                <img className="company-logo" key={index} src={`//logo.clearbit.com/${logoName}`} alt={logoName}/>
            )}
        </div>
    )
}

export default Partners;