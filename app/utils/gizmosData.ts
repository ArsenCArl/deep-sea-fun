//Interfaces for the bubbles or gizmos
export interface gizmo{
    id : string,
    title : string,
    pageUrl: string
    placeholder: string,
    imgUrl : string
}
// Start of the actual showcase data objects
export const view3d : gizmo ={
        id: 'View3d',
        title : '3d Viewer',
        pageUrl: '3dViewer',
        placeholder: '3D Viewer',
        imgUrl : '/assets/Cube.png'
} 
export const speechToText : gizmo ={
    id: 'speechToText',
    title : 'Speech To Text',
    pageUrl: 'speechToText',
    placeholder: 'Speech to Text',
    imgUrl : '/assets/speak.png'
} 
// Finish

// A list of the showcases, this would be what the database would give us if there was one
export const  gizmoList : gizmo[]=

    [view3d,speechToText

    ]


