import {Component, OnInit, ViewChild} from '@angular/core';
import {FileUploader} from 'ng2-file-upload';

@Component({
  selector: 'app-employer-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.style.css']
})

export class EmployerJobFormComponent implements OnInit {
  public uploader: FileUploader;
  public token = JSON.parse(localStorage.getItem('token'));
  public images: any[] = [];
  @ViewChild('fileInput') inputElement:any;

  constructor() {

  }

  ngOnInit() {
    this.uploader = new FileUploader({url: '', authToken: this.token});
    this.uploader.onAfterAddingFile = (fileItem) => {
      let file = fileItem['some'];
      let myReader:FileReader = new FileReader();
      myReader.onloadend = (e) => {
        this.images.push({file: fileItem.file, image: e.target['result']});
      };
      myReader.readAsDataURL(file);
      return '';
    }
  }

  removeImageFromUploadList(image) {
    this.images.splice(this.images.indexOf(image), 1);

    for (let i=this.uploader.queue.length-1; i>=0; i--) {
      let item = this.uploader.queue[i];
      if (item['file'] === image.file) {
        this.uploader.queue.splice(i, 1);
      }
    }
  }

  public upload(fileInput){
    let url = `/api/v1/upload/image`;
    this.uploader.options.url = url;
    this.uploader.queue.forEach(item => {
      item.url = url;
      // Busi Indicator
      item.upload();
    });
    this.uploader.onCompleteAll = () => {
      console.log('Upload Complete');
      // this.progress.setVisible(false);
      // this.clearImage(fileInput);
      // this.getProductImages(this.productId);
      // this.imagesUploaded = [];
      // this.router.navigate(['/products']);
    }
  }

  uploadImages() {
    this.upload(this.inputElement);
  }
}