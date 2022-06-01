import React, { Component } from 'react';

class Footer extends Component { 
    render() {
        return (
            <footer className="h-10 text-center bg-gray-900 text-white squiggly-bg">
                <div className="container px-6 pt-6">
                    <div className="flex justify-center mb-6">
                    </div>
                </div>

                <div className="text-center p-4">
                    <a className="text-white" href="#">© 2022 Copyright Maze me</a>
                </div>
            </footer>
        );
    }
}

export default Footer;