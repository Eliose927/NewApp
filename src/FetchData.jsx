import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
const FetchData = ({ cat }) => {
    const [data, setdata] = useState("");
    useEffect(() => {
        axios.get(
         
                cat ? `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=687053564e704e45a5407d5b519fd570`:
                "https://newsapi.org/v2/top-headlines?country=in&apiKey=687053564e704e45a5407d5b519fd570"
            )
            .then((response) => {
                console.log(response.data.articles)
                setdata(response.data.articles)
            })

    }, [cat]);
    return (
        <div className="container my-4">
            <h3><u>Top Headlines</u></h3>
            <div className="container d-flex justify-content-center align-items-center flex-column my-3" style={{minHeight:"100vh"}}>{data ? data.map((items, index) => (
                <>
                    <div className="container my-3 p-3" style={{width:"600px", boxShadow:"2px 2px 10px silver", borderRadius:"10px"}}>
                    <h5 className="my-2">{items.title}</h5>
                    <div className=" d-flex justify-content-center align-items-center">
                    <img
                      alt="Image not found" src={items.urlToImage} className="img-fluid" style={{width:"100%",height:"300px",objectFit:"cover"}}
                    />

                    </div>
                    
                    <p className="my-1">{items.content}</p>
                    <Link to={items.url} target="blank">View More</Link>
                    </div>
                </>
            ))
                : "Loading.."}
            </div>
        </div>
    );
};


export default FetchData;
