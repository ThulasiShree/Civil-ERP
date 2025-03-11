import React, { useEffect, useState } from 'react'
import './DashBoard.css'
import Sidebar from '../../Components/Sidebar/Sidebar'

import Category from '../../Assert/DashBoard_Assert/category-icon.png'
import MaterialTable from '../../Components/MaterialTable/MaterialTable';
import { Link } from 'react-router-dom';


const Dashboard = () => {

    const [data, setData] = useState([]);

    const handleButtonClick = (buttonNumber) => {
        let newData = [];
        switch (buttonNumber) {
            case 1:
                newData = [
                    { id: 1, material: '8mm Steel', category: "Steel", unitprice: 75, instock: 850, discount: 3, totalvalue: 61200, insite: "Dindigul" },
                    { id: 2, material: '10mm Steel', category: "Steel", unitprice: 75, instock: 850, discount: 3, totalvalue: 61200, insite: "Madurai" },
                    { id: 3, material: '8mm Steel', category: "Steel", unitprice: 75, instock: 850, discount: 3, totalvalue: 61200, insite: "Trichy" },
                    { id: 4, material: '10mm Steel', category: "Steel", unitprice: 75, instock: 850, discount: 3, totalvalue: 61200, insite: "Madurai" },
                ];
                break;
            case 2:
                newData = [
                    { id: 1, material: '8mm Steel', category: "Cement", unitprice: 75, instock: 850, discount: 3, totalvalue: 61200, insite: "Madurai" },
                    { id: 2, material: '10mm Steel', category: "Cement", unitprice: 75, instock: 850, discount: 3, totalvalue: 61200, insite: "Dindigul" },
                    { id: 3, material: '8mm Steel', category: "Cement", unitprice: 75, instock: 850, discount: 3, totalvalue: 61200, insite: "Trichy" },
                ];
                break;
            case 3:
                newData = [
                    { id: 1, material: '8mm Steel', category: "MSand", unitprice: 75, instock: 850, discount: 3, totalvalue: 61200, insite: "Madurai" },
                    { id: 2, material: '10mm Steel', category: "MSand", unitprice: 75, instock: 850, discount: 3, totalvalue: 61200, insite: "Dindigul" },
                    { id: 3, material: '8mm Steel', category: "MSand", unitprice: 75, instock: 850, discount: 3, totalvalue: 61200, insite: "Trichy" },
                ];
                break;
            case 4:
                newData = [
                    { id: 1, material: '8mm Steel', category: "Jally", unitprice: 75, instock: 850, discount: 3, totalvalue: 61200, insite: "Dindigul" },
                    { id: 2, material: '10mm Steel', category: "Jally", unitprice: 75, instock: 850, discount: 3, totalvalue: 61200, insite: "Madurai" },
                    { id: 3, material: '8mm Steel', category: "Jally", unitprice: 75, instock: 850, discount: 3, totalvalue: 61200, insite: "Dindigul" },
                ];
                break;
            default:
                newData = [];
        }
        setData(newData);
    };

    return (
        <div className='container-fluid'>
            <div className="row wrapper">
                <div className="col-lg-2">
                    <Sidebar />
                </div>
                <div className="col-lg-10">
                    <div className="dashboard-content">
                        <div className="dashboard-header d-flex flex-row px-4 py-4 justify-content-between">
                            <div className="sidebar-head-left">
                                <span className='inventory-text'>Inventory Summary</span>
                            </div>
                            <div className="sidebar-head-right">
                                <Link to='/addmaterial'>
                                    <button className='d-flex flex-row justify-content-around align-items-center p-1 border-0 rounded' style={{ background: '#464667', color: '#FFFFFF' }}>
                                        <i class="bi bi-plus"></i>Add New Material
                                    </button>
                                </Link>
                            </div>
                        </div>

                        <div className="category-box d-flex flex-column justify-content-start">
                            <div className="category-head">
                                <img src={Category} alt="" />
                                <span className='category-text'>Category</span>
                            </div>
                            <div className="category-items d-flex flex-row justify-content-between mt-4">
                                <button className='category-btns' onClick={() => handleButtonClick(1)}>Steel</button>
                                <button className='category-btns' onClick={() => handleButtonClick(2)}>Cement</button>
                                <button className='category-btns' onClick={() => handleButtonClick(3)}>MSand</button>
                                <button className='category-btns' onClick={() => handleButtonClick(4)}>Jally</button>
                            </div>
                        </div>
                    </div>

                    <MaterialTable />


                </div>
            </div>
        </div>
    );
};

export default Dashboard;