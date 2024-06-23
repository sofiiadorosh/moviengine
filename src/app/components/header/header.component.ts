import { Component, Input } from "@angular/core";
import { Router, RouterLink, RouterLinkActive } from "@angular/router";
import { headerLinks } from "@constants/header-links";
import { ContainerComponent } from "@shared/container/container.component";
import { SvgIconComponent } from "angular-svg-icon";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [ContainerComponent, SvgIconComponent, RouterLink, RouterLinkActive],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss"
})
export class HeaderComponent {
  @Input() favoritesIds: number[] = [];
  @Input() watchLaterIds: number[] = [];

  protected readonly headerLinks = headerLinks;

  constructor(private router: Router) {}

  addIdsToQuery(collection: string): void {
    const idsKey = this.createQueryParams(collection) as keyof HeaderComponent;
    const queryParamsValue = (this[idsKey] as number[]).map(String).join(",");
    this.router.navigate(
      [{ outlets: { "fwl-outlet": [collection] } }],
      { queryParams: { ids: queryParamsValue } }
    );
  }

  createQueryParams(collection: string) {
    return collection
      .split("-")
      .map((word, index) => {
        if (!index) {
          return word;
        }
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join("") + "Ids";
  }
}
