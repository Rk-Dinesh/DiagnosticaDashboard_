import React, { useEffect, useState } from "react";
import { Tab } from "@headlessui/react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { API } from "../../host";


const items = [
    {
        id: 1,
        image: "I worry all the time about whether the pain will end.",
        pain_range: 1,
        comment: "pain in front foot"
    },
]

const Images = () => {
    const [Data, setData] = useState([]);
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const email = params.get("email");

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (email) {
                    const response = await axios.get(`${API}/getimage?email=${email}`);
                    setData(response.data);
                   // console.log(response.data)
                }
            } catch (error) {
                console.error("Error fetching answers:", error);
            }
        };
    
        fetchData();
    }, [email]);
    
    return (
        <div>
            <Tab.Group>
                <div className="grid gap-5 grid-cols-12">
                    <div className="xl:col-span-12 lg:col-span-8 col-span-12">
                        <Tab.Panels>
                            <Tab.Panel>
                                <div className="space-y-1">
                                    <div>
                                        <div className="accordion shadow-base dark:shadow-none rounded-md">
                                            <div className="flex justify-between cursor-pointer transition duration-150 font-medium w-full text-start text-base text-slate-600 dark:text-slate-300 px-8 py-4 bg-white dark:bg-slate-700  rounded-md">
                                                <span>Patient Medical Dataset</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="accordion shadow-base dark:shadow-none rounded-md">
                                            <div
                                                className={`grid grid-cols-12 cursor-pointer transition duration-150 font-medium w-full text-start text-base text-slate-600 dark:text-slate-300 px-8 py-4 bg-white dark:bg-slate-700 rounded-md`}
                                            >
                                                <span className="col-span-1">SI NO</span>
                                                <span className="col-span-5">Image</span>
                                                <span className="col-span-3">Pain Range</span>
                                                <span className="col-span-3">Comments</span>
                                            </div>
                                        </div>
                                    </div>
                                    {items.map((item, index) => (
                                        <div
                                            className="accordion shadow-base dark:shadow-none rounded-md"
                                            key={index}
                                        >
                                            {Data.length > 0 && (Data.map((dataItem,dataIndex) =>

                                                <div
                                                    className={`grid grid-cols-12 cursor-pointer transition duration-150 font-medium w-full text-start text-base text-slate-600 dark:text-slate-300 px-8 py-4 bg-white dark:bg-slate-700 rounded-md`}
                                                >
                                                    <span className="col-span-1">{dataIndex + 1}</span>
                                                    <span className="col-span-5"> <img src={`${API}/images/${dataItem["img"]}`} alt=""  style={{ height: '300px', width: '300px' }}></img> </span>
                                                    <span className="col-span-3">{dataItem["painrange"]}</span>

                                                    <span> {dataItem["comment"]}</span>


                                                </div>
                                            )
                                            )}
                                        </div>
                                    ))}

                                </div>
                            </Tab.Panel>
                        </Tab.Panels>
                    </div>
                </div>
            </Tab.Group>
        </div>
    );
}

export default Images