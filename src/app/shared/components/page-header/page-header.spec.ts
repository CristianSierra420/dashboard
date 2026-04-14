import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageHeaderComponent } from './page-header';

describe('PageHeaderComponent', () => {
  let component: PageHeaderComponent;
  let fixture: ComponentFixture<PageHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageHeaderComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(PageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display title', () => {
    component.title = 'Test Title';
    fixture.detectChanges();
    const element = fixture.nativeElement.querySelector('.page-header__title');
    expect(element.textContent).toContain('Test Title');
  });

  it('should display subtitle if provided', () => {
    component.subtitle = 'Test Subtitle';
    fixture.detectChanges();
    const element = fixture.nativeElement.querySelector('.page-header__subtitle');
    expect(element.textContent).toContain('Test Subtitle');
  });
});
