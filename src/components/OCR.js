import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, withRouter } from 'react-router-dom';
import { listCreateCard } from '../actions/cardActions';
import {listAllDirs, listOcrDetails} from '../actions/ocrActions'


const  OC = ({match}) => {

  const history = useHistory();
    const [type, setType] = useState("1")
    const [power, setPower] = useState("")
    const [prV, setPrV] = useState("")
    const [secV, setSecV] = useState("")
    const [shielded, setShielded] = useState(null)
    const [date, setDate] = useState("2016-05-19")
    const [author, setAuthor] = useState("Егорова Т.М.")
    const [bid, setBid] = useState(null)
    const [tested, setTested] = useState(true)
    const [info, setInfo] = useState("")
    const [conn_type, setConn] = useState("")
    const [coil, setCoil] = useState(2)
    const [mes, setMes] = useState(true)

    const dispatch = useDispatch()

    const ocrDetails = useSelector(state => state.ocrDetails)
    const {loading, error, card} = ocrDetails
  
    useEffect(() => {
      dispatch(listOcrDetails(match.params.id, localStorage.getItem('dirInfo')))
    }, [dispatch, match])

    let onClick = () => {

      dispatch(listCreateCard(type, power, prV, secV, date, author, mes, shielded, tested, bid, conn_type, coil, info, card.img, localStorage.getItem("dirInfo"), card.name, localStorage.getItem("indexInfo"), localStorage.getItem("dirId")))
      history.push(`/ocr/${parseInt(match.params.id)+1}`)
      localStorage.removeItem("indexInfo")
      localStorage.setItem("indexInfo", parseInt(match.params.id)+1)
      console.log(localStorage.getItem('indexInfo'))
      console.log(localStorage.getItem('dirId'))
    }



    return( 
      <div>
        <table>
          <tr>
            <td align='justify' valign='top'>
          <table className="table">
              <th></th>
              <tbody>
                  <tr>
          </tr>
          <tr>
              <td align='justify'>
                    <h5>Вид трансформатора</h5>
                    <select className="form-select" name="type" id="selector" onChange={(e)=>setType(e.target.value)} value={type}>
                      <option value={1} selected>ОСМ</option>
                      <option value={2}>ОСВМ</option>
                      <option value={3}>ОСЗМ</option>
                      <option value={4}>ОСМ1</option>
                      <option value={6}>ТСМ</option>
                      <option value={7}>ТСЗМ</option>
                      <option value={8}>ТСВМ</option>
                      <option value={9}>ТСЗИ</option>
                </select>
              </td>
            </tr>
              <tr>
                  <td align='justify'>
                    <h5>Мощность трансформатора</h5>
                    <input className='cr_input' value={power} name='power' onChange={(e)=>setPower(e.target.value)} placeholder={power}></input>
              </td>
            </tr>
            <tr>
                  <td align='justify'>
                    <h5>Первичное напряжение</h5>
                    <input className='cr_input' value={prV} name='prV' onChange={(e)=>setPrV(e.target.value)} /*placeholder={org.prV}*/></input>
              </td>
            </tr>
            <tr>
                  <td align='justify'>
                    <h5>Вторичное напряжение</h5>
                    <input className='cr_input' value={secV} name='secV' onChange={(e)=>setSecV(e.target.value)} /*placeholder={org.secV}*/></input>
              </td>
            </tr>
            <tr>
                  <td align='justify'>
                    <h5>Дата создания</h5>
                    <input className='cr_input' value={date} name='date' onChange={(e)=>setDate(e.target.value)} /*placeholder={org.date}*/></input>
              </td>
            </tr>
            <tr>
                  <td align='justify'>
                    <h5>Автор</h5>
                    <input className='cr_input' value={author} name='author' onChange={(e)=>setAuthor(e.target.value)} /*placeholder={org.author}*/></input>
              </td>
            </tr>
            <tr>
                  <td align='justify'>
                    <h5>Единицы измерения мощности</h5>
                    <select className="form-select" name="type" id="selector" onChange={(e)=>setMes(e.target.value)} value={mes}>
                      <option value={"0"} selected>кВа</option>
                      <option value={"1"}>кВт</option>
                </select>
              </td>
            </tr>
            <tr>
                  <td align='justify'>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value={shielded} onChange={(e)=>setShielded(e.target.value)}/>
                    <label class="form-check-label"><h5>Экранирован</h5></label>
                  </div>
              </td>
            </tr>
            <tr>
                  <td align='justify'>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value={tested} onChange={(e)=>setTested(e.target.value)} checked='true'/>
                    <label class="form-check-label"><h5>Протестирован</h5></label>
                  </div>
              </td>
            </tr>
            <tr>
                  <td align='justify'>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value={bid} onChange={(e)=>setBid(e.target.value)} />
                    <label class="form-check-label"><h5>Спец. требования</h5></label>
                  </div>
              </td>
            </tr>
            <tr>
                  <td align='justify'>
                    <h5>Тип связи</h5>
                    <input className='cr_input' value={conn_type} name='conn_type' onChange={(e)=>setConn(e.target.value)} /*placeholder={org.conn_type}*/></input>
              </td>
            </tr>
            <tr>
                  <td align='justify'>
                    <h5>Количество катушек</h5>
                    <input className='cr_input' value={coil} name='coil' onChange={(e)=>setCoil(e.target.value)} /*placeholder={org.coil}*/></input>
              </td>
            </tr>
            <tr>
                  <td align='justify'>
                    <h5>Комментарии</h5>
                    <input className='cr_input' value={info} name='info' onChange={(e)=>setInfo(e.target.value)} /*placeholder={org.info}*/></input>
              </td>
            </tr>
            <tr>
                  <td align='justify'>
                  {localStorage.getItem('lastIndexInfo')-1==match.params.id ? 
                  <button type="button"  class="btn btn-primary m-1 btn-light" onClick={onClick}>
                    <Link to="/ocr/">
                    Подтвердить
                    </Link></button> :
                  <button type="button"  class="btn btn-primary m-1 btn-light" onClick={onClick}>Подтвердить и продолжить</button>}
              </td>
            </tr>
          </tbody>
          </table>
          </td>

          <td align='center' valign='top'>
          <img className="card_img" src={"data:image/png;base64, "+card.img}></img>
          
          </td>
          </tr>
          </table>
  </div>)
  }


const OCR =withRouter(OC) 
export default OCR;

/* <img className="card_img" src={"data:image/png;base64, "+card.img}></img>*/