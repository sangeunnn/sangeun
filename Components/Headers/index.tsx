import { useStyles } from "./styles";
import downIcon from "../../public/down-arrow.png";
import logo from "../../public/next.svg";
import Link from "next/link";
import Image from "next/image";

const Header = (): JSX.Element => {
    const classes = useStyles();

    return (
        <div className={classes.headerWrap}>
            <a className={classes.logoWrap}>
                <Image src={logo} alt="logo" className={classes.logo} />
            </a>
            <div className={classes.btnGroupWrap}>
                <a href="/introduce" className={classes.navButton}>
                    프로젝트소개
                </a>
                <a href="/writings" className={classes.navButton}>
                    작성물
                </a>
                <a href="/new" className={classes.navButton}>
                    이달의 서비스
                </a>
                <a href="/inquery" className={classes.navButton}>
                    서비스문의
                </a>
                <a className={classes.navButton}>
                    <Image
                        className={classes.icon}
                        src={downIcon}
                        alt="downloads"
                    />
                </a>
            </div>
        </div>
    );
};
export default Header;
