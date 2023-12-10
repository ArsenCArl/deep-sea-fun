//Interfaces for the bubbles or gizmos
export interface gizmo{
    id : string,
    title : string,
    pageUrl: string
    placeholder: string
}
// Start of the actual showcase data objects
export const view3d : gizmo ={
        id: 'View3d',
        title : '3d Viewer',
        pageUrl: '3dViewer',
        placeholder: '3D'
} 
export const speechToText : gizmo ={
    id: 'speechToText',
    title : 'Speech To Text',
    pageUrl: 'speechToText',
    placeholder: 'S2T'
} 
// Finish

// A list of the showcases, this would be what the database would give us if there was one
export const  gizmoList : gizmo[]=

    [view3d,speechToText

    ]


