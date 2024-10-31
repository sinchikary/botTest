"use strict";

module.exports = class User {
  constructor(psid) {
    this.psid = psid;
    this.firstName = "";
    this.lastName = "";
    this.locale = "en_US";
    this.timezone = "";
    this.gender = "neutral";
    this.step = 0;
    this.timestamp = undefined;
  }
  setProfile(profile) {
    this.firstName = profile.firstName || "";
    this.lastName = profile.lastName || "";
    this.locale = profile.locale || "";
    this.timezone = profile.timezone || "";
    this.gender = profile.gender || "";
    this.timestamp = undefined;
    this.step = 0;
  }
};
