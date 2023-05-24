"use client";
import { useStyles } from "@/styles/main";
import Header from "@/Components/Headers";
import "../styles/global.css";
const Main = (): JSX.Element => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Header />
            <div className={classes.projectSections}>
                <div className={classes.title}> 프로젝트 소개</div>
                <div className={classes.bodyWrap}>
                    <div className={classes.card}>이커머스 플랫폼 창업</div>
                    <div className={classes.card}>
                        부산대학교 시각디자인과
                        <br />
                        홈페이지 제작
                    </div>
                    <div className={classes.card}>
                        엣트레커 결제시스탬 <br />
                        Front-end개발
                    </div>
                    <div className={classes.card}>
                        Google DevFest Korea2021 행사운영진
                    </div>
                    <div className={classes.card}>
                        SK주식회사 C&C ST 발행플렛폼 Front-end/Back-end 개발
                    </div>
                </div>
            </div>
            <div className={classes.projectSections}>
                <div className={classes.title}> 작성물</div>
                <div className={classes.bodyWrap}>
                    <div className={classes.card}></div>
                    <div className={classes.card}></div>
                    <div className={classes.card}></div>
                    <div className={classes.card}></div>
                </div>
            </div>
            <div className={classes.projectSections}>
                <div className={classes.title}> 이달의 서비스</div>
                <div className={classes.bodyWrap}>
                    <div className={classes.card}></div>
                    <div className={classes.card}></div>
                    <div className={classes.card}></div>
                    <div className={classes.card}></div>
                    <div className={classes.card}></div>
                </div>
            </div>
            <div className={classes.projectSections}>
                <div className={classes.title}>문의하기</div>
                <div className={classes.bodyWrap}>
                    <div className={classes.card}></div>
                    <div className={classes.card}></div>
                    <div className={classes.card}></div>
                    <div className={classes.card}></div>
                    <div className={classes.card}></div>
                </div>
            </div>
        </div>
    );
};

export default Main;
