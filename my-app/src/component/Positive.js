function Positive(props) {
    return ( 
        <div style={{backgroundColor: '#04aa6d'}}>
            <p style={{color: 'black', fontSize: '20px'}}>{props.text.text}</p>
            <label style={{color: 'black', fontSize: '20px', marginRight: '20px'}}>  Label:  {props.text.label}</label>
            <label style={{color: 'black', fontSize: '20px'}}>  Score:  {props.text.score}</label>
        </div>
     );
}

export default Positive;