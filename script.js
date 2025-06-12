document.addEventListener("DOMContentLoaded", function () {
  const video = document.querySelector(".video video");
  const welcome = document.querySelector(".welcome");

  welcome.addEventListener("click", function () {
    welcome.classList.remove("visible");
    document.body.style.overflow = "auto"; 
    window.scrollTo(0,0);
    video.play();
  });


  //Just expanded the example code because I didn't understand the short handed version
  const appliedTimes = {};

  video.addEventListener("timeupdate", function () {
      const changesAtCurrentTime = classChanges.filter(function (change) {
        return video.currentTime >= change.time && appliedTimes[change.time] !== true;
  });

  changesAtCurrentTime.forEach(function (change) {
    const elements = document.querySelectorAll(change.target);

    if (change.remove !== undefined) {
      let removeClasses;
        if (Array.isArray(change.remove)) {
          removeClasses = change.remove;
      } else {
          removeClasses = [change.remove];
      }

    elements.forEach(function (element) {
        removeClasses.forEach(function (cls) {
          element.classList.remove(cls);
        });
      });
    }

    if (change.add !== undefined) {
      let addClasses;
        if (Array.isArray(change.add)) {
          addClasses = change.add;
    } else {
        addClasses = [change.add];
    }

    elements.forEach(function (element) {
      addClasses.forEach(function (cls) {
        element.classList.add(cls);
      });
    });
  }

  appliedTimes[change.time] = true;
    });
  });
});
