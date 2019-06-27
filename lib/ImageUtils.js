class CanvasIniter {
  constructor() {
    this.canvas = null;
    this.context = null;
  }
  init (element) {
    if(!element) return console.warn('element cannot be empty!')
    this.canvas = document.getElementById(element)
    return this
  }
  getContext () {
    this.context = this.canvas.getContext('2d')
    return this
  }
  get getCanvas () {
    return this.canvas
  }
  get getContext() {
    return this.context
  }
}
class ImageLoader {
  constructor() {
    this.img = new Image()
    this.isAlphaBackground = false
  }
  load(element) {
    this.img.onload = function () {
      // 图片原始尺寸
      const originWidth = this.width
      const originHeight = this.height
      // canvas 尺寸
      const canvasIniter = new CanvasIniter
      const canvas = canvasIniter.init(element).getCanvas()
      const context = canvasIniter.getContext()
      canvas.width = originWidth
      canvas.height = originHeight

      // 清除画布
      context.clearRect(0, 0, originWidth, originHeight);
      // 图片绘制到画布上
      context.drawImage(this.img, 0, 0);
      // 获取图片像素信息
      const imageData = context.getImageData(0, 0, originWidth, originHeight).data
      this.isAlphaBackground = false
      for (const index = 3; index < imageData.length; index += 4) {
        if (imageData[index] != 255) {
          this.isAlphaBackground = true
          break
        }
      }
    }
  }
}
class ImageUtils {
  isAlphaBackgroundImage() {

  }
  alphaBakcgroundImage() {

  }
}

export default ImageUtils
