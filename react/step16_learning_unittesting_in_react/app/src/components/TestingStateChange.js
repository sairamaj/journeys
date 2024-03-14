import { React, useEffect, useState } from 'react';

export default TestingStateChange = () => {
    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
        setLoaded(true)
    }, [])
    return (
        <div>
            {loaded && <h3> Page Loaded </h3>}
        </div>
    )
}