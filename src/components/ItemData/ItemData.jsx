import React, { Component } from "react"
import "./ItemData.less"
import bg from "../../assets/img/bg.jpg"
// 头像地址
// import awatarimg from "../"
class ItemData extends Component {
    constructor() {
        super()
        this.state = {
            data: [
                { "img_url": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600607243804&di=b2a74de5065e14d50eeb1d5aeab0d34f&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fd35b7c9a440242a1cf03685e7eb269086f727a3cf6ebc-fmByMh_fw658", "title": "第一个题目", "intro": "我是第一个题目的简介", "awatar": "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=387639067,1599589691&fm=26&gp=0.jpg", "nickname": "小红", "push_time": "2020-09-20" },
                { "img_url": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600607263431&di=bbd6ad24f8cf0e6f0416585121376e39&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F8%2F5406a730b20f2.jpg", "title": "第二个题目", "intro": "我是第二个题目的简介", "awatar": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600607322135&di=a4dbb5d8a9d15e3642fbaaa5e6c2c1de&imgtype=0&src=http%3A%2F%2Fdiy.qqjay.com%2Fu%2Ffiles%2F2012%2F0413%2F6b12444e5ce54d3c3b2a3939e448e796.jpg", "nickname": "小红", "push_time": "2020-09-20" },
                { "img_url": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600607243802&di=e7e318861c4c9be66508f7c7598d40da&imgtype=0&src=http%3A%2F%2Fwww.wenzhousx.com%2Fyujeu%2Fwenzhou%2F1202%2F996-120225030201.jpg", "title": "第一个题目", "intro": "我是第一个题目的简介", "awatar": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600607322135&di=24d6e6b84b59280f25268299628ae8ee&imgtype=0&src=http%3A%2F%2Fpics2.baidu.com%2Ffeed%2Fbd315c6034a85edf81702f204ba7a225dc54752a.jpeg%3Ftoken%3D40ea367f6b2ef995eaa6f5faf705a7d4", "nickname": "小红", "push_time": "2020-09-20" },
                { "img_url": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600607243801&di=eb4d5234e5ed3c9afe68a7512cc71edb&imgtype=0&src=http%3A%2F%2Fpic31.nipic.com%2F20130728%2F13323542_103327572128_2.jpg", "title": "第一个题目", "intro": "我是第一个题目的简介", "awatar": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600607322134&di=5beced0a0439896fcdf073286b669c65&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201411%2F29%2F20141129194517_5Z2Lu.png", "nickname": "小红", "push_time": "2020-09-20" },
            ]
        }
    }


    render() {
        return (
            <div className="wrapper11">
                {
                    this.props.sources.map((item, index) => {
                        return <div className="item" key={index} >
                            <div className="bg-wrapper">
                                <img src={item.img_url} alt="bg" />
                            </div>
                            <div className="item-content">
                                <div className="item-content-head">
                                    <h1>{item.title}</h1>
                                    <span>{item.intro}</span>
                                </div>
                                <div className="item-content-footer">
                                    <div className="awatar">
                                        <img src={item.awatar} alt="awatar" />
                                    </div>
                                    <div className="user-info">
                                        <div className="info-name">{item.nickname}</div>
                                        <div className="info-time">{item.push_time}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        )
    }
}

export default ItemData