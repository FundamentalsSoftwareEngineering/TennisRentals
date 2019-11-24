
import React from 'react';
import AppLayout from '../../shared/layout/AppLayout';

import { tennisCourts } from '../../data/tennisCourts';
import GalleryItemImage from '../components/GalleryItemImage';

const TennisCourtsPage = (props) => {

    return (
        <AppLayout>
            <div className="my-3 my-md-5">
                <div className="container">
                    <div className="page-header">
                        <h1 className="page-title"> Tennis Courts </h1>
                    </div>
                    <div className="row row-cards">

                        { 
                            tennisCourts.map( (item, i) => (
                                <div key={i} className="col-sm-6 col-lg-4">
                                    <div className="card p-3">
                                            <GalleryItemImage imageUrl={ item.imageUrl } />
                                    <div className="px-2">
                                        <div className="col-sm-5">
                                            <div> { item.name } </div>
                                        </div>
                                       
                                        <div className="text-muted">
                                        
                                                <i className="col-sm-3">Location: </i> { item.address }
                                        
                                        </div>
                                        <div className="text-muted">
                                    
                                        <i className="col-sm-3">Available: </i> { item.available }
                                </div>
                                    </div>
                                    </div>
                                </div>
                            ))

                        }

                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default TennisCourtsPage;

