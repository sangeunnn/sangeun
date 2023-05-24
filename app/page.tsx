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
                <div className={classes.title}>
                    {" "}
                    작성물
                    <span className={classes.description}>
                        저의 개인 Notion에 정리된내용을 DB에 따로
                        관리하고있습니다. Notion에 개시글을 작성하고 자동으로
                        DB에 적재하여 이곳 블로그와 연동되어 제공합니다.
                    </span>
                </div>
                <div className={classes.writingWrap}>
                    <div className={classes.category}>block chain</div>
                    <a className={classes.writing}>
                        Block chain 머클트리 Feb21 4:43PM
                    </a>
                    <a className={classes.writing}>
                        블록체인과 네트워크 Feb21 4:43PM
                    </a>
                    <a className={classes.writing}>
                        블록체인과 데이터베이스 Feb21 4:43PM
                    </a>
                    <a className={classes.writing}>Dapp Feb21 4:43PM</a>
                    <a className={classes.writing}>
                        블록체인 개발환경과 블록체인 기초 Feb21 4:43PM
                    </a>
                    <a className={classes.writing}>가스비 계산 Feb21 4:43PM</a>
                    <a className={classes.writing}>
                        대표지갑 사용하기 Feb21 4:43PM
                    </a>
                    <a className={classes.writing}>
                        테스트코인 받아오는방법 Feb21 4:43PM
                    </a>
                    <a className={classes.writing}>지갑관리 Feb21 4:43PM</a>
                </div>
            </div>
            <div className={classes.projectSections}>
                <div className={classes.title}>
                    {" "}
                    이달의 서비스
                    <span className={classes.description}>
                        개인적으로 제작해보고 싶었던 웹서비스를 제공하는
                        페이지입니다. 한번 사용해보세요~ 이번달 서비스는 "나의
                        운세" 서비스입니다.
                    </span>
                </div>
                <div className={classes.bodyWrap}>
                    <div className={classes.card}> 나의 운세 보러가기</div>
                </div>
            </div>
            <div className={classes.projectSections}>
                <div className={classes.title}>
                    문의하기
                    <span className={classes.description}>
                        개인문의는 아래 정보로 부탁드리겠습니다.
                    </span>
                </div>
                <div className={classes.bodyWrap}></div>
            </div>
        </div>
    );
};

export default Main;
