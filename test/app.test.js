function eventFire(el, etype) {
  if (el.fireEvent) {
    el.fireEvent("on" + etype);
  } else {
    var evObj = document.createEvent("Events");
    evObj.initEvent(etype, true, false);
    el.dispatchEvent(evObj);
  }
}

describe("Button suite", function () {
  beforeEach(function () {
    const messageFixture = document.createElement("div");
    const buttonFixture = document.createElement("button");
    messageFixture.setAttribute("id", "message");
    buttonFixture.setAttribute("id", "button");
    document.body.appendChild(messageFixture);
    document.body.appendChild(buttonFixture);
  });

  it("changes the message", function () {
    const message = document.getElementById("message");
    const button = document.getElementById("button");
    const oldMessage = message.innerHTML;
    window.setupCongratulations(); // setup
    eventFire(button, "click"); // simulate click event
    expect(oldMessage === message.innerHTML).toBeFalse();
  });
});
