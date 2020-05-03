import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-mods-home",
  templateUrl: "./mods-home.component.html",
  styleUrls: ["./mods-home.component.css"],
})
export class ModsHomeComponent implements OnInit {
  modalOpen = false;
  items = [
    { title: "Just to Test One,", content: "The Test One is Working" },
    { title: "Just to Test Two,", content: "The Test Two is Working" },
    { title: "Just to Test Three,", content: "The Test Three is Working" },
  ];

  constructor() {}

  ngOnInit() {}

  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}
