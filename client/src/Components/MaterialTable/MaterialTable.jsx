import React, { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';

const MaterialTable = () => {
    const data = [
        { id: 1, materialName: '8mm Steel', category: 'Steel', unitPrice: 75, inStock: 850, discount: 3, totalValue: 61200, inSite: 'Dindigul' },
        { id: 2, materialName: '10mm Steel', category: 'Steel', unitPrice: 75, inStock: 850, discount: 3, totalValue: 61200, inSite: 'Dindigul' },
        { id: 3, materialName: '8mm Steel', category: 'Jally', unitPrice: 75, inStock: 850, discount: 3, totalValue: 61200, inSite: 'Dindigul' },
        { id: 4, materialName: '8mm Steel', category: 'MSand', unitPrice: 75, inStock: 850, discount: 3, totalValue: 61200, inSite: 'Dindigul' },
    ];

    const [searchQuery, setSearchQuery] = useState('');

    // Handler for search input change
    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    // Filter data based on the search query
    const filteredData = data.filter((item) =>
        item.materialName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.inSite.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className='container'>
            <div className="inv-summary d-flex align-items-center justify-content-between">
                <div className="inv-rightside">
                    <span className='inventory-text'>Inventory Summary</span>
                </div>
                <div className="inv-leftside">
                    <Form>
                        <InputGroup>
                            <Form.Control
                                type="text"
                                placeholder="Search Employee"
                                value={searchQuery}
                                onChange={handleSearch}
                                aria-label="Search"
                                className='border-0'
                            />
                            <Button variant="">
                                <i className="bi bi-search"></i>
                            </Button>
                        </InputGroup>
                    </Form>
                </div>
            </div>
            <table className='table'>
                <thead>
                    <tr>
                        <th scope='col'>ID</th>
                        <th scope='col'>Material Name</th>
                        <th scope='col'>Category</th>
                        <th scope='col'>Unit Price</th>
                        <th scope='col'>In Stock</th>
                        <th scope='col'>Discount</th>
                        <th scope='col'>Total Value</th>
                        <th scope='col'>In Site</th>
                    </tr>
                </thead>
                <tbody className='table-data'>
                    {filteredData.map((item) => (
                        <tr key={item.id}>
                            <td scope='row'>{item.id}</td>
                            <td>{item.materialName}</td>
                            <td>{item.category}</td>
                            <td>{item.unitPrice}</td>
                            <td>{item.inStock}</td>
                            <td>{item.discount}</td>
                            <td>{item.totalValue}</td>
                            <td>{item.inSite}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default MaterialTable;








// import React, { useState } from 'react'
// import { Button, Form, InputGroup } from 'react-bootstrap';


// const MaterialTable = () => {

//     const data = [
//         { id: 1, materialName: '8mm Steel', category: 'Steel', unitPrice: 75, inStock: 850, discount: 3, totalValue: 61200, inSite: 'Dindigul' },
//         { id: 2, materialName: '10mm Steel', category: 'Steel', unitPrice: 75, inStock: 850, discount: 3, totalValue: 61200, inSite: 'Dindigul' },
//         { id: 3, materialName: '8mm Steel', category: 'Jally', unitPrice: 75, inStock: 850, discount: 3, totalValue: 61200, inSite: 'Dindigul' },
//         { id: 4, materialName: '8mm Steel', category: 'MSand', unitPrice: 75, inStock: 850, discount: 3, totalValue: 61200, inSite: 'Dindigul' },
//     ];

//     const [searchQuery, setSearchQuery] = useState('');

//     // Handler for search input change
//     const handleSearch = (e) => {
//         setSearchQuery(e.target.value);
//     };

//     // Filter data based on the search query
//     const filteredData = data.filter((item) =>
//         item.name.toLowerCase().includes(searchQuery.toLowerCase())
//     );

//     return (
//         <div className='container'>
//             <div className="inv-summary d-flex align-items-center justify-content-between">
//                 <div className="inv-rightside">
//                     <span className='inventory-text'>Inventory  Summary</span>
//                 </div>
//                 <div className="inv-leftside">
//                     <Form>
//                         <InputGroup>
//                             <Form.Control type="text" placeholder="Search Employee" value={searchQuery}
//             onChange={handleSearch} aria-label="Search" className='border-0' />
//                             <Button variant="">
//                                 <i className="bi bi-search"></i>
//                             </Button>
//                         </InputGroup>
//                     </Form>
//                 </div>
//             </div>
//             <table className='table'>
//                 <thead>
//                     <tr>
//                         <th scope='col'>ID</th>
//                         <th scope='col'>Material Name</th>
//                         <th scope='col'>Category</th>
//                         <th scope='col'>Unit Price</th>
//                         <th scope='col'>In Stock</th>
//                         <th scope='col'>Discount</th>
//                         <th scope='col'>Total Value</th>
//                         <th scope='col'>In Site</th>
//                     </tr>
//                 </thead>
//                 <tbody className='table-data'>
//                     {data.map((item) => (
//                         <tr>
//                             <td scope='row'>{item.id}</td>
//                             <td>{item.materialName}</td>
//                             <td>{item.category}</td>
//                             <td>{item.unitPrice}</td>
//                             <td>{item.inStock}</td>
//                             <td>{item.discount}</td>
//                             <td>{item.totalValue}</td>
//                             <td>{item.inSite}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     )
// }

// export default MaterialTable