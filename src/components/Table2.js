import React, {useMemo, useState,useEffect} from 'react'
import { v4 as uuidv4 } from "uuid";
import {useTable} from 'react-table'
import axios from 'axios'
import {Columns_t} from './Columns'
import Pagination from "./Pagination";

import './table.css'

export const Table2 = () => {

    const [posts,setPosts]=useState([]);
    
    useEffect(()=>{
      const fetch=async()=> {
        const res= await axios.get('https://canopy-frontend-task.vercel.app/api/transactions')
        
              
                setPosts(res.data['transactions'])
    }
    fetch();
    },[]);


    console.log(posts);

    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(10);
  
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);
  
    const paginate = (pageNumber) => {
      setCurrentPage(pageNumber);
    };



    const columns=useMemo(()=>Columns_t,[])
    const data=useMemo(()=>currentPost)
    const tableInstance=  useTable({
        columns,
        data
    })

    const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow}=tableInstance
    
    return (
        <div>
            
             <table {...getTableProps()}>
            <thead>
                {
                    headerGroups.map((headerGroup)=>(
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column)=>(
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}                  
                        </tr>
                    ))
                }                
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    rows.map((row)=>{
                        prepareRow(row)
                        return(
                            <tr {...row.getRowProps()}>
                                {
                                    row.cells.map((cell)=>{
                                        return (
                                            <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                        )
                                    })
                                }
                            </tr>
                        )
                    })
                }                
            </tbody>
            </table>  


            <div className='page_no'>
            <Pagination
        postPerPage={postPerPage}
        totalPost={posts.length}
        paginate={paginate}
      />        </div>   
        </div>
    )
}
