import React, { Component } from 'react';
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

class LoadingComponent extends Component {
    render() {
        return (
            <div>
                <Loader
                    type="Oval"
                    color="#00BFFF"
                    height={100}
                    width={100}
                    timeout={3000} //3 secs
 
                />
            </div>
        );
    }
}

export default LoadingComponent;