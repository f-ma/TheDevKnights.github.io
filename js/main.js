;(function(window, undefined) {
  function init() {
    var mainHeaderElement = document.getElementById('top');
    var mainHeaderElementOffsetTopViewportOrigin = document.getElementById('greeting-content').getBoundingClientRect().height;
    var pageScrolled = 0;
    window.headerActivationFlag = false;

    window.addEventListener('scroll', function () {
      pageScrolled = window.pageYOffset || document.documentElement.scrollTop;

      console.log('pageScrolled: ' + pageScrolled);
      console.log('getElementOffsetTopViewport: ' + mainHeaderElementOffsetTopViewportOrigin);
      console.log(headerActivationFlag);
      if (pageScrolled >= mainHeaderElementOffsetTopViewportOrigin) {
        mainHeaderElement.classList.add('active');
        window.headerActivationFlag = true;
      } else {
        mainHeaderElement.classList.remove('active');
        window.headerActivationFlag = false;
      }
    }, false);
    window.addEventListener('resize', function () {
      if (window.headerActivationFlag) {
        mainHeaderElementOffsetTopViewportOrigin = document.getElementById('greeting-content').getBoundingClientRect().height - mainHeaderElement.getBoundingClientRect().height;
      } else {
        mainHeaderElementOffsetTopViewportOrigin = document.getElementById('greeting-content').getBoundingClientRect().height;
      }
    }, false);
  }

  /**
   *
   * @param el
   * @return {*}
   */
  function getElementOffsetTopViewport(el) {
    if (el.getBoundingClientRect()) {
      return el.getBoundingClientRect().top;
    }
    return false;
  }

  /**
   *
   * @param el
   * @return {{top: number, left: number, bottom: number}}
   */
  function getElementOffsetRoot(el) {
    //initing
    var
      offsetTop = 0,
      offsetLeft = 0,
      offsetHeight = el.offsetHeight;
    do {
      offsetTop += !isNaN(el.offsetTop) ? el.offsetTop : 0 ;
      offsetLeft += !isNaN(el.offsetLeft) ? el.offsetTop : 0 ;
    } while (el = el.offsetParent);

    return {
      top: offsetTop,
      left: offsetLeft,
      bottom: offsetTop + offsetHeight
    }
  }
  //add to global

  init();

})(window, undefined);