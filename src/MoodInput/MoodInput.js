// imports
import{ Component } from 'react'; // importing just component from react
import MoodList from '../MoodList/MoodList';

// class
class MoodInput extends Component{
    state ={
        currentMood: '',
        moods: []
    } //end state

    addMood = () =>{
        console.log( 'in addMood' );
        this.setState({
        // take existing moods and will add our current mood
            moods: [...this.state.moods, this.state.currentMood] // need spread to add all keys from object
        }) // end set state

    } // end addMood

    handleChangeFor = (event) =>{
        // console.log('in handleChangeFor:', event.target.value); this just lets us see in real time the letters being added
        // event is that something was typed
        // target is the text box itself, the value is the input text
        this.setState({
            currentMood: event.target.value 
        }) // end set state
    } // end handleChangeFor

    render(){
        return(
            <div>
                <h2>Change Mood?</h2>
                <input text="text" placeholder="current mood" 
                                    onChange={ (event) => this.handleChangeFor (event)}></input>
                <button onClick={ this.addMood}>Apply Mood</button>
                <p>MoodInput state: {JSON.stringify(this.state)}</p>
                {/*our prop is moods, which is taco*/}
                <MoodList moods={ this.state.moods}/> 
            </div>
        ) // end return
    } // end render
} // end class

// export 
export default MoodInput;



// onClick added to button, will just run the addMood function