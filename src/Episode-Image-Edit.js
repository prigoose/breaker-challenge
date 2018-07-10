import React, { Component } from 'react';
import './Episode-Image.css';

var ReactS3Uploader = require('react-s3-uploader');

class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {file: '',imagePreviewUrl: ''};
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];
    
    reader.readAsDataURL(file)

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result // reader.result is the DataURl
      });
    }

    // add code to upload image to S3, and then to send patch request
  }

  render() {
    let imagePreviewUrl = this.state.imagePreviewUrl || this.props.episode_image;
    let imagePreview = null;
    if (imagePreviewUrl) {
      imagePreview = (<img src={imagePreviewUrl} height="300" width="300" alt="episode" />);
    } else {
      imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }

    return (
      <div className="previewComponent">
        <div className="imgPreview">
          {imagePreview}
        </div>
        <form>
          {/* <input className="fileInput" 
            type="file" accept="image/*"
            onChange={(e)=>this._handleImageChange(e)} /> */}
            <ReactS3Uploader
              signingUrl="/s3/sign"
              signingUrlMethod="GET"
              accept="image/*"
              s3path="/uploads/"
              onSignedUrl={this.onSignedUrl}
              onProgress={this.onUploadProgress}
              onError={this.onUploadError}
              onFinish={this.onUploadFinish}
              server="http://localhost:4000"
              inputRef={cmp => this.uploadInput = cmp}
              //onChange is being overridden by library's onChange
              onChange={(e)=>this._handleImageChange(e)}
            />
        </form>
      </div>
    )
  }
}

export default ImageUpload;
