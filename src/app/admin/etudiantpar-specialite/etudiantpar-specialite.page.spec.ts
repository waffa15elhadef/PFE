import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EtudiantparSpecialitePage } from './etudiantpar-specialite.page';

describe('EtudiantparSpecialitePage', () => {
  let component: EtudiantparSpecialitePage;
  let fixture: ComponentFixture<EtudiantparSpecialitePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EtudiantparSpecialitePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EtudiantparSpecialitePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
