import React from 'react'
import NavBar from './NavBar'

const SearchStudent = () => {
  return (
    <div>
        
        <NavBar/>
         <div className="container">
            <div className="row">
                <div className="col-col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <row>
                        <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">



                                <label htmlFor="" className="form-control">
                                    <row>
                                        <div className="col col-12 col-sm-6 col-md-6 col-ld-6 col-xl-6 col-xxl-6">
                                            <label htmlFor="" className="form-control">Search Student:</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </row>
                                </label>



                        </div>
                    </row>
                </div>
            </div>
         </div>
        
        
        
        
        </div>
  )
}

export default SearchStudent