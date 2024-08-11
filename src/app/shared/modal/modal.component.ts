import {Component, EventEmitter, Output} from "@angular/core";
import {SvgIconComponent} from "angular-svg-icon";

@Component({
  selector: "app-modal",
  standalone: true,
  imports: [
    SvgIconComponent
  ],
  templateUrl: "./modal.component.html",
  styleUrl: "./modal.component.scss"
})
export class ModalComponent {
  @Output() closeModal = new EventEmitter<void>;

  onCloseModalHandler() {
    this.closeModal.emit();
  }
}
