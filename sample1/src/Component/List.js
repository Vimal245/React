export default function List()
{
    const game=["gta","wd","gow"]
    const result=game.map((ani,index)=><li key={index}>{index}=> {ani}</li>)
    return(
        <div>
            <ul type="none">
                {result}
            </ul>
        </div>
    )
    
}