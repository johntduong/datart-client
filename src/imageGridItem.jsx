import React, {Component} from "react";
import images from "../data.json";

class imageGridItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            key: 0
        }
    }
    render() {
        return (
            <div key="key1">
                <img
                    className="gallery-img"
                    src={`../images/gallery/bathingwoman2.jpg`}
                />
            </div>
        )
    }
}

export default imageGridItem;