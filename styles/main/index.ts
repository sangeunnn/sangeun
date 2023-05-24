import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
    root: {
        display: "flex",
        width: "100%",
        justifyContent: "center",
        color: "#000",
        flexDirection: "column",
        alignItems: "center",
    },
    projectSections: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        paddingTop: "50px",
    },
    title: {
        fontSize: "20px",
        padding: "40px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
    },
    bodyWrap: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "80%",
        alignItems: "center",
        color: "#e9ecef",
    },
    card: {
        display: "flex",
        width: "200px",
        height: "250px",
        alignItems: "center",
        border: "1px solid #e9ecef",
        justifyContent: "center",
        color: "#000",
        boxShadow: "0 1px 10px rgba(0,0,0,0.10), 0 1px 2px rgba(0,0,0,0.10)",
        transform: "all 0.3s",
        "&hover": {
            boxShadow:
                "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
        },
    },
    writingWrap: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "80%",
        alignItems: "center",
        color: "#e9ecef",
    },
    writing: {
        color: "#ababab",
    },
    category: {
        color: "#000",
    },
    description: {
        fontSize: "14px",
        display: "flex",
        width: "80%",
        boxSizing: "border-box",
        padding: "20px",
    },
});
