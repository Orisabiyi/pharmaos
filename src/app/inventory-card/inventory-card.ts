import { Component, Input } from "@angular/core";
import { InventoryCardList } from "../inventory-list-and-stats";

@Component({
  imports: [],
  selector: "app-inventory-card",
  styleUrl: "./inventory-card.css",
  templateUrl: "./inventory-card.html",
})
export class InventoryCard {
  @Input() inventoryCard!: InventoryCardList
}
