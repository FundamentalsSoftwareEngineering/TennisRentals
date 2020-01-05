
import React from 'react';
import { tennisTables } from '../_data/tennisTables';
import GalleryItemImage from '../_components/GalleryItemImage';

const TennisCourtsPage = (props) => {

    return (
        <div className="my-3 my-md-5">
            <div className="container">
                <div className="page-header">
                    <h1 className="page-title"> Tennis Tables </h1>
                </div>
                <div className="row row-cards">

                    {
                        tennisTables.map( (item, i) => (
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
                                        <button> Rent </button>
                                    </div>
                                </div>
                            </div>
                        ))

                    }

                </div>
            </div>
        </div>
    )
};

export default TennisCourtsPage;

