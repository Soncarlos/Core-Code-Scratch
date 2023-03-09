import React from 'react';


const Lista = ({ data }) => {

    return (
        <div>
            {data.map((item) => {
                const delReg = async () => {
                    await fetch(`http://localhost:3001/v1/to-do/${item.id}`,
                        {
                            method: "delete",
                        });
                }
                return (
                    <section className='list-container' key={item.id}>
                        <card className='task-container'>
                            <h3>{item.title} </h3>
                            <button className='button-task' onClick={delReg}>D</button>
                            <button className='button-task' onClick={delReg}>U</button>
                            <button className='button-task' onClick={delReg}>C</button>
                            <button className='button-task' onClick={delReg}>S</button>
                            <div className='clearfix'></div>
                            <p>{item.description}</p>

                        </card>
                        <div className='clearfix'></div>
                    </section>
                )
            })}
        </div >
    );
}
export default Lista;