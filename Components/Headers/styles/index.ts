import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
    headerWrap: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        height: "50px",
        borderBottom: "1px solid #e9ecef",
    },
    logoWrap: {
        display: "flex",
        boxSizing: "border-box",
        padding: "10px",
        cursor: "pointer",
    },
    logo: {
        width: "50px",
    },
    btnGroupWrap: {
        display: "flex",
        alignItems: "center",
        padding: "10px",
    },
    navButton: {
        boxSizing: "border-box",
        display: "flex",
        padding: "10px",
        cursor: "pointer",
        textDecoration: "none",
    },
    icon: {
        width: "20px",
        height: "20px",
    },
});
