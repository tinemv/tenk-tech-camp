import { H2, P } from "@dnb/eufemia";


export default function StatCard({title, data}) {
    return (
        <div 
            style={{ display: "flex", 
            flexDirection: "column",
            padding: "2rem 4rem", 
            margin: "0.5rem",
            justifyContent: "space-between",
            borderRadius:"0.25rem",
            backgroundColor: "aqua",
            }}
            >
            <P>{title}</P>
            <H2>{data}</H2>
        </div>
    )
}