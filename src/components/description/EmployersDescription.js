import React, { useState, useEffect } from 'react';
import { Fade, Slide } from 'react-awesome-reveal'

const EmployersDescription = () => {
    const employeeCount = 30;
    const [start, setStart] = useState(0);

    const porcentage = () => {
        if (start < employeeCount) {
            setStart(prevCount => prevCount + 1)
        }
    }

    useEffect(() => {
        if (start > 0 && start < employeeCount) {
            setTimeout(() => {
                setStart(prevCount => prevCount + 1)
            }, 10)
        }
    }, [start])


    return (
        <div className="center_wrapper">
            <div className="employer_wrapper">

                <Fade
                    onVisibilityChange={(inView) => {
                        if (inView) {
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
                        <h3>Meet the employers</h3>
                        <p>
                            Participating organizations include AltaML, Athennian, Avanti, Bench, Blockthrough, Calgary Economic Development, CDW, Clio, Coinbase, Helcim, Hexagon, LodgeLink, Magnet Forensics, Microserve, Mikata Health, Moneris, Neo Financial, OneWealth, OpenText, Plankk, Propra, Replicon, SkipTheDishes, Symend, TELUS, White Whale, Wipro, Xerris, York University, and more.
                        </p>
                        
                        
                    </div>

                </Slide>

            </div>
        </div>
    )
}

export default EmployersDescription