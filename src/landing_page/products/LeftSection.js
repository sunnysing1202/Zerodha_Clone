import React from 'react';

function LeftSection({imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore}) {
    return ( 
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-4 col-sm-12">
                    <img src={imageURL} style={{width: "100%"}}/>
                </div>
                <div className="col-lg-2 col-sm-12"></div>
                <div className="col-lg-6 col-sm-12 p-3 p-md-5 mt-3 mt-md-5">
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                    <a href={tryDemo}>Try Demo</a>
                    <a href={learnMore} style={{marginLeft:"50px"}}>Learn More</a>
                    </div>
                    <div className="mt-3">
                    <a href={googlePlay}><img src="media/images/googlePlayBadge.svg" /></a>
                    <a href={appStore} style={{marginLeft:"50px"}}><img src="media/images/appstoreBadge.svg" /></a>
                    </div>
                    
                </div>
            </div>
        </div>
        
     );
}

export default LeftSection;