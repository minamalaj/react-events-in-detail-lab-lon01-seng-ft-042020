import React from 'react'; 

class CoordinatesButton extends React.Component { 

    handleClick = (e) => { 
        const mouse = [e.clientX, e.clientY]
        this.props.onReceiveCoordinates(mouse)
        // this.props.onReceiveCoordinats([e.clientX, e.clientY])
    }

    render() { 
        return ( 
            <button onClick={this.handleClick} />
        ) 
    }
}

export default CoordinatesButton;