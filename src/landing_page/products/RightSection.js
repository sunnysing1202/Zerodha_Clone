import React from 'react';

function RightSection({productName, productDescription, learnMore, imageURL}) {
    return ( 
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-4 col-sm-12 p-3 p-md-5 mt-3 mt-md-5">
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                    <a href={learnMore} >Learn More</a>
                    </div>  
                </div>
                <div className="col-lg-2 col-sm-12"></div>
                <div className="col-lg-4 col-sm-12">
                    <img src={imageURL} style={{width: "100%"}}/>
                </div>
            </div>
        </div>
     );
}

export default RightSection;