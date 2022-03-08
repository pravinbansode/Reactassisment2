  
import React, {Component} from "react";
import "./form.css";

export class Form extends Component {

    state = {
        clicked:false,
        name:'',
        email:'',
        dept:'',
        rating:'',
        count:1,
        array:[]
    };


    onInputChange = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    changeState(val){
        this.setState({
            clicked:{val}
        })
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        console.log("Worked")
        const temp_obj = {
            name:this.state.name,
            email:this.state.email,
            dept:this.state.dept,
            rating:this.state.rating,
            count:this.state.count
        };

        this.state.array.push(temp_obj);

        this.setState({
            clicked:true,
            name:"",
            email:'',
            dept:"",
            rating:"",
            count:this.state.count +1
        });    
    } 
    

    render(){
        return(
            <div id="box1">
                <form>
                    <label>Name :</label>
                    <input className="box" type="text" id="name" value={this.state.value} name="name" onChange={this.onInputChange}/>
                    
                    <label >Email :</label>
                    <input className="box" type="text" id="email" value={this.state.value} name="email" onChange={this.onInputChange}/>
                    
                    <label >Department :</label>
                    <input className="box" type="text" name="dept" value={this.state.value} id="dept" onChange={this.onInputChange}/>
                    
                    <label >Rating :</label>
                    <input className="box" type="number" id="rate" value={this.state.value} name="rating" onChange={this.onInputChange}/>
                    
                </form>
                <button id="submit_button" type="submit" onClick={this.onFormSubmit.bind(this)}>Submit</button>
                <div id="data">
                    {this.state.array.length>0 && this.state.array.map( (ele) => {
                        return (
                            <div id="combinedata">
                                <h2> {ele.count} : {ele.name} || {ele.email}|| {ele.dept} || {ele.rating}</h2>
                            </div>
                        );
                    })}
                    </div>
            </div>
        )
    }
}


