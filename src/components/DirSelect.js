import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { listAllDirs } from '../actions/ocrActions';
import Loader from './Loader';
import Message from './Message';



const  DirSelect = () => {
    const history = useHistory();
    const [dir, setDir] = useState(0)
    const [visible, setVisible] = useState(true)
    const dispatch = useDispatch()
    const dirsList = useSelector(state => state.dirsList)
    const {loading, error, dirs} = dirsList
  
    useEffect(() => {
      dispatch(listAllDirs())
    }, [dispatch])

    let onClick = (e) => {
        localStorage.removeItem('dirInfo')
        localStorage.removeItem('dirId')
        localStorage.removeItem('indexInfo')
        localStorage.removeItem('lastIndexInfo')
        localStorage.setItem('dirInfo', dirs[dir].name)
        localStorage.setItem('dirId', dirs[dir].d_id)
        localStorage.setItem('indexInfo', dirs[dir].last)
        localStorage.setItem('lastIndexInfo', dirs[dir].count-1)
        history.push(`/ocr/${dirs[dir].last}`)
        console.log(dirs[dir].d_id)
      }


    let onChange = (e) => {
        setDir(e.target.value)
        dirs[dir].last == dirs[dir].count-1 ? setVisible(false) : setVisible(true)
      }
    return( 
      <div className="dir_selector">
          <h5>Выберите директорию</h5>
          {loading ? <Loader/> :  error ? <Message variant='danger'>{error}</Message> :
              <select className="form-select" name="dir" id="selector" value={dir} onChange={onChange}>
              <option value='-1' disabled>Не выбрано</option>
                {dirs.map((item, i) => { return(
                <option value={i}>{item.name}</option>
                )})}
                </select>}
        { !visible ? <Message variant='success'>Все карты распознаны</Message> :
        <button type="button"  class="btn btn-primary m-1 btn-light" onClick={onClick}>
            Подтвердить
            </button>}
  </div>)
  }


export default DirSelect;
/* <Link to={`/ocr/1`}>
            Подтвердить
            </Link>
             dirs[dir].last == dirs[dir].count-1 ? setVisible(false) : setVisible(true)*/