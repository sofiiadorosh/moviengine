import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: "truncateDescription",
  standalone: true
})
export class TruncateDescriptionPipe implements PipeTransform {

  transform(value: string, maxLength: number): string {
    if (value.length > maxLength) {
      return `${value.substring(0, maxLength + 1)}...`;
    }
    return value;
  }

}
