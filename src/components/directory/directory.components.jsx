import React from "react";
import MenuItem from "../menu-item/menu-item.components";

import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl:
            "https://dl.dropboxusercontent.com/s/oinhvs027l07u3m/baseball-cap-vector.jpg?dl=0",
          id: 1,
        },
        {
          title: "jackets",
          imageUrl:
            "https://dl.dropboxusercontent.com/s/a7gugca4y041y43/men-accessories.PNG?dl=0",

          id: 2,
        },
        {
          title: "sneakers",
          imageUrl:
            "https://dl.dropboxusercontent.com/s/a7gugca4y041y43/men-accessories.PNG?dl=0",

          id: 3,
        },
        {
          title: "women",
          imageUrl:
            "https://dl.dropboxusercontent.com/s/r1jwc3sdwqp5d30/Screenshot%20%2816%29.png?dl=0",
          size: "large",
          id: 4,
        },
        {
          title: "men",
          imageUrl:
            "https://dl.dropboxusercontent.com/s/a7gugca4y041y43/men-accessories.PNG?dl=0",
          size: "large",
          id: 5,
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
