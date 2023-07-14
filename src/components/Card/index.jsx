import React, { useState } from 'react';

const Card = (props) => {
    const [flip, setFlip] = useState(false)
    function formatDate(dateString) {
        const date = new Date(dateString);
        const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
        return date.toLocaleDateString(undefined, options);
    }
    const statusColor = {
        alive: 'text-bg-success',
        unknown: 'text-bg-dark',
        dead: 'text-bg-danger'
    }
    const {
        id,
        name,
        status,
        image,
        species,
        type,
        origin,
        episode,
        created,
    } = props
    const FrontSide = () => {
        return (
            <div className='card-front' onClick={() => setFlip(!flip)}>
                <img
                    src={image}
                    className="card-img rounded-bottom-0"
                    alt={name}
                    width={'304px'}
                    height={'304px'}
                />
                <div className="card-body">
                    <h5 className="card-title fs-4 fw-2 text-truncate">
                        {name}
                    </h5>

                    <p className="card-text">
                        <small
                            className={`badge ${statusColor[status.toLowerCase()]} text-capitalize`}>
                            {status}
                        </small>
                    </p>
                </div>
            </div>
        )
    }
    const BackSide = () => {
        return (
            <div className='card-back' onClick={() => setFlip(!flip)}>
                <div className="card-body d-flex flex-column justify-content-around h-100">
                    <img src={image}
                        class="rounded mx-auto d-block" alt="..."
                        width={'100px'}
                    />
                    <h3 className="card-title fs-1 fw-2 text-center text-white">
                        {name}
                    </h3>
                    <ul className='list-unstyled content-box rounded-start-2 rounded-end-2 border border-warning mb-0'>
                        <li className='box rounded-start-2 border-end border-warning'>
                            <span>
                                {species}
                            </span>
                            <small className=''>
                                Specie
                            </small>
                        </li>
                        <li className='box'>
                            <span>
                                {episode?.length}
                            </span>
                            <small className=''>
                                Episodes
                            </small>
                        </li>
                        <li className='box border-start rounded-end-2 border-warning'>
                            <span>
                                {formatDate(created)}
                            </span>
                            <small className=''>
                                Created
                            </small>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
    return (
        <div className="flip-card-container" style={{ maxWidth: 540 }}>
            <div className={`card card-container ${flip ? 'flip' : ''}`}>
                <BackSide {...props} />
                <FrontSide {...props} />
            </div>
        </div>

    )
}

export default Card