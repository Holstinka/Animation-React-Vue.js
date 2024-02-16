import React from "react";

class CatAndBalls extends React.Component{

    render(){
        return(
            <div className="box_for_ball">
                <div className="balls_cat">
                    <div className="category">
                        <div className="cat">
                            <p>Cat 1</p>
                        </div>
                        <div className="ball" />
                    </div>
                    <div className="category">
                        <div className="cat">
                            <p>Cat 2</p>
                        </div>
                        <div className="ball" />
                    </div>
                    <div className="category">
                        <div className="cat">
                            <p>Cat 3</p>
                        </div>
                        <div className="ball" />
                    </div>  
                    
                </div>
            </div>
        )
    }

}

export default CatAndBalls