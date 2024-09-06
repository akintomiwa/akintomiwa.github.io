import { useProjectListContext } from "../providers/ProjectProvider";

const ProjectList = () => {
    const { projects } = useProjectListContext();

    return (
        <div>
            <h3>Projects List using ContextAPI</h3>
                {projects.map((project,index) => (
                    <h4 key={index}>{project}</h4>
            ))}
        </div>
    )

}

export default ProjectList;