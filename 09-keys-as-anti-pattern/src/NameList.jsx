export const NameList = () => {
    const names = ["Bruce", "Clark", "Diana"]
    
    const nameList = names.map((name, index) => {
        return (
            <h2>{index} - {name}</h2>
        )
    })

    return (
        <div>{nameList}</div>
    )
}