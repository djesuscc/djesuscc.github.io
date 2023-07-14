import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Logo from '../../public/imgs/rick-and-morty.png'
import { getListCharacters } from '../actions/characters'
import Card from '../components/Card/'
import Pagination from '../components/Pagination'
import Search from '../components/Search'

const Home = () => {
    const dispatch = useDispatch()
    const [pageNumber, setPageNumber] = useState(1)
    const [search, setSearch] = useState()
    const {
        characters: {
            results,
            info
        }
    } = useSelector(state => state)

    useEffect(() => {
        dispatch(getListCharacters(pageNumber, search))
    }, [pageNumber, search])


    return (
        <div className='empty animate__animated animate__fadeIn h-100'>
            <div className='text-center'>
                <img className='logo' src={Logo} alt="logo" />
            </div>
            <div className='container'>
                <Search setSearch={setSearch} />
                <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4'>
                    {results?.map((character) => (
                        <div className="col">
                            <Card
                                key={character.id}
                                {...character}
                            />
                        </div>
                    ))}
                </div>
                <Pagination
                    setPageNumber={setPageNumber}
                    infoPages={info}
                />
                <div style={{ padding: '105px 0' }}></div>
            </div>
        </div>

    )
}

export default Home