import React from 'react';
import { Link } from 'react-router-dom';

import SampleProduct2 from '../../assets/images/room02.jpg';
import SampleProduct1 from '../../assets/images/room01.jpg';
import SampleProduct3 from '../../assets/images/room03.jpg';
import SampleProduct4 from '../../assets/images/room04.jpg';
import SampleProduct5 from '../../assets/images/room05.jpg';
import SampleProduct6 from '../../assets/images/room06.jpg';
import './items-grid.css';

export default function ItemsGrid() {
  return (
    <div className="row">
      <div className="col-sm-4">
        <div className="card homeaway-card">
          <img className="card-img-top" alt="Card cap" src={SampleProduct2} />
          <Link className="btn btn-uni" to="/">
            Standard Room
          </Link>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="card homeaway-card">
          <img className="card-img-top" alt="Card cap" src={SampleProduct3} />
          <Link className="btn btn-uni" to="/">
            Comfort
          </Link>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="card homeaway-card">
          <img className="card-img-top" alt="Card cap" src={SampleProduct1} />
          <Link className="btn btn-uni" to="/">
            Executive
          </Link>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="card homeaway-card">
          <img className="card-img-top" alt="Card cap" src={SampleProduct6} />
          <Link className="btn btn-uni" to="/">
            Royal
          </Link>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="card homeaway-card">
          <img className="card-img-top" alt="Card cap" src={SampleProduct5} />
          <Link className="btn btn-uni" to="/">
            Elegance
          </Link>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="card homeaway-card">
          <img className="card-img-top" alt="Card cap" src={SampleProduct4} />
          <Link className="btn btn-uni" to="/">
            Imperial
          </Link>
        </div>
      </div>
    </div>
  );
}
