import { Carousel } from 'antd';

import React from "react"

const contentStyle = {
    height: '230px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};
const CarouselStyle = {
    height: '100%'
}
export default class Slideshow extends React.Component {
    render() {
        return (
            <Carousel autoplay style={CarouselStyle}>
                <div>
                    <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>4</h3>
                </div>
            </Carousel>
        )
    }
}