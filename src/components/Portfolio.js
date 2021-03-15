import React from 'react'

const Portfolio = () => {
    return (
        <div classNameName="container ml-auto mr-auto card-deck mt-3">
            <div className="row mt-5">
                <div className=" col-md-4">
                    <div className="card m-3 p-2 text-center">
                        <a href="https://makeyourmadlib.herokuapp.com/" target="_blank" className="card-link">
                            <img className="card-img-top img-fluid mx-auto" src="./assets/libmaker.png" alt="Card image cap" />
                        </a>          
                        <div classNameName="card-body">
                            <h5 className="card-title">LibMaker 3000</h5>            
                            <a href="https://github.com/thorgriffs/make-your-madlibs" target="_blank" className="card-link">GitHub</a>
                        </div>
                    </div>
                </div>
                <div className=" col-md-4">
                    <div className="card m-3 p-2 text-center">
                        <a href="https://whispering-thicket-86767.herokuapp.com/" target="_blank" className="card-link">
                            <img className="card-img-top img-fluid mx-auto" src="./assets/eat-da-burger.png" alt="Card image cap" />
                        </a>          
                        <div className="card-body">
                            <h5 className="card-title">Eat-Da-Burger</h5>            
                            <a href="https://github.com/thorgriffs/burger" target="_blank" className="card-link">GitHub</a>
                        </div>
                    </div>
                </div>
                <div className=" col-md-4">
                    <div className="card m-3 p-2 text-center">
                        <a href="https://thorgriffs.github.io/pw-gen/" target="_blank" className="card-link">
                            <img className="card-img-top img-fluid mx-auto" src="./assets/generated-password.png" alt="Card image cap" />
                        </a>          
                        <div className="card-body">
                            <h5 className="card-title">Password Generator</h5>
                            <a href="https://github.com/thorgriffs/pw-gen" target="_blank" className="card-link" >GitHub</a>
                        </div>
                    </div>
                </div>      
                <div className=" col-md-4">
                    <div className="card m-3 p-2 text-center">
                        <a href="https://thorgriffs.github.io/weather-dashboard/" target="_blank" className="card-link" >
                            <img className="card-img-top img-fluid mx-auto" src="./assets/weather-dashboard.png" alt="Card image cap" />
                        </a>          
                        <div className="card-body">
                            <h5 className="card-title">Weather Dashboard</h5>            
                            <a href="https://github.com/thorgriffs/weather-dashboard" target="_blank" className="card-link" >GitHub</a>
                        </div>
                    </div>
                </div>
                <div className=" col-md-4">
                    <div className="card m-3 p-2 text-center">
                        <a href="https://thorgriffs.github.io/work-day-scheduler/" target="_blank" className="card-link" >
                            <img className="card-img-top img-fluid mx-auto" src="./assets/work-day-scheduler.png" alt="Card image cap" />
                        </a>          
                        <div className="card-body">
                            <h5 className="card-title">Work Day Scheduler</h5>            
                            <a href="https://github.com/thorgriffs/work-day-scheduler" target="_blank" className="card-link" >GitHub</a>
                        </div>
                    </div>
                </div>
            <div className=" col-md-4">
                <div className="card m-3 p-2 text-center">
                    <a href="https://thorgriffs.github.io/taco-adventure/" target="_blank" className="card-link">
                        <img className="card-img-top img-fluid mx-auto" src="./assets/taco-adventure.png" alt="Card image cap" />
                    </a>          
                    <div className="card-body">
                        <h5 className="card-title">Taco Adventure</h5>            
                        <a href="https://github.com/thorgriffs/taco-adventure" target="_blank" className="card-link" >GitHub</a>
                    </div>
                </div>
            </div>      
        </div>
  </div>
    )
}

export default Portfolio
