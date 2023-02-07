function VoteScale(props) {
    const voteValue = props.voteValue
    const range = [1,2,3]

    return (
        <div>
            {range.map((rangeElement) => 
                voteValue >= rangeElement ? <span key={rangeElement.toString()}>🍹</span> : null
            )}
        </div>
    )
}

export default VoteScale