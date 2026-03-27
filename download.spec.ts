


const download= await Promise.all([page.waitForEvent('download'),page.locator("#download").click()]);

download.saveAs("pathwith file name")