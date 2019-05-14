import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { ToastController } from "@ionic/angular";

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

  constructor(
    private modalCtrl: ModalController,
    private toastCtrl: ToastController
  ) {}

  ngOnInit() {}

  // Close modal on click
  onCloseClicked() {
    this.modalCtrl.dismiss(null, "cancel");
  }

  // When add button is clicked
  onAddEventClicked() {
    if (!this.isEmpty(this.event)) {
      this.modalCtrl.dismiss(this.event, "confirm");
    } else {
      this.presentToast("Fill up required fields.");
    }
  }

  async presentToast(message) {
    const toast = await this.toastCtrl.create({
      message: `${message}`,
      duration: 2000
    });
    toast.present();
  }

  isEmpty(data) {
    if (!data.title) {
      return true;
    }
    if (!data.desc) {
      return true;
    }
    if (!data.startTime) {
      return true;
    }
    if (!data.endTime) {
      return true;
    }
    return false;
  }
}
