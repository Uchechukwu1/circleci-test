const jsdom = require("jsdom");
const { expect } = require("chai");
const fs = require("fs");
const path = require("path");
const { JSDOM } = jsdom;

describe("Button suite", function () {
  beforeEach(function () {
    const dom = new JSDOM(fs.readFileSync("./src/index.html"), {
      resources: "usable",
      url: "file://" + path.join(__dirname, "../src/"),
      runScripts: "dangerously",
    });
    this.dom = dom;
  });

  it("changes the message", function (resolve) {
    this.dom.window.addEventListener("DOMContentLoaded", () => {
      const oldMessage = this.dom.window.document.getElementById("message")
        .innerHTML;
      this.dom.window.eval("button.click();");
      expect(
        this.dom.window.document.getElementById("message").innerHTML,
        "should not be equal"
      ).to.not.be.equal(oldMessage);
      expect(
        this.dom.window.document.getElementById("message").innerHTML
      ).to.be.equal("<h1>Congratulations Uche on the New Job !!</h1>");
      resolve();
    });
  });
});
