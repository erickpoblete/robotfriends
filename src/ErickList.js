import React from 'react';
import Card from './Card';

const ErickList = ({ Erick }) => {
    return (
        <div>
            { 
                Erick.map((user, i) => {
                    return (
                            <Card 
                                key={i} 
                                id={Erick[i].id} 
                                name={Erick[i].name} 
                                email={Erick[i].email}    
                                />
                            );
            })
            }
        </div>
    );
}

export default ErickList;