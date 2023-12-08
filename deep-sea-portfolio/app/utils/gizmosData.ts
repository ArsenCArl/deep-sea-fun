export interface gizmo{
    id : string,
    title : string,
    pageUrl: string
    placeholder: string
}

export const view3d : gizmo ={
        id: 'View3d',
        title : '3d Viewer',
        pageUrl: '3dViewer',
        placeholder: 'Viewer 3d'
} 


export const speechToText : gizmo ={
    id: 'speechToText',
    title : 'Speech To Text',
    pageUrl: 'speechToText',
    placeholder: 'Speech To Text'
} 
export const  gizmoList : gizmo[]=

    [view3d,speechToText

    ]


