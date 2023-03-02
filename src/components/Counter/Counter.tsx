import React, {useState} from 'react';

const Counter = () => {
    const [state, setState] = useState(0)
    const [CurrentN, setCurrentN] = useState('1')

    const OnChange = (value: number) => {
        setState(prev => prev + value)
    }
        return (
            <div>
                <div>
                    {state}
                </div>

                <div>
                    <button
                        onClick={() => OnChange(+1)}
                    >
                        Plus 1
                    </button>
                    <button
                        onClick={() => OnChange(-1)}
                    >
                        Minus 1
                    </button>
                    <button
                        onClick={() => OnChange(+5)}
                    >
                        Plus 5
                    </button>
                    <button
                        onClick={() => OnChange(-5)}
                    >
                        Minus 5
                    </button>
                    <div>
                        <input type = "text" value={CurrentN} onChange={(e)=>setCurrentN(e.target.value)}></input>
                        <button onClick={()=>OnChange(parseInt(CurrentN))}>жмай</button>
                    </div>
                </div>
            </div>
        );
    };

export default Counter;