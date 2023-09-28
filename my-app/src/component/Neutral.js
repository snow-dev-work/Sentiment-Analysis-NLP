function Neutral(props) {
    return (
        <div style={{ backgroundColor: '#ffffcc'}}>
            <p style={{ color: 'black', fontSize: '20px' }}>{props.text.text}</p>
            <label style={{ color: 'black', fontSize: '20px', marginRight: '20px' }}>  Label :  {props.text.label}</label>
            <label style={{ color: 'black', fontSize: '20px' }}>  Score:  {props.text.score}</label>

        </div>
    );
}

export default Neutral;