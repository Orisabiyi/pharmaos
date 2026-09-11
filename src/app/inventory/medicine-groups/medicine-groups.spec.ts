import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MedicineGroups } from "./medicine-groups";

describe("MedicineGroups", () => {
  let component: MedicineGroups;
  let fixture: ComponentFixture<MedicineGroups>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicineGroups],
    }).compileComponents();

    fixture = TestBed.createComponent(MedicineGroups);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
