import { Carousel } from 'antd';
import "./Slideshow.less"
import React from "react"
import Item from 'antd/lib/list/Item';

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
    constructor() {
        super()
        this.state = {
            data: [
                { id: 1, name: '小明', url: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3543144268,4107014676&fm=26&gp=0.jpg" },
                { id: 2, name: '小红', url: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1190745369,970019865&fm=26&gp=0.jpg" },
                { id: 3, name: '小绿', url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600174100767&di=aa1dfe60812aaa144083e93a45451022&imgtype=0&src=http%3A%2F%2Fpic4.zhimg.com%2Fv2-78db0ec69e622f235c5cc47cb97a0338_1200x500.jpg" },
                { id: 4, name: '小蓝', url: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=672062805,2597808591&fm=26&gp=0.jpg" },
            ]
        }
    }
    render() {
        return (
            <Carousel autoplay style={CarouselStyle}>
                {/* <div className="wrapper">
                    <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3543144268,4107014676&fm=26&gp=0.jpg" alt="logo" />
                </div> */}
                {
                    this.state.data.map(item => {
                        return <div className="wrapper" key={item.id}>
                            <img src={item.url} alt={item.name} />
                        </div>

                    })
                }
            </Carousel>
        )
    }
}