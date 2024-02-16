import React from "react";
import CatAndBalls from "./pages/components/category_and_bolls";
import Balls from "./pages/components/balls";
import './css/balls.css'

class App extends React.Component{
    
    render(){
        return(
            <div>
                
                <Balls /> 

                <CatAndBalls />
                <footer />
            </div>
            
        )
    }
}
export default App