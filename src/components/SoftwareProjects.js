import ProjectList from './ProjectList';
import ProjectsProvider from '../providers/ProjectProvider';
import Counter from './Counter';

function SoftwareProjects() {
    return (
        <div>
            <ProjectsProvider>
                <ProjectList />
                <Counter />
            </ProjectsProvider>
        </div>
    );
}

export default SoftwareProjects;