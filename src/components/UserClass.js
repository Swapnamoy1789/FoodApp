import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            //count1:0,
            userInfo:{
                name:"Dummy",
                location:"Default",
                //avatar_url:"http://dummy-photo.com"
            },
            };
    }
    async componentDidMount(){
        const data= await fetch(" https://api.github.com/users/akshaymarch7");
        const json= await data.json();
        this.setState({
            userInfo:json,
        })
        console.log(json); 
    }
    render(){
        //const{name,location}=this.props;
        //const {count1}=this.state;
        const {name, location,avatar_url} = this.state.userInfo;        return(
            <div className="user-card">
            <img src={avatar_url}/>
            <h2>Name:{name}</h2>
            <h3>Location:{location}</h3>
            <h4>Contact: @swap2001</h4>
            </div>
        );
    }
}
export default UserClass;