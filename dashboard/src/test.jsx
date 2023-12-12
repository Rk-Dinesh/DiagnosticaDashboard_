import React, { Fragment, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Textinput from '../../components/ui/Textinput';
import Card from '../../components/ui/Card';
import { useLocation } from 'react-router-dom';
import Select from "react-select";




function Page1() {
  const navigate = useNavigate();

  const location = useLocation();
  const defaultValue = new URLSearchParams(location.search).get('defaultValue');
  const [originalDefaultValue, setOriginalDefaultValue] = useState(defaultValue);
  const [selectedDisease, setSelectedDisease] = useState(null);
  const email = new URLSearchParams(location.search).get('email');


  const disease = [
   
    { value: ": Acq : T :", label: "Traumatic (T)" },
    { value: ": Acq : I :", label: "Infective (I)" },
    { value: ": Acq : M/E :", label: "Metabolic/Endocrine (M/E)" },
    { value: ": Acq : F :", label: "Inflammatory (F)" },
    { value: ": Acq : D :", label: "Degenerative (D)" },
    { value: ": Acq : G :", label: "Iatrogenic (G)" },
    { value: ": Acq : P :", label: "Idiopathic (P)" },

  ];

  const congential = [
    { value: ": Con : C", label: "Chronic(c)" },
  ]
const A_c = [
  { value: ": A :", label: "Acute(A)" },
  { value: ": C :", label: "Chronic (C)" },
]

  const styles = {
    option: (provided, state) => ({
      ...provided,
      fontSize: "14px",
    }),
  };

  useEffect(() => {
    setOriginalDefaultValue(defaultValue);
  }, [defaultValue]);

  const handleDiseaseChange = (selectedOption) => {
    setSelectedDisease(selectedOption);
    const newDefaultValue = selectedOption ? selectedOption.value : "";
    document.getElementById('defaultsize2').value = defaultValue + newDefaultValue;
  };

  const handleNext = () => {
    const newDefaultValue = selectedDisease ? selectedDisease.value : "";
    const combinedDefaultValue = defaultValue + newDefaultValue;
    navigate(`/step3?defaultValue=${combinedDefaultValue}&email=${email}`);
  };

  const handleCancel = () => {
    window.location.reload();
  };

  const handleBack = () => {
    // Navigate back to the previous page
    navigate(-1);
  };

  const buttons = [
    {
      title: "Cancel",
      onClick: handleCancel,
    },

    {
      title: "Back",
      onClick: handleBack,
    },
    {
      title: "Next",
      onClick: handleNext,
    },
  ];

  return (
    <div>
      <div className="flex justify-between flex-wrap items-center mb-10">
        <h4 className="font-medium lg:text-2xl text-xl active capitalize text-slate-900 inline-block ltr:pr-4 rtl:pl-4">
          Diagnostica Code :
        </h4>
      </div>
      <Card>
        <div className="space-y-8 px-8 py-8">
          <Textinput
            label="CODE :"
            id="defaultsize2"
            type="text"
            placeholder="DIAGNOSTICA CODE"
            horizontal
            defaultValue={defaultValue}
          />
        </div>

        <div className="space-y-10 px-8 py-8">
          <p><b>STEP 2:</b> We assign a designator for aetiology.</p>
          <Select
            className="react-select"
            classNamePrefix="select"
            placeholder="Acquired"
            options={disease}
            onChange={handleDiseaseChange}
            styles={styles}
            id="hh"
          />
           <Select
            className="react-select"
            classNamePrefix="select"
            placeholder="Acute/Chronic"
            options={A_c}
            onChange={handleDiseaseChange}
            styles={styles}
            id="hh"
          />
          <Select
            className="react-select"
            classNamePrefix="select"
            placeholder="Congential"
            options={congential}
            onChange={handleDiseaseChange}
            styles={styles}
            id="hh"
          />
        </div>


        <div className="flex justify-around">
          {buttons.map((button, index) => (
            <button
              key={index}
              type="button"
              className="btn btn-primary"
              onClick={button.onClick}
            >
              {button.title}
            </button>
          ))}
        </div>


      </Card >
    </div >

  );
}




import React, { Fragment, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Textinput from '../../components/ui/Textinput';
import Card from '../../components/ui/Card';
import { useNavigate } from 'react-router-dom';
import Select from "react-select";
import { useLocation } from 'react-router-dom';
import MobileLogo from "../../assets/img1.png";
import Image2 from "../../assets/img2.png";
import Image3 from "../../assets/img3.png";
import Image4 from "../../assets/img4.png";
import Image5 from "../../assets/img5.png";






function Page3() {

    const navigate = useNavigate();
    const location = useLocation();
    const defaultValue = new URLSearchParams(location.search).get('defaultValue');
    const email = new URLSearchParams(location.search).get('email');

    const [Img11, setImg11] = useState(null)
    const [Img12, setImg12] = useState(null)
    const [Img13, setImg13] = useState(null)
    const [Img14, setImg14] = useState(null)
    const [Img15, setImg15] = useState(null)

    const Img1 = [
        { value: "(1:1) ", label: "1" },
        { value: "(2:1) ", label: "2" },
    ];

    const Img2 = [
        { value: "(3:2)", label: "3" },
    ];

    const Img3 = [
        { value: "(4:3)", label: "4" },
    ];
    const Img4 = [
        { value: "M1 ", label: "M1" },
        { value: "P11", label: "P11" },
        { value: "P21", label: "P21" },
        { value: "M2", label: "M2" },
        { value: "P12", label: "P12" },
        { value: "P22", label: "P22" },
        { value: "P32", label: "P32" },
        { value: "M3", label: "M3" },
        { value: "P13", label: "P13" },
        { value: "P23", label: "P23" },
        { value: "P33", label: "P33" },
        { value: "M4", label: "M4" },
        { value: "P14", label: "P14" },
        { value: "P24", label: "P24" },
        { value: "P34", label: "P34" },
        { value: "M5", label: "M5" },
        { value: "P13", label: "P13" },
        { value: "P23", label: "P23" },
        { value: "P33", label: "P33" },

    ];
    const Img5 = [
        { value: "(T1:5)", label: "T1" },
        { value: "(T4:5)", label: "T4" },
        { value: "(F:5)", label: "F" },
        { value: "(C4:5)", label: "C4" },
    ];


    const handleimg1Change = (selectedOption) => {
        setImg11(selectedOption);
        const newDefaultValue = selectedOption ? selectedOption.value : "";
        document.getElementById('defaultsize2').value = `${defaultValue}   ${newDefaultValue}  `;
    };
    const handleimg2Change = (selectedOption) => {
        setImg12(selectedOption);
        const newDefaultValue = selectedOption ? selectedOption.value : "";
        const img1Value = Img11 ? Img11.value : "";

        // Check if dropmenu 1 is selected
        if (Img11) {
            document.getElementById('defaultsize2').value = `${defaultValue}   ${img1Value}  ${newDefaultValue}`;
        } else {
            document.getElementById('defaultsize2').value = `${defaultValue}  ${newDefaultValue} `; // Without dropmenu 1
        }
    };
    const handleimg3Change = (selectedOption) => {
        setImg13(selectedOption);
        const newDefaultValue = selectedOption ? selectedOption.value : "";
        const img1Value = Img11 ? Img11.value : "";
        const img2Value = Img12 ? Img12.value : "";

        // Check if dropmenu 1 and dropmenu 2 are selected
        if (Img11 && Img12) {
            document.getElementById('defaultsize2').value = `${defaultValue}   ${img1Value}   ${img2Value} ${newDefaultValue} `;
        } else if (Img11) {
            // Only dropmenu 1 is selected
            document.getElementById('defaultsize2').value = `${defaultValue}  ${img1Value} ${newDefaultValue} `;
        } else if (Img12) {
            // Only dropmenu 2 is selected
            document.getElementById('defaultsize2').value = `${defaultValue}  ${img2Value} ${newDefaultValue} `;
        } else {
            // Neither dropmenu 1 nor dropmenu 2 are selected
            document.getElementById('defaultsize2').value = `${defaultValue}  (${newDefaultValue} `;
        }
    };


    const handleimg4Change = (selectedOption) => {
        setImg14(selectedOption);
        const newDefaultValue = selectedOption.map((option) => option.value);

        const img1Value = Img11 ? Img11.value : "";
        const img2Value = Img12 ? Img12.value : "";
        const img3Value = Img13 ? Img13.value : '';



        if (Img11 && Img12 && img3Value && selectedOption.length === 3) {
            document.getElementById('defaultsize2').value = `${defaultValue} ${img1Value} ${img2Value} ${img3Value} ${newDefaultValue[0]} ${newDefaultValue[1]}${newDefaultValue[2]}`;
        } else if (Img11 && Img12 && selectedOption.length === 3) {
            document.getElementById('defaultsize2').value = `${defaultValue}  ${img1Value} ${img2Value}${newDefaultValue[0]} ${newDefaultValue[1]}${newDefaultValue[2]} `;
        }
        else if (Img11 && Img12 && selectedOption.length === 2) {
            document.getElementById('defaultsize2').value = `${defaultValue} ${img1Value}  ${img2Value} ${newDefaultValue[0]} ${newDefaultValue[1]} `;
        }
        else if (Img11 && Img12 && img3Value && selectedOption.length === 2) {
            document.getElementById('defaultsize2').value = `${defaultValue} ${img1Value} ${img2Value} ${img3Value} ${newDefaultValue[0]} ${newDefaultValue[1]} `;
        }
        else if (Img11 && Img12 && img3Value && selectedOption.length === 1) {
            document.getElementById('defaultsize2').value = `${defaultValue} ${img1Value} ${img2Value} ${img3Value} ${newDefaultValue[0]} `;
        }
        else if (Img11 && Img12 && selectedOption.length === 1) {
            document.getElementById('defaultsize2').value = `${defaultValue} ${img1Value} ${img2Value} ${newDefaultValue[0]} `;
        }
        else if (Img11 && selectedOption.length === 3) {
            document.getElementById('defaultsize2').value = `${defaultValue} ${img1Value} ${newDefaultValue[0]} ${newDefaultValue[1]}  ${newDefaultValue[2]} `;
        }
        else if (Img11 && selectedOption.length === 2) {
            document.getElementById('defaultsize2').value = `${defaultValue} ${img1Value} ${newDefaultValue[0]} ${newDefaultValue[1]}   `;
        }
        else if (Img11 && selectedOption.length === 1) {
            document.getElementById('defaultsize2').value = `${defaultValue} ${img1Value} ${newDefaultValue[0]}  `;
        }
        else if (Img12 && selectedOption.length === 3) {
            document.getElementById('defaultsize2').value = `${defaultValue} ${img2Value} ${newDefaultValue[0]} ${newDefaultValue[1]}${newDefaultValue[2]} `;
        }
        else if (Img12 && selectedOption.length === 2) {
            document.getElementById('defaultsize2').value = `${defaultValue} ${img2Value} ${newDefaultValue[0]} ${newDefaultValue[1]} `;
        }
        else if (Img12 && selectedOption.length === 1) {
            document.getElementById('defaultsize2').value = `${defaultValue} ${img2Value} ${newDefaultValue[0]} `;
        }
        else if (selectedOption.length === 3) {
            document.getElementById('defaultsize2').value = `${defaultValue} ${newDefaultValue[0]}${newDefaultValue[1]}${newDefaultValue[2]}`;
        }
        else if (selectedOption.length === 2) {
            document.getElementById('defaultsize2').value = `${defaultValue}  ${newDefaultValue[0]}${newDefaultValue[1]}`;
        }
        else if (selectedOption.length === 1) {
            document.getElementById('defaultsize2').value = `${defaultValue}  ${newDefaultValue[0]}`;
        }

        else {
            document.getElementById('defaultsize2').value = `${defaultValue}`;
        }
    };
    const handleimg5Change = (selectedOption) => {
        setImg15(selectedOption);

        const img1Value = Img11 ? Img11.value : "";
        const img2Value = Img12 ? Img12.value : "";
        const img3Value = Img13 ? Img13.value : '';
        const img4Value = Img14 ? Img14.value : '';
        const newDefaultValue = selectedOption ? selectedOption.value : "";
        if (Img11 && Img12 && Img13) {
            document.getElementById('defaultsize2').value = `${defaultValue}   ${img1Value}  ${img2Value} ${img3Value} ${newDefaultValue} `;
        } else if (Img11 && Img12) {
            document.getElementById('defaultsize2').value = `${defaultValue}   ${img1Value}  ${img2Value} ${newDefaultValue} `;
        } else if (Img11 && Img13) {
            document.getElementById('defaultsize2').value = `${defaultValue}  ${img1Value}  ${img3Value} ${newDefaultValue} `;
        } else if (Img12 && Img13) {
            document.getElementById('defaultsize2').value = `${defaultValue}  ${img2Value} ${img3Value} ${newDefaultValue} `;
        } else {
            document.getElementById('defaultsize2').value = defaultValue + newDefaultValue;
        }

    };

    const handleNext = () => {
        // Create an array to store selected values from dropdowns
        const selectedValues = [];

        // Add values from dropdowns to the array
        if (Img11) selectedValues.push(Img11.value);
        if (Img12) selectedValues.push(Img12.value);
        if (Img13) selectedValues.push(Img13.value);
        if (Img14) {
            selectedValues.push(`(${Img14.map((option) => option.value).join(':')}:4)`);
        }

        if (Img15) selectedValues.push(Img15.value);

        // Combine the selected values
        const combinedValues = `[${selectedValues.join(' ')}] : `;

        // Build the updated URL
        const updatedURL = `/step5?defaultValue=${defaultValue} ${combinedValues}&email=${email}`;

        // Navigate to the updated URL
        navigate(updatedURL);
    };

    const handleCancel = () => {
        window.location.reload();
    };


    const styles = {
        option: (provided, state) => ({
            ...provided,
            fontSize: "14px",
        }),
    };
    const handleBack = () => {
        navigate(-1);
    };

    const buttons = [
        {
            title: "Cancel",
            onClick: handleCancel
        },

        {
            title: "Back",
            onClick: handleBack
        },
        {
            title: "Next",
            onClick: handleNext
        },
    ];



    return (
        <div>
            <div className="flex justify-between flex-wrap items-center mb-3">
                <h5 className="font-medium lg:text-2xl text-xl active capitalize text-slate-900 inline-block ltr:pr-4 rtl:pl-4">
                    Diagnostica Code :
                </h5>
            </div>
            <Card>
                <div className="space-y-8 px-8 py-8">
                    <Textinput
                        label="CODE :"
                        id="defaultsize2"
                        type="text"
                        placeholder="DIAGNOSTICA CODE"
                        horizontal
                        defaultValue={defaultValue}
                    />
                </div>
                <div className='space-y-8 px-8 py-8' >
                <p><b>STEP 4:</b> The individual bones are categorized (labelled) as per the images below.
                        Click on the region to select.</p>
                </div>

                <div className="flex justify-around ">
                    <div>
                        {/* <img src={MobileLogo} alt="hello" style={{ width: 200, height: 200 }} /> */}
                        <br />
                        <Select
                            className="react-select"
                            classNamePrefix="select"
                            onChange={handleimg1Change}
                            options={Img1}
                            styles={styles}
                            id="hh"
                        />
                    </div>
                    <div>
                        {/* <img src={Image2} alt="hello" style={{ width: 200, height: 200 }} /> */}
                        <br />
                        <Select
                            className="react-select"
                            classNamePrefix="select"
                            onChange={handleimg2Change}
                            options={Img2}
                            styles={styles}
                            id="hh"
                        />
                    </div>
                    <div>
                        <img src={Image3} alt="hello" style={{ width: 200, height: 200 }} />
                        <br />
                        <Select
                            className="react-select"
                            classNamePrefix="select"
                            onChange={handleimg3Change}
                            options={Img3}
                            styles={styles}
                            id="hh"
                        />
                    </div>
                    <div>
                        <img src={Image4} alt="hello" style={{ width: 200, height: 200 }} />
                        <br />
                        <Select
                            isClearable={false}
                            onChange={handleimg4Change}
                            styles={styles}
                            isMulti
                            name="colors"
                            options={Img4}
                            className="react-select"
                            classNamePrefix="select"
                            id="mul_1"
                        />
                    </div>
                    <div>
                        <img src={Image5} alt="hello" style={{ width: 200, height: 200 }} />
                        <br />
                        <Select
                            className="react-select"
                            classNamePrefix="select"
                            onChange={handleimg5Change}
                            options={Img5}
                            styles={styles}
                            id="hh"
                        />
                    </div>
                </div>
                <br />
                <br />
                   <div className='flex justify-around'>
                   {buttons.map((button, index) => (
                        <button
                            key={index}
                            type="button"
                            className="btn btn-primary"
                            onClick={button.onClick}
                        >
                            {button.title}
                        </button>
                    ))}
                 
                </div>

            </Card >
        </div >

    );
}

import React, { Fragment, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Textinput from '../../components/ui/Textinput';
import Card from '../../components/ui/Card';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';





function Page5() {

    const navigate = useNavigate()
    const location = useLocation();
    const defaultValue = new URLSearchParams(location.search).get('defaultValue');
    const email = new URLSearchParams(location.search).get('email');
    // const [inputValue, setInputValue] = useState('');
    // const [checked, setChecked] = useState([]);


    const handleNext = () => {

        const updatedDefaultValue = `${defaultValue} ${checked.join(':')}`;
        navigate(`/step7?defaultValue=${updatedDefaultValue}&email=${email}`);
    };

    const styles = {
        option: (provided, state) => ({
            ...provided,
            fontSize: "14px",
        }),
    };
    const handleCancel = () => {
        window.location.reload();
    };

    const handleBack = () => {
        navigate(-1);
    };


    const [checked, setChecked] = useState([]);


    const handleChange = (e) => {
        const { value, checked: isChecked } = e.target;

        // Update the 'checked' array
        if (isChecked) {
            setChecked((prevChecked) => [...prevChecked, value]);
        } else {
            setChecked((prevChecked) => prevChecked.filter((item) => item !== value));
        }

        // Update the 'defaultsize2' element's value with the updated 'checked' array
        document.getElementById('defaultsize2').value = defaultValue + checked.join(':');
    };



    const buttons = [
        {
            title: "Cancel",
            onClick: handleCancel
        },

        {
            title: "Back",
            onClick: handleBack
        },
        {
            title: "Next",
            onClick: handleNext
        }
    ];

    return (
        <div>
            <div className="flex justify-between flex-wrap items-center mb-10">
                <h4 className="font-medium lg:text-2xl text-xl active capitalize text-slate-900 inline-block ltr:pr-4 rtl:pl-4">
                    Diagnostica Code :
                </h4>
            </div>
            <Card>
                <div className="space-y-8 px-8 py-8">
                    <Textinput
                        label="CODE :"
                        id="defaultsize2"
                        type="text"
                        placeholder="DIAGNOSTICA CODE"
                        horizontal
                        defaultValue={`${defaultValue}  `}

                    />
                </div>

                <div className="space-y-10 px-8 py-8">
                    <p><b>STEP 6:</b> We assign letters for the individual conditions (Pathology),<b> AND</b></p>
                    <p><b>STEP 7:</b>  The Diagnostica code would be further extended with a description of
                        the condition.</p>

                    {/* <div className="space-y-8 px-8 py-8">
                    <Textinput
                        label="Input :"
                        id="defaultsize2"
                        type="text"
                        placeholder="DIAGNOSTICA CODE"
                        horizontal
                        value={inputValue} 
                        onChange={(e) => setInputValue(e.target.value)} 
                       
                    />
                    </div> */}
                    <table className="min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700">
                        <thead className="bg-slate-200 dark:bg-slate-700">
                            <tr>
                                <th className=" table-th " >CODE</th>
                                <th className=" table-th " >CONDITION</th>
                                <th className=" table-th " >1-CLOSED</th>
                                <th className=" table-th " >2-OPEN</th>
                                <th className=" table-th " >3-COMMINUTED</th>
                                <th className=" table-th " >4-SPIRAL</th>
                                <th className=" table-th " >5-OBLIQUE</th>
                                <th className=" table-th " >6-TRANSVERSE</th>
                            </tr>
                        </thead>
                    </table>
                    <div style={{paddingLeft: "20px"}}>

                        <div className="grid grid-cols-8 gap-6 mb-6">
                            <p>A</p>
                            <p>Fracture</p>
                            <label>
                                <input type="checkbox" name="A1" value='A1' onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="A2" value="A2" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="A3" value="A3" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="A4" value="A4" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="A5" value='A5' onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="A6" value='A6' onChange={handleChange} />
                            </label>
                        </div>
                        <div className="grid grid-cols-8 gap-6 mb-6">

                            <p>B</p>
                            <p>Stress Response</p>
                            <label>
                                <input type="checkbox" name="B1" value='B1' onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="B2" value="B2" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="B3" value="B3" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="B4" value="B4" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="B5" value='B5' onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="B6" value='B6' onChange={handleChange} />
                            </label>
                        </div>
                        <div className="grid grid-cols-8 gap-6 mb-6">

                            <p>C</p>
                            <p>Dislocation</p>
                            <label>
                                <input type="checkbox" name="C1" value='C1' onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="C2" value="C2" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="C3" value="C3" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="C4" value="C4" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="C5" value='C5' onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="C6" value='C6' onChange={handleChange} />
                            </label>
                        </div>
                        <div className="grid grid-cols-8 gap-6 mb-6">

                            <p>D</p>
                            <p>Subluxation</p>
                            <label>
                                <input type="checkbox" name="D1" value='D1' onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="D2" value="D2" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="D3" value="D3" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="D4" value="D4" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="D5" value='D5' onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="D6" value='D6' onChange={handleChange} />
                            </label>
                        </div>

                        <div className="grid grid-cols-8 gap-6 mb-6">

                            <p>E</p>
                            <p>Partial Tear</p>
                            <label>
                                <input type="checkbox" name="E1" value='E1' onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="E2" value="E2" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="E3" value="E3" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="E4" value="E4" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="E5" value='E5' onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="E6" value='E6' onChange={handleChange} />
                            </label>
                        </div>
                        <div className="grid grid-cols-8 gap-6 mb-6">

                            <p>F</p>
                            <p>Complete Tear</p>
                            <label>
                                <input type="checkbox" name="F1" value='F1' onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="F2" value="F2" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="F3" value="F3" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="F4" value="F4" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="F5" value='F5' onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="F6" value='F6' onChange={handleChange} />
                            </label>
                        </div>

                        <div className="grid grid-cols-8 gap-6 mb-6">

                            <p>G</p>
                            <p>Tendinopathy</p>
                            <label>
                                <input type="checkbox" name="G1" value='G1' onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="G2" value="G2" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="G3" value="E3" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="G4" value="G4" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="G5" value='G5' onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="G6" value='G6' onChange={handleChange} />
                            </label>
                        </div>

                        <div className="grid grid-cols-8 gap-6 mb-6">

                            <p>H</p>
                            <p>Osteoarthiritis</p>
                            <label>
                                <input type="checkbox" name="H1" value='H1' onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="H2" value="H2" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="H3" value="H3" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="H4" value="H4" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="H5" value='H5' onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="H6" value='H6' onChange={handleChange} />
                            </label>
                        </div>

                        <div className="grid grid-cols-8 gap-6 mb-6">

                            <p>I</p>
                            <p>Inflammatory Arthiritis</p>
                            <label>
                                <input type="checkbox" name="I1" value='I1' onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="I2" value="I2" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="I3" value="I3" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="I4" value="I4" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="I5" value='I5' onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="I6" value='I6' onChange={handleChange} />
                            </label>
                        </div>

                        <div className="grid grid-cols-8 gap-6 mb-6">

                            <p>J</p>
                            <p>Infection</p>
                            <label>
                                <input type="checkbox" name="J1" value='J1' onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="J2" value="J2" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="J3" value="J3" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="J4" value="J4" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="J5" value='J5' onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="J6" value='J6' onChange={handleChange} />
                            </label>
                        </div>

                        <div className="grid grid-cols-8 gap-6 mb-6">

                            <p>K</p>
                            <p>Coalition</p>
                            <label>
                                <input type="checkbox" name="K1" value='K1' onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="K2" value="K2" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="K3" value="K3" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="K4" value="K4" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="K5" value='K5' onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="K6" value='K6' onChange={handleChange} />
                            </label>
                        </div>

                        <div className="grid grid-cols-8 gap-6 mb-6">

                            <p>L</p>
                            <p>Congenital Abnormality</p>
                            <label>
                                <input type="checkbox" name="L1" value='L1' onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="L2" value="L2" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="L3" value="L3" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="L4" value="L4" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="L5" value='L5' onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="L6" value='L6' onChange={handleChange} />
                            </label>
                        </div>

                        <div className="grid grid-cols-8 gap-6 mb-6">

                            <p>M</p>
                            <p>Amputation</p>
                            <label>
                                <input type="checkbox" name="M1" value='M1' onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="M2" value="M2" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="M3" value="M3" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="M4" value="M4" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="M5" value='M5' onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="M6" value='M6' onChange={handleChange} />
                            </label>
                        </div>

                        <div className="grid grid-cols-8 gap-6 mb-6">

                            <p>N</p>
                            <p>Deformity</p>
                            <label>
                                <input type="checkbox" name="N1" value='N1' onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="N2" value="N2" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="N3" value="N3" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="N4" value="N4" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="N5" value='N5' onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="N6" value='N6' onChange={handleChange} />
                            </label>
                        </div>

                        <div className="grid grid-cols-8 gap-6 mb-6">

                            <p>O</p>
                            <p>Maligant Tumor</p>
                            <label>
                                <input type="checkbox" name="O1" value='O1' onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="O2" value="O2" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="O3" value="O3" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="O4" value="O4" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="O5" value='O5' onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="O6" value='O6' onChange={handleChange} />
                            </label>
                        </div>

                        <div className="grid grid-cols-8 gap-6 mb-6">

                            <p>P</p>
                            <p>Benign Tumor</p>
                            <label>
                                <input type="checkbox" name="P1" value='P1' onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="P2" value="P2" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="P3" value="P3" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="P4" value="P4" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="P5" value='P5' onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="P6" value='P6' onChange={handleChange} />
                            </label>
                        </div>

                        <div className="grid grid-cols-8 gap-6 mb-6">

                            <p>Q</p>
                            <p>Ingrowing toenail</p>
                            <label>
                                <input type="checkbox" name="Q1" value='Q1' onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="Q2" value="Q2" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="Q3" value="Q3" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="Q4" value="Q4" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="Q5" value='Q5' onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="Q6" value='Q6' onChange={handleChange} />
                            </label>
                        </div>

                        <div className="grid grid-cols-8 gap-6 mb-6">

                            <p>R</p>
                            <p>Neuroma</p>
                            <label>
                                <input type="checkbox" name="R1" value='R1' onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="R2" value="R2" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="R3" value="R3" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="R4" value="R4" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="R5" value='R5' onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="R6" value='R6' onChange={handleChange} />
                            </label>
                        </div>

                        <div className="grid grid-cols-8 gap-6 mb-6">

                            <p>S</p>
                            <p>Neuritis</p>
                            <label>
                                <input type="checkbox" name="S1" value='S1' onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="S2" value="S2" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="S3" value="S3" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="S4" value="S4" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="S5" value='S5' onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="S6" value='S6' onChange={handleChange} />
                            </label>
                        </div>

                        <div className="grid grid-cols-8 gap-6 mb-6">

                            <p>T</p>
                            <p>Charcot</p>
                            <label>
                                <input type="checkbox" name="T1" value='T1' onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="T2" value="T2" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="T3" value="T3" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="T4" value="T4" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="T5" value='T5' onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="T6" value='T6' onChange={handleChange} />
                            </label>
                        </div>

                        <div className="grid grid-cols-8 gap-6 mb-6">

                            <p>U</p>
                            <p>Ulcer</p>
                            <label>
                                <input type="checkbox" name="U1" value='U1' onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="U2" value="U2" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="U3" value="U3" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="U4" value="U4" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="U5" value='U5' onChange={handleChange} />
                            </label>
                            <label>
                                <input type="checkbox" name="U6" value='U6' onChange={handleChange} />
                            </label>
                        </div>
                        </div>


                </div>

                <div className="flex justify-around">
                    {buttons.map((button, index) => (
                        <button
                            key={index}
                            type="button"
                            className="btn btn-primary"
                            onClick={button.onClick}
                        >
                            {button.title}
                        </button>
                    ))}
                </div>


            </Card >
        </div >


    );
}

export default Page5


const handleNext = () => {
    let combinedDefaultValue = defaultValue || ''; 

    const Score1Value = Img11[0] ? Img11[0].value : "";
    const Score11Value = Img11[1] ? Img11[1].value : "";
    const Score2Value = Img12[0] ? Img12[0].value : "";
    const Score22Value = Img12[1] ? Img12[1].value : "";
    const Score3Value = Img13[0] ? Img13[0].value : "";
    const Score33Value = Img13[1] ? Img13[1].value : "";

    combinedDefaultValue = `${combinedDefaultValue} [ ${Score1Value} ${Score11Value} ${Score2Value} ${Score22Value} ${Score3Value} ${ScoreValue} ]`;

    const updatedURL = `/step8?defaultValue=${combinedDefaultValue} &email=${email}`;

    navigate(updatedURL);
};


import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Textinput from "../../components/ui/Textinput";
import Card from "../../components/ui/Card";
import axios from "axios";
import { useParams,useLocation, useNavigate } from "react-router-dom";
import { API } from "../../host";

const FormValidationSchema = yup.object({
  userid: yup.string().required("User_id is required"),
  firstname: yup.string().required("First Name is required"),
  lastname: yup.string().required("Last Name is required"),
  phone: yup.string().required("Phone Number is required"),
  email: yup.string().required("Email is Required"),

});

const UpdateDoctor = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(FormValidationSchema),
  });

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const idcode = params.get("idcode");

  const { id } = useParams();
  const [userid, setUserid] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${API}/getdoctor?idcode=${idcode}`);
        const responseData = response.data;
        console.log(responseData)
        
        setUserid(responseData.userid)
        setFirstname(responseData.firstname)
        setLastname(responseData.lastname)
        setPhone(responseData.phone)
        setEmail(responseData.email)
       

        setValue("userid", responseData.userid);
        setValue("firstname", responseData.firstname);
        setValue("lastname", responseData.lastname);
        setValue("phone", responseData.phone);
        setValue("email", responseData.email);
       
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserData();
  }, [id]);

  const Update = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`${API}/updateDoctor`, {
        userid: userid,
        firstname: firstname,
        lastname: lastname,
        phone: phone,
        email: email,
       
      });

      console.log(response);
      navigate('/doctors');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="flex justify-between flex-wrap items-center mb-6">
        <h4 className="font-medium lg:text-2xl text-xl capitalize text-slate-900 inline-block ltr:pr-4 rtl:pl-4">
          Update Doctor
        </h4>
      </div>
      <div>
        <div className="d-flex  align-items-center">
          <div className="col-md-6">
            <div className="bg-transparent">
              <Card>
              <form className="space-y-3" onSubmit={Update}>
                <Textinput
                  name="userid"
                  label="Doctor ID*"
                  placeholder="User ID"
                  value={userid}
                  register={register}
                  onChange={(e) => setUserid(e.target.value)}
                  error={errors.userid}
                />
                <Textinput
                  name="firstname"
                  label="First Name*"
                  placeholder="First Name"
                  value={firstname}
                  register={register}
                  onChange={(e) => setFirstname(e.target.value)}
                  error={errors.firstname}
                />
                <Textinput
                  name="lastname"
                  label="Last Name*"
                  placeholder="Last Name"
                  value={lastname}
                  register={register}
                  onChange={(e) => setLastname(e.target.value)}
                  error={errors.lastname}
                />
                <Textinput
                  name="email"
                  label="Email*"
                  placeholder="Email"
                  value={email}
                  register={register}
                  onChange={(e) => setEmail(e.target.value)}
                  error={errors.email}
                />
                <Textinput
                  name="phone"
                  label="Phone*"
                  placeholder="Phone"
                  value={phone}
                  register={register}
                  onChange={(e) => setPhone(e.target.value)}
                  error={errors.phone}
                />
               
                <div className="ltr:text-right rtl:text-left">
                  <button className="btn btn-dark text-center" type="submit">
                    Update
                  </button>
                </div>
              </form>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};




{/* <form onSubmit={this.handleSubmit}>
<div className="otpContainer">
  <input
    name="otp1"
    type="text"
    autoComplete="off"
    className="otpInput"
    value={this.state.otp1}
    onChange={e => this.handleChange("otp1", e)}
    tabIndex="1" maxLength="1" onKeyUp={e => this.inputfocus(e)}
  />
   <input
    name="otp2"
    type="text"
    autoComplete="off"
    className="otpInput"
    value={this.state.otp2}
    onChange={e => this.handleChange("otp2", e)}
    tabIndex="2" maxLength="1" onKeyUp={e => this.inputfocus(e)}

  />
  <input
    name="otp3"
    type="text"
    autoComplete="off"
    className="otpInput"
    value={this.state.otp3}
    onChange={e => this.handleChange("otp3", e)}
    tabIndex="3" maxLength="1" onKeyUp={e => this.inputfocus(e)}

  />
  <input
    name="otp4"
    type="text"
    autoComplete="off"
    className="otpInput"
    value={this.state.otp4}
    onChange={e => this.handleChange("otp4", e)}
    tabIndex="4" maxLength="1" onKeyUp={e => this.inputfocus(e)}
  />
</div>
<Button className="primary" type="submit">
  Submit
</Button>
</form> */}

{/* <div className="col-span-6">
<Card>
  <div className="bg-transparent">
    <form className="space-y-3" onSubmit={onUpdate}>
      <div>
        {/* <div className="form-group">
        <label htmlFor="password" className=" col-sm-2 col-form-label"><b>New Password*</b></label>
        <input
          type="password"
          name="password"
          id="password"
          className="form-control py-2"
          placeholder="Password"
          value={(userData.password || "").substring(0, 5)}
          onChange={(e) => setUserData({ ...userData, password: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password" className=" col-sm-2 col-form-label"><b>Confirm Password*</b></label>
        <input
          type="password"
          name="password"
          id="password"
          className="form-control py-2"
          placeholder="Password"
          value={''}
          onChange={''}
        />
      </div> */}
//         <div className="form-group">
//           <label
//             htmlFor="newPassword"
//             className=" col-form-label py-2"
//           >
//             <b>
//               New Password<span style={{ color: "red" }}>*</span>
//             </b>
//           </label>
//           <input
//             type="password"
//             name="newPassword"
//             id="newPassword"
//             className="form-control py-2"
//             placeholder="New Password"
//             value={newPassword}
//             onChange={(e) => setNewPassword(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label
//             htmlFor="confirmPassword"
//             className=" col-form-label py-2"
//           >
//             <b>
//               Confirm Password{" "}
//               <span style={{ color: "red" }}>*</span>
//             </b>
//           </label>
//           <input
//             type="password"
//             name="confirmPassword"
//             id="confirmPassword"
//             className="form-control py-2"
//             placeholder="Confirm Password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//           />
//         </div>

//         <br />
//         <div className="ltr:text-right rtl:text-left">
//           <button
//             className="btn btn-dark text-center"
//             type="submit"
//           >
//             Change Password
//           </button>
//         </div>
//       </div>
//     </form>
//   </div>
// </Card>
// </div> */}

<section className="vh-100" style={{ backgroundColor: "#EEF1F9" }}>
<div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card shadow-2-strong " style={{ borderRadius: "1rem" }}>
                <div className="card-body p-5">
                 
                        <div className="d-flex justify-content-center align-items-center mb-3">
                            <img src={MobileLogo} alt="" width="40px" />
                        </div>
                  
                    <h6 className="mb-2 text-center" style={{ color: '#097969' }}>Pain Management</h6>
                    <h6 className="mb-2 text-center">Sign in</h6>
                    <form onSubmit={handleSubmit}>
                        <div className="form-outline mb-3">
                            <label className="form-label" htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Email"
                                name='email'
                                className="form-control"
                                onChange={handleChange}
                                value={formData.email}
                                required
                            />
                        </div>
                        <div className="form-outline mb-3">
                            <label className="form-label" htmlFor="password">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Password"
                                name='password'
                                className="form-control"
                                onChange={handleChange}
                                value={formData.password}
                                required
                            />
                        </div>
                        <div className='text-center'>
                            <button className="btn btn-dark text-center" type="submit">
                                Sign in
                            </button>
                        </div>
                    </form>
                    <p className="small fw-bold mt-2 pt-1 mb-0">
                        
                        <Link to="/forgotpassword" className="link-danger">Forgot Password ?</Link>
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
</section>

import React, { Fragment, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Textinput from '../../components/ui/Textinput';
import Card from '../../components/ui/Card';
import { useLocation } from 'react-router-dom';
import Select from "react-select";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API } from '../../host';




function Page7() {

    const location = useLocation();
    const defaultValue = new URLSearchParams(location.search).get('defaultValue');
    const navigate = useNavigate()
    const [Patient, setPatient] = useState(null);
    const [NewDefaultValue, setNewDefaultValue] = useState('')
    //const [email, setEmail] = useState('')
    const email = new URLSearchParams(location.search).get('email');


    const patient = [
        { value: "ASA1", label: "ASA 1 – Normal healthy patient" },
        { value: "ASA2", label: "ASA 2 – Patient with mild systemic disease" },
        { value: "ASA3", label: "ASA 3 – Patient with severe systemic disease" },
        { value: "ASA4", label: "ASA 4 – Patient with severe systemic disease that is a constant threat to life" },
        { value: "ASA5", label: "ASA 5 – Moribund patient who is not expected to survive without the operation" },
    ];

    const handlePatientChange = (selectedOption) => {
        setPatient(selectedOption);
        const newDefaultValue = selectedOption ? selectedOption.value : "";
        document.getElementById('defaultsize2').value = defaultValue + newDefaultValue;
        setNewDefaultValue(newDefaultValue)
    };

    const handleCancel = () => {
        window.location.reload();
    };

    const handleBack = () => {
        navigate(-1);
    };



    const handleSubmit = async () => {
        const requestData = {
            data: `${defaultValue} ${NewDefaultValue}`,
            email: email,
        };
        console.log(requestData)

        try {
            const response = await axios.post(`${API}/data`, requestData);
            console.log(response.data);

            if (response.status === 200) {
                window.close();
            } else {
                console.log("Server returned a non-200 status code.");
            }
        } catch (error) {
            console.error("Error in post:", error);
            if (error.response) {
                console.error("Response data:", error.response.data);
            }
        }
    };

    const handleGenerate = async () => {
        const requestData = {
            data: `${defaultValue} ${NewDefaultValue}`,
            email: email,
        };
        console.log(requestData)

        try {
            const response = await axios.post(`${API}/data`, requestData);
            console.log(response.data);
            if (response.status === 200) {
                window.close();
                window.open(`step1?email=${email}`)
            } else {
                console.log("Server returned a non-200 status code.");
            }

        } catch (error) {
            console.error("Error in post:", error);
            if (error.response) {
                console.error("Response data:", error.response.data);
            }
        }
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const buttons = [
        {
            title: "Cancel",
            onClick: handleCancel
        },
        {
            title: "Back",
            onClick: handleBack
        },
        {
            title: "Genterate One",
            onClick: handleGenerate
        },
        {
            title: "Next",
            onClick: handleSubmit
        },


    ];

    const styles = {
        option: (provided, state) => ({
            ...provided,
            fontSize: "14px",
        }),
    };
    return (
        <div>
            <div className="flex justify-between flex-wrap items-center mb-10">
                <h4 className="font-medium lg:text-2xl text-xl active capitalize text-slate-900 inline-block ltr:pr-4 rtl:pl-4">
                    Diagnostica Code :
                </h4>
            </div>
            <Card>
                <div className="space-y-8 px-8 py-8">
                    <Textinput
                        label="CODE :"
                        id="defaultsize2"
                        type="text"
                        placeholder="DIAGNOSTICA CODE"
                        horizontal
                        defaultValue={`${defaultValue} ${NewDefaultValue}`}
                    />
                </div>

                <div className="space-y-10 px-8 py-8">
                    <p><b>STEP 7:</b> If the Patient has surgery, then
                        American Society of Anaesthesiologists
                        (ASA) Classifications can be added.</p>
                    <Select
                        className="react-select"
                        classNamePrefix="select"
                        onChange={handlePatientChange}
                        options={patient}
                        styles={styles}
                        id="hh"
                    />
                </div>

                <div className="flex justify-around">
                    {buttons.map((button, index) => (
                        <button
                            key={index}
                            type="button"
                            className="btn btn-primary"
                            onClick={button.onClick}
                        >
                            {button.title}
                        </button>
                    ))}
                </div>



            </Card >
        </div >

    );
}
