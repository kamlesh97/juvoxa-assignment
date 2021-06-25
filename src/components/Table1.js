import React, {useMemo, useState,useEffect} from 'react'
import { v4 as uuidv4 } from "uuid";
import {useTable} from 'react-table'
import axios from 'axios'
import {Columns} from './Columns'
import './table.css'
import Pagination from "./Pagination";

export const Table1 = () => {
    const [posts,setPosts]=useState([]);

    useEffect(()=>{
      const fetch=async()=> {
        const res= await axios.get('https://canopy-frontend-task.now.sh/api/holdings')
        
              
                setPosts(res.data['payload'])
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

    const columns=useMemo(()=>Columns,[])
    const data=useMemo(()=>currentPost)
    const tableInstance=  useTable({
        columns,
        data
    })

    const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow}=tableInstance
    
    return (
        <div>
            {/* {posts.map(post=>(
                <li key={uuidv4()}>{post.name}</li>
            ))}             */}

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

            <Pagination
        postPerPage={postPerPage}
        totalPost={posts.length}
        paginate={paginate}
      />    

        </div>
    )
}
