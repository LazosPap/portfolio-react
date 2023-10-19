import projectimg from '../img/React Music Player Thumbnail.png'

const Projects = () => {
    return (
<div className="projects-main">
    <div class="cardBox">
    <div class="card">
        <h2>React Music Player</h2>
        <div class="content">
        <a href="https://lazospap.github.io/reactplayer/" add a target="_blank"><img src={projectimg}></img></a>
        </div>
    </div>
    </div>
    <div class="cardBox">
    <div class="card">
        <h2>Coming Soon</h2>
        <div class="content">
        <h3>Nothing to check here</h3>
        </div>
    </div>
    </div>
</div>
    );
};

export default Projects;