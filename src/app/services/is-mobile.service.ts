import { Injectable } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Injectable()
export class IsMobileService {
  private deviceInfo: any;

  constructor(
    deviceService: DeviceDetectorService
  ) {
    this.deviceInfo = deviceService.getDeviceInfo();
  }


  isMobile() {
    let isMobile = false;
    if (this.deviceInfo.os == "mac" && this.deviceInfo.device == "iphone") {
      isMobile = true;
    }

    if (this.deviceInfo.os == "android" && this.deviceInfo.device == "android") {
      isMobile = true;
    }

    return isMobile;
  }
}
