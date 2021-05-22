import React, {useState, useEffect} from 'react';
import TableB from './cont/table_blog';

const Blogad = () =>{

    const [blog, setBlog] = useState([])

    const getBlog = () =>{
        fetch('http://localhost:4000/blog/')
        .then(res => res.json())
        .then(res => setBlog(res))
    }

    useEffect(()=> {
        getBlog()
    },[])

    return(
    <>
    <div class="animation">
        <div class="page-wrapper">
            <div class="page-container">
                <div class="main-content">
                    <div class="section__content section__content--p30">
                        <div class="container-fluid">
                            <div class="row">
                                <TableB blog={blog}/>
                            </div>
                        </div>
                    </div>
                        modalModificar
                        modalEliminar 

                    modalAgregar 
                </div>
            </div>
        </div>
    </div>
    </>
    );
}

export default Blogad; 