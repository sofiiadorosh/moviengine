import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
  selector: "app-error",
  standalone: true,
  imports: [],
  templateUrl: "./error.component.html",
  styleUrl: "./error.component.scss"
})
export class ErrorComponent implements OnChanges{
  @Input() message: string | null = null;

  ngOnChanges(changes: SimpleChanges) {
    if (changes["message"] && changes["message"].currentValue) {
      this.clearMessage();
    }
  }

  clearMessage() {
    setTimeout(() => {
      this.message = null;
    }, 3000)
  }
}
