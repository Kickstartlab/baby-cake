import React, { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function ProgressBar() {

    const [percentage, setPercentage] = useState(0);
    const [percentage1, setPercentage1] = useState(0);
    const [percentage2, setPercentage2] = useState(0);
    const [percentage3, setPercentage3] = useState(0);



    useEffect(() => {
        setTimeout(() => {
            if (percentage < 10) {
                setPercentage(percentage + 1);
            }

            if (percentage1 < 5) {
                setPercentage1(percentage1 + 1);
            }

            if (percentage2 < 4) {
                setPercentage2(percentage2 + 1);
            }

            if (percentage3 < 1) {
                setPercentage3(percentage3 + 1);
            }
        }, 50);
    }, [percentage])

    return (
        <div>
            <div style={{ color: "#fff", textAlign: "center", display: "flex", alignItems: "baseline", justifyContent: "space-between", columnGap: "20px", rowGap: "30px", flexWrap: "wrap" }}>
                <div style={{ width: 150, display: "flex", flexDirection: "column", alignItems: "center", rowGap: "25px", }}>
                    <CircularProgressbar value={percentage} text={`${percentage}%`} styles={buildStyles({
                        textColor: '#232340',
                        pathColor: '#F8C0DE',
                    })} />
                    <i>Buy/Sell tax</i>
                </div>


                <div style={{ width: 150, display: "flex", flexDirection: "column", alignItems: "center", rowGap: "25px", }}>
                    <CircularProgressbar value={percentage1} text={`${percentage1}%`} styles={buildStyles({
                        textColor: '#232340',
                        pathColor: '#F8C0DE',
                    })} />
                    <i>CAKE rewards</i>
                </div>

                <div style={{ width: 150, display: "flex", flexDirection: "column", alignItems: "center", rowGap: "25px", }}>
                    <CircularProgressbar value={percentage2} text={`${percentage2}%`} styles={buildStyles({
                        textColor: '#232340',
                        pathColor: '#F8C0DE',
                    })} />
                    <i>marketing</i>
                </div>

                <div style={{ width: 150, display: "flex", flexDirection: "column", alignItems: "center", rowGap: "25px", }}>
                    <CircularProgressbar value={percentage3} text={`${percentage3}%`} styles={buildStyles({
                        textColor: '#232340',
                        pathColor: '#F8C0DE',
                    })} />
                    <i> liquidity pool</i>
                </div>
            </div >
        </div>
    );
}

export default ProgressBar
