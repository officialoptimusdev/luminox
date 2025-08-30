import { Tab } from "@headlessui/react";
import { useState } from "react";
import { onlineFormsData, downloadFormsData } from "@/constants/data";
import { ArrowRight } from "lucide-react";
import DownloadFormsCards from "@/components/Cards/DownloadFormsCards";
import OnlineFormsCards from "@/components/Cards/OnlineFormsCards";


function classNames(...classes) {
   return classes.filter(Boolean).join(" ");
}

const FormsTabsMenu = () => {
   const [categories] = useState({
      Online: onlineFormsData,
      Downloads: downloadFormsData,
   });

   return (
      <div className="w-full px-4 py-8">
         <div className="max-w-7xl mx-auto">
            <Tab.Group>
               {/* Tab Buttons */}
               <Tab.List className="flex space-x-2 rounded-full bg-gray-200 p-2 w-fit mx-auto">
                  {Object.keys(categories).map((category) => (
                     <Tab
                        key={category}
                        className={({ selected }) =>
                           classNames(
                              "px-6 py-2 text-sm leading-5 font-medium rounded-full",
                              "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-gray-200 ring-white ring-opacity-60",
                              selected
                                 ? "bg-white shadow text-gray-900"
                                 : "text-gray-600 hover:bg-white/[0.12] hover:text-gray-800"
                           )
                        }
                     >
                        {category}
                     </Tab>
                  ))}
               </Tab.List>

               <Tab.Panels className="mt-8">
                  {/* Online forms Panels */}
                  <Tab.Panel>
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Featured Big Left Card (spans 2 rows) */}
                        <div className="md:col-span-1 md:row-span-2">
                           <OnlineFormsCards
                              onlineForms={categories["Online"][0]}
                              variant="featured"
                           />
                        </div>

                        {/* Right side top full-width card */}
                        <div className="md:col-span-2">
                           <OnlineFormsCards
                              onlineForms={categories["Online"][1]}
                              variant="card"
                           />
                        </div>

                        {/* Right side bottom 2 small cards */}
                        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                           {categories["Online"].slice(2, 4).map((onlineForms) => (
                              <OnlineFormsCards
                                 key={onlineForms.id}
                                 onlineForms={onlineForms}
                                 variant="card"
                              />
                           ))}
                        </div>
                     </div>
                  </Tab.Panel>


                  {/* Download forms Panel */}
                  <Tab.Panel>
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Big left card */}
                        <div className="md:col-span-1 md:row-span-2">
                           <DownloadFormsCards
                              downloadForms={categories["Downloads"][0]}
                              variant="featured"
                           />

                        </div>

                        {/* Two smaller right cards */}
                        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                           {categories["Downloads"].slice(1, 3).map((downloadForms) => (
                              <DownloadFormsCards
                                 key={downloadForms.id}
                                 downloadForms={downloadForms}
                                 variant="card"
                              />
                           ))}
                        </div>

                        {/* Compact list container */}
                        <div className="md:col-span-2 bg-white rounded-2xl p-6 max-h-60 overflow-y-auto">
                           <h4 className="text-base font-semibold mb-4">
                              Download More Forms.
                              <span className="ml-2 text-sm text-gray-400">
                                 Scroll to reveal more forms.
                              </span>
                           </h4>
                           {categories["Downloads"].slice(3).map((downloadForms) => (
                              <DownloadFormsCards
                                 key={downloadForms.id}
                                 downloadForms={downloadForms}
                                 variant="list"
                              />
                           ))}
                        </div>

                     </div>
                  </Tab.Panel>


               </Tab.Panels>
            </Tab.Group>
         </div>
      </div>
   );
};

export default FormsTabsMenu;
