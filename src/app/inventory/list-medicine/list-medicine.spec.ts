import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ListMedicine } from "./list-medicine";

describe("ListMedicine", () => {
  let component: ListMedicine;
  let fixture: ComponentFixture<ListMedicine>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListMedicine],
    }).compileComponents();

    fixture = TestBed.createComponent(ListMedicine);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
