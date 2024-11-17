import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[pkmnBorderCard]",
})
export class BorderCardDirective {
  private initialColor: string = "#F5F5F5";
  private defaultColor: string = "#009688";
  private defaultHeight: number = 180;

  constructor(private el: ElementRef) {
    this.setBorder(this.initialColor);
    this.setHeight(this.defaultHeight);
  }

  @Input("pkmnBorderCard") borderColor: string; // avec alias
  @Input() pkmnBorderCard: string; //sans alias

  @HostListener("mouseenter") onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor);
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.setBorder(this.initialColor);
  }

  setHeight(height: number) {
    this.el.nativeElement.style.height = `${height}px`;
  }

  setBorder(color: string) {
    this.el.nativeElement.style.border = `solid 4px ${color}`;
  }
}
