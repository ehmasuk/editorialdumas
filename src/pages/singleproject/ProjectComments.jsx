function ProjectComments() {
    return (
        <div>
            <div className="author">
                <img src="https://img.wattpad.com/useravatar/ehmasuk.128.589087.jpg" alt className="img-fluid" />
                <div className="comment-box">
                    <textarea placeholder="Leave a comment" />
                    <input type="submit" defaultValue="Post" className="submit-btn" />
                </div>
            </div>
            <div className="comment-replays">
                <div className="replay-box">
                    <img src="https://img.wattpad.com/useravatar/ehmasuk.128.589087.jpg" alt className="img-fluid" />
                    <div className="replay-box-right">
                        <div className="top">
                            <p className="name">ehmasuk</p>
                            <i className="fas fa-ellipsis-h" />
                        </div>
                        <div className="bottom">
                            <p className="comment">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, blanditiis! Doloremque repellendus rerum neque repudiandae expedita sint magnam perspiciatis a.
                            </p>
                            <i className="far fa-heart" />
                        </div>
                        <div className="rest">
                            <span>a day ago</span>
                            <strong>
                                <a href="#">Reply</a>
                            </strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectComments;
