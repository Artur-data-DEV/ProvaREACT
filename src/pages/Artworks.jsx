import React, {useEffect, useState} from 'react'
import { Button, Table } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import apiArtic from "../services/apiArtic"
import { Link } from "react-router-dom";
import { IconBase } from 'react-icons/lib';

const Artworks = () => {

    const [arts, setArts] = useState([])

    useEffect(() => {   

        apiArtic.get("/artworks").then( resultado => {
            setArts(resultado.data.data)
    
        });

    }, []);

    

    return (
        <>
             
        
            <h1>Obras de Arte</h1>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        
                        <th>Detalhar</th>
                        <th>Titulo</th>
                        <th>Autor</th>
                        <th>Categoria</th>
                       
                    </tr>
                </thead>
                <tbody>
                    {arts.map((arts, i) => (
                        <tr key={i}>
                            <td>                              
                            <Link style={{ textDecoration: 'none' }} to={"/Artworks/" + arts.id}>
                                <div className="d-grid gap-2">
                                    <FaSearch/>
                                    <Button className="btn btn-dark">
                                        Mais Detalhes
                                    </Button>
                                </div>
                            </Link>
                            </td>
                            <td>{arts.title}</td>
                            <td>{arts.artist_title}</td>
                            <td>{arts.category_titles}</td>
                          
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}

 

export default Artworks
