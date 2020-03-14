import React from 'react' 
 
import Spinner from 'react-spinkit' 
 
const Loading = ({ loading, message }) => { 
    return loading ? ( 
        <div className='overlay-content'> 
            <div className='wrapper'> 
                <Spinner 
                    name='ball-spin-fade-loader'
                    color='red'
                /> 
            </div> 
        </div> 
    ) : null 
} 
 
export default Loading