import { TestBed } from '@angular/core/testing';

import { RandomTemperatureService } from './random-temperature.service';

describe('RandomTemperatureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RandomTemperatureService = TestBed.get(RandomTemperatureService);
    expect(service).toBeTruthy();
  });
});
