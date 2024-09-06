import React from 'react';
import { currentSoftwareProjects } from '../components/CurrentProjects';

const ProjectsContext = React.createContext();

const currentProjects = currentSoftwareProjects;

const ProjectsProvider = ({children}) => {
    const [projects, setProjectsList] = React.useState(currentProjects)

    return (
        <ProjectsContext.Provider value={{projects}} >
            {children}
        </ProjectsContext.Provider>
    )
}

export const useProjectListContext = () => React.useContext (ProjectsContext);

export default ProjectsProvider;