import React,{ useState, useEffect } from 'react';
import { Fade, Slide } from 'react-awesome-reveal'

const EmployersDescription = () => {
    const employeeCount = 30;
    const [start,setStart] = useState(0);

    const porcentage = () => {
        if(start < employeeCount){
            setStart(prevCount => prevCount+1)
        }   
    }

    useEffect(()=>{
        if( start > 0 && start < employeeCount){
            setTimeout(()=>{
                setStart(prevCount => prevCount+1)
            },10)
        }
    },[start])
    

    return(
        <div className="center_wrapper">
            <div className="employer_wrapper">
                 
                <Fade
                    onVisibilityChange={ (inView) => {
                        if(inView){
                            porcentage()
                        }
                    }}
                >
                    <div className="employers_count">
                        <span>{start}+</span>
                        <span>Employers</span>
                    </div>  
                </Fade>

                <Slide right>
                    <div className="employee_description">
                        <h3>Purchase ticket before 20th June</h3>
                        <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        </p>
                    </div>

                </Slide>

            </div>
        </div>
    )
}

export default EmployersDescription