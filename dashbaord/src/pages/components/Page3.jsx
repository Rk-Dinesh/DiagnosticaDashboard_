import React, { Fragment, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Textinput from '../../components/ui/Textinput';
import Card from '../../components/ui/Card';
import { useNavigate } from 'react-router-dom';
import Select from "react-select";
import Radio from '../../components/ui/Radio';
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

    const [value, setValue] = useState("");

    const [showForefoot, setShowForefoot] = useState(false);
    const [showMidfoot, setShowMidfoot] = useState(false);
    const [showHindfoot, setShowHindfoot] = useState(false);
    const [showAnkle, setShowAnkle] = useState(false);

    const [Bones1, setBones1] = useState(null);
    const [ligament1,setLigament1] = useState(null);
    const [tendon1,setTendon1] = useState(null);
    const [nerve1,setNerve1] = useState(null);
    const [Skin1,setSkin1] = useState(null);

    const [Bones2, setBones2] = useState(null);
    const [ligament2,setLigament2] = useState(null);
    const [tendon2,setTendon2] = useState(null);
    const [nerve2,setNerve2] = useState(null);
    const [Skin2,setSkin2] = useState(null);

    const [Bones3, setBones3] = useState(null);
    const [ligament3,setLigament3] = useState(null);
    const [tendon3,setTendon3] = useState(null);
    const [nerve3,setNerve3] = useState(null);
    const [Skin3,setSkin3] = useState(null);

    const [Bones4, setBones4] = useState(null);
    const [ligament4,setLigament4] = useState(null);
    const [tendon4,setTendon4] = useState(null);
    const [nerve4,setNerve4] = useState(null);
    const [Skin4,setSkin4] = useState(null);

    const handleChange = (e) => {
        const selectedValue = e.target.value;
        if (selectedValue === "A") {
            setShowForefoot(true);
            setShowMidfoot(false);
            setShowHindfoot(false);
            setShowAnkle(false);
        } else if (selectedValue === "B") {
            setShowForefoot(false);
            setShowMidfoot(true);
            setShowHindfoot(false);
            setShowAnkle(false);
        } else if (selectedValue === "C") {
            setShowForefoot(false);
            setShowMidfoot(false);
            setShowHindfoot(true);
            setShowAnkle(false);
        } else if (selectedValue === "D") {
            setShowForefoot(false);
            setShowMidfoot(false);
            setShowHindfoot(false);
            setShowAnkle(true);
        }
        setValue(selectedValue);
    };

    const bones1 = [
        { value: "(M1 : 1) ", label: "M1" },
        { value: "(M2 : 1)", label: "M2" },
        { value: "(M3 : 1)", label: "M3" },
        { value: "(M4 : 1)", label: "M4" },
        { value: "(M5 : 1)", label: "M5" },
        { value: "(P11 : 1)", label: "P11" },
        { value: "(P12 : 1)", label: "P12" },
        { value: "(P21 : 1)", label: "P21" },
        { value: "(P22 : 1)", label: "P23" },
        { value: "(P23 : 1)", label: "P23" },
        { value: "(P31 : 1)", label: "P31" },
        { value: "(P32 : 1)", label: "P32" },
        { value: "(P33 : 1)", label: "P33" },
        { value: "(P41 : 1)", label: "P41" },
        { value: "(P42 : 1)", label: "P42" },
        { value: "(P43 : 1)", label: "P43" },
        { value: "(P51 : 1)", label: "P51" },
        { value: "(P52 : 1)", label: "P52" },
        { value: "(P53 : 1)", label: "P53" },
        { value: "(SM : 1)", label: "SM" },
        { value: "(L : 1)", label: "L" },
    ];

    const bones2 = [
        { value: "(C1:1)", label: "C1" },
        { value: "(C2:1)", label: "C2" },
        { value: "(C3:1)", label: "C3" },
        { value: "(CB:1)", label: "CB" },
        { value: "(N:1)", label: "N" },
    ];

    const bones3 = [
        { value: "(CA:1)", label: "CA" },
    ];

    const bones4 = [
        { value: "(T1:1)", label: "T1" },
        { value: "(F:1)", label: "F" },
        { value: "(T4:1)", label: "T4" },
    ];

    const Ligament1 = [
        { value: "(PP1:2)", label: "PP1" },
        { value: "(PP2:2)", label: "PP2" },
        { value: "(PP3:2)", label: "PP3" },
        { value: "(PP4:2)", label: "PP4" },
        { value: "(PP5:2)", label: "PP5" },
        { value: "(MCL1:2)", label: "MCL1" },
        { value: "(LCL1:2)", label: "LCL1" },
        { value: "(MCL2:2)", label: "MCL2" },
        { value: "(LCL2:2)", label: "LCL2" },
        { value: "(MCL3:2)", label: "MCL3" },
        { value: "(LCL3:2)", label: "LCL3" },
        { value: "(MCL4:2)", label: "MCL4" },
        { value: "(LCL4:2)", label: "LCL4" },
        { value: "(MCL5:2)", label: "MCL5" },
        { value: "(LCL5:2)", label: "LCL5" },


    ];

    const Ligament2 = [
        { value: "(LF:2)", label: "LF" },
    ];

    const Ligament3 = [
        { value: "(ST:2)", label: "ST" },
        { value: "(Spring:2)", label: "Spring" },
        { value: "(TNL:2)", label: "TNL" },
    ];

    const Ligament4 = [
        { value: "(ST:2)", label: "ST" },
        { value: "(PITFL:2)", label: "PITFL" },
        { value: "(IOM:2)", label: "IOM" },
        { value: "(CFL:2)", label: "CFL" },
        { value: "(PTFL:2)", label: "PTFL" },
        { value: "(DD:2)", label: "DD" },
        { value: "(SD:2)", label: "SD" },
    ];

    const Tendon1 = [
        { value: "(EHB:3)", label: "EHB" },
        { value: "(EBL1:3)", label: "EBL1" },
        { value: "(EBL2:3)", label: "EBL2" },
        { value: "(EBL3:3)", label: "EBL3" },
        { value: "(EBL4:3)", label: "EBL4" },
        { value: "(EBL5:3)", label: "EBL5" },
        { value: "(ADH:3)", label: "ADH" },
        { value: "(ABH:3)", label: "ABH" },
        { value: "(FHB:3)", label: "FHB" },
        { value: "(FBL2:3)", label: "FBL2" },
        { value: "(FBL3:3)", label: "FBL3" },
        { value: "(FBL4:3)", label: "FBL4" },
        { value: "(FBL5:3)", label: "FBL5" },
    ];

    const Tendon2 = [
        { value: "(EHL:3)", label: "EHL" },
        { value: "(EDL2:3)", label: "EDL2" },
        { value: "(EDL3:3)", label: "EDL3" },
        { value: "(EDL4:3)", label: "EDL4" },
        { value: "(EDL5:3)", label: "EDL5" },
        { value: "(FHL:3)", label: "FHL" },
        { value: "(FDL2:3)", label: "FDL2" },
        { value: "(FDL3:3)", label: "FDL3" },
        { value: "(FDL4:3)", label: "FDL4" },
        { value: "(FDL5:3)", label: "FDL5" },
    ];

    const Tendon3 = [
        { value: "(TP:3)", label: "TP" },
        { value: "(TA:3)", label: "TA" },
        { value: "(PB:3)", label: "PB" },
        { value: "(PL:3)", label: "PL" },
        { value: "(PT:3)", label: "PT" },
        { value: "(PQ:3)", label: "PQ" },
    ];

    const Tendon4 = [
        { value: "(AT:3)", label: "AT" },
    ];

    const Nerve1 = [
        { value: "(WS1:4)", label: "WS1" },
        { value: "(WS2:4)", label: "WS2" },
        { value: "(WS3:4)", label: "WS3" },
        { value: "(WS4:4)", label: "WS4" },
    ];

    const Nerve2 = [
        { value: "(DMC:4)", label: "DMC" },
    ];

    const Nerve3 = [
        { value: "(TNC:4)", label: "TNC" },
        { value: "(TNM:4)", label: "TNM" },
        { value: "(TNL:4)", label: "TNL" },
    ];

    const Nerve4 = [
        { value: "(SPN:4)", label: "SPN" },
        { value: "(DPN:4)", label: "DPN" },
        { value: "(SUN:4)", label: "SUN" },
        { value: "(SAN:4)", label: "SAN" },
        { value: "(TN:4)", label: "TN" },
    ];

    const skin = [
        { value: "(Skin:5) ", label: "Skin" },
        { value: "(Fat:5) ", label: "Fat" },
        { value: "(Fascia:5) ", label: "Fascia" },
    ];

    const handleForefoot1 = (selectedOption) => {
        setBones1(selectedOption);
        const newDefaultValue = selectedOption ? selectedOption.value : "";
      };
      const handleForefoot2 = (selectedOption) => {
        setLigament1(selectedOption);
        const newDefaultValue = selectedOption ? selectedOption.value : "";
       
      };
      const handleForefoot3 = (selectedOption) => {
        setTendon1(selectedOption);
        const newDefaultValue = selectedOption ? selectedOption.value : "";
      };
      const handleForefoot4 = (selectedOption) => {
        setNerve1(selectedOption);
        const newDefaultValue = selectedOption ? selectedOption.value : "";
      };
      const handleForefoot5 = (selectedOption) => {
        setSkin1(selectedOption);
        const newDefaultValue = selectedOption ? selectedOption.value : "";
       };

      const handleMidfoot1 = (selectedOption) => {
        setBones2(selectedOption);
        const newDefaultValue = selectedOption ? selectedOption.value : "";
      };
      const handleMidfoot2 = (selectedOption) => {
        setLigament2(selectedOption);
        const newDefaultValue = selectedOption ? selectedOption.value : "";
        };
      const handleMidfoot3 = (selectedOption) => {
        setTendon2(selectedOption);
        const newDefaultValue = selectedOption ? selectedOption.value : "";
      };
      const handleMidfoot4 = (selectedOption) => {
        setNerve2(selectedOption);
        const newDefaultValue = selectedOption ? selectedOption.value : "";
        };
      const handleMidfoot5 = (selectedOption) => {
        setSkin2(selectedOption);
        const newDefaultValue = selectedOption ? selectedOption.value : "";
       };

       const handleHindfoot1 = (selectedOption) => {
        setBones3(selectedOption);
        const newDefaultValue = selectedOption ? selectedOption.value : "";
      };
      const handleHindfoot2 = (selectedOption) => {
        setLigament3(selectedOption);
        const newDefaultValue = selectedOption ? selectedOption.value : "";
        };
      const handleHindfoot3 = (selectedOption) => {
        setTendon3(selectedOption);
        const newDefaultValue = selectedOption ? selectedOption.value : "";
      };
      const handleHindfoot4 = (selectedOption) => {
        setNerve3(selectedOption);
        const newDefaultValue = selectedOption ? selectedOption.value : "";
        };
      const handleHindfoot5 = (selectedOption) => {
        setSkin3(selectedOption);
        const newDefaultValue = selectedOption ? selectedOption.value : "";
       };

       const handleAnkle1 = (selectedOption) => {
        setBones4(selectedOption);
        const newDefaultValue = selectedOption ? selectedOption.value : "";
      };
      const handleAnkle2 = (selectedOption) => {
        setLigament4(selectedOption);
        const newDefaultValue = selectedOption ? selectedOption.value : "";
        };
      const handleAnkle3 = (selectedOption) => {
        setTendon4(selectedOption);
        const newDefaultValue = selectedOption ? selectedOption.value : "";
      };
      const handleAnkle4 = (selectedOption) => {
        setNerve4(selectedOption);
        const newDefaultValue = selectedOption ? selectedOption.value : "";
        };
      const handleAnkle5 = (selectedOption) => {
        setSkin4(selectedOption);
        const newDefaultValue = selectedOption ? selectedOption.value : "";
       };

    const handleNext = () => {

        let combinedDefaultValue = defaultValue || ''; 

        if (showForefoot) {
        const Forefoot1Value = Bones1 ? Bones1.value : "";
        const Forefoot2Value = ligament1 ? ligament1.value : "";
        const Forefoot3Value = tendon1 ? tendon1.value : "";
        const Forefoot4Value = nerve1 ? nerve1.value : "";
        const Forefoot5Value = Skin1 ? Skin1.value : "";
        combinedDefaultValue = `${combinedDefaultValue} [ ${Forefoot1Value} ${Forefoot2Value} ${Forefoot3Value} ${Forefoot4Value} ${Forefoot5Value}]`;
    } else if (showMidfoot) {
        const midfoot1Value = Bones2 ? Bones2.value : "";
        const midfoot2Value = ligament2 ? ligament2.value : "";
        const midfoot3Value = tendon2 ? tendon2.value : "";
        const midfoot4Value = nerve2 ? nerve2.value : "";
        const midfoot5Value = Skin2 ? Skin2.value : "";
        combinedDefaultValue = `${combinedDefaultValue} [${midfoot1Value} ${midfoot2Value} ${midfoot3Value} ${midfoot4Value} ${midfoot5Value}]`;
   
    }else if (showHindfoot) {
        const Hindfoot1Value = Bones3 ? Bones3.value : "";
        const Hindfoot2Value = ligament3 ? ligament3.value : "";
        const Hindfoot3Value = tendon3 ? tendon3.value : "";
        const Hindfoot4Value = nerve3 ? nerve3.value : "";
        const Hindfoot5Value = Skin3 ? Skin3.value : "";
        combinedDefaultValue = `${combinedDefaultValue} [${Hindfoot1Value} ${Hindfoot2Value} ${Hindfoot3Value} ${Hindfoot4Value} ${Hindfoot5Value}]`;
   
    }else if (showAnkle) {
        const Ankle1Value = Bones4 ? Bones4.value : "";
        const Ankle2Value = ligament4 ? ligament4.value : "";
        const Ankle3Value = tendon4 ? tendon4.value : "";
        const Ankle4Value = nerve4 ? nerve4.value : "";
        const Ankle5Value = Skin4 ? Skin4.value : "";
        combinedDefaultValue = `${combinedDefaultValue} [${Ankle1Value} ${Ankle2Value} ${Ankle3Value} ${Ankle4Value} ${Ankle5Value}]`;
   
    }
        const updatedURL = `/step5?defaultValue=${combinedDefaultValue} &email=${email}`;

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

                <div className="flex flex-wrap space-xy-5 justify-around items-center space-y-8 px-8 py-8">
                    <Radio
                        label="ForeFoot"
                        name="x"
                        value="A"
                        checked={value === "A"}
                        onChange={handleChange}
                    />
                    <Radio
                        label="MidFoot"
                        name="x"
                        value="B"
                        checked={value === "B"}
                        onChange={handleChange}
                    />
                    <Radio
                        label="HindFoot"
                        name="x"
                        value="C"
                        checked={value === "C"}
                        onChange={handleChange}
                    />
                    <Radio
                        label="Ankle"
                        name="x"
                        value="D"
                        checked={value === "D"}
                        onChange={handleChange}
                    />
                </div>
                <div className='space-y-8 px-8 py-8' >
                    <p><b>STEP 4:</b> The individual bones are categorized (labelled) as per the images below.
                        Click on the region to select.</p>
                </div>

                {showForefoot && (
                <div className="flex justify-around ">
                    <div>
                        {/* <img src={MobileLogo} alt="hello" style={{ width: 200, height: 200 }} /> */}
                        <br />
                        <Select
                            className="react-select"
                            classNamePrefix="select"
                            onChange={handleForefoot1}
                            options={bones1}
                            styles={styles}
                            placeholder="Bones"
                            id="hh"
                        />
                    </div>
                    <div>
                        {/* <img src={Image2} alt="hello" style={{ width: 200, height: 200 }} /> */}
                        <br />
                        <Select
                            className="react-select"
                            classNamePrefix="select"
                            onChange={handleForefoot2}
                            options={Ligament1}
                            styles={styles}
                            placeholder="Ligament"
                            id="hh"
                        />
                    </div>
                    <div>
                        {/* <img src={Image3} alt="hello" style={{ width: 200, height: 200 }} /> */}
                        <br />
                        <Select
                            className="react-select"
                            classNamePrefix="select"
                            onChange={handleForefoot3}
                            options={Tendon1}
                            styles={styles}
                            placeholder="Tendon"
                            id="hh"
                        />
                    </div>
                    <div>
                        {/* <img src={Image3} alt="hello" style={{ width: 200, height: 200 }} /> */}
                        <br />
                        <Select
                            className="react-select"
                            classNamePrefix="select"
                            onChange={handleForefoot4}
                            options={Nerve1}
                            styles={styles}
                            placeholder="Nerve"
                            id="hh"
                        />
                    </div>
                    <div>
                        {/* <img src={Image5} alt="hello" style={{ width: 200, height: 200 }} /> */}
                        <br />
                        <Select
                            className="react-select"
                            classNamePrefix="select"
                            onChange={handleForefoot5}
                            options={skin}
                            styles={styles}
                            placeholder="skin"
                            id="hh"
                        />
                    </div>
                </div>
                )}

                {showMidfoot && (
                <div className="flex justify-around ">
                    <div>
                        {/* <img src={MobileLogo} alt="hello" style={{ width: 200, height: 200 }} /> */}
                        <br />
                        <Select
                            className="react-select"
                            classNamePrefix="select"
                            onChange={handleMidfoot1}
                            options={bones2}
                            styles={styles}
                            placeholder='Bones'
                            id="hh"
                        />
                    </div>
                    <div>
                        {/* <img src={Image2} alt="hello" style={{ width: 200, height: 200 }} /> */}
                        <br />
                        <Select
                            className="react-select"
                            classNamePrefix="select"
                            onChange={handleMidfoot2}
                            options={Ligament2}
                            styles={styles}
                            placeholder='Ligament'
                            id="hh"
                        />
                    </div>
                    <div>
                        {/* <img src={Image3} alt="hello" style={{ width: 200, height: 200 }} /> */}
                        <br />
                        <Select
                            className="react-select"
                            classNamePrefix="select"
                            onChange={handleMidfoot3}
                            options={Tendon2}
                            styles={styles}
                            placeholder='Tendon'
                            id="hh"
                        />
                    </div>

                    <div>
                        {/* <img src={Image5} alt="hello" style={{ width: 200, height: 200 }} /> */}
                        <br />
                        <Select
                            className="react-select"
                            classNamePrefix="select"
                            onChange={handleMidfoot4}
                            options={Nerve2}
                            styles={styles}
                            placeholder='Nerves'
                            id="hh"
                        />
                    </div>

                    <div>
                        {/* <img src={Image5} alt="hello" style={{ width: 200, height: 200 }} /> */}
                        <br />
                        <Select
                            className="react-select"
                            classNamePrefix="select"
                            onChange={handleMidfoot5}
                            options={skin}
                            styles={styles}
                            placeholder='skin'
                            id="hh"
                        />
                    </div>
                </div>
                )}

                {showHindfoot && (
                <div className="flex justify-around ">
                    <div>
                        {/* <img src={MobileLogo} alt="hello" style={{ width: 200, height: 200 }} /> */}
                        <br />
                        <Select
                            className="react-select"
                            classNamePrefix="select"
                            onChange={handleHindfoot1}
                            options={bones3}
                            styles={styles}
                            placeholder='Bones'
                            id="hh"
                        />
                    </div>
                    <div>
                        {/* <img src={Image2} alt="hello" style={{ width: 200, height: 200 }} /> */}
                        <br />
                        <Select
                            className="react-select"
                            classNamePrefix="select"
                            onChange={handleHindfoot2}
                            options={Ligament3}
                            styles={styles}
                            placeholder='Ligament'
                            id="hh"
                        />
                    </div>
                    <div>
                        {/* <img src={Image3} alt="hello" style={{ width: 200, height: 200 }} /> */}
                        <br />
                        <Select
                            className="react-select"
                            classNamePrefix="select"
                            onChange={handleHindfoot3}
                            options={Tendon3}
                            styles={styles}
                            placeholder='Tendon'
                            id="hh"
                        />
                    </div>
                    <div>
                        {/* <img src={Image5} alt="hello" style={{ width: 200, height: 200 }} /> */}
                        <br />
                        <Select
                            className="react-select"
                            classNamePrefix="select"
                            onChange={handleHindfoot4}
                            options={Nerve3}
                            styles={styles}
                            placeholder='Nerves'
                            id="hh"
                        />
                    </div>
                    <div>
                        {/* <img src={Image5} alt="hello" style={{ width: 200, height: 200 }} /> */}
                        <br />
                        <Select
                            className="react-select"
                            classNamePrefix="select"
                            onChange={handleHindfoot5}
                            options={skin}
                            styles={styles}
                            placeholder='Skin'
                            id="hh"
                        />
                    </div>
                </div>
                )}

                {showAnkle && (
                <div className="flex justify-around ">
                    <div>
                        {/* <img src={MobileLogo} alt="hello" style={{ width: 200, height: 200 }} /> */}
                        <br />
                        <Select
                            className="react-select"
                            classNamePrefix="select"
                            onChange={handleAnkle1}
                            options={bones4}
                            styles={styles}
                            placeholder='Bones'
                            id="hh"
                        />
                    </div>
                    <div>
                        {/* <img src={Image2} alt="hello" style={{ width: 200, height: 200 }} /> */}
                        <br />
                        <Select
                            className="react-select"
                            classNamePrefix="select"
                            onChange={handleAnkle2}
                            options={Ligament4}
                            styles={styles}
                            placeholder='Ligaments'
                            id="hh"
                        />
                    </div>
                    <div>
                        {/* <img src={Image3} alt="hello" style={{ width: 200, height: 200 }} /> */}
                        <br />
                        <Select
                            className="react-select"
                            classNamePrefix="select"
                            onChange={handleAnkle3}
                            options={Tendon4}
                            styles={styles}
                            placeholder='Tendon'
                            id="hh"
                        />
                    </div>
                    <div>
                        {/* <img src={Image5} alt="hello" style={{ width: 200, height: 200 }} /> */}
                        <br />
                        <Select
                            className="react-select"
                            classNamePrefix="select"
                            onChange={handleAnkle4}
                            options={Nerve4}
                            styles={styles}
                            placeholder='Nerves'
                            id="hh"
                        />
                    </div>
                    <div>
                        {/* <img src={Image5} alt="hello" style={{ width: 200, height: 200 }} /> */}
                        <br />
                        <Select
                            className="react-select"
                            classNamePrefix="select"
                            onChange={handleAnkle5}
                            options={skin}
                            styles={styles}
                            placeholder='Skin'
                            id="hh"
                        />
                    </div>
                </div>
                )}
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

export default Page3