import React from "react";
import style from "./Home.module.css";
import { Row, Col } from "antd";
import Head from "../../components/Head/Head"
import ItemData from "../../components/ItemData/ItemData"

class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            span: 1,
            status: true,
            arrow: "rotate(180deg)",
            data: [
                { "img_url": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600607243804&di=b2a74de5065e14d50eeb1d5aeab0d34f&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fd35b7c9a440242a1cf03685e7eb269086f727a3cf6ebc-fmByMh_fw658", "title": "第一个题目", "intro": "我是第一个题目的简介", "awatar": "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=387639067,1599589691&fm=26&gp=0.jpg", "nickname": "小红", "push_time": "2020-09-20" },
                { "img_url": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600607263431&di=bbd6ad24f8cf0e6f0416585121376e39&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F8%2F5406a730b20f2.jpg", "title": "第二个题目", "intro": "我是第二个题目的简介", "awatar": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600607322135&di=a4dbb5d8a9d15e3642fbaaa5e6c2c1de&imgtype=0&src=http%3A%2F%2Fdiy.qqjay.com%2Fu%2Ffiles%2F2012%2F0413%2F6b12444e5ce54d3c3b2a3939e448e796.jpg", "nickname": "小红", "push_time": "2020-09-20" },
                { "img_url": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600607243802&di=e7e318861c4c9be66508f7c7598d40da&imgtype=0&src=http%3A%2F%2Fwww.wenzhousx.com%2Fyujeu%2Fwenzhou%2F1202%2F996-120225030201.jpg", "title": "第一个题目", "intro": "我是第一个题目的简介", "awatar": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600607322135&di=24d6e6b84b59280f25268299628ae8ee&imgtype=0&src=http%3A%2F%2Fpics2.baidu.com%2Ffeed%2Fbd315c6034a85edf81702f204ba7a225dc54752a.jpeg%3Ftoken%3D40ea367f6b2ef995eaa6f5faf705a7d4", "nickname": "小红", "push_time": "2020-09-20" },
                { "img_url": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600607243801&di=eb4d5234e5ed3c9afe68a7512cc71edb&imgtype=0&src=http%3A%2F%2Fpic31.nipic.com%2F20130728%2F13323542_103327572128_2.jpg", "title": "第一个题目", "intro": "我是第一个题目的简介", "awatar": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600607322134&di=5beced0a0439896fcdf073286b669c65&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201411%2F29%2F20141129194517_5Z2Lu.png", "nickname": "小红", "push_time": "2020-09-20" },
            ],
            main_span: 4
        }
    }
    // 切换布局大小
    SwitchBtn = () => {
        this.setState({
            span: this.state.status ? 6 : 1,
            status: !this.state.status,
            arrow: this.state.status ? null : "rotate(180deg)",
        })
    }
    // 监听屏幕宽度
    handleWidth = () => {
        const screenWidth = document.documentElement.clientWidth;
        console.log(screenWidth)
        if (screenWidth > 1530) {
            this.setState({
                span: 1
            })
        }
        if (screenWidth < 1530) {
            this.setState({
                span: 0
            })
        }
        if (screenWidth < 960) {
            this.setState({
                // main_span: 0
            })
        }
    }
    handletest = () => {
        if (window.onload) {
            alert("你好")
        }
    }
    // 注册监听器
    componentDidMount() {
        window.addEventListener('resize', this.handleWidth);
        window.addEventListener('test', this.handletest);
    }
    // 移除监听器
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWidth)
        window.removeEventListener('test', this.handletest);
    }
    render() {
        const arrowstyle = {
            transform: this.state.arrow,
            transition: "all .8s ",
            color: "black",
            cursor: "pointer"
        }
        return (
            <div>
                <div style={{ fontSize: "16px", backgroundColor: "skyblue" }}>
                    {/* <Head home_active={true} /> */}
                </div>
                <Row >
                    {/* 侧边栏信息 */}
                    <Col span={this.state.span} className={style.sidebar}>
                        <div className={style.sidebar_info}>
                            <div className={style.sidebar_info_head}>
                                <div><i style={arrowstyle} onClick={this.SwitchBtn} className={style.iconfont}>&#xe62c;</i></div>
                                <div><a href="/"><h1>Blog</h1></a></div>
                            </div>
                            <div className={style.sidebar_info_main}>
                                <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2291332875,175289127&fm=26&gp=0.jpg" alt="awata" />
                            </div>
                            <div>footer</div>
                        </div>
                    </Col>
                    <Col style={style} span={24 - this.state.span} className={style.mainbar}>
                        {/* <Row className="headbar">
                            <Col className="head" span="16" ofset="4">
                                <Head home_active={true}/>
                            </Col>
                        </Row> */}
                        <Row className={style.main}>
                            <Col sm={0} xl={4} span={this.state.main_span}>
                            </Col>
                            <Col sm={24} xl={16} className={style.main_content}>
                                <Row>
                                    <Col className={style.main_content_data} sm={24} md={16}>
                                        <ItemData sources={this.state.data} />
                                    </Col>
                                    <Col className="TestDemo" sm={0} md={8}></Col>
                                </Row>
                            </Col>
                            <Col sm={0} xl={4}></Col>
                        </Row>
                    </Col>
                </Row>
            </div >
        )
    }
}

export default Home