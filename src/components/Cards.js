import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { listCards } from '../actions/cardActions';

let types = [
    {t_id:1, name: "ОСМ" },
    {t_id:2, name: "ОСВМ" },
    {t_id:3, name: "ОСЗМ" },
    {t_id:4, name: "ОСМ1" },
    {t_id:5, name: "ТСМ" },
    {t_id:6, name: "ТСЗМ" },
    {t_id:7, name: "ТСЗМ" },
    {t_id:8, name: "ТСВМ" },
    {t_id:9, name: "ТСЗИ" },
]

const  Cards = () => {
    const [type, setType] = useState("1")
    const dispatch = useDispatch()
    const cardsList = useSelector(state => state.cardsList)
    const {loading, error, cards} = cardsList
  
    useEffect(() => {
      dispatch(listCards())
    }, [dispatch])

    return( 
      <div>
         <div className="filter">    
        <h5>Вид трансформатора</h5>
            <select className="form-select" name="type" id="selector" onChange={(e)=>setType(e.target.value)} value={type}>
            <option value={0} selected>Не выбрано</option>
                <option value={1}>ОСМ</option>
                <option value={2}>ОСВМ</option>
                <option value={3}>ОСЗМ</option>
                <option value={4}>ОСМ1</option>
                <option value={6}>ТСМ</option>
                <option value={7}>ТСЗМ</option>
                <option value={8}>ТСВМ</option>
                <option value={9}>ТСЗИ</option>
        </select>
    </div>   
               <table className="table">
                   <thead>
                        <th>Файл</th>
                       <th>Тип</th>
                       <th>Мощность</th>
                       <th>Перв. V</th>
                       <th>Втор. V</th>
                       <th>Экран</th>
                       <th>Заявка</th>
                       <th>Тип соединения</th>
                       <th>Число катушек</th>
                       <th>Ед. мощности</th>
                   </thead>
                   <tbody>
                   {cards.map((item, i)=>{
                        return (
                            <tr>
                        <td>{item.file}</td>
                        <td>{item.type}</td>
                        <td>{item.power}</td>
                        <td>{item.pr_v}</td>
                        <td>{item.sec_v}</td>
                        <td>{item.shield ? "Да" : "Нет"}</td>
                        <td>{item.bid ? "Да" : "Нет"}</td>
                        <td>{item.conn_type}</td>
                        <td>{item.coil_num}</td>
                        <td>{item.mes}</td>
                        </tr>)})}
                   </tbody>
               </table>

  </div>)
  }
//}

export default Cards;