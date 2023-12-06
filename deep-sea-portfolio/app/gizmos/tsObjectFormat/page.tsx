'use client'
import React, { ReactElement, useEffect } from "react";
import GizmoLayout from "../layout";
import { PlusIcon } from "@heroicons/react/24/solid";
import { removeDuplicates } from "@/app/utils/removeDuplicates";
import { MinusCircleIcon } from "@heroicons/react/20/solid";

interface objectDataType {
  [key : string] : string 
}

const Page = () => {
  const [fieldTemplate, setFieldTemplate] = React.useState<string[]>([]);
  const [fieldJsonData, setFieldJsonData] = React.useState<objectDataType>();

   
  const handleInputChange = () => {
  
  }
  const removeField = (fieldToRemove : string) => (e: React.MouseEvent) =>{
    setFieldTemplate(fieldTemplate.filter(field => field !== fieldToRemove ))
  }
  
    function addNewField() : void{
      setFieldTemplate(removeDuplicates([...fieldTemplate,'placeholder']))
    }


  return (
    <div>
      <div className="">
        <div className="">
        <div>Template Selector</div>
        <div>
        {fieldTemplate.map((field) => (
          <div id={field}>
            {field}
            <button onClick={removeField(field)}>
                     <MinusCircleIcon className="w-5 h-5"></MinusCircleIcon>
          </button> 
          </div>

        ))}
        </div>
        <div>
           <button onClick={addNewField}>
            <PlusIcon className="w-5 h-5"></PlusIcon>
          </button> 
          </div>
        </div>
        <div className="">
          <div>JSON OBJECT Output</div>
          <div>{JSON.stringify(fieldJsonData,)}</div>
        </div>
      </div>
    </div>
  );
};


Page.getLayout = function(page: ReactElement) {
  return (
    <GizmoLayout>
      {page}
    </GizmoLayout>
  )
}
export default Page