import React from 'react';

function NotFound() {
    return ( 
        <div className="container p-3 p-md-5 mb-4mb-md-5">
            <div className="row text-center">
                <div className="col-lg-6 col-sm-12">
                    <img src="media/images/error-404.svg"/>
                </div>
                <div className="col-lg-6 col-sm-12 mt-0 mt-md-5">
                <h1 className="mt-3 mt-md-5">404 Not Found</h1>
                <p>Sorry, the page you are looking for does not exist.</p>
                </div>
            </div>
        </div>
     );
}

export default NotFound;