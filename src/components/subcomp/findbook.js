import React from 'react'
import {ImSad} from 'react-icons/im'

function Findbook({findbook}) {
    
    let len = findbook.data.data.length  

  return (
    <> 
    {len != 0 ? 
    <>  
    <h1 className='table display-4 text-success mt-5 mb-5'>Totally {len} book matched</h1>
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Category</th>
                <th scope="col">Author</th>
                <th scope="col">Title</th>
                <th scope="col">Book</th>
                <th scope="col">CreatedBy</th>
                <th scope="col">CreatedAt</th>
                 
              </tr>
            </thead>
            <tbody >
              {findbook.data.data.map((e, i) => (
                <tr 
                key={i}
                >
                  <th scope="row">
                      
                      {i + 1}
                      </th>
                  <td className='use'>
                      
                      {e.category}
                  </td>
                  <td className='use2'>
                   
                    {e.author}
                  </td>
                  <td className='use2'>
                   
                    {e.title}
                  </td>
                  <td className='use2'>
    
                   <a href={e.booklink} target='_'>View Book</a> 
                 </td>
                  <td className='use2'>
                   
                    {e.createdBy}
                  </td>
                  <td>
                      
                      {new Date(e.createdAt).toLocaleDateString()}
                      </td>
                  
                </tr>
               ))} 
            </tbody>
          </table>
        </div>
      </div>
    </div> </>
       :
    <h2 className='bookss display-4'>No books matched&nbsp;<ImSad/></h2>}
    </>
  )
}

export default Findbook