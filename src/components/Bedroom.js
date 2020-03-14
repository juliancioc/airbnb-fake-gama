import React, { useEffect, useRef } from 'react';
import { useAsync } from 'react-async';

import Loading from './Loading';
import './style.css';

const loadBedrooms = async ({ signal }) => {
    const res = await fetch('https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72')
    console.log(res)
    if (!res.ok) throw new Error(res.statusText)
    return res.json()
}

function Bedroom() {
    const { data, error, isPending } = useAsync(loadBedrooms);
    console.log(data)
    let rafID = useRef(null)

    useEffect(() => {
        return () => {
            cancelAnimationFrame(rafID)
        }
    })

    if (isPending == false) return (
        <div className="loading">
            <Loading loading={true} />
        </div>
    )
    if (error) return `Something went wrong: ${error.message}`


    if (data) {
        return (
            <>
                <div className="header">
                    <h1>Airbnb Fake</h1>
                </div>
                <div className="container">
                    {data.map(bedrooms => (
                        <div className="card">
                            <img className="img-bedrom" src={bedrooms.photo} alt="Beedroms" />
                            <div className="description">
                                <p className="type">{bedrooms.property_type}</p>
                                <p className="name">{bedrooms.name}</p>
                                <p>Total {bedrooms.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
                            </div>
                        </div>

                    ))}
                </div>
                <div className="footer">
                    <p>
                        Developed By <a rel="noopener noreferrer" target="_blank" href="https://juliancio.com.br/">Juliâncio Carvalho</a> &copy;
                    </p>
                </div>
            </>
        )
    } else {
        return null
    }
}

export default Bedroom