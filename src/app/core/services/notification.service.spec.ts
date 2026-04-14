import { TestBed } from '@angular/core/testing';
import { NotificationService } from './notification.service';

describe('NotificationService', () => {
  let service: NotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should show success notification', (done) => {
    service.getNotifications().subscribe((notification) => {
      expect(notification.type).toBe('success');
      done();
    });
    service.success('Test message');
  });

  it('should show error notification', (done) => {
    service.getNotifications().subscribe((notification) => {
      expect(notification.type).toBe('error');
      done();
    });
    service.error('Error message');
  });
});
