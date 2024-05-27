import { Progress, Rate } from "antd";
import "./reviewssection.css";
function ReviewsSection() {
    return (
        <div className="container content-inner-1">
            <h3 className="text-center" style={{ marginBottom: "50px" }}>
                Opiniones de lectores
            </h3>

            <div className="reviews-head">
                <div className="review-info">
                    <h3>4.5 <span style={{fontWeight:'400'}}>/5</span> </h3>
                    <p>32 lectores</p>
                    {/* <Rate allowHalf defaultValue={5} style={{ color: "#EAA451" }} disabled /> */}
                    <button className="btn btn-sm btn-primary">Deja mi opinión</button>
                </div>
                <div className="review-stat">
                    <div className="single-stat">
                        <Rate allowHalf defaultValue={5} style={{ color: "#EAA451" }} disabled />
                        <span className="rate-count">40</span>
                        <Progress percent={70} style={{ fontSize: "0" }} size={"small"} status="active" />
                    </div>
                    <div className="single-stat">
                        <Rate allowHalf defaultValue={4} style={{ color: "#EAA451" }} disabled />
                        <span className="rate-count">34</span>
                        <Progress percent={60} style={{ fontSize: "0" }} size={"small"} status="active" />
                    </div>
                    <div className="single-stat">
                        <Rate allowHalf defaultValue={3} style={{ color: "#EAA451" }} disabled />
                        <span className="rate-count">9</span>
                        <Progress percent={10} style={{ fontSize: "0" }} size={"small"} status="active" />
                    </div>
                    <div className="single-stat">
                        <Rate allowHalf defaultValue={2} style={{ color: "#EAA451" }} disabled />
                        <span className="rate-count">8</span>
                        <Progress percent={3} style={{ fontSize: "0" }} size={"small"} status="active" />
                    </div>
                    <div className="single-stat">
                        <Rate allowHalf defaultValue={1} style={{ color: "#EAA451" }} disabled />
                        <span className="rate-count">2</span>
                        <Progress percent={1} style={{ fontSize: "0" }} size={"small"} status="active" />
                    </div>
                </div>
                
            </div>
<hr style={{maxWidth:'800px',margin:'auto',marginTop:'30px'}} />
            <div className="customers-review">
                <div className="comment-wraper">
                    {/* <div className="comment-replays">
                        <div className="replay-box">
                            <img src="https://picsum.photos/500/300?random=1" alt className="img-fluid" />
                            <div className="replay-box-right">
                                <div className="top">
                                    <p className="name">ehmasuk</p>
                                    <div className="given-review">
                                    <Rate allowHalf defaultValue={5} style={{ color: "#EAA451" }} disabled /> <h5 style={{ margin: "0" }}>4.5</h5>
                                </div>
                                </div>

                                <div className="bottom">
                                    <p className="comment">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, blanditiis! Doloremque repellendus rerum neque repudiandae expedita sint magnam perspiciatis a.
                                    </p>

                                </div>
                                    <small>a day ago</small>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default ReviewsSection;
