import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-add-target",
  templateUrl: "./add-target.component.html",
  styleUrls: ["./add-target.component.scss"]
})
export class AddTargetComponent implements OnInit {
  event = {
    title: "",
    desc: "",
    startTime: "",
    endTime: "",
    allDay: false
  };

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  // Close modal on click
  onCloseClicked() {
    this.modalCtrl.dismiss();
  }

  // When add button is clicked
  onAddEventClicked() {
    console.table(this.event);
  }
}
