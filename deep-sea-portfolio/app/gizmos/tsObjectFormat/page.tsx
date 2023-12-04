import React, { ReactElement } from "react";
import GizmoLayout from "../layout";
import { ObjectFormater } from "@/app/tsInterfaces/gizmosData";

const Page = () => {
  return (
    <div>
      <div>
        <div>title</div>
        <div>subtitle</div>
      </div>
      <div>
        
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