import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MobileLogo from "../../assets/img1.png";
import Image2 from "../../assets/img2.png";
import Image3 from "../../assets/img3.png";
import Image4 from "../../assets/img4.png";
import Image5 from "../../assets/img5.png";

import { useLocation } from 'react-router-dom';
import { API } from '../../host';


function Diagnostica() {

  const [Data, setData] = useState([]);
  const [showButton, setShowButton] = useState(true);
  const location = useLocation();
  const email = new URLSearchParams(location.search).get('email');

  const openNewTab = () => {
    window.open(`step1?email=${email}`);
  };

  useEffect(() => {
    if (email) {
      axios
        .get(`${API}/getdatas?email=${email}`)
        .then((response) => {
          
          setData(response.data);
          if (response.data.length > 0) {
            // Data is available, hide the button
            setShowButton(false);

          }
        })
        .catch((error) => {
          console.error("Error fetching answers:", error);
        });
    }
  }, [email]);

  const stepStyles = {
    fontWeight: 'bold',
    fontSize: '15px',
    paddingBottom: '5px'
  };

  const ScoreStyles = {
    fontWeight: 'bold',
    fontSize: '12px',
    paddingBottom: '5px'
  }

  const flexContainerStyles = {
    fontSize: '14px',
  };

  const flexContainerStyles1 = {
    fontSize: '14px',
    width: '30px',
    textAlign: 'left',
  };


  return (
    <div>



      {showButton && (
        <div>

          <button type="button" className="btn btn-success" onClick={openNewTab}>
            DIAGNOSTICA
          </button>
          <br />
          <br />
          <p>Redirect to New Tab</p>
        </div>
      )}

      {Data.length > 0 && (
        <div>
          <div className='flex  gap-7'>

            <p><b>Data from the API:</b></p>

            <ul>
              {Data.map((item, index) => (
                <li key={index}>{item.data}</li>
              ))}
            </ul>
          </div>

          <div>
            <div className='grid grid-cols-12 gap-6 py-5'>
              <div className='col-span-3'>
                <p style={stepStyles} className='mb-2' >STEP 1 :</p>
                <div className='flex'><p style={flexContainerStyles1}>L</p><p style={flexContainerStyles}>: Left</p></div>
                <div className='flex'><p style={flexContainerStyles1}>R</p><p style={flexContainerStyles}>: Right</p></div>
              </div>

              <div className='col-span-6'>
                <p style={stepStyles} className='mb-2'>STEP 2 :</p>

                <div className='flex justify-around'>
                <div>
                <div className='flex'><p style={flexContainerStyles1}>A</p><p style={flexContainerStyles}>: Acute(A)</p></div>
                <div className='flex'><p style={flexContainerStyles1}>C</p><p style={flexContainerStyles}>: Chronic (C)</p></div>
                <div className='flex'><p style={flexContainerStyles1}>T</p><p style={flexContainerStyles}>: Traumatic (T)</p></div>
                <div className='flex'><p style={flexContainerStyles1}>I</p><p style={flexContainerStyles}>: Infective (I)</p></div>
                <div className='flex'><p style={flexContainerStyles1}>M/E</p><p style={flexContainerStyles}>: Metabolic/Endocrine</p></div>
                </div>
                <div>
                <div className='flex'><p style={flexContainerStyles1}>F</p><p style={flexContainerStyles}>: Inflammatory (F)</p></div>
                <div className='flex'><p style={flexContainerStyles1}>D</p><p style={flexContainerStyles}>: Degenerative (D)</p></div>
                <div className='flex'><p style={flexContainerStyles1}>G</p><p style={flexContainerStyles}>: Iatrogenic (G)</p></div>
                <div className='flex'><p style={flexContainerStyles1}>P</p><p style={flexContainerStyles}>: Idiopathic (P)</p></div>
                </div>
                </div>

              </div>

              <div className='col-span-3'>
                <p style={stepStyles} className='mb-2'>STEP 3 :</p>
                <div className='flex'><p style={flexContainerStyles1}>1 </p><p style={flexContainerStyles}>: 1-Forefoot</p></div>
                <div className='flex'><p style={flexContainerStyles1}>2 </p><p style={flexContainerStyles}>: 2-Midfoot</p></div>
                <div className='flex'><p style={flexContainerStyles1}>3 </p><p style={flexContainerStyles}>: 3-Hindfoot</p></div>
                <div className='flex'><p style={flexContainerStyles1}>4 </p><p style={flexContainerStyles}>: 4-Ankle</p></div>
              </div>
            </div>

            <div>
              <div className='rid grid-cols-12 gap-6 mb-6'>
                <p style={stepStyles} className='mb-2'>STEP : 4</p>
                <div className='flex gap-5'>
                  <img src={MobileLogo} alt="hello" style={{ width: 200, height: 200 }} />
                  <img src={Image2} alt="hello" style={{ width: 200, height: 200 }} />
                  <img src={Image3} alt="hello" style={{ width: 200, height: 200 }} />
                  <img src={Image4} alt="hello" style={{ width: 200, height: 200 }} />
                  <img src={Image5} alt="hello" style={{ width: 200, height: 200 }} />
                </div>
              </div>
            </div>


            <div className='grid grid-cols-12 gap-6 py-4'>
              <div className='col-span-3'>
                <p style={stepStyles} className='mb-2'>STEP 5 :</p>
                <div className='flex'><p style={flexContainerStyles1}>1 </p><p style={flexContainerStyles}>: 1-Forefoot</p></div>
                <div className='flex'><p style={flexContainerStyles1}>2 </p><p style={flexContainerStyles}>: 2-Midfoot</p></div>
                <div className='flex'><p style={flexContainerStyles1}>3 </p><p style={flexContainerStyles}>: 3-Hindfoot</p></div>
                <div className='flex'><p style={flexContainerStyles1}>4 </p><p style={flexContainerStyles}>: 4-Ankle</p></div>
              </div>

              <div className='col-span-8'>
                <p style={stepStyles} className='mb-2'>STEP : 6 & 7</p>

                <div className='flex justify-between'>
                  <div >
                    <p style={flexContainerStyles}>A-Fracture</p>
                    <p style={flexContainerStyles}>B-Stress Response</p>
                    <p style={flexContainerStyles}>C-Dislocation</p>
                    <p style={flexContainerStyles}>D-Subluxation</p>
                    <p style={flexContainerStyles}>E-Partial Tear</p>
                    <p style={flexContainerStyles}>F-Complete Tear</p>
                  </div>

                  <div>
                    <p style={flexContainerStyles}>G-Tendinopathy</p>
                    <p style={flexContainerStyles}>H-Osteoarthritis</p>
                    <p style={flexContainerStyles}>I-Inflammatory Arthiritis</p>
                    <p style={flexContainerStyles}>J-Infection</p>
                    <p style={flexContainerStyles}>K-Coalition</p>
                    <p style={flexContainerStyles}>L-Congenital Abnormality</p>
                  </div>

                  <div>
                    <p style={flexContainerStyles}>M-Amputation</p>
                    <p style={flexContainerStyles}>N-Deformity</p>
                    <p style={flexContainerStyles}>O-Maligant Tumor</p>
                    <p style={flexContainerStyles}>P-Benign Tumor</p>
                    <p style={flexContainerStyles}>Q-Ingrowing toenail</p>
                    <p style={flexContainerStyles}>R-Neuroma</p>
                  </div>

                  <div>
                    <p style={flexContainerStyles}>S-Neuritis</p>
                    <p style={flexContainerStyles}>T-Charcot</p>
                    <p style={flexContainerStyles}>U-Ulcer</p>
                  </div>

                  <div>
                    <p style={flexContainerStyles}>1-Closed</p>
                    <p style={flexContainerStyles}>2-Open</p>
                    <p style={flexContainerStyles}>3-Comminuted</p>
                    <p style={flexContainerStyles}>4-spiral</p>
                    <p style={flexContainerStyles}>5-Oblique</p>
                    <p style={flexContainerStyles}>6-Transverse</p>
                  </div>
                </div>

              </div>
            </div>

            <div className='py-4'>
              <p style={stepStyles} >STEP : 8</p>
              <div className='grid grid-cols-12 gap-6 py-2'>

                <div className='col-span-4'>
                  <p style={ScoreStyles} className='mb-1'>SCORE 1 </p>
                  <div className='flex'><p style={flexContainerStyles1}>M</p> <p style={flexContainerStyles}>: Myocardial infarction (M)</p></div>
                  <div className='flex'><p style={flexContainerStyles1}>C</p> <p style={flexContainerStyles}>: Congestive heart failure (C)</p></div>
                  <div className='flex'><p style={flexContainerStyles1}>P</p> <p style={flexContainerStyles}>: Peripheral vascular disease (P)</p></div>
                  <div className='flex'><p style={flexContainerStyles1}>CD</p> <p style={flexContainerStyles}>: Cerebrovascular disease (CD)</p></div>
                  <div className='flex'><p style={flexContainerStyles1}>D</p> <p style={flexContainerStyles}>: Dementia (D)</p></div>
                  <div className='flex'><p style={flexContainerStyles1}>CP</p> <p style={flexContainerStyles}>: Chronic pulmonary disease (CP)</p></div>
                  <div className='flex'><p style={flexContainerStyles1}>R</p> <p style={flexContainerStyles}>: Rheumatologic disease (R)</p></div>
                  <div className='flex'><p style={flexContainerStyles1}>PU</p> <p style={flexContainerStyles}>: Peptic ulcer disease (PU)</p></div>
                  <div className='flex'><p style={flexContainerStyles1}>L</p> <p style={flexContainerStyles}>: Liver disease (mild) (L)</p></div>
                  <div className='flex'><p style={flexContainerStyles1}>DC</p> <p style={flexContainerStyles}>: Diabetes (controlled) (DC)</p></div>
                </div>

                <div className='col-span-4'>
                  <p style={ScoreStyles} className='mb-1'>SCORE 2</p>
                  <div className='flex'><p style={flexContainerStyles1}>H</p><p style={flexContainerStyles}>: Hemiplegia (H)</p></div>
                  <div className='flex'><p style={flexContainerStyles1}>P</p><p style={flexContainerStyles}>: Paraplegia (P)</p></div>
                  <div className='flex'><p style={flexContainerStyles1}>R</p><p style={flexContainerStyles}>: Renal disease (R)</p></div>
                  <div className='flex'><p style={flexContainerStyles1}>M</p><p style={flexContainerStyles}>: Malignancy (localized) (M)</p></div>
                  <div className='flex'><p style={flexContainerStyles1}>L</p><p style={flexContainerStyles}>: Leukemia (L)</p></div>
                  <div className='flex'><p style={flexContainerStyles1}>LY</p><p style={flexContainerStyles}>: Lymphoma (LY)</p></div>
                  <div className='flex'><p style={flexContainerStyles1}>D</p><p style={flexContainerStyles}>: Diabetes (uncontrolled) (D)</p></div>
                </div>

                <div className='col-span-4'>
                  <p style={ScoreStyles} className='mb-1'>SCORE 3</p>
                  <div className='flex'><p style={flexContainerStyles1}>L3</p><p style={flexContainerStyles}>: Liver disease (moderate/severe) (L3)</p></div>
                  <div className='flex'><p style={flexContainerStyles1}>A6</p><p style={flexContainerStyles}>: AIDS (A6)</p></div>
                  <div className='flex'><p style={flexContainerStyles1}>M6</p><p style={flexContainerStyles}>: Malignancy (metastatic tumour) (M6)</p></div>
                </div>

              </div>

            </div>

            <div>
              <div>
                <p style={stepStyles} className='mb-2'>STEP : 9</p>
                <div className='flex'><p style={flexContainerStyles}>ASA1</p><p style={flexContainerStyles}> : ASA 1 – Normal healthy patient</p></div>
                <div className='flex'><p style={flexContainerStyles}>ASA2</p><p style={flexContainerStyles}> : ASA 2 – Patient with mild systemic disease</p></div>
                <div className='flex'><p style={flexContainerStyles}>ASA3</p><p style={flexContainerStyles}> : ASA 3 – Patient with severe systemic disease</p></div>
                <div className='flex'><p style={flexContainerStyles}>ASA4</p><p style={flexContainerStyles}> : ASA 4 – Patient with severe systemic disease that is a constant threat to life</p></div>
                <div className='flex'><p style={flexContainerStyles}>ASA5</p><p style={flexContainerStyles}> : ASA 5 – Moribund patient who is not expected to survive without the operation</p></div>
              </div>
            </div>



          </div>
        </div>
      )}
    </div>
  );
}




export default Diagnostica;
