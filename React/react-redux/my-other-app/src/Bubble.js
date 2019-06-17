import React from 'react';


const Bubble = ({bubbles, deleteBubble}) => {

// class Bubble extends Component {
    // render() {
    // console.log(this.props);
    
    // console.log(props);

    // const { bubbles } = props; // destructuring 
    const bubbleList = bubbles.map((b) => {
        return (
            <div className="bubble" key={b.id}>
                <div> {b.name} </div>
                <div> {b.age} </div>
                <div> {b.jacket} </div>
                <button onClick={() => {deleteBubble(b.id)}}> Delete </button>
            </div>
        )
    });

    return(
        <div className="bubbles-list">
            { bubbleList }
        </div>
    );
    // }
}

export default Bubble;
