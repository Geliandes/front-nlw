interface titleH1 {
    text: string,
    img: any
}


export function TitleHomePage(props: titleH1){
    return(
        <h1>
            <img src={props.img}></img>
            <span className="indent-[110%] overflow-x-hidden whitespace-nowrap absolute">{props.text}</span>
        </h1>
    )
}