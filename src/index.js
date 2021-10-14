import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import Ribbon from './Ribbon'
import StimulusWeb from './StimItemMetadata/StimulusWeb';
import ItemsWeb from './StimItemMetadata/ItemsWeb';
import MetadataWeb from './StimItemMetadata/MetadataWeb';
import StimulusA4 from './StimItemMetadata/StimulusA4';
import ItemsA4 from './StimItemMetadata/ItemsA4';
import MetadataA4 from './StimItemMetadata/MetadataA4'
import './tachyons.css'
import './index.css';

function App() {

  const [view, setView] = useState('A4')

  return (
    <>
      <div className='ribbon'>
        <Ribbon setView={setView}/>
      </div>
          {view === 'Web' &&
            <div className='bg-near-white workSpaceOuterWeb'>
              <div className='flex justify-center'>
                <div className='mt4'>
                    <div className='bg-white workSpaceInnerWeb ba mt2 shadow-4 flex flex-row'>
                      <StimulusWeb />
                      <ItemsWeb />
                      <MetadataWeb />
                    </div>
                </div>
            </div>
          </div>}
          {view === 'A4' &&
            <div className='bg-near-white workSpaceOuterA4'>
              <div className='flex justify-center'>
                <div className='mt5'>
                  <div className='bg-white workSpaceInnerA4 ba mt2 shadow-4 mb4'>
                      <StimulusA4 />
                      <ItemsA4 />
                  </div>
                </div>
              </div>
            </div>}
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
