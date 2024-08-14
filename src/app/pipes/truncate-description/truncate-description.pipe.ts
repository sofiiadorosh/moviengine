import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "truncateDescription",
  standalone: true
})
export class TruncateDescriptionPipe implements PipeTransform {
  transform(value: string | undefined, maxLength: number): string {
    if (typeof value !== "string") {
      return "";
    }
    if (value.length > maxLength) {
      return `${value.substring(0, maxLength)}...`;
    }
    return value;
  }
}
