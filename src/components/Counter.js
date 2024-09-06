import { useProjectListContext } from "../providers/ProjectProvider";

const Counter = () => {

    const { projects } = useProjectListContext();
    return (
        <div>
            <h6>Project count: {projects.length}</h6>
        </div>
    );
}

export default Counter