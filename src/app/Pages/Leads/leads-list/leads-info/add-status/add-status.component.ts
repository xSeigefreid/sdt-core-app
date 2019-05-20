import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-add-status",
  templateUrl: "./add-status.component.html",
  styleUrls: ["./add-status.component.scss"]
})
export class AddStatusComponent implements OnInit {
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  closeModal() {
    this.modalCtrl.dismiss(null, "cancel");
  }
}
