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
          linkUrl: "hats",
          id: 1,
        },
        {
          title: "jackets",
          imageUrl:
            "https://dl.dropboxusercontent.com/s/a7gugca4y041y43/men-accessories.PNG?dl=0",
          linkUrl: "",
          id: 2,
        },
        {
          title: "sneakers",
          imageUrl:
            "https://dl.dropboxusercontent.com/s/1nicl7dk48cfvkh/vector-shoes-sneakers.jpg?dl=0",
          linkUrl: "",
          id: 3,
        },
        {
          title: "women",
          imageUrl:
            "https://dl.dropboxusercontent.com/s/r1jwc3sdwqp5d30/Screenshot%20%2816%29.png?dl=0",
          size: "large",
          linkUrl: "",
          id: 4,
        },
        {
          title: "men",
          imageUrl:
            "https://dl.dropboxusercontent.com/s/a7gugca4y041y43/men-accessories.PNG?dl=0",
          size: "large",
          linkUrl: "",
          id: 5,
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
