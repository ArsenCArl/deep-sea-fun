export interface gizmo{
    id : string,
    title : string,
    pageUrl: string
    placeholder: string
}

export const View3d : gizmo ={
        id: 'View3d',
        title : '3d Viewer',
        pageUrl: '3dViewer',
        placeholder: 'Viewer 3d'
} 


export const second : gizmo ={
    id: 'objectCreator',
    title : 'Object Creator',
    pageUrl: 'tsObjectFormat',
    placeholder: 'transformer'
} 
export const  gizmoList : gizmo[]=

    [View3d,second

    ]


