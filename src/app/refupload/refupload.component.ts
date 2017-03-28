import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  selector: 'app-refupload',
  templateUrl: './refupload.component.html',
  styleUrls: ['./refupload.component.css']
})
export class RefuploadComponent implements OnInit {


  public uploader = new FileUploader({url: URL});

  public hasBaseDropZoneOver = false;
  public hasAnotherDropZoneOver = false;

  constructor() { }

  ngOnInit() {
  }
  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }
}
