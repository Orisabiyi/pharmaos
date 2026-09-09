import { Component, Input } from "@angular/core";
import { InventoryCardList } from "../inventory-list-and-stats";
import { NgIcon, provideIcons } from "@ng-icons/core";
import { phosphorCaretDoubleDownThin } from "@ng-icons/phosphor-icons/thin";

@Component({
  imports: [NgIcon],
  providers: [provideIcons({ phosphorCaretDoubleDownThin })],
  selector: "app-inventory-card",
  styleUrl: "./inventory-card.css",
  templateUrl: "./inventory-card.html",
})
export class InventoryCard {
  @Input() inventoryCard!: InventoryCardList
}
