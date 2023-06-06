import React from 'react'
import "./Addform.scss"
import { v4 as uuidv4 } from 'uuid';
function Addform(props) {
    const {setShowAddform,AddnewMovie} = props;

    let name ="";
    let surname = "";
    let img = "";

    function addMovie(){
        if(name !== "" && surname !=="" && img !==""){
      const newMovie= {
          name,surname,img,
          id:uuidv4()
        }
        AddnewMovie(newMovie);
        setShowAddform(false);
    }
 }

    
    return (
        <>
            <div className='addform'>
                <div className="addform_container">
                    <div className='.addform_content'>
                        <div>
                            <label htmlFor="name">Name</label> <br />
                            <input onClick={e=> name = e.target.value} type="text" name="" id="name" />
                        </div>
                        <div>
                            <label htmlFor="surname">Surname</label> <br />
                            <input onClick={e=> surname = e.target.value} type="text" name="" id="surname" />
                        </div>
                        <div>
                            <label htmlFor="img">IMG</label> <br />
                            <input onClick={e=> img = e.target.value} type="text" name="" id="img" />
                        </div>
                        <div>
                            <button onClick={addMovie} className='elave_et'>Elave et</button>
                            <button onClick={()=> setShowAddform(false)} className='cixis'>Cixis</button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Addform