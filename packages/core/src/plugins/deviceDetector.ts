import deviceDetector from '../lib/device-detector/deviceDetector.class'

export default {
  install: (app: any) => {
    // assign to $device
    app.config.globalProperties.$device = new deviceDetector()

    // append device classes to document body
    app.config.globalProperties.$device
      .getAppClassList()
      .forEach((deviceClass: string) => {
        window.document.body.classList.add(deviceClass)
      })
  }
}