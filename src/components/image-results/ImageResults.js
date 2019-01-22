import React, { Component } from "react";
import PropTypes from "prop-types";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";

class ImageResults extends Component {
  state = {
    open: false,
    currentImage: ""
  };

  handleOpen = img => {
    this.setState({ open: true, currentImage: img });
  };

  handleClose = () => {
    this.setState({ open: false, currentImage: "" });
  };

  render() {
    let imageListContent;
    const { images } = this.props;

    if (images) {
      imageListContent = (
        <GridList cols={2} spacing={0} cellHeight={400}>
          {images.map(image => (
            <GridListTile key={image.id}>
              <img
                src={image.urls.regular}
                alt={image.description}
                onClick={() => this.handleOpen(image.urls.full)}
              />
              <GridListTileBar
                title={
                  <span>
                    <a href={image.user.links.html}>{image.user.name}</a>
                  </span>
                }
                actionIcon={
                  <IconButton onClick={() => this.handleOpen(image.urls.full)}>
                    <i className="material-icons">zoom_in</i>
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      );
    } else {
      //Spinner
      imageListContent = null;
    }

    const actions = [
      <Button label="Close" primary={true} onClick={this.handleClose} />
    ];

    return (
      <div className="images-container">
        {imageListContent}
        <Dialog
          action={actions}
          modal={false}
          open={this.state.open}
          onClose={this.handleClose}
          fullWidth={true}
        >
          <img src={this.state.currentImage} alt="" style={{ width: "100%" }} />
        </Dialog>
      </div>
    );
  }
}

ImageResults.propTypes = {
  images: PropTypes.array.isRequired
};

export default ImageResults;
