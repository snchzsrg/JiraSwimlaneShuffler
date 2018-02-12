/**
 * Jira Assignee Shuffler
 * 
 * MIT License
 * Copyright (c) 2018 Sergio Sanchez, snchz.srg@gmail.com
 */

chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.executeScript({
    file: 'shuffle.js'
  });
});
