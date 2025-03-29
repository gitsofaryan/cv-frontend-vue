const { remote } = require('webdriverio');
const assert = require('assert');

describe('Circuit Creation', () => {
  let browser;

  before(async () => {
    browser = await remote({
      capabilities: { 'tauri:platform': 'desktop' },
    });
  });

  it('should create a basic circuit with an AND gate', async () => {
    // Simulate clicking to add an AND gate (adjust selector based on your UI)
    await browser.execute(() => {
      const addAndGateBtn = document.querySelector('#add-and-gate') || 
                           document.querySelector('[data-action="add-and-gate"]');
      if (addAndGateBtn) addAndGateBtn.click();
    });

    // Check if a circuit element was added
    const elements = await browser.execute(() => {
      return document.querySelectorAll('.circuit-element').length;
    });
    assert(elements > 0, 'No circuit elements found after adding AND gate');
  });

  after(async () => {
    await browser.deleteSession();
  });
});
