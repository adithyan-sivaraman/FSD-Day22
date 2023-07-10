/* eslint-disable jsx-a11y/anchor-is-valid */

import { LineChart } from './Line';


const EarningCard = ()=>{
        return(
            
            <div className='col-xl-8 col-lg-7  mt-4 '>
            <div className='card shadow mb-4'>
                <div className='card-header py-3 flex flex-row items-center justify-between'>
                    <h6 className="m-0 font-bold text-primary">Earnings Overview</h6>
                    <div className="dropdown no-arrow">
                    <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink" >
                        <div className="dropdown-header">Dropdown Header:</div>
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </div>
                </div>
                <div className='card-body'>
                    <div className="chart-area">
                        <LineChart/>
                    </div>
                </div>
            </div>
        </div>
        
        )
    }

    export default EarningCard